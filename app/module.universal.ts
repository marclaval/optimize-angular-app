import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {UniversalModule} from 'angular2-universal';

import {App} from './app';
import {WelcomeModule} from './welcome/welcome.module';
import {Welcome} from './welcome/welcome';

const appRoutes: Routes = [
  {path: '', component: Welcome},
  {path: 'list', loadChildren: './list/list.module#ListModule'},
  {path: 'subscribe', loadChildren: './subscribe/subscribe.module#SubscribeModule'},
  {path: 'search', loadChildren: './search/search.module#SearchModule'}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true}), UniversalModule, WelcomeModule],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}