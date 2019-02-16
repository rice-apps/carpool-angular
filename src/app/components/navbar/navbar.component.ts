import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth-service/auth.service';
import { CONFIG } from '../../config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private loggedIn: Observable<boolean>;

  private authUrl = `${CONFIG.cas_auth_url}?service=${CONFIG.service_url}`;
  private _id = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn;
    this.loggedIn.subscribe((val) => {
      if (val) {
        this._id = this.authService.getCurrentUser()._id;
      } else {
        this._id = '';
      }
    });
  }

  profile() {
    this.router.navigate(['/profile/' + this._id]);
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/']);
        this._id = '';
      });
  }

  // profile() {
  //   this.router.navigate(['/profile']);
  // }
  // this routes page to /rides/new
  newRideForm() {
    this.router.navigate(['/rides/new']);
  }

  // this routes page to /rides
  navigateToRides() {
    this.router.navigate(['/rides'])
      .then((success) => console.log(success));
  }
}
