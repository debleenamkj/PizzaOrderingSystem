import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Pizza } from '../pizza';
import { PizzaServiceService } from '../pizza-service.service';

@Component({
  selector: 'app-pizzapage-kartdetails',
  templateUrl: './pizzapage-kartdetails.component.html',
  styleUrls: ['./pizzapage-kartdetails.component.css']
})
export class PizzapageKartdetailsComponent implements OnInit {

  pizza: Pizza[] = [];

  constructor(private pizzaService:PizzaServiceService, private customerService:CustomerServiceService) {
   }

  deletePizza(pizzas:Pizza){

    this.pizzaService.deleteFromKart(this.customerService.customer,pizzas).subscribe((data)=>{
      console.log(data);
      this.ngOnInit();
    }
    );

  }

  ngOnInit(): void {
    this.pizzaService.getFromKart(this.customerService.customer).subscribe((data)=>{
      this.pizza = data;
    })
  }

}
