import { Component } from 'angular2/core';
import {NavViewComponent} from './nav.component';
import {HomePageComponent} from './home-page.component';

@Component({
  selector: 'my-app',
  directives: [NavViewComponent, HomePageComponent],
  template: `
    <nav-view (onNavItemSelect)="navItemWasSelected($event)"></nav-view>
    <h1 id="title">Melissa's Guest House</h1>
    <hr id="title-border">
    <home-page *ngIf="currentPage==='Home'"></home-page>
  `
})

export class AppComponent {
  public currentPage: String;
  constructor() {
    this.currentPage = "Home";
  }
  navItemWasSelected(selectedNavItem: String) {
    this.currentPage = selectedNavItem;
    console.log(this.currentPage);
  }
}
