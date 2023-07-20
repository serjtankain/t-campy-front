import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLOTHESComponent } from './clothes.component';

describe('CLOTHESComponent', () => {
  let component: CLOTHESComponent;
  let fixture: ComponentFixture<CLOTHESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLOTHESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLOTHESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
