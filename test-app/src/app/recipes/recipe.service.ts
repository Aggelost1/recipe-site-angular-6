import {Injectable, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';



import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient'
import { AuthService } from '../shared/auth.service';

@Injectable()
export class RecipeService {

  private subscription: Subscription;

  private recipesRef: AngularFirestoreCollection<Recipe>;
  private recipeRef: AngularFirestoreDocument<Recipe>;
  private newRecipes: Observable<Recipe[]>;

  private usersRecipesRef: AngularFirestoreCollection<string>;
  private userIdRef: AngularFirestoreDocument<string>;
  private userRecipeCollectionRef : AngularFirestoreCollection<Recipe>;
  private userRecipeRef: AngularFirestoreDocument<Recipe>;
  private userRecipes: Observable<Recipe[]>;

  // private recipes: Recipe[] = [
  //   new Recipe('Schnitzel', 'Very tasty', 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [new Ingredient( 'pork' , 2),new       Ingredient('french fries ',1)]),
  //   new Recipe('Summer Salad', 'Okayish', 'https://images.food52.com/7FFORb201wZCsvICN9-S4PWHBow=/753x502/98fb0348-7340-4e7c-9e02-9b50038605fb--2015-0804_watermelon-arugula-and-pickled-onion-summer-salad_bobbi-lin_6046.jpg', [])
  // ];
  
  constructor(private http : HttpClient, private afs: AngularFirestore, private authService: AuthService ) {
    this.recipesRef = this.afs.collection('recipes');

    this.subscription=
    this.authService.authChangedTo.subscribe(
      (signedin : boolean ) => {        
        this.usersRecipesRef = this.afs.collection('usersIdCollection');
        this.userIdRef = this.usersRecipesRef.doc(this.authService.getUserId());
        this.userRecipeCollectionRef =this.userIdRef.collection('recipes');
        this.userRecipes = this.userRecipeCollectionRef.snapshotChanges()
        .pipe(
          map(actions => {
            return actions.map(a => {
              return {
                id: a.payload.doc.id,
                ...a.payload.doc.data()
              } as Recipe;
            });
          })
        );
      }
    );

    this.newRecipes = this.recipesRef.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          return {
            id: a.payload.doc.id,
            ...a.payload.doc.data()
          } as Recipe;
        });
      })
    );
  }

  
  
  
  

  getRecipes(): Observable<Recipe[]>{
    return this.newRecipes;
  }
  
  getRecipe(id : string) : Observable<Recipe>{
    this.recipeRef = this.recipesRef.doc(id);
    return this.recipeRef.valueChanges();
  }

  deleteRecipe(recipeId : string) :void {
     this.recipesRef.doc(recipeId).delete();
  }

  addRecipe(recipe : Recipe) : void {
    this.recipesRef.add(recipe);
  }

  editRecipe(oldRecipeId: string ,newRecipe: Recipe){
    this.recipesRef.doc(oldRecipeId).update(newRecipe)
  }

  // storeData(){
  //   const body= JSON.stringify(this.recipes)
  //   const header = new HttpHeaders({
  //     'Content-Type' : 'application/json'
  //   });
  //   return this.http.put('https://recipebook-eca40.firebaseio.com/recipes.json', body, {headers: header})
  // }

  fetchData(){
    return this.newRecipes;
  }

  addRecipeByUser(recipe : Recipe) : void {
    this.userRecipeCollectionRef.add(recipe);
  }

  getRecipesByUser(): Observable<Recipe[]>{
    return this.userRecipes;
  }
  
  
  

}
