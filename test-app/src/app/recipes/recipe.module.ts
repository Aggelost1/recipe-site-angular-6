import {NgModule} from "@angular/core";
import { ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {recipesRouting} from './recipes.routing'

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import { MyRecipesComponent } from "./my-recipes/my-recipes/my-recipes.component";


@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    recipesRouting
  ],
  declarations: [
     RecipesComponent,
     RecipeListComponent,
     RecipeItemComponent,
     RecipeDetailComponent,
     RecipeStartComponent,
     RecipeEditComponent,
     MyRecipesComponent      
  ],


})
export class RecipeModule{}