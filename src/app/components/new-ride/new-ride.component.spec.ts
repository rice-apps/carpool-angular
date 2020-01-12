import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRideComponent } from './new-ride.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import {AppModule} from '../../app.module';
import moment = require('moment-timezone');
import {before} from 'selenium-webdriver/testing';

describe('NewRideComponent', () => {
  let component: NewRideComponent;
  let fixture: ComponentFixture<NewRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, AppModule],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRideComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('compute time zone difference', () => {
    const diff = component.getDifferenceBetween('America/Los_Angeles', 'America/Chicago');
    expect(diff).toEqual(2);
  });

  // Time zone strings
  // https://stackoverflow.com/questions/439630/create-a-date-with-a-set-timezone-without-using-a-string-representation

  it('change 10:00pm PST to 10:00pm CST', () => {
    component.diffFromCST = 2; // LA is behind by 1 hour
    const pacific = moment.tz('2020-01-11 22:00', 'America/Los_Angeles').toDate();
    const central = component.convertTimeToCST(pacific);
    expect(central).toEqual(moment.tz('2020-01-11 22:00', 'America/Chicago').toDate());
  });

  it('change 5:00pm EST to 5:00pm CST', () => {
    component.diffFromCST = -1; // New York is ahead by 1 hour
    const east = moment.tz('2020-07-11 17:00', 'America/New_York').toDate();
    const central = component.convertTimeToCST(east);
    expect(central).toEqual(moment.tz('2020-07-11 17:00', 'America/Chicago').toDate());
  });

  it('change 2:00am Shanghai time to 2:00am CST', () => {
    component.diffFromCST = -13; // China is ahead by 14 hours
    const shanghai = moment.tz('2020-05-11 02:00', 'Asia/Shanghai').toDate();
    const central = component.convertTimeToCST(shanghai);
    expect(central).toEqual(moment.tz('2020-05-11 02:00', 'America/Chicago').toDate());
  });
});
