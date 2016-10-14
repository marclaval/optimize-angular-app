var fs = require('fs');
require('core-js/client/core.js');
require('zone.js/dist/zone-node.js');
require('zone.js/dist/long-stack-trace-zone');

var au = require('angular2-universal');
var module = require('../tmp/app/module.universal');

var options = {
  ngModule: module.AppModule,
  time: true,
  originUrl: 'http://localhost:8080',
  baseUrl: '/',
  requestUrl: '/',
  document: fs.readFileSync('./public/universal/index.html', 'utf-8')
};

var zone = Zone.current.fork({
  name: 'UNIVERSAL prerender',
  properties: options
});
zone.run(() => (au.platformUniversalDynamic().serializeModule(module.AppModule, options)
.then((html) => {
  try {
    fs.mkdirSync('./tmp/universal');
  }
  catch(e){}
  fs.writeFileSync('./tmp/universal/index.html', html, 'utf-8');
}).catch((e) => console.log(e))
));