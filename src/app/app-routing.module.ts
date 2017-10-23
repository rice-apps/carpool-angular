import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {RideListComponent} from "./components/ride-list/ride-list.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },

  {
    path: 'auth',
    component: AuthComponent
  },

  {
    path: 'rides',
    component: RideListComponent,
    canActivate: [AuthGuard]
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
