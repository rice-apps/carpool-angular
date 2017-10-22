import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";


const routes: Routes = [

  {
    path: 'auth',
    component: AuthComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
