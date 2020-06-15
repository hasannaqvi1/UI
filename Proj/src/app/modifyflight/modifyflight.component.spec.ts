import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyflightComponent } from './modifyflight.component';

describe('ModifyflightComponent', () => {
  let component: ModifyflightComponent;
  let fixture: ComponentFixture<ModifyflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
