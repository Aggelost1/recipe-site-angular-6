import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';
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
