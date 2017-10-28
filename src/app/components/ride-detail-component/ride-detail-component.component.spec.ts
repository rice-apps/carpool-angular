import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDetailComponentComponent } from './ride-detail-component.component';

describe('RideDetailComponentComponent', () => {
  let component: RideDetailComponentComponent;
  let fixture: ComponentFixture<RideDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
