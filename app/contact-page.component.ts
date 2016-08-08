import { Component } from 'angular2/core';

@Component({
  selector: 'contact-page',
  template: `
    <div class="contact-page">
      <h3>Contact</h3>
      <p>Have any questions? Feel free to contact me at:</p>
      <a href="mailto:melissa@someemail.com?subject=Guest%20house">melissa@someemail.com</a>
      <p>555-555-5555</p>
    </div>
  `
})

export class ContactPageComponent {

}
