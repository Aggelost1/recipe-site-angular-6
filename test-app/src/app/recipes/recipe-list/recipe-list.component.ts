import { Component, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import {Recipe} from '../recipe';

import {RecipeService} from '../recipe.service';


@Component({
  selector: 'recipe-list',
  templateUrl: 'recipe-list.component.html',
 
})
export class RecipeListComponent  implements OnInit{
 recipes: Observable<Recipe[]>;
 constructor (private recipeServise: RecipeService){}

  ngOnInit(){
    this.recipes =  this.recipeServise.getRecipes();
  }
}
