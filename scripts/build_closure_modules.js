"use strict";

const fs = require('fs');

const main = fs.readFileSync('./tmp/0.MF', 'utf-8').split('\n');
const bundle1 = fs.readFileSync('./tmp/1.MF', 'utf-8').split('\n');
const bundle2 = fs.readFileSync('./tmp/2.MF', 'utf-8').split('\n');
const bundle3 = fs.readFileSync('./tmp/3.MF', 'utf-8').split('\n');

removeDuplicates(main, bundle1);
removeDuplicates(main, bundle2);
removeDuplicates(main, bundle3);

let out = '';
out += main.join('\n');
out += '--module=main:' + (main.length - 1 + 2) + '\n\n'; //Remove empty line, add the 2 externs

out += bundle1.join('\n');
out += '\n--module=bundle1:' + bundle1.length + ':main\n\n';

out += bundle2.join('\n');
out += '\n--module=bundle2:' + bundle2.length + ':main\n\n';

out += bundle3.join('\n');
out += '\n--module=bundle3:' + bundle3.length + ':main\n\n';

fs.writeFileSync('./tmp/modules.txt', out, 'utf-8');

function removeDuplicates(reference, bundle) {
  const refLength = bundle.length;
  for (let i = 0; i < refLength; i++) {
    const item = bundle[refLength - i -1];
    if (reference.includes(item)) {
      bundle.splice(refLength - i - 1, 1)
    }
  }
}

//TODO: modify ngfactory entry point to add the following:
// (self['_S']=self['_S']||[])["//app/search/search.module.ngfactory.js"]= {"SearchModuleNgFactory": SearchModuleNgFactory};

injectCustomExport('./tmp/es6/app/list/list.module.ngfactory.js', 'ListModuleNgFactory');
injectCustomExport('./tmp/es6/app/search/search.module.ngfactory.js', 'SearchModuleNgFactory');
injectCustomExport('./tmp/es6/app/subscribe/subscribe.module.ngfactory.js', 'SubscribeModuleNgFactory');

function injectCustomExport(filePath, moduleFactoryName) {
  let source = fs.readFileSync(filePath, 'utf-8');
  if (source.indexOf(`self['_S']`) == -1) {
    source = source.replace('//# sourceMappingURL',
    `(self['_S']=self['_S']||[])["//${filePath.replace('./tmp/es6/', '')}"]= {"${moduleFactoryName}": ${moduleFactoryName}};
//# sourceMappingURL`);
    fs.writeFileSync(filePath, source, 'utf-8');
  }
}