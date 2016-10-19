import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgbPaginationModule, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';

import {List} from './list';


const routes: Routes = [
  {path: '', component: List},
];

@NgModule({
  imports: [NgbPaginationModule, RouterModule.forChild(routes)],
  declarations: [List],
  providers: [NgbPaginationConfig]
})
export class ListModule {}