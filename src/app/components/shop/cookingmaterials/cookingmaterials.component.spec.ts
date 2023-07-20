import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COOKINGMATERIALSComponent } from './cookingmaterials.component';

describe('COOKINGMATERIALSComponent', () => {
  let component: COOKINGMATERIALSComponent;
  let fixture: ComponentFixture<COOKINGMATERIALSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COOKINGMATERIALSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COOKINGMATERIALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
