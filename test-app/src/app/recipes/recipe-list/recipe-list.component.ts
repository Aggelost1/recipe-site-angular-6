import { Component, OnInit,OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import {Recipe} from '../recipe';

import {RecipeService} from '../recipe.service';


@Component({
  selector: 'recipe-list',
  templateUrl: 'recipe-list.component.html',
 
})
export class RecipeListComponent  implements OnInit, OnDestroy{
 recipes: Recipe[] = [];
 private subscription : Subscription;



 constructor (private recipeServise: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeServise.getRecipes();
    this.subscription=
    this.recipeServise.recipeChanged.subscribe(
      (recipes: Recipe[]) => this.recipes =recipes
    );
  }

  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
