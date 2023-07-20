import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPORTMATERIALSComponent } from './sportmaterials.component';

describe('SPORTMATERIALSComponent', () => {
  let component: SPORTMATERIALSComponent;
  let fixture: ComponentFixture<SPORTMATERIALSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPORTMATERIALSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPORTMATERIALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
