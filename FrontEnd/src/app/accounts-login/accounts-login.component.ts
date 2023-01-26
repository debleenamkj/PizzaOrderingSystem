import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-accounts-login',
  templateUrl: './accounts-login.component.html',
  styleUrls: ['./accounts-login.component.css']
})
export class AccountsLoginComponent implements OnInit {

  customer = new Customer();
  message!:string;

  Login = new FormGroup(
  {
    emailid: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  }    
  );

  constructor(private customerService: CustomerServiceService, private router: Router) { 
    this.customer.emailid = this.Login.get('emailid')?.value;
    this.customer.password = this.Login.get('password')?.value;
  }

  login(){
    this.customer.emailid = this.Login.get('emailid')?.value;
    this.customer.password = this.Login.get('password')?.value;
      this.customerService.login(this.customer).subscribe(
        data => {
          this.loggedin(data);
          console.log("response received");
          this.router.navigate(['/pizzapage/pizzadetails'])          
        },
        error => {
          console.log(this.customer)
          this.message="Please enter a valid EmailId and Password"
        }
      )
  }

  loggedin(data:any){
    this.customerService.isLoggedIn = true;
    this.customerService.customer=data;
    console.log(this.customerService);
  }

  
  ngOnInit(): void {
  }

}
