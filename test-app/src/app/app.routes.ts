import {Routes , RouterModule} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {SigninComponent} from './core/signin/signin.component';
import {SignupComponent} from './core/signup/signup.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';


const app_Routes : Routes =[
    { path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', component:RecipesComponent,children:[ 
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id',component: RecipeDetailComponent },
        { path: ':id/edit',component: RecipeEditComponent }]
      },
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: '',redirectTo:'/shopping-list', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(app_Routes);