#!/bin/bash

# Setup script for NGT monitoring cron jobs
# This script sets up automated health monitoring

PROJECT_DIR="$(dirname "$(dirname "$(readlink -f "$0")")")"
MONITOR_SCRIPT="$PROJECT_DIR/monitoring/health-monitor.js"

echo "Setting up Next Generation Therapy monitoring..."
echo "Project directory: $PROJECT_DIR"

# Check if monitoring script exists
if [ ! -f "$MONITOR_SCRIPT" ]; then
    echo "❌ Monitor script not found at $MONITOR_SCRIPT"
    exit 1
fi

# Create log directory
mkdir -p "$PROJECT_DIR/logs"

# Add cron job for every 15 minutes
CRON_JOB="*/15 * * * * cd $PROJECT_DIR && node monitoring/health-monitor.js >> logs/monitor.log 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "health-monitor.js"; then
    echo "✅ Monitoring cron job already exists"
else
    # Add cron job
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ Added monitoring cron job (runs every 5 minutes)"
fi

echo ""
echo "📋 Setup Summary:"
echo "   • Monitoring script: $MONITOR_SCRIPT"
echo "   • Log file: $PROJECT_DIR/logs/monitor.log"
echo "   • Frequency: Every 15 minutes"
echo "   • Alert emails: luke@lstevens.dev, andreeatherapytoday@gmail.com"
echo ""
echo "⚠️  Important: Make sure RESEND_API_KEY is set in your environment"
echo "   For Vercel deployment, add it to your environment variables"
echo ""
echo "🔧 Manual test: npm run monitor:health"
echo "📄 View logs: tail -f logs/monitor.log"