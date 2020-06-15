import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchschdueleflightComponent } from './searchschdueleflight.component';

describe('SearchschdueleflightComponent', () => {
  let component: SearchschdueleflightComponent;
  let fixture: ComponentFixture<SearchschdueleflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchschdueleflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchschdueleflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
