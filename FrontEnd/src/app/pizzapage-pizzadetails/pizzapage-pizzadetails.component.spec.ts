import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzapagePizzadetailsComponent } from './pizzapage-pizzadetails.component';

describe('PizzapagePizzadetailsComponent', () => {
  let component: PizzapagePizzadetailsComponent;
  let fixture: ComponentFixture<PizzapagePizzadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzapagePizzadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzapagePizzadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
