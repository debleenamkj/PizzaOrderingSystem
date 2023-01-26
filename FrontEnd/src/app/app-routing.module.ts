import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsLoginComponent } from './accounts-login/accounts-login.component';
import { AccountsRegisterComponent } from './accounts-register/accounts-register.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PizzapageKartdetailsComponent } from './pizzapage-kartdetails/pizzapage-kartdetails.component';
import { PizzapagePizzadetailsComponent } from './pizzapage-pizzadetails/pizzapage-pizzadetails.component';
import { PizzapageComponent } from './pizzapage/pizzapage.component';
import { SecuredLoginGuard } from './secured-login.guard';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  { path:'accounts',component:AccountsComponent,
    children:[
      { path:'login',component:AccountsLoginComponent},
      { path:'register',component:AccountsRegisterComponent}
    ]
  },
  { path:'pizzapage',component:PizzapageComponent, canActivate:[SecuredLoginGuard],
    children:[
      {path:'pizzadetails',component:PizzapagePizzadetailsComponent},
      {path:'pizzakart',component:PizzapageKartdetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
