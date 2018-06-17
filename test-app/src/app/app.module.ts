import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

import {routing} from './app.routes'

import { AppComponent } from './app.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {SigninComponent} from './core/signin/signin.component';
import {SignupComponent} from './core/signup/signup.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {HeaderComponent} from './core/header/header.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';

import {DropdownDirective} from './core/header/dropdown.directive';

import {RecipeService} from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipesComponent,
    SigninComponent,
    SignupComponent,
    RecipeItemComponent,    
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeListComponent,
    ShoppingListAddComponent
  ],

  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [RecipeService,ShoppingListService],

  bootstrap: [AppComponent]
})
export class AppModule { }
