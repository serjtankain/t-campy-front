import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LIGHTNINGComponent } from './lightning.component';

describe('LIGHTNINGComponent', () => {
  let component: LIGHTNINGComponent;
  let fixture: ComponentFixture<LIGHTNINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LIGHTNINGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LIGHTNINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
