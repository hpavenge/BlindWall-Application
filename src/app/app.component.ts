import { Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Walls application';

  count: number = 0;

  updateFromChild($event){
    this.count++;
  }

  reset(){
  this.count = 0;
  }
}
