import {Component} from 'angular2/core';

@Component({
  selector: 'nav-view',
  template: `
    <div class="nav-view">
      <div class="nav-item">
        <img src="../resources/images/ic_home_white_18dp_2x.png" class="nav-icon"/>
        <p>Home<p>
      </div>
      <div class="nav-item">
        <img src="../resources/images/ic_hotel_white_18dp_2x.png" class="nav-icon"/>
        <p>Rooms<p>
      </div>
      <div class="nav-item">
        <img src="../resources/images/ic_help_white_18dp_2x.png" class="nav-icon"/>
        <p>About<p>
      </div>
      <div class="nav-item">
        <img src="../resources/images/ic_email_white_18dp_2x.png" class="nav-icon"/>
        <p>Contact<p>
      </div>
    </div>
  `
})

export class NavViewComponent {

}
