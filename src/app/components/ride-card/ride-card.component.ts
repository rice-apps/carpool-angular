import { Component, OnInit, Input} from '@angular/core';
import {Ride} from "../../models/ride";


@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.css']
})
export class RideCardComponent {

  @Input() ride: Ride;

  public slide_pos = 0;

  constructor() { }

  changePos() {
    this.slide_pos = 200;
  }

}
