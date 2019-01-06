import { Component, OnInit } from '@angular/core';
import {Ride} from "../../models/ride";
import {RideService} from "../../services/ride-service/ride.service";

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss']
})
export class RideListComponent implements OnInit {

  private rides: Ride[];
  private today = new Date();

  constructor(private rideService: RideService) { }

  ngOnInit() {
    // this.rideService.getRides()
    //   .then(rides => this.rides = rides)
    //   .catch(err => console.log(err));
  }

  sortByRecent(){
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

  sortByOldest(){
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

  onToggleSort(s: String) {
    if (s == "Recent") {
      this.sortByRecent();
    }
    else {
      this.sortByOldest();
    }
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
