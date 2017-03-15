"use strict";

const fs = require('fs');
const UglifyJS = require("uglify-js");

require('core-js-builder')({
  modules: [
    'es6.symbol',
    'es6.object.assign',
    'es6.string.starts-with',
    'es6.string.ends-with',
    'es6.array',
    'es7.reflect'
  ],
  blacklist: []
}).then(code => {
  const result = UglifyJS.minify(code, {fromString: true});
  fs.writeFileSync('./tmp/core.min.js', result.code, 'utf-8');
}).catch(error => {
  console.log(error);
});

const classList = fs.readFileSync('./node_modules/classlist-polyfill/src/index.js', 'utf-8');
fs.writeFileSync('./tmp/classlist-polyfill.min.js', UglifyJS.minify(classList, {fromString: true}).code, 'utf-8');