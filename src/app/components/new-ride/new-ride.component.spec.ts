import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRideComponent } from './new-ride.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { APP_BASE_HREF } from '@angular/common';

import {AppModule} from '../../app.module';

describe('NewRideComponent', () => {
  let component: NewRideComponent;
  let fixture: ComponentFixture<NewRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule, AppModule],
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
  it('compute time zones correctly', () => {
    const diff = component.getDifferenceFromCST();
    console.log(diff);
  });
});
