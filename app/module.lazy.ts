import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import {NgbModule, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {App} from './app';
import {Welcome} from './welcome/welcome';
import {List} from './list/list';
import {Subscribe} from './subscribe/subscribe';

const appRoutes: Routes = [
  {path: '', component: Welcome},
  {path: 'list', component: List},
  {path: 'subscribe', component: Subscribe},
  {path: 'search', loadChildren: './search/search.module#SearchModule'}
];

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(appRoutes, {useHash: true}), FormsModule, NgbModule],
  declarations: [App, Welcome, List, Subscribe],
  providers: [NgbPaginationConfig],
  bootstrap: [App]
})
export class AppLazyModule {}