import { Component, OnInit } from '@angular/core';
import {RideService} from "../../services/ride-service/ride.service";
import {Ride} from "../../models/ride";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {

  ride: Ride;

  constructor(private rideService: RideService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rideService.getRide(params['_id'])
        .then(ride => this.ride = ride);
    })
  }

  postUserToRide() {
    this.rideService.postUserToRide(this.ride._id)
      .then(ride => this.ride = ride);
  }

}
