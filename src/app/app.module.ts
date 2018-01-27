import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RideListComponent } from './components/ride-list/ride-list.component';
import { AuthComponent } from './components/auth/auth.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AuthService} from "./services/auth-service/auth.service";
import {RideService} from "./services/ride-service/ride.service";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./guards/auth.guard";
import {NonAuthGuard} from "./guards/non-auth.guard";
import { NewRideComponent } from './components/new-ride/new-ride.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RideDetailComponent } from './components/ride-detail/ride-detail.component';
import { RideCardComponent } from './components/ride-card/ride-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RideListComponent,
    AuthComponent,
    LandingPageComponent,
    NewRideComponent,
    RideDetailComponent,
    RideCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    RideService,
    AuthGuard,
    NonAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
