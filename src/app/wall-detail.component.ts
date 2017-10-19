import {Component, Input} from '@angular/core';
import {Wall} from './Models/Wall';

@Component({
  selector: 'app-wall-detail',
  templateUrl: './wall-detail.component.html',
  styleUrls: ['./wall-detail.component.css']
})

export class WallDetailComponent {
  @Input() wall: Wall;

  goBack(): void {

  }

}
