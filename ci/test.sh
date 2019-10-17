#!/bin/sh

echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
export NG_CLI_ANALYTICS=ci
cd angular-monorepo-concourse
npm install
npm run affected:test -- --parallel