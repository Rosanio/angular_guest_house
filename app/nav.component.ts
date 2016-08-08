import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'nav-view',
  outputs: ['onNavItemSelect'],
  template: `
    <div class="nav-view">
      <div class="nav-item" (click)="navItemSelected('Home')">
        <img src="../resources/images/ic_home_white_18dp_2x.png" class="nav-icon"/>
        <p>Home<p>
      </div>
      <div class="nav-item" (click)="navItemSelected('Rooms')">
        <img src="../resources/images/ic_hotel_white_18dp_2x.png" class="nav-icon"/>
        <p>Rooms<p>
      </div>
      <div class="nav-item" (click)="navItemSelected('About')">
        <img src="../resources/images/ic_help_white_18dp_2x.png" class="nav-icon"/>
        <p>About<p>
      </div>
      <div class="nav-item" (click)="navItemSelected('Contact')">
        <img src="../resources/images/ic_email_white_18dp_2x.png" class="nav-icon"/>
        <p>Contact<p>
      </div>
    </div>
  `
})

export class NavViewComponent {
  public onNavItemSelect: EventEmitter<String>;
  constructor() {
    this.onNavItemSelect = new EventEmitter();
  }
  public navItemSelected(selectedItem: String) {
    console.log(selectedItem);
    this.onNavItemSelect.emit(selectedItem);
  }
}
