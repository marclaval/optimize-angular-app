"use strict";

const zlib = require('zlib');
const fs = require('fs');
const filesize = require('filesize');

const packageJson = require('../package.json');
const perf = require('../tmp/perf.json');
const minPerf = avgArray(perf['baseline']);
const maxPerf = avgArray(perf['bundling-full']);

var scenarios = ['baseline', 'dev', 'bundling-app', 'bundling-full', 'treeshaking-rollup', 'treeshaking-webpack', 'aot-closure', 'aot-rollup', 'aot-systemjs', 'aot-webpack', 'lazyloading-systemjs', 'lazyloading-webpack', 'prerender'];

var report = {};

function avgArray(array) {
  return Math.round(array.reduce(function(a, b) { return a + b; }) / array.length);
}

function getGzipSize(path) {
  const source = fs.readFileSync(path, 'utf-8');
  const compressed = zlib.gzipSync(source);
  return compressed.length;
}

function readFiles(path) {
  let result = [];
  const items = fs.readdirSync(path, 'utf-8');
  items.forEach((item) => {
    const filePath = path + '/' + item;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      result = result.concat(readFiles(filePath));
    } else if (item.lastIndexOf('.js.map') === -1 && item.lastIndexOf('.d.ts') === -1 && item.lastIndexOf('.ngfactory.') === -1) {
      const gzip = getGzipSize(filePath);
      result.push({
        name: item,
        size: stats["size"],
        gzip: gzip
      })
    }
  });
  return result;
}

scenarios.forEach((scenario) => {
  const metrics = {};
  const filesData = readFiles('./dist/' + scenario);
  let size = 0;
  let gzip = 0;
  filesData.forEach((data) => {
    size += data.size;
    gzip += data.gzip;
  });
  metrics.numberOfFiles = filesData.length;
  metrics.size = size;
  metrics.size_pretty = filesize(size);
  metrics.gzip = gzip;
  metrics.gzip_pretty = filesize(gzip);
  metrics.perf = avgArray(perf[scenario]);
  metrics.score = 100 - Math.round(100 * (metrics.perf - minPerf) / (maxPerf - minPerf));
  metrics.lighthouse = require('../tmp/lighthouse-' + scenario + '.json');
  report[scenario] = metrics;
});

let dep = packageJson.dependencies;
for (let key in packageJson.devDependencies) {
  dep[key] = packageJson.devDependencies[key];
}

const now = new Date();
const reportName = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}_report.json`;
fs.writeFileSync('./tmp/' + reportName, JSON.stringify({date: (new Date()).toString(), report: report, dependencies: dep}), 'utf-8');