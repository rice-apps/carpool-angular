import { Component, OnInit } from '@angular/core';
import {RideService} from '../../services/ride-service/ride.service';
import {Ride} from '../../models/ride';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../services/auth-service/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss']
})
export class RideDetailComponent implements OnInit {
  ride: Ride;

  public fullyLoaded: Promise<boolean>;
  private readonly currentUser = this.authService.getCurrentUser();

  constructor(private rideService: RideService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router,
              private authService: AuthService)  { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.ride = await this.rideService.getRide(params['_id']);
      if (!this.ride) {
        console.log(`ride ${params['_id']} could not be found`);
        return;
      }

      this.fullyLoaded = Promise.resolve(true);
    });
  }

  /**
   * Allow the current user to join this ride
   */
  postUserToRide() {
    if ( new Date(this.ride.departing_datetime) <= new Date()) {
      alert('You cannot join a past ride.');
    } else {
    this.rideService.postUserToRide(this.ride._id, this.currentUser._id)
      .then(ride => {
        this.ride = ride;
      });
    }
  }

  /**
   * Remove the current user from this ride
   */
  removeUserToRide() {
    if ( new Date(this.ride.departing_datetime) <= new Date()) {
      alert('You cannot leave a past ride.');
    } else {
    this.rideService.removeUserToRide(this.ride._id, this.currentUser._id)
      .then(ride => this.ride = ride);
      alert('You have been removed from this ride.');
    }
      this.router.navigate(['/rides']);
  }

  departParseDay(rideTime: String) {
    if (rideTime) {
      return rideTime.split(' ')[1].slice(0, -1);
    }
  }

  checkUser() {
    for (let i = 0; i < this.ride.riders.length; i++) {
      if (this.ride.riders[i]._id.toString() === this.currentUser._id.toString()) {
        return false;
      }
    }
    return true;
  }

  rideFull() {
    return this.ride.riders.length >= parseInt(this.ride.number_riders.toString(), 10);
  }

// displays month in its shortened version
  departParseMonth(rideTime: String) {
    if (rideTime) {
      const temp =  rideTime.split(' ')[0];
      if (temp.toLowerCase() === 'january') {
        return 'Jan.';
      } else if (temp.toLowerCase() === 'february') {
        return 'Feb.';
      } else if (temp.toLowerCase() === 'march') {
        return 'Mar.';
      } else if (temp.toLowerCase() === 'april') {
        return 'Apr.';
      } else if (temp.toLowerCase() === 'may') {
        return 'May';
      } else if (temp.toLowerCase() === 'june') {
        return 'June';
      } else if (temp.toLowerCase() === 'july') {
        return 'July';
      }  else if (temp.toLowerCase() === 'august') {
        return 'Aug';
      } else if (temp.toLowerCase() === 'september') {
        return 'Sept.';
      } else if (temp.toLowerCase() === 'october') {
        return 'Oct.';
      } else if (temp.toLowerCase() === 'november') {
        return 'Nov.';
      } else if (temp.toLowerCase() === 'december') {
        return 'Dec.';
      }
    }
  }

  departTime(rideTime: Date) {
    if (rideTime) {
      return moment(rideTime).tz('America/Chicago');
    }
  }

}
