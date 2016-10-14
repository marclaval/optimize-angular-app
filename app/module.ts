import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {App} from './app';
import {Welcome} from './welcome/welcome';
import {List} from './list/list';
import {Subscribe} from './subscribe/subscribe';
import {Search} from './search/search';
import {WelcomeModule} from "./welcome/welcome.module";

const appRoutes: Routes = [
  {path: '', component: Welcome},
  {path: 'list', component: List},
  {path: 'subscribe', component: Subscribe},
  {path: 'search', component: Search}
];

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(appRoutes, {useHash: true}), FormsModule, HttpModule, JsonpModule, NgbModule, WelcomeModule],
  declarations: [App, List, Subscribe, Search],
  providers: [NgbPaginationConfig],
  bootstrap: [App]
})
export class AppModule {}