import { Component, OnInit } from '@angular/core';
import {RideService} from '../../services/ride-service/ride.service';
import {Ride} from '../../models/ride';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss']
})
export class RideDetailComponent implements OnInit {

  ride: Ride;

  constructor(private rideService: RideService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router)  { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rideService.getRide(params['_id'])
        .then(ride => {
          this.ride = ride;
          console.log('RETURNED RIDE:', this.ride);
        });
    });
  }

// allows current user to join ride
  postUserToRide() {
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    this.rideService.postUserToRide(this.ride._id, JSON.parse(localStorage.getItem('currentUser')).user.username)
      .then(ride => {
        this.ride = ride;
        console.log(this.ride._id);
      });
  }

  // allows user to leave ride
  removeUserToRide() {
    this.rideService.removeUserToRide(this.ride._id, JSON.parse(localStorage.getItem('currentUser')).user.username)
      .then(ride => this.ride = ride);
      alert('You have been removed from this ride.');
      this.router.navigate(['/rides']);
    //   this.rideService.deleteRide(this.ride._id)
    //     .then(ride => console.log('ride is deleted!!' + ride));
    // }
    // this.ride = ride;
  }

  departParseDay(rideTime: String) {
    if (rideTime) {
      return rideTime.split(' ')[1].slice(0, -1);
    }
    // console.log(rideTime.split(','));
  }

// check to see if current user exists in the ride
  checkUser() {
    console.log('CHECKING RIDE:', this.ride);
    for (let i = 0; i < this.ride.riders.length; i++) {
      if (this.ride.riders[i].username === JSON.parse(localStorage.getItem('currentUser')).user.username ) {
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

}
