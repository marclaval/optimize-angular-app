import {platformBrowser} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import {AppLazyModuleNgFactory} from './module.lazy.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppLazyModuleNgFactory);