import { Component,Input } from '@angular/core';

import {Recipe} from '../../recipes/recipe';
@Component({
  selector: 'shared-recipe-item',
  templateUrl: 'shared-recipe-item.component.html',
 
})
export class SharedRecipeItemComponent  {
 @Input() recipe: Recipe;
 @Input() recipeId: string; 
}