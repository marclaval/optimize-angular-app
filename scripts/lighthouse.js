const fs = require('fs');

const lighthouse = require('lighthouse');
const ChromeLauncher = require('lighthouse/lighthouse-cli/chrome-launcher');
const perfConfig = require('lighthouse/lighthouse-core/config/perf.json');

const scenario = process.argv[2];
var report = {};


function getPerf(scenario) {
  const url = 'http://localhost:8080/' + scenario;
  const launcher = new ChromeLauncher.ChromeLauncher();
  return launcher
    .isDebuggerReady()
    .catch(() => {
      return launcher.run();
    })
    .then(() => {
      const lhOpts = {mobile: true, loadPage: true};
      return lighthouse(url, lhOpts, perfConfig)
        .then(res => {
          report = res;
          delete report.audits.screenshots;
        });
    })
    .then(() => {
      launcher.kill();
    });
}

getPerf(scenario)
  .then(() => {
    delete report.artifacts;
    fs.writeFileSync('./tmp/lighthouse-' + scenario + '.json', JSON.stringify(report), 'utf-8');
  })


