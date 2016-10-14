import {platformUniversalDynamic} from 'angular2-universal/browser';
import {AppModuleNgFactory} from './module.universal.ngfactory';

platformUniversalDynamic().bootstrapModuleFactory(AppModuleNgFactory);