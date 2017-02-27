import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './module.prerender.browser';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);