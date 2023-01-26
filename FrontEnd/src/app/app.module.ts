import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
//header
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
//card
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule,MatNativeDateModule} from '@angular/material/core';
//upload
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//accounts
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsLoginComponent } from './accounts-login/accounts-login.component';
import { AccountsRegisterComponent } from './accounts-register/accounts-register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { PizzapageComponent } from './pizzapage/pizzapage.component';
import { PizzapagePizzadetailsComponent } from './pizzapage-pizzadetails/pizzapage-pizzadetails.component';
import { PizzapageKartdetailsComponent } from './pizzapage-kartdetails/pizzapage-kartdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountsLoginComponent,
    AccountsRegisterComponent,
    HomePageComponent,
    PizzapageComponent,
    PizzapagePizzadetailsComponent,
    PizzapageKartdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatMenuModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
