import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTHERSComponent } from './others.component';

describe('OTHERSComponent', () => {
  let component: OTHERSComponent;
  let fixture: ComponentFixture<OTHERSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTHERSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTHERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
