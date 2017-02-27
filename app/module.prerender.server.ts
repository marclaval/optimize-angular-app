import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {RouterModule, Routes} from '@angular/router';

import {App} from './app';
import {WelcomeModule} from './welcome/welcome.module';
import {Welcome} from './welcome/welcome';

const appRoutes: Routes = [
  {path: '', component: Welcome},
  {path: 'list', loadChildren: 'app/list/list.module#ListModule'},
  {path: 'subscribe', loadChildren: 'app/subscribe/subscribe.module#SubscribeModule'},
  {path: 'search', loadChildren: 'app/search/search.module#SearchModule'}
];

@NgModule({
  imports: [ServerModule, RouterModule.forRoot(appRoutes, {useHash: true}), WelcomeModule],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}