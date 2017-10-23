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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RideListComponent,
    AuthComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthService,
    RideService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
