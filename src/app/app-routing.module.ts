import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WallComponent }      from './wall.component';
import { WallDetailComponent }  from './wall-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/walls', pathMatch: 'full' },
    { path: 'walls',     component: WallComponent },
    { path: 'detail/:id', component: WallDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
