import { Component, OnInit } from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride-service/ride.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ride-detail-component',
  templateUrl: './ride-detail-component.component.html',
  styleUrls: ['./ride-detail-component.component.css']
})
export class RideDetailComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
