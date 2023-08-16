import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhotelRegistrationComponent } from './newhotel-registration.component';

describe('NewhotelRegistrationComponent', () => {
  let component: NewhotelRegistrationComponent;
  let fixture: ComponentFixture<NewhotelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewhotelRegistrationComponent]
    });
    fixture = TestBed.createComponent(NewhotelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
