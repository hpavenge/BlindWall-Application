import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'counter-comp',
  template: `
    <div class='counter'>
      <h2>Counter component</h2>
      <button (click)="updateCount()">Add To Count</button>
    </div>
  `,
  styles: [`
  .child{
    border: 5px solid #c4e6ff;
    border-radius: 10px;
    background-color: #C3E4BD;
    height: 100px;
  }
  `]
})

export class CounterComponent {
  @Input("parentCount")
  count: number;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  updateCount() {
    this.count++;
    this.change.emit(this.count);
  }
}
