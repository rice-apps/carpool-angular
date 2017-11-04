import { Component, OnInit } from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride-service/ride.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  ride0 = {
    title: 'IAH',
    description: 'YOOOOO come thru to IAH with the homes!',
    cost: 45,
    spots: 4,
    vehicle_type: 'Car',
    departure_time: Date.now(),
    arrival_time: Date.now(),
    departure_address: '1601 Rice Blvd',
    arrival_address: '2800 N Terminal Rd',
    collapse: true

  };

  ride1 = {
    title: 'IAH',
    description: 'YOOOOO come thru to IAH with the homes!',
    cost: 45,
    spots: 4,
    vehicle_type: 'Car',
    departure_time: Date.now(),
    arrival_time: Date.now(),
    departure_address: '1601 Rice Blvd',
    arrival_address: '2800 N Terminal Rd',
    collapse: true

  };
  ride2 = {
    title: 'IAH',
    description: 'YOOOOO come thru to IAH with the homes!',
    cost: 45,
    spots: 4,
    vehicle_type: 'Car',
    departure_time: Date.now(),
    arrival_time: Date.now(),
    departure_address: '1601 Rice Blvd',
    arrival_address: '2800 N Terminal Rd',
    collapse: true

  };
  ride3 = {
    title: 'IAH',
    description: 'YOOOOO come thru to IAH with the homes!',
    cost: 45,
    spots: 4,
    vehicle_type: 'Car',
    departure_time: Date.now(),
    arrival_time: Date.now(),
    departure_address: '1601 Rice Blvd',
    arrival_address: '2800 N Terminal Rd',
    collapse: true

  };
  ride4 = {
    title: 'IAH',
    description: 'YOOOOO come thru to IAH with the homes!',
    cost: 45,
    spots: 4,
    vehicle_type: 'Car',
    departure_time: Date.now(),
    arrival_time: Date.now(),
    departure_address: '1601 Rice Blvd',
    arrival_address: '2800 N Terminal Rd',
    collapse: true

  };


  // private rides: Ride[];
  private rides: Object[];

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rides = [ this.ride0, this.ride1, this.ride2, this.ride3, this.ride4 ];
    // this.rideService.getRides()
    //   .then(rides => this.rides = rides)
    //   .catch(err => console.log(err));
  }

}
