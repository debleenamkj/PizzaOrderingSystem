import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-accounts-register',
  templateUrl: './accounts-register.component.html',
  styleUrls: ['./accounts-register.component.css']
})
export class AccountsRegisterComponent implements OnInit {


 customer = new Customer();
 message!:string;

  Customer = new FormGroup(
    {
      emailid: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
      cnfPassword: new FormControl('',Validators.required),
      fullname: new FormControl('',Validators.required),
      phoneno: new FormControl(''),
      address: new FormControl('',Validators.required),
      pincode: new FormControl('',Validators.required)
    }
  );

  validity(){
    if(this.Customer.get('password')?.value !== this.Customer.get('cnfPassword')?.value)
        return false;
    else 
        return true;
  }

  routes!: Router;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerServiceService) { 
    this.customer.emailid = this.Customer.get('emailid')?.value;
    this.customer.password = this.Customer.get('password')?.value;
    this.customer.fullname = this.Customer.get('fullname')?.value;
    this.customer.phoneno = this.Customer.get('phoneno')?.value;
    this.customer.address = this.Customer.get('address')?.value;
    this.customer.pincode = this.Customer.get('pincode')?.value;
    
  }

  register(){
    this.customer.emailid = this.Customer.get('emailid')?.value;
    this.customer.password = this.Customer.get('password')?.value;
    this.customer.fullname = this.Customer.get('fullname')?.value;
    this.customer.phoneno = this.Customer.get('phoneno')?.value;
    this.customer.address = this.Customer.get('address')?.value;
    this.customer.pincode = this.Customer.get('pincode')?.value;
    
    this.customerService.register(this.customer).subscribe(
      data => {
        console.log("registered");
        this.router.navigate(['/accounts/login'])
    },
      error => {
        console.log(this.customer);
        this.message="You already have an account with this email"
        
      }
    )
    console.log(this.customer);
  }
  

  ngOnInit(): void {
  }

}
