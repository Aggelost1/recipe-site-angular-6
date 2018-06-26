import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Subscription, Observable } from 'rxjs';

import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'recipe-detail',
  templateUrl: 'recipe-detail.component.html',
 
})
export class RecipeDetailComponent  implements OnInit , OnDestroy{

 selectedRecipeSnapshot : Recipe;
 selectedRecipe : Observable<Recipe>;
 private recipeId : string;
 private subscription1 : Subscription;
 private subscription2 : Subscription;
 constructor(private sls: ShoppingListService, 
  private router: Router, 
  private activatedroute: ActivatedRoute,
  private  recipeService: RecipeService  ){}

 ngOnInit(){
  this.subscription1 = this.activatedroute.params.subscribe(
   (params:any) => {
     this.recipeId = params['id'];
     this.selectedRecipe =this.recipeService.getRecipe(this.recipeId);
     this.subscription2 = this.selectedRecipe.subscribe(
      (recipe:Recipe) => {         
        this.selectedRecipeSnapshot = recipe;
       }
     );     
   });
   
  
  
 }
 
 onAddToShoppingList(){
  this.sls.addItems(this.selectedRecipeSnapshot.ingredients)
 }

 onEdit(){
 this.router.navigate(['/recipes',this.recipeId,'edit'])
 }
 onDelete(){
  this.recipeService.deleteRecipe(this.recipeId);
  this.router.navigate(['/recipes'])
 }

 onAddToUserList(){
    this.recipeService.addRecipeByUser(this.selectedRecipeSnapshot);
 }
 
 ngOnDestroy(){
  this.subscription1.unsubscribe(); 
  this.subscription2.unsubscribe(); 
 }


}
