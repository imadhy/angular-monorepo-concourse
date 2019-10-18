#!/bin/sh
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
cd angular-monorepo-concourse
npm run build -- --project=pn107
cp -R dist ../livrable_pn107/