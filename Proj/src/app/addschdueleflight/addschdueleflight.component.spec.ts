import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschdueleflightComponent } from './addschdueleflight.component';

describe('AddschdueleflightComponent', () => {
  let component: AddschdueleflightComponent;
  let fixture: ComponentFixture<AddschdueleflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddschdueleflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddschdueleflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
