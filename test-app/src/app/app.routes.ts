import {Routes , RouterModule} from '@angular/router';


import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SigninComponent} from './core/signin/signin.component';
import {SignupComponent} from './core/signup/signup.component';

import {AuthGuard} from './shared/auth.guard'


const APP_ROUTES: Routes =[
  
  { path: 'recipes', loadChildren:'../app/recipes/recipe.module#RecipeModule', canActivate: [AuthGuard] },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',redirectTo:'/signin', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);