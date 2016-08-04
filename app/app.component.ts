import { Component } from 'angular2/core';
import {NavViewComponent} from './nav.component';
import {HomePageComponent} from './home-page.component';

@Component({
  selector: 'my-app',
  directives: [NavViewComponent, HomePageComponent],
  template: `
    <nav-view></nav-view>
    <h1 id="title">Melissa's Guest House</h1>
    <home-page></home-page>
  `
})

export class AppComponent {

}
