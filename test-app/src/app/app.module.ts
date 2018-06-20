import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';


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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ShoppingListModule
  ],

  providers: [RecipeService, ShoppingListService, AuthService, AuthGuard,AngularFireAuth],

  bootstrap: [AppComponent]
})
export class AppModule { }
