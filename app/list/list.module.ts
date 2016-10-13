import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {List} from './list';


const routes: Routes = [
  {path: '', component: List},
];

@NgModule({
  imports: [NgbModule, RouterModule.forChild(routes)],
  declarations: [List],
  providers: [NgbPaginationConfig]
})
export class ListModule {}