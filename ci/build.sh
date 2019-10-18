#!/bin/sh
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"

cd angular-monorepo-concourse

npm rebuild node-sass # temporary fix
npm run prod

cp -R dist ../livrable/




echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
export NG_CLI_ANALYTICS=ci
cd angular-monorepo-concourse
npm install
npm run affected:test -- --parallel --base=origin/master~1 --head=origin/master