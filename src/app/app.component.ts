import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 11 Tutorial..!';
  isDisabled = true;
  name = "Pampana";

  enableInputBox(){
    this.isDisabled = false; 
  }
}
