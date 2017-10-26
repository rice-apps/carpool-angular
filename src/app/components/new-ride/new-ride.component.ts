import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {

  rideForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  createForm() {
    this.rideForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      cost: ['', Validators.pattern("0|[1-9]+[0-9]*")],
      spots: ['', Validators.pattern("0|[1-9]+[0-9]*")],
      vehicle_type: ['', Validators.required]
    })
  }

}
