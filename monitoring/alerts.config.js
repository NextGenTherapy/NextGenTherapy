/**
 * Comprehensive Site Monitoring and Alert Configuration
 * Next Generation Therapy - Health & Performance Monitoring
 */

module.exports = {
  // Alert recipient configuration
  notifications: {
    emails: ['luke@lstevens.dev', 'andreeatherapytoday@gmail.com'],

    // Slack webhook for real-time alerts (optional)
    slack: {
      webhook: process.env.SLACK_WEBHOOK_URL,
      channel: '#site-alerts',
      username: 'NGT Monitor',
    },
  },

  // Site health monitoring
  healthChecks: [
    {
      name: 'Homepage Availability',
      url: 'https://nextgentherapy.co.uk',
      interval: '5m',
      timeout: 10000,
      expectedStatus: 200,
      expectedContent: 'Andreea Horhocea',
      alertThreshold: 2, // Alert after 2 consecutive failures
    },
    {
      name: 'Contact Form Endpoint',
      url: 'https://nextgentherapy.co.uk/api/contact',
      method: 'GET', // Check if endpoint is reachable
      interval: '10m',
      timeout: 8000,
      expectedStatus: 405, // Method Not Allowed is expected for GET on POST-only endpoint
    },
    {
      name: 'Services Page',
      url: 'https://nextgentherapy.co.uk/services',
      interval: '15m',
      expectedContent: 'counsellor',
      expectedStatus: 200,
    },
    {
      name: 'Book Now Page',
      url: 'https://nextgentherapy.co.uk/book-now',
      interval: '10m',
      expectedContent: 'Book a Therapist',
      expectedStatus: 200,
    },
  ],

  // Performance monitoring thresholds
  performance: {
    // Core Web Vitals alerts
    coreWebVitals: {
      LCP: {
        warning: 2500, // ms
        critical: 4000,
      },
      FID: {
        warning: 100, // ms
        critical: 300,
      },
      CLS: {
        warning: 0.1, // score
        critical: 0.25,
      },
    },

    // Page load speed alerts
    pageSpeed: {
      warning: 3000, // ms
      critical: 5000,
      checkInterval: '1h',
    },

    // SSL certificate monitoring
    ssl: {
      domain: 'nextgentherapy.co.uk',
      warningDays: 30, // Alert 30 days before expiry
      criticalDays: 7, // Critical alert 7 days before
      checkInterval: '24h',
    },
  },

  // SEO health monitoring
  seo: {
    // Google Search Console integration
    searchConsole: {
      checkInterval: '24h',
      alerts: {
        indexingErrors: true,
        crawlErrors: true,
        securityIssues: true,
        manualActions: true,
        coreWebVitalsIssues: true,
      },
    },

    // Sitemap monitoring
    sitemap: {
      url: 'https://nextgentherapy.co.uk/sitemap.xml',
      checkInterval: '6h',
      expectedPages: 12, // Minimum expected pages
      alertOnMissing: true,
    },

    // Meta tags monitoring
    metaTags: {
      checkPages: [
        'https://nextgentherapy.co.uk',
        'https://nextgentherapy.co.uk/services',
        'https://nextgentherapy.co.uk/about',
        'https://nextgentherapy.co.uk/book-now',
      ],
      requiredTags: ['title', 'description', 'canonical'],
      checkInterval: '24h',
    },
  },

  // Security monitoring
  security: {
    // SSL/TLS monitoring
    ssl: {
      checkInterval: '6h',
      minTlsVersion: '1.2',
      certificateExpiry: 30, // Days before expiry to alert
    },

    // Security headers check
    headers: {
      checkInterval: '24h',
      required: [
        'Strict-Transport-Security',
        'X-Content-Type-Options',
        'X-Frame-Options',
        'Content-Security-Policy',
      ],
    },

    // Vulnerability scanning
    vulnerabilities: {
      checkInterval: '7d', // Weekly
      sources: ['npm-audit', 'snyk'],
    },
  },

  // Business metrics monitoring
  business: {
    // Contact form submissions
    contactForm: {
      checkInterval: '1h',
      alertOnError: true,
      alertOnZeroSubmissions: '24h', // Alert if no submissions in 24h
    },

    // Analytics anomalies
    analytics: {
      checkInterval: '6h',
      thresholds: {
        trafficDrop: 0.5, // Alert if traffic drops 50%
        bounceRateIncrease: 0.3, // Alert if bounce rate increases 30%
        errorRate: 0.05, // Alert if error rate exceeds 5%
      },
    },
  },

  // Infrastructure monitoring
  infrastructure: {
    // Vercel deployment monitoring
    vercel: {
      checkInterval: '5m',
      alerts: {
        deploymentFailures: true,
        buildErrors: true,
        functionErrors: true,
      },
    },

    // Domain and DNS monitoring
    dns: {
      domain: 'nextgentherapy.co.uk',
      checkInterval: '1h',
      expectedRecords: {
        A: ['76.76.19.61'], // Vercel IP (example)
        CNAME: ['cname.vercel-dns.com'],
      },
    },
  },

  // Alert severity levels
  severity: {
    LOW: {
      color: '#36a64f',
      emoji: '🟢',
      escalation: false,
    },
    MEDIUM: {
      color: '#ffb347',
      emoji: '🟡',
      escalation: false,
    },
    HIGH: {
      color: '#ff6b47',
      emoji: '🟠',
      escalation: true,
      escalationDelay: '15m',
    },
    CRITICAL: {
      color: '#ff0000',
      emoji: '🔴',
      escalation: true,
      escalationDelay: '5m',
      repeatInterval: '30m',
    },
  },

  // Alert templates
  templates: {
    email: {
      subject: '[NGT Alert] {severity} - {alertName}',
      body: `
🚨 Next Generation Therapy Site Alert

Alert: {alertName}
Severity: {severity} {emoji}
Time: {timestamp}
URL: {url}

Details: {details}

Action Required: {actionRequired}

Monitor Dashboard: https://monitoring.nextgentherapy.co.uk
      `,
    },

    slack: {
      text: '{emoji} *{severity}* - {alertName}',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Alert:* {alertName}\n*Severity:* {severity}\n*URL:* {url}\n*Details:* {details}',
          },
        },
      ],
    },
  },
};
