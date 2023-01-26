import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Pizza } from '../pizza';
import { PizzaServiceService } from '../pizza-service.service';

@Component({
  selector: 'app-pizzapage-pizzadetails',
  templateUrl: './pizzapage-pizzadetails.component.html',
  styleUrls: ['./pizzapage-pizzadetails.component.css']
})
export class PizzapagePizzadetailsComponent implements OnInit {

  pizza: Pizza[] = [];

  constructor(private pizzaService:PizzaServiceService, private customerService:CustomerServiceService) { 
  }

  addToKart(pizzas:Pizza){
    
    console.log(pizzas);
    
    this.pizzaService.addToKart(this.customerService.customer, pizzas).subscribe((data)=>{
      console.log("added");
      
    });
  }

  ngOnInit(): void {
        this.pizzaService.getPizza().subscribe((data)=>{
        this.pizza = data;
      }
    )
  }

}
