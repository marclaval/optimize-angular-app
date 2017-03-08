"use strict";

const fs = require('fs');
const UglifyJS = require("uglify-js");

require('core-js-builder')({
  modules: [
    'es6.symbol',
    'es6.object',
    'es6.function',
    'es6.string',
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