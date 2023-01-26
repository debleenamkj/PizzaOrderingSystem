import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzapageKartdetailsComponent } from './pizzapage-kartdetails.component';

describe('PizzapageKartdetailsComponent', () => {
  let component: PizzapageKartdetailsComponent;
  let fixture: ComponentFixture<PizzapageKartdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzapageKartdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzapageKartdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
