import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  rides = [{name: "Cade's cool ride"}, {name: "Teju's lame ride"}];

  constructor() { }

  ngOnInit() {
  }

}
