import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {RideListComponent} from "./components/ride-list/ride-list.component";
import {AuthGuard} from "./guards/auth.guard";
import {NewRideComponent} from "./components/new-ride/new-ride.component";


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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RideListComponent,
      },

      {
        path: 'new',
        component: NewRideComponent
      },
    ]
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
