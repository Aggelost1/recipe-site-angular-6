import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { Subscription } from 'rxjs';

import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';
import { Observable } from 'rxjs';



@Component({
  selector: 'recipe-edit',
  templateUrl: 'recipe-edit.component.html',
 
})
export class RecipeEditComponent implements OnInit ,OnDestroy {
 
 private selectedRecipe: Observable <Recipe> ;
 private recipeForm : FormGroup;
 private subscription1 :Subscription;
 private subscription2 :Subscription;
 private recipe :Recipe;
 private recipeId: string ;
 private isNew=true;

 constructor(
    private activatedroute: ActivatedRoute, 
    private router:Router, 
    private recipeService : RecipeService, 
    private formBuilder:FormBuilder
  ){}

  ngOnInit(){
   this.setEmptyRecipeForm();
   this.subscription1 = this.activatedroute.params.subscribe(
     (params: any) => {
        if (params.hasOwnProperty('id')) {
         console.log("old recipe");
         this.recipeId = params['id'];
         this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
         this.subscription2 = this.selectedRecipe.subscribe(
           (recipe: Recipe) => {
             this.recipe = recipe;
             console.log(recipe);
             this.InitForm();
           });
           this.isNew = false;
         
        } else {
         this.isNew = true;
         this.recipe = null;
         this.InitForm();
        }
      }
   );
  }

  onSubmit(){
     const newRecipe = this.recipeForm.value;
     if(this.isNew){
       this.recipeService.addRecipe(newRecipe);
     }else{
       this.recipeService.editRecipe(this.recipeId ,newRecipe);
     }
     this.navigateBack();
  }
  
  onCancel(){
    this.navigateBack();
  }

  onRemoveItem(index:number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

 onAddItem(name: string,amount:string){
  (<FormArray>this.recipeForm.controls['ingredients']).push(new FormGroup({
            name: new FormControl(name, Validators.required),
            amount: new FormControl(amount, [
              Validators.required,
              Validators.pattern('\\d+')
            ])
          })
  )
 }
 

  private navigateBack(){
    this.router.navigate(['/recipes']);
  } 

 ngOnDestroy(){
  this.subscription1.unsubscribe();
  if(!this.isNew){
   this.subscription2.unsubscribe(); 
  }
}

  
  private InitForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      
      recipeName = this.recipe.name;
      console.log("old recipe in initform",recipeName);
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
     if (this.recipe.hasOwnProperty('ingredients')){
        for (let i=0; i<this.recipe.ingredients.length; i++) {
          recipeIngredients.push(
            new FormGroup({
             name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(
                this.recipe.ingredients[i].amount, [
                  Validators.required,
                  Validators.pattern('\\d+')
                ]
              )
           })
          );
        }
     }
    }else{console.log("new recipe in init")}

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
    
  }
      
  
 
  private setEmptyRecipeForm() {
    const recipeName = '';
    const recipeImageUrl = '';
    const recipeContent = '';
    const recipeIngredients: FormArray = new FormArray([]);
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }


}
