import { Component, OnInit } from '@angular/core';
import {Ride} from "../../models/ride";
import {RideService} from "../../services/ride-service/ride.service";

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss']
})
export class RideListComponent implements OnInit {

  public fullyLoaded: Promise<boolean>;
  private rides: Ride[];
  private today = new Date();

  constructor(private rideService: RideService) { }

  ngOnInit() {
  }

  sortByRecent() {
    this.rides.sort(function(a, b) {
      if (a.departing_datetime < b.departing_datetime) {
        return 1;
      }
      if (a.departing_datetime > b.departing_datetime) {
        return -1;
      }
      return 0;
    });
  }

  sortByOldest() {
    this.rides.sort(function(a, b) {
      if (a.departing_datetime > b.departing_datetime) {
        return 1;
      }
      if (a.departing_datetime < b.departing_datetime) {
        return -1;
      }
      return 0;
    });
  }

  filterPastRides() {
    this.rides = this.rides.filter(ride => new Date(ride.departing_datetime) >= this.today);
  }

  onSearch ($event) {
    this.rides = $event;
    this.sortByRecent();
    this.filterPastRides();
  }
}
