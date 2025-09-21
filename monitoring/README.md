# NGT Site Monitoring System

Comprehensive monitoring system for Next Generation Therapy website using Resend for email alerts.

## Features

- **Health Checks**: Homepage, contact form, services page, book now page
- **SSL Certificate Monitoring**: Tracks certificate expiry (30-day warning, 7-day critical)
- **Email Alerts**: Sent to luke@lstevens.dev and andreeatherapytoday@gmail.com
- **Performance Monitoring**: Ready for Core Web Vitals integration
- **Security Monitoring**: SSL/TLS validation

## Setup

1. **Environment Variables**:

   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```

2. **Install Dependencies**:

   ```bash
   npm install  # Resend is already included
   ```

3. **Test Monitoring**:

   ```bash
   npm run monitor:health
   ```

4. **Setup Automated Monitoring**:
   ```bash
   ./monitoring/setup-cron.sh
   ```

## Alert Types

- **CRITICAL**: Site down, SSL expires in 7 days
- **HIGH**: SSL expires in 30 days, performance issues
- **MEDIUM**: Minor performance degradation
- **LOW**: Informational alerts

## Configuration

Edit `monitoring/alerts.config.js` to:

- Add/remove health check endpoints
- Modify alert thresholds
- Update notification emails
- Adjust monitoring intervals

## Manual Commands

```bash
# Run health check once
npm run monitor:health

# Test monitoring system
npm run monitor:test

# View recent logs
tail -f logs/monitor.log
```

## Resend Integration

The system uses Resend for reliable email delivery:

- Professional email templates
- Proper sender authentication
- Rate limiting compliance
- HTML and text formats

## Alert Configuration

Alerts are configured with severity levels and escalation rules:

- Critical alerts repeat every 30 minutes
- High alerts escalate after 15 minutes
- All alerts include actionable information
