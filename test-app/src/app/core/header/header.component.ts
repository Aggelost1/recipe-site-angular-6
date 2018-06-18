import { Component } from '@angular/core';

import {RecipeService} from '../../recipes/recipe.service'

import {AuthService} from "../../shared/auth.service"




@Component({
  selector: 'header',
  templateUrl: './header.component.html'
  })
export class HeaderComponent  {

  constructor(private recipeService: RecipeService, private authService: AuthService){}

  onStore(){
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
  
  onFetch(){
    return this.recipeService.fetchData()
  }

  isAuth(){
   return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout();
  }


}
