import { Component } from 'angular2/core';
import {NavViewComponent} from './nav.component';
import {HomePageComponent} from './home-page.component';
import {RoomsPageComponent} from './rooms-page.component';
import {AboutPageComponent} from './about-page.component';
import {ContactPageComponent} from './contact-page.component';

@Component({
  selector: 'my-app',
  directives: [NavViewComponent, HomePageComponent, RoomsPageComponent, AboutPageComponent, ContactPageComponent],
  template: `
    <nav-view (onNavItemSelect)="navItemWasSelected($event)"></nav-view>
    <h1 id="title">Melissa's Guest House</h1>
    <hr id="title-border">
    <home-page *ngIf="currentPage==='Home'"></home-page>
    <rooms-page *ngIf="currentPage==='Rooms'"></rooms-page>
    <about-page *ngIf="currentPage==='About'"></about-page>
    <contact-page *ngIf="currentPage==='Contact'"></contact-page>
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
    scrollTo(0, 0);
  }
}
