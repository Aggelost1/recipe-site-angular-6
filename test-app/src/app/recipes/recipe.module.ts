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
import { SharedModule } from "../shared/shared-module/shared.module";


@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    recipesRouting,
    SharedModule
  ],
  declarations: [
     RecipesComponent,
     RecipeListComponent,
     RecipeItemComponent,
     RecipeDetailComponent,
     RecipeStartComponent,
     RecipeEditComponent,     
  ],


})
export class RecipeModule{}