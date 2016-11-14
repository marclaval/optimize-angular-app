import {platformUniversalDynamic} from 'angular2-universal/browser';
import {enableProdMode} from '@angular/core';
import {AppModuleNgFactory} from './module.prerender.ngfactory';

enableProdMode();
platformUniversalDynamic().bootstrapModuleFactory(AppModuleNgFactory);