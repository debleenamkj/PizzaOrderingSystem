import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  isLoggedIn:boolean = false;

  customer!:Customer;
  
  constructor(private http: HttpClient) { 
  }

  public register(customer: Customer){
    return this.http.post<any>("http://localhost:8085/api/v1/register",customer);
  }

  public login(customer: Customer):Observable<any>{
    return this.http.post<any>("http://localhost:8085/api/v1/login",customer);
  }

  public logout(){
    this.isLoggedIn = false;
    this.customer.emailid = '';
    this.customer.address='';
    this.customer.fullname='';
    this.customer.password='';
    this.customer.phoneno='';
    this.customer.pincode='';
  }
  
}