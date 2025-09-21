/**
 * Performance Budget Configuration for Next Generation Therapy
 * Defines performance thresholds and monitoring targets
 */

module.exports = {
  // Performance budgets (in milliseconds unless specified)
  budgets: {
    // Core Web Vitals thresholds
    LCP: 2500, // Largest Contentful Paint
    FID: 100, // First Input Delay
    CLS: 0.1, // Cumulative Layout Shift
    FCP: 1800, // First Contentful Paint
    TTFB: 600, // Time to First Byte

    // Other performance metrics
    speedIndex: 3000,
    totalBlockingTime: 200,

    // Bundle size budgets (in KB)
    bundleSizes: {
      javascript: 250, // Total JS bundle size
      css: 50, // Total CSS bundle size
      images: 500, // Total images per page
      fonts: 100, // Total font files
      total: 1000, // Total page weight
    },

    // Network resource budgets
    resources: {
      maxRequests: 50, // Maximum HTTP requests per page
      maxDomains: 5, // Maximum different domains
      maxRedirects: 2, // Maximum redirect chain length
    },
  },

  // Critical pages to monitor
  pages: [
    {
      name: 'Homepage',
      url: '/',
      weight: 1.0, // Highest priority
      targets: {
        LCP: 2000, // Stricter target for homepage
        FCP: 1500,
      },
    },
    {
      name: 'Book Now',
      url: '/book-now',
      weight: 0.9, // High priority conversion page
      targets: {
        LCP: 2200,
        FCP: 1600,
      },
    },
    {
      name: 'Services',
      url: '/services',
      weight: 0.8,
      targets: {
        LCP: 2400,
        FCP: 1700,
      },
    },
    {
      name: 'About',
      url: '/about',
      weight: 0.7,
    },
    {
      name: 'Pricing',
      url: '/pricing',
      weight: 0.6,
    },
    {
      name: 'FAQ',
      url: '/faq',
      weight: 0.5,
    },
  ],

  // Performance alerts
  alerts: {
    // Email notifications when budgets exceeded
    email: process.env.PERF_ALERT_EMAIL || 'andreeatherapytoday@gmail.com',

    // Slack webhook for performance alerts
    slack: process.env.PERF_SLACK_WEBHOOK,

    // Thresholds for different alert levels
    warning: 0.8, // 80% of budget
    critical: 1.0, // 100% of budget
    emergency: 1.2, // 120% of budget
  },

  // Monitoring configuration
  monitoring: {
    // How often to run performance checks (in minutes)
    interval: process.env.NODE_ENV === 'production' ? 60 : 0,

    // Lighthouse configuration
    lighthouse: {
      extends: 'lighthouse:default',
      settings: {
        onlyCategories: ['performance', 'accessibility', 'seo'],
        formFactor: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
        },
      },
    },

    // Real User Monitoring (RUM) settings
    rum: {
      enabled: true,
      sampleRate: 0.1, // 10% of users
      trackingId: process.env.ANALYTICS_ID,
    },
  },

  // CI/CD integration
  ci: {
    // Fail build if performance budget exceeded
    failOnBudgetExceeded: true,

    // Performance regression threshold
    regressionThreshold: 0.1, // 10% regression fails build

    // Minimum number of runs for reliable results
    minRuns: 3,

    // Maximum acceptable variance between runs
    maxVariance: 0.2,
  },

  // Development settings
  development: {
    // Show performance warnings in dev mode
    showWarnings: true,

    // Log performance metrics to console
    logMetrics: true,

    // Performance profiling
    profiling: {
      enabled: true,
      trackComponents: true,
      trackNetworkRequests: true,
    },
  },
};
