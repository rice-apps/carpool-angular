import { Component, OnInit } from '@angular/core';
import {Ride} from '../../models/ride';
import {RideListComponent} from '../ride-list/ride-list.component';
import {RideService} from '../../services/ride-service/ride.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  newUser: User;

  private rides: Ride[];
  public past_rides: Ride[];
  public future_rides: Ride[];

  constructor(private userService: UserService, private route: ActivatedRoute,
              private rideService: RideService, private fb: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['username'])
        .then(user => {
          this.newUser = user;
          this.rideService.getPastRidesByUser(this.newUser.username.toString())
            .then(rides => {this.past_rides = rides; console.log(rides); })
            .catch(err => console.log(err));
          this.rideService.getFutureRidesByUser(this.newUser.username.toString())
            .then(rides => {this.future_rides = rides; console.log(rides); })
            .catch(err => console.log(err));
        });
    });
    // this.rideService.getRides()
    //   .then(rides => {this.rides = rides; console.log(rides); })
    //   .catch(err => console.log(err));
  }

  edit() {
    this.router.navigate(['/profile/edit']);

  }
}
