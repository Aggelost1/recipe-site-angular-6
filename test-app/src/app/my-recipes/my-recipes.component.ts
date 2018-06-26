import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',

})
export class MyRecipesComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  constructor (private recipeServise: RecipeService){}
 
   ngOnInit(){
     this.recipes =  this.recipeServise.getRecipesByUser();
  }
}
