import {platformBrowser} from '@angular/platform-browser';
import {AppLazyModuleNgFactory} from './lazy.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppLazyModuleNgFactory);