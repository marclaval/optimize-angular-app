import {platformBrowser} from '@angular/platform-browser';
import {AppLazyModuleNgFactory} from './module.lazy.ngfactory';

platformBrowser().bootstrapModuleFactory(AppLazyModuleNgFactory);