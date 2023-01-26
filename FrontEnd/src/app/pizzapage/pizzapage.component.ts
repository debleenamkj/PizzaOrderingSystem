import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-pizzapage',
  templateUrl: './pizzapage.component.html',
  styleUrls: ['./pizzapage.component.css']
})
export class PizzapageComponent implements OnInit {

  constructor(private customerService:CustomerServiceService, private router:Router) { }

  logout(){
    this.customerService.logout();
    this.router.navigate(['/']);
  }

  toKart(){
    this.router.navigate(['/pizzapage/pizzakart'])
  }

  ngOnInit(): void {
  }

}
