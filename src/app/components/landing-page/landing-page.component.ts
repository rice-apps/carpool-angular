import { Component, OnInit } from '@angular/core';
import {CONFIG} from "../../config";
import {Ride} from '../../models/ride';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private authUrl: string = `${CONFIG.cas_auth_url}?service=${CONFIG.service_url}`;

  ride: Ride;


  constructor(private authService: AuthService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  NavigateRides() {
    this.router.navigate(['/rides']);
  }

  checkUserExists() {
    this.route.queryParams.subscribe(params => {
      this.authService.authenticate(params['ticket'])
        .then((res) => {
          console.log(res);
          if (res.user.is_new) {
            this.router.navigate(['/profile/edit']);
          } else {
            this.router.navigate(['/rides']);
          }

        })
        .catch(err => console.log(err));
    })
  }

}

