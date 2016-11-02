import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
<nav class="navbar navbar-dark bg-primary">
  <ul class="nav navbar-nav">
    <li class="nav-item">
      <a class="navbar-brand"  href="..">&#8678;</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" [routerLink]="['/']">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/list']">List</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/subscribe']">Subscribe</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/search']">Search</a>
    </li>
  </ul>
</nav>
<router-outlet></router-outlet>
  `,
})
export class App {}
