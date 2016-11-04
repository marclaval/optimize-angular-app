import {platformUniversalDynamic} from 'angular2-universal/browser';
import {AppModuleNgFactory} from './module.prerender.ngfactory';

platformUniversalDynamic().bootstrapModuleFactory(AppModuleNgFactory);