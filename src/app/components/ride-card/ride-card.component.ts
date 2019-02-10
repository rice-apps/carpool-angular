import { Component, OnInit, Input} from '@angular/core';
import {Ride} from '../../models/ride';


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

  /**
   * Converts every month to its English version
   * @param rideTime
   */
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

  departParseYear(rideTime: String) {
    if (rideTime) {
      console.log(rideTime);
      return rideTime.split(' ')[2];
    }
  }
}
