#!/usr/bin/env bash

node ./scripts/lighthouse.js baseline
node ./scripts/lighthouse.js dev
node ./scripts/lighthouse.js bundling-app
node ./scripts/lighthouse.js bundling-full
node ./scripts/lighthouse.js treeshaking-rollup
node ./scripts/lighthouse.js treeshaking-webpack
node ./scripts/lighthouse.js aot-closure
node ./scripts/lighthouse.js aot-rollup
node ./scripts/lighthouse.js aot-systemjs
node ./scripts/lighthouse.js aot-webpack
node ./scripts/lighthouse.js lazyloading-closure
node ./scripts/lighthouse.js lazyloading-systemjs
node ./scripts/lighthouse.js lazyloading-webpack
node ./scripts/lighthouse.js prerender

