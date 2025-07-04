set -e
nvm use 20
npm i
npm run build
pm2 start npm --name "github-actions-ci-cd-demo" -- start