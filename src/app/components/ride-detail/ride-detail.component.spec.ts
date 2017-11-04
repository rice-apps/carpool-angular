import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDetailComponent } from './ride-detail.component';

describe('RideDetailComponent', () => {
  let component: RideDetailComponent;
  let fixture: ComponentFixture<RideDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
