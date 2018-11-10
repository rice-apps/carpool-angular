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
  private sortBy: String;

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.sortBy = "Earliest";
    // this.rideService.getRides()
    //   .then(rides => this.rides = rides)
    //   .catch(err => console.log(err));
  }

  sortByEarliest(){
    this.rides.sort(function(a, b) {
      if (a.departing_datetime < b.departing_datetime) {
        return -1;
      }
      if (a.departing_datetime > b.departing_datetime) {
        return 1;
      }
      return 0;
    });
  }

  sortByLatest(){
    this.rides.sort(function(a, b) {
      if (a.departing_datetime > b.departing_datetime) {
        return -1;
      }
      if (a.departing_datetime < b.departing_datetime) {
        return 1;
      }
      return 0;
    });
  }

  onToggleSort(s: String) {
    this.sortBy = s;
    if (this.sortBy == "Earliest") {
      this.sortByEarliest();
    }
    else {
      this.sortByLatest();
    }
  }

  onSearch ($event) {
    this.rides = $event;
    this.onToggleSort(this.sortBy);
  }





}
