import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopyComponent } from './shopy.component';

describe('ShopyComponent', () => {
  let component: ShopyComponent;
  let fixture: ComponentFixture<ShopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
