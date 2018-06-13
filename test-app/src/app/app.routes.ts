import {Routes , RouterModule} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {SigninComponent} from './core/signin/signin.component';
import {SignupComponent} from './core/signup/signup.component';

const app_Routes : Routes =[
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'recipes', component: RecipesComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: '',redirectTo:'/shopping-list', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(app_Routes);