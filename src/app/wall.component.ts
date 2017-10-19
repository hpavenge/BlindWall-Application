import {Component, OnInit} from '@angular/core';
import { Router }          from '@angular/router';
import {Wall} from './Models/Wall';
import {MuralService} from './mural.service';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

export class WallComponent implements OnInit {
  murals: Array<Wall[]>;
  selectedWall: Wall;

  constructor(private muralService: MuralService, private router: Router) {}

  getWalls(): void {
    this.muralService.getMurals().subscribe(data => {
      // this.data = data;
      this.murals = data;
    });
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
