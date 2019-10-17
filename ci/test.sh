#!/bin/sh

echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
cd angular-monorepo-concourse
npm install
npm run affected:test -- --parallel