import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {routing} from './app.routes'

import { AppComponent } from './app.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {SigninComponent} from './core/signin/signin.component';
import {SignupComponent} from './core/signup/signup.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';

import {RecipeService} from './recipes/recipe.service'

@NgModule({
  declarations: [
    AppComponent, ShoppingListComponent, RecipesComponent,SigninComponent,SignupComponent
    , RecipeItemComponent,RecipeListComponent],
  imports: [
    BrowserModule, routing, HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
