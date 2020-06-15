import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightserviceComponent } from './flightservice.component';

describe('FlightserviceComponent', () => {
  let component: FlightserviceComponent;
  let fixture: ComponentFixture<FlightserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
