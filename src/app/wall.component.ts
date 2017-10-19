import {Component, OnInit} from '@angular/core';
import {Wall} from './Models/Wall';
import {WALLS} from './mock-walls';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

export class WallComponent implements OnInit {
  walls = WALLS;
  selectedWall: Wall;

  constructor() {}

  getWalls(): void {
    this.walls = WALLS;
  }

  ngOnInit(): void {
    this.getWalls();
  }

  onSelect(wall: Wall): void {
    this.selectedWall = wall;
  }

  goToDetail(): void {

  }

}