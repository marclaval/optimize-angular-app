"use strict";

const fs = require('fs');
require('core-js/client/core.js');
require('zone.js/dist/zone-node.js');
require('zone.js/dist/long-stack-trace-zone');
require('rxjs/Rx');

const co = require('@angular/core');
const ps = require('@angular/platform-server');
const prerenderModule = require('../tmp/app/module.prerender.server');

const document = fs.readFileSync('./public/prerender/index.html', 'utf-8');
co.enableProdMode();

const platform = ps.platformDynamicServer([{
  provide: ps.INITIAL_CONFIG,
  useValue: {
    document: document,
    url: 'http://localhost:8080'
  }
}]);
platform.bootstrapModule(prerenderModule.AppModule).then(moduleRef => {
  const state = moduleRef.injector.get(ps.PlatformState);
  const appRef = moduleRef.injector.get(co.ApplicationRef);

  appRef._isStable
    .filter((isStable) => isStable)
    .first()
    .subscribe((stable) => {
      try {
        fs.mkdirSync('./tmp/prerender');
      }
      catch(e){}
      fs.writeFileSync('./tmp/prerender/index.html', state.renderToString(), 'utf-8');
      platform.destroy();
    });
});
