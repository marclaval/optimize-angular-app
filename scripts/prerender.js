// Ugly workaround for 2.1.1 --------------------------------------------------------
let __compiler__ = require('@angular/compiler');
let __core__ =  require('@angular/core');
let __core_private__ = __core__.__core_private__;
let patch = false;
if (!__core_private__['ViewUtils']) {
  patch = true;
  __core_private__['ViewUtils'] = __core_private__['view_utils'];
}

if (!__compiler__.__compiler_private__) {
  patch = true;
  (__compiler__).__compiler_private__ = {
    SelectorMatcher: __compiler__.SelectorMatcher,
    CssSelector: __compiler__.CssSelector
  }
}

var __universal__ = require('angular2-platform-node/__private_imports__');
if (patch) {
  __universal__.ViewUtils = __core_private__['view_utils'];
  __universal__.CssSelector = __compiler__.CssSelector
  __universal__.SelectorMatcher = __compiler__.SelectorMatcher
}
// End of ugly workaround --------------------------------------------------------


var fs = require('fs');
require('core-js/client/core.js');
require('zone.js/dist/zone-node.js');
require('zone.js/dist/long-stack-trace-zone');

var au = require('angular2-universal');
var module = require('../tmp/app/module.prerender');

var options = {
  ngModule: module.AppModule,
  time: true,
  originUrl: 'http://localhost:8080',
  baseUrl: '/',
  requestUrl: '/',
  document: fs.readFileSync('./public/prerender/index.html', 'utf-8')
};

var zone = Zone.current.fork({
  name: 'UNIVERSAL prerender',
  properties: options
});
zone.run(() => (au.platformUniversalDynamic().serializeModule(module.AppModule, options)
.then((html) => {
  try {
    fs.mkdirSync('./tmp/prerender');
  }
  catch(e){}
  fs.writeFileSync('./tmp/prerender/index.html', html, 'utf-8');
}).catch((e) => console.log(e))
));