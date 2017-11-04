import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {

  private newRideForm: FormGroup;
  isOwnCar: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newRideForm = this.fb.group({
      departingFrom: ['', Validators.required],
      arrivingAt: ['', Validators.required],
      isOwnCar: ['']
    })
  }

}
