import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-boostrap/ng-boostrap';


import { AppComponent } from './app.component';
import {WallComponent} from './wall.component';
import {WallDetailComponent} from './wall-detail.component';
import { MuralService } from './mural.service';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    WallDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
