#!/bin/bash
set -e

# Source NVM to make it available in the script
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Use Node.js version 20
nvm use 20

# Install dependencies and build
npm i
npm run build

# Stop existing PM2 process if running
pm2 stop github-actions-ci-cd-demo || true
pm2 delete github-actions-ci-cd-demo || true

# Start with PM2
pm2 start npm --name "github-actions-ci-cd-demo" -- start