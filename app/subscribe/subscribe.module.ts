import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {Subscribe} from './subscribe';


const routes: Routes = [
  {path: '', component: Subscribe},
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  declarations: [Subscribe]
})
export class SubscribeModule {}