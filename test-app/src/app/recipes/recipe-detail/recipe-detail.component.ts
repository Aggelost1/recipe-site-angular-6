import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Subscription } from 'rxjs';

import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'recipe-detail',
  templateUrl: 'recipe-detail.component.html',
 
})
export class RecipeDetailComponent  implements OnInit , OnDestroy{

 selectedRecipe : Recipe;
 private recipeIndex:number;
 private subscription : Subscription;
 constructor(private sls: ShoppingListService, private router: Router, private activatedroute: ActivatedRoute, private  recipeServise: RecipeService  ){}

 ngOnInit(){
  this.subscription = this.activatedroute.params.subscribe(
   (params:any) => {
     this.recipeIndex = params['id'];
     this.selectedRecipe = this.recipeServise.getRecipe(this.recipeIndex);
   }
  );
  
 }
 
 onAddToShoppingList(){
  this.sls.addItems(this.selectedRecipe.ingredients)
 }

 onEdit(){
 this.router.navigate(['/recipes',this.recipeIndex,'edit'])
 }
 onDelete(){
  this.recipeServise.deleteRecipe(this.selectedRecipe);
  this.router.navigate(['/recipes'])
 }

 
 ngOnDestroy(){
  this.subscription.unsubscribe(); 
 }


}
