const fs = require('fs');

var score = {};
var size = {};
var gzip = {};
var categories = [];

function pushMetric(dest, scenario, value) {
  if (typeof dest[scenario] === 'undefined') {
    dest[scenario] = [];
  }
  dest[scenario].push(value);
}

function generateSerie(data) {
  let res = [];
  for (const key in data) {
    res.push({
      name: key,
      data: data[key]
    })
  }
  return res;
}

const reportFiles = fs.readdirSync('./reports', 'utf-8');
reportFiles.forEach((reportFile) => {
  // Get report content
  const reportPath = './reports/' + reportFile;
  const reportSource = fs.readFileSync(reportPath, 'utf-8');
  const report = JSON.parse(reportSource);

  // Process the content
  for (const key in report.report) {
    const metrics = report.report[key];
    pushMetric(score, key, metrics.score);
    pushMetric(size, key, metrics.size);
    pushMetric(gzip, key, metrics.gzip);
  }
  categories.push(report.date);
});

let output = `
var serie_score = ${JSON.stringify(generateSerie(score))};
var serie_size = ${JSON.stringify(generateSerie(size))};
var serie_gzip = ${JSON.stringify(generateSerie(gzip))};
var categories = ${JSON.stringify(categories)};
`;

let index = fs.readFileSync('./public/index.html', 'utf-8');
index = index.replace('//INSERTION_SLOT', output);
fs.writeFileSync('./dist/index.html', index, 'utf-8');