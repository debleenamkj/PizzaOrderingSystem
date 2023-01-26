import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { CustomerServiceService } from './customer-service.service';
import { Customerkart } from './customerkart';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {

  private deleteUrl!:string;
  pizza!:Pizza;

  constructor(private http: HttpClient, private customerService: CustomerServiceService) { 
  }

  public getPizza(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>("http://localhost:8086/api/v2/getpizza");
  }

  public addToKart(customer:Customer,pizzas: Pizza){
    console.log(pizzas);
    console.log(this.customerService.customer);
    
    return this.http.post<any>("http://localhost:8087/api/v3/savepizzatokart/"+customer.emailid,pizzas);
  }

  public getFromKart(customer:Customer): Observable<Pizza[]>{
    return this.http.get<Pizza[]>("http://localhost:8087/api/v3/getpizzafromkart/"+customer.emailid);
  }

  public deleteFromKart(customer:Customer,pizzas:Pizza){
    return this.http.post<any>("http://localhost:8087/api/v3/deletepizzafromkart/"+customer.emailid,pizzas);
  }
}
