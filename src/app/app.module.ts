import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { AgmCoreModule } from '@agm/core'
// import { NgbModule } from '@ng-boostrap/ng-boostrap';


import { AppComponent } from './app.component';
import {WallComponent} from './wall.component';
import {WallDetailComponent} from './wall-detail.component';
import { MuralService } from './mural.service';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    WallDetailComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdpG7mQETYlJ84Stz-ke5HQcQR4fPy_oM'
    })
  ],
  providers: [MuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
