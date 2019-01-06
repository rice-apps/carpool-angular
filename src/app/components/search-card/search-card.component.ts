import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride-service/ride.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  @Output() ridesSearch = new EventEmitter<Ride[]>();
  private rides: Ride[];
  newSearchForm: FormGroup;
  startAt: Date = new Date();

  constructor(private rideService: RideService, private fb: FormBuilder, private router: Router) {}


  ngOnInit() {
    this.newSearchForm = this.fb.group({
      departing_from: [''],
      arriving_at: [''],
      search_depart_date: ['']
    });


    this.rideService.searchRides(
      this.newSearchForm.value['departing_from'],
      this.newSearchForm.value['arriving_at'],
      this.newSearchForm.value['search_depart_date'])
      .then(rides => {
        this.rides = rides;
        this.ridesSearch.emit(this.rides);
      })
      .catch(err => console.log(err));


  }
// searches for matching ride by looking at arrival and departure location and date
  search() {
    console.log(this.newSearchForm);
    this.rideService.searchRides(
      this.newSearchForm.value['departing_from'],
      this.newSearchForm.value['arriving_at'],
      this.newSearchForm.value['search_depart_date'])
      .then(rides => {
        this.rides = rides;
        this.ridesSearch.emit(this.rides);
      })
      .catch(err => console.log(err));
  }

// this routes page to /rides/new
  newRideForm() {
    this.router.navigate(['/rides/new']);
  }

}
