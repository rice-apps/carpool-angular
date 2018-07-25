import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-component/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RideListComponent } from './components/ride-list/ride-list.component';
import { AuthComponent } from './components/auth/auth.component';
import {AppRoutingModule} from './app-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AuthService} from './services/auth-service/auth.service';
import {RideService} from './services/ride-service/ride.service';
import {HttpModule} from '@angular/http';
import {AuthGuard} from './guards/auth.guard';
import {NonAuthGuard} from './guards/non-auth.guard';
import { NewRideComponent } from './components/new-ride/new-ride.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RideDetailComponent } from './components/ride-detail/ride-detail.component';
import {UserService} from './services/user-service/user.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RideCardComponent } from './components/ride-card/ride-card.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { SearchCardComponent } from './components/search-card/search-card.component';
import {UserProfileEditComponent} from './components/user-profile-edit/user-profile-edit.component';
import { ProfileErrorComponent } from './components/profile-error/profile-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RideListComponent,
    AuthComponent,
    LandingPageComponent,
    NewRideComponent,
    RideDetailComponent,
    UserProfileComponent,
    RideDetailComponent,
    RideCardComponent,
    SearchCardComponent,
    UserProfileEditComponent,
    ProfileErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    AmazingTimePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    AuthService,
    RideService,
    AuthGuard,
    NonAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
