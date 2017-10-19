import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
// import { NgbModule } from '@ng-boostrap/ng-boostrap';


import { AppComponent } from './app.component';
import { MuralService } from './mural.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
