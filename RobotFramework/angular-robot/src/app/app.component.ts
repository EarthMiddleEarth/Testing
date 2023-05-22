import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ก๋วยเตี๋ยวพูนใจ';
  orderedList = [
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'}
  ];
  order() {
    const newOrder = {
      name: 'item4'
    };
    this.orderedList.push(newOrder);
  }
}


