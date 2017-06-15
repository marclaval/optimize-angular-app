const fs = require('fs');

const lighthouse = require('lighthouse');
const ChromeLauncher = require('chrome-launcher/chrome-launcher');
const perfConfig = require('lighthouse/lighthouse-core/config/perf.json');

const scenario = process.argv[2];
var report = {};


function getPerf(scenario) {
  const url = 'http://localhost:8080/' + scenario;
  let launchedChrome = null
  return ChromeLauncher.launch({port: 9222})
    .then((chrome) => {
      launchedChrome = chrome;
      const lhOpts = {mobile: true, loadPage: true};
      return lighthouse(url, lhOpts, perfConfig)
        .then(res => {
          report = res;
          delete report.audits['screenshot-thumbnails'];
          delete report.reportCategories;
          delete report.reportGroups;
        });
    })
    .then(() => {
      if (launchedChrome) {
        launchedChrome.kill();
      }
    })
    .catch((e) => {
      console.error(e);
      if (launchedChrome) {
        launchedChrome.kill();
      }
    });
}

getPerf(scenario)
  .then(() => {
    delete report.artifacts;
    fs.writeFileSync('./tmp/lighthouse-' + scenario + '.json', JSON.stringify(report), 'utf-8');
  })


