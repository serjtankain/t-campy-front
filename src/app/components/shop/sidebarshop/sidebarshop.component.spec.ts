import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarshopComponent } from './sidebarshop.component';

describe('SidebarshopComponent', () => {
  let component: SidebarshopComponent;
  let fixture: ComponentFixture<SidebarshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
