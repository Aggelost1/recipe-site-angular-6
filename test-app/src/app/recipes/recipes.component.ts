import { Component } from '@angular/core';

import {Recipe} from './recipe';

@Component({
  selector: 'recipe',
  templateUrl: './recipes.component.html',
  
})
export class RecipesComponent {
    selectedRecipe :Recipe;
}