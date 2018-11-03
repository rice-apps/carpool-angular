import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride-service/ride.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.scss']
})
export class NewRideComponent implements OnInit {
  @ViewChild('timeInput') dateTimeInput: ElementRef;

  newRideForm: FormGroup;
  newRide: Ride = new Ride();
  startAt: Date = new Date();

  constructor(private fb: FormBuilder,
              private rideService: RideService,
              private router: Router) {
    this.startAt.setHours(0, 0, 0, 0);
  }

  ngOnInit() {
    this.newRideForm = this.fb.group({
      departing_from: ['', Validators.required],
      date_time: ['', Validators.required],
      arriving_at: ['', Validators.required],
      meeting_location: ['', Validators.required],
      number_riders: ['', Validators.required]
    });
  }
  // when submit is pressed, the user information is updated and a new ride is created
  submit() {
    console.log('in submit');
    this.newRide.departing_from = this.newRideForm.value['departing_from'];
    this.newRide.arriving_at = this.newRideForm.value['arriving_at'];
    this.newRide.meeting_location = this.newRideForm.value['meeting_at'];
    this.newRide.departing_datetime = this.newRideForm.value['date_time'];
    this.newRide.number_riders = this.newRideForm.value['number_riders'];
    this.rideService.addRide(this.newRide)
      .then((ride) => {
        console.log('RIDE:', ride);
        this.router.navigate(['/rides', ride._id]);
      });
  }



}
