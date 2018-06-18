import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { Subscription } from 'rxjs';

import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';



@Component({
  selector: 'recipe-edit',
  templateUrl: 'recipe-edit.component.html',
 
})
export class RecipeEditComponent implements OnInit ,OnDestroy {
 
 private recipeForm : FormGroup;
 private subscription :Subscription;
 private recipe :Recipe;
 private recipeIndex: number ;
 private isNew=true;

 constructor(private activatedroute: ActivatedRoute, private router:Router, private recipeService : RecipeService, private formBuilder:FormBuilder){}

 ngOnInit(){
   
   this.subscription = this.activatedroute.params.subscribe(
   (params:any) => {
     if(params.hasOwnProperty('id')){
     this.recipeIndex = +params['id'];
     this.isNew =false;
     this.recipe = this.recipeService.getRecipe(this.recipeIndex);
     }else{
       this.isNew= true;
       this.recipe = null;
       }
      this.InitForm(); 
     }
   );  
 }

  onSubmit(){
     const newRecipe = this.recipeForm.value;
     if(this.isNew){
       this.recipeService.addRecipe(newRecipe);
     }else{
       this.recipeService.editRecipe(this.recipe ,newRecipe);
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
  this.subscription.unsubscribe(); 
 }

  
  private InitForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
       recipeName = this.recipe.name;
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
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
    
  }
      
  


}
