import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzapageComponent } from './pizzapage.component';

describe('PizzapageComponent', () => {
  let component: PizzapageComponent;
  let fixture: ComponentFixture<PizzapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
