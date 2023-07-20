import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCampComponent } from './details-camp.component';

describe('DetailsCampComponent', () => {
  let component: DetailsCampComponent;
  let fixture: ComponentFixture<DetailsCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
