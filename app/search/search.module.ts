import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {Search} from './search';


const routes: Routes = [
  {path: '', component: Search},
];

@NgModule({
  imports: [CommonModule, HttpModule, JsonpModule, RouterModule.forChild(routes)],
  declarations: [Search]
})
export class SearchModule {}