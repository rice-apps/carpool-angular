import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileErrorComponent } from './profile-error.component';

describe('About', () => {
  let component: ProfileErrorComponent;
  let fixture: ComponentFixture<ProfileErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
