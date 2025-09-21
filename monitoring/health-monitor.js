#!/usr/bin/env node

/**
 * Health Monitoring Script for Next Generation Therapy
 * Comprehensive site monitoring with email alerts
 */

const https = require('https');
const { Resend } = require('resend');
const config = require('./alerts.config.js');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

function log(message, color = colors.reset) {
  const timestamp = new Date().toISOString();
  console.log(`${color}[${timestamp}] ${message}${colors.reset}`);
}

// Resend configuration
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error('RESEND_API_KEY environment variable is not set');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

/**
 * Send alert email using Resend
 */
async function sendAlert(alert) {
  // Check if resend is properly initialized
  if (!resend) {
    log('❌ Resend not initialized - missing API key', colors.red);
    return;
  }

  const emailBody = config.templates.email.body
    .replace(/{alertName}/g, alert.name)
    .replace(/{severity}/g, alert.severity)
    .replace(/{emoji}/g, config.severity[alert.severity].emoji)
    .replace(/{timestamp}/g, new Date().toISOString())
    .replace(/{url}/g, alert.url || 'N/A')
    .replace(/{details}/g, alert.details)
    .replace(/{actionRequired}/g, alert.actionRequired || 'Monitor and investigate');

  const emailSubject = config.templates.email.subject
    .replace(/{alertName}/g, alert.name)
    .replace(/{severity}/g, alert.severity);

  try {
    await resend.emails.send({
      from: 'NGT Monitor <noreply@nextgentherapy.co.uk>',
      to: config.notifications.emails,
      subject: emailSubject,
      text: emailBody,
      html: emailBody.replace(/\n/g, '<br>'),
    });

    log(`✉️  Alert email sent: ${alert.name}`, colors.blue);
  } catch (error) {
    log(`❌ Failed to send alert email: ${error.message}`, colors.red);
  }
}

/**
 * Check URL health
 */
function checkUrl(healthCheck) {
  return new Promise((resolve) => {
    const startTime = Date.now();

    const req = https.request(
      healthCheck.url,
      {
        method: healthCheck.method || 'GET',
        timeout: healthCheck.timeout || 10000,
      },
      (res) => {
        const responseTime = Date.now() - startTime;
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          const result = {
            url: healthCheck.url,
            status: res.statusCode,
            responseTime,
            success: res.statusCode === (healthCheck.expectedStatus || 200),
            contentMatch: healthCheck.expectedContent
              ? data.includes(healthCheck.expectedContent)
              : true,
          };

          if (!result.success) {
            result.error = `HTTP ${res.statusCode} - Expected ${healthCheck.expectedStatus || 200}`;
          } else if (!result.contentMatch) {
            result.error = `Content mismatch - Expected "${healthCheck.expectedContent}"`;
          }

          resolve(result);
        });
      }
    );

    req.on('error', (error) => {
      resolve({
        url: healthCheck.url,
        success: false,
        error: error.message,
        responseTime: Date.now() - startTime,
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url: healthCheck.url,
        success: false,
        error: 'Request timeout',
        responseTime: healthCheck.timeout,
      });
    });

    req.end();
  });
}

/**
 * Check SSL certificate
 */
function checkSSL(domain) {
  return new Promise((resolve) => {
    const req = https.request(`https://${domain}`, (res) => {
      const cert = res.socket.getPeerCertificate();

      if (cert && cert.valid_to) {
        const expiryDate = new Date(cert.valid_to);
        const daysUntilExpiry = Math.floor((expiryDate - new Date()) / (1000 * 60 * 60 * 24));

        resolve({
          domain,
          valid: true,
          expiryDate,
          daysUntilExpiry,
          issuer: cert.issuer?.CN || 'Unknown',
        });
      } else {
        resolve({
          domain,
          valid: false,
          error: 'No certificate found',
        });
      }
    });

    req.on('error', (error) => {
      resolve({
        domain,
        valid: false,
        error: error.message,
      });
    });

    req.end();
  });
}

/**
 * Run all health checks
 */
async function runHealthChecks() {
  log('🔍 Starting health checks...', colors.blue);
  const alerts = [];

  // URL health checks
  for (const healthCheck of config.healthChecks) {
    log(`Checking: ${healthCheck.name}`, colors.blue);

    const result = await checkUrl(healthCheck);

    if (result.success && result.contentMatch) {
      log(`✅ ${healthCheck.name}: OK (${result.responseTime}ms)`, colors.green);
    } else {
      log(`❌ ${healthCheck.name}: FAILED - ${result.error}`, colors.red);

      alerts.push({
        name: healthCheck.name,
        severity: 'CRITICAL',
        url: healthCheck.url,
        details: result.error,
        actionRequired: 'Check server status and investigate immediately',
      });
    }
  }

  // SSL certificate check
  if (config.performance.ssl) {
    log('Checking SSL certificate...', colors.blue);

    const sslResult = await checkSSL(config.performance.ssl.domain);

    if (sslResult.valid) {
      const warningDays = config.performance.ssl.warningDays || 30;
      const criticalDays = config.performance.ssl.criticalDays || 7;

      if (sslResult.daysUntilExpiry <= criticalDays) {
        alerts.push({
          name: 'SSL Certificate Expiry',
          severity: 'CRITICAL',
          details: `SSL certificate expires in ${sslResult.daysUntilExpiry} days`,
          actionRequired: 'Renew SSL certificate immediately',
        });
      } else if (sslResult.daysUntilExpiry <= warningDays) {
        alerts.push({
          name: 'SSL Certificate Expiry',
          severity: 'HIGH',
          details: `SSL certificate expires in ${sslResult.daysUntilExpiry} days`,
          actionRequired: 'Plan SSL certificate renewal',
        });
      } else {
        log(`✅ SSL Certificate: Valid until ${sslResult.expiryDate.toDateString()}`, colors.green);
      }
    } else {
      alerts.push({
        name: 'SSL Certificate',
        severity: 'CRITICAL',
        details: sslResult.error,
        actionRequired: 'Fix SSL certificate configuration',
      });
    }
  }

  // Send alerts
  for (const alert of alerts) {
    await sendAlert(alert);
  }

  log(`🏁 Health check completed. ${alerts.length} alerts sent.`, colors.blue);
  return alerts.length === 0;
}

/**
 * CLI entry point
 */
if (require.main === module) {
  runHealthChecks()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      log(`💥 Health check failed: ${error.message}`, colors.red);
      process.exit(1);
    });
}

module.exports = { runHealthChecks, sendAlert, checkUrl, checkSSL };
