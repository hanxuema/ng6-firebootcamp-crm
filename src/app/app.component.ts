import { Component } from '@angular/core';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //
  title = 'firebootcamp-crm';

  //event
  keyPressed(event) {
    this.title = event.target.value;

  }
}

//selector is the name of the component

