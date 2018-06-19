import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

import{ShoppingListModule} from './shopping-list/shopping-list.module';

import {routing} from './app.routes'

import { AppComponent } from './app.component';
import {SigninComponent} from './core/signin/signin.component';
import {SignupComponent} from './core/signup/signup.component';
import {HeaderComponent} from './core/header/header.component';


import {DropdownDirective} from './core/header/dropdown.directive';

import {RecipeService} from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {FormsModule} from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,    
    HeaderComponent,
    DropdownDirective
     ],

  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ShoppingListModule
  ],

  providers: [RecipeService, ShoppingListService, AuthService, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
