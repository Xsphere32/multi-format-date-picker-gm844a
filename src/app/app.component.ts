import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  date1 : Date ;
  date2 : Date ;

  catchDate1(event) {
    this.date1 = event;
  }

  catchDate2(event) {
    this.date2 = event;
  }
}
