import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewschdueleflightComponent } from './viewschdueleflight.component';

describe('ViewschdueleflightComponent', () => {
  let component: ViewschdueleflightComponent;
  let fixture: ComponentFixture<ViewschdueleflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewschdueleflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewschdueleflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
