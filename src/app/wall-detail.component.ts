import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Wall} from './Models/Wall';

@Component({
  selector: 'app-wall-detail',
  templateUrl: './wall-detail.component.html',
  styleUrls: ['./wall-detail.component.css']
})

export class WallDetailComponent implements OnInit{
  @Input() mural: Wall;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get api call single wall
 }

  goBack(): void {

  }

}
