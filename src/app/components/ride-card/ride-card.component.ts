import { Component, OnInit, Input} from '@angular/core';
import {Ride} from "../../models/ride";


@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.scss']
})
export class RideCardComponent {

  @Input() ride: Ride;

  public slide_pos = 0;

  constructor() { }

  changePos() {
    this.slide_pos = 200;
  }

  departParseDay(rideTime: String) {
    if (rideTime) {
      return rideTime.split(' ')[1].slice(0, -1);
    }
    // console.log(rideTime.split(','));


  }


  departParseMonth(rideTime: String) {
    if (rideTime) {
      return rideTime.split(' ')[0];
    }


  }

}

