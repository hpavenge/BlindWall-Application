import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Wall} from './Models/Wall';
import {MuralService} from './mural.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-wall-detail',
  templateUrl: './wall-detail.component.html',
  styleUrls: ['./wall-detail.component.css']
})

export class WallDetailComponent implements OnInit{
  @Input() mural: Wall;

  constructor(private route: ActivatedRoute, private muralService: MuralService) {}

  ngOnInit(): void {
    // get single wall
    this.getWall();
 }

 getWall(): void {
   this.muralService.getMurals().subscribe(data => {
       this.mural = data.find(x=> x.id == this.route.snapshot.params['id']);
     });
 }
  goBack(): void {

  }

}
