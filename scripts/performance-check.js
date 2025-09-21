#!/usr/bin/env node

/**
 * Performance monitoring script for Next Generation Therapy
 * Runs Lighthouse audits and checks against performance budgets
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');
const performanceConfig = require('../performance.config.js');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logResult(metric, value, budget, status) {
  const statusColor =
    status === 'PASS' ? colors.green : status === 'WARN' ? colors.yellow : colors.red;
  const unit = ['CLS'].includes(metric) ? '' : 'ms';
  log(`  ${metric}: ${value}${unit} (budget: ${budget}${unit}) [${status}]`, statusColor);
}

async function runLighthouse(url, options = {}) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
  });

  const opts = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
    ...options,
  };

  try {
    const runnerResult = await lighthouse(url, opts);
    await chrome.kill();
    return runnerResult;
  } catch (error) {
    await chrome.kill();
    throw error;
  }
}

function checkPerformanceBudget(metrics, budgets) {
  const results = {};
  const issues = [];

  for (const [metric, budget] of Object.entries(budgets)) {
    if (metrics[metric] !== undefined) {
      const value = metrics[metric];
      let status = 'PASS';

      if (value > budget) {
        status = 'FAIL';
        issues.push(`${metric} exceeded budget: ${value} > ${budget}`);
      } else if (value > budget * 0.8) {
        status = 'WARN';
      }

      results[metric] = { value, budget, status };
    }
  }

  return { results, issues };
}

function extractMetrics(lhResult) {
  const audits = lhResult.lhr.audits;

  return {
    LCP: Math.round(audits['largest-contentful-paint']?.numericValue || 0),
    FID: Math.round(audits['max-potential-fid']?.numericValue || 0),
    CLS: Math.round((audits['cumulative-layout-shift']?.numericValue || 0) * 1000) / 1000,
    FCP: Math.round(audits['first-contentful-paint']?.numericValue || 0),
    TTFB: Math.round(audits['server-response-time']?.numericValue || 0),
    speedIndex: Math.round(audits['speed-index']?.numericValue || 0),
    totalBlockingTime: Math.round(audits['total-blocking-time']?.numericValue || 0),
    performanceScore: Math.round((lhResult.lhr.categories.performance?.score || 0) * 100),
  };
}

function generateReport(results) {
  const timestamp = new Date().toISOString();
  const reportDir = path.join(process.cwd(), 'performance-reports');

  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportFile = path.join(reportDir, `performance-${timestamp.split('T')[0]}.json`);

  const report = {
    timestamp,
    results,
    summary: {
      totalPages: results.length,
      passed: results.filter((r) => r.issues.length === 0).length,
      failed: results.filter((r) => r.issues.length > 0).length,
    },
  };

  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  log(`\n📊 Performance report saved: ${reportFile}`, colors.blue);

  return report;
}

async function checkPerformance() {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const { pages, budgets } = performanceConfig;

  log(`\n🚀 Starting performance audit for Next Generation Therapy`, colors.bold);
  log(`📍 Base URL: ${baseUrl}`);
  log(`📄 Pages to check: ${pages.length}\n`);

  const results = [];

  for (const page of pages) {
    const url = `${baseUrl}${page.url}`;
    log(`\n🔍 Auditing: ${page.name} (${url})`, colors.blue);

    try {
      const lhResult = await runLighthouse(url);
      const metrics = extractMetrics(lhResult);

      // Use page-specific targets or fall back to global budgets
      const targets = { ...budgets, ...page.targets };
      const { results: budgetResults, issues } = checkPerformanceBudget(metrics, targets);

      // Log results
      log(`\n📊 Performance Metrics:`);
      for (const [metric, result] of Object.entries(budgetResults)) {
        logResult(metric, result.value, result.budget, result.status);
      }

      if (issues.length > 0) {
        log(`\n⚠️  Issues found:`, colors.yellow);
        issues.forEach((issue) => log(`  • ${issue}`, colors.yellow));
      } else {
        log(`\n✅ All metrics within budget!`, colors.green);
      }

      results.push({
        page: page.name,
        url: page.url,
        metrics,
        budgetResults,
        issues,
        performanceScore: metrics.performanceScore,
      });
    } catch (error) {
      log(`\n❌ Error auditing ${page.name}: ${error.message}`, colors.red);
      results.push({
        page: page.name,
        url: page.url,
        error: error.message,
        issues: [`Failed to audit: ${error.message}`],
      });
    }
  }

  // Generate summary report
  const report = generateReport(results);

  log(`\n📋 Performance Summary:`, colors.bold);
  log(`✅ Passed: ${report.summary.passed}/${report.summary.totalPages}`, colors.green);
  log(`❌ Failed: ${report.summary.failed}/${report.summary.totalPages}`, colors.red);

  // Check if we should fail the build
  if (performanceConfig.ci?.failOnBudgetExceeded && report.summary.failed > 0) {
    log(`\n💥 Build failed due to performance budget violations!`, colors.red);
    process.exit(1);
  }

  return report;
}

// CLI handling
if (require.main === module) {
  checkPerformance()
    .then(() => {
      log(`\n🎉 Performance audit completed!`, colors.green);
    })
    .catch((error) => {
      log(`\n💥 Performance audit failed: ${error.message}`, colors.red);
      process.exit(1);
    });
}

module.exports = { checkPerformance, runLighthouse, extractMetrics };
