import {NgModule, Injectable} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes, PreloadingStrategy, Route} from '@angular/router';
import {of} from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import {App} from './app';
import {WelcomeModule} from './welcome/welcome.module';
import {Welcome} from './welcome/welcome';

const appRoutes: Routes = [
  {path: '', component: Welcome},
  {path: 'list', loadChildren: 'app/list/list.module#ListModule'},
  {path: 'subscribe', loadChildren: 'app/subscribe/subscribe.module#SubscribeModule'},
  {path: 'search', loadChildren: 'app/search/search.module#SearchModule'}
];

@Injectable()
export class PreloadSelectedModules implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: Function): Observable<any> {
    if (route.path == 'list') {
      this.preloadedModules.push(route.path);
      return load();
    } else {
      return of.call(null);
    }
  }
}

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: PreloadSelectedModules}), WelcomeModule],
  declarations: [App],
  bootstrap: [App],
  providers: [PreloadSelectedModules]
})
export class AppLazyModule {}