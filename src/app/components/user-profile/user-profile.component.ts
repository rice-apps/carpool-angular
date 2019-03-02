import { Component, OnInit } from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride-service/ride.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user-service/user.service';
import {FormBuilder} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  public fullyLoaded: Promise<boolean>;
  public past_rides: Ride[];
  public future_rides: Ride[];
  public money_saved = 0;
  // I just hardcoded these prices using this website: https://www.taxifarefinder.com/main.php?city=Uber-X-Houston
  public ride_costs = {'Rice' : {'IAH' : 40, 'Hobby' : 20, 'Rice' : 0}, 'IAH' : {'Rice' : 40}, 'Hobby' : {'Rice': 20}};

  constructor(private userService: UserService, private route: ActivatedRoute,
              private rideService: RideService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      // Reroute if the parameter is undefined
      // if (!params['_id'] || params['_id'] === '') {
      //   this.router.navigate(['/profileerror']);
      //   return;
      // }

      // Get current user
      this.user = await this.userService.getUserProfile(params['_id']);

      // If the user does not exist, redirect
      // if (!this.user) {
      //   this.router.navigate(['/profileerror']);
      //   return;
      //}

      // Load past rides
      this.past_rides = await this.rideService.getPastRidesByUser(params['_id']);
      for (const ride of this.past_rides) {
        const added_thing = this.ride_costs[ride.departing_from.toString()][ride.arriving_at.toString()];
        if (added_thing !== undefined) {
          this.money_saved += added_thing / ride.riders.length;
        }
      }

      // Load future rides
      this.future_rides = await this.rideService.getFutureRidesByUser(params['_id']);
      this.fullyLoaded = Promise.resolve(true);
    });
  }

  /**
   * Take us to the edit page
   */
  edit() {
    this.router.navigate([this.router.url + '/edit']);
  }

  /**
   * Format a phone number string based on a universal format (xxx) xxx-xxxx
   * @param phoneNumberString the string to format
   */
  formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
  }
}
