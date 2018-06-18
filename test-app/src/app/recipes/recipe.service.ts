import {Injectable, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient'

@Injectable()
export class RecipeService{

 recipeChanged = new EventEmitter<Recipe[]>();
 

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [new Ingredient( 'pork' , 2),new       Ingredient('french fries ',1)]),
    new Recipe('Summer Salad', 'Okayish', 'https://images.food52.com/7FFORb201wZCsvICN9-S4PWHBow=/753x502/98fb0348-7340-4e7c-9e02-9b50038605fb--2015-0804_watermelon-arugula-and-pickled-onion-summer-salad_bobbi-lin_6046.jpg', [])
  ];

  constructor(private http : HttpClient) {}

  

  getRecipes(){
    return this.recipes;
  }
  
  getRecipe(id : number){
    return this.recipes[id];
  }

  deleteRecipe(recipe : Recipe){
     this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe ,newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body= JSON.stringify(this.recipes)
    const header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.put('https://recipebook-eca40.firebaseio.com/recipes.json', body, {headers: header})
  }

  fetchData(){
     return this.http.get('https://recipebook-eca40.firebaseio.com/recipes.json')
        .subscribe( ( data : Recipe[] ) =>{
        this.recipes = data;
        this.recipeChanged.emit(this.recipes);
       }
      )
  }
}
