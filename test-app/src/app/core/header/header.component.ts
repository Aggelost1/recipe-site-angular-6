import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecipeService } from '../../recipes/recipe.service'
import { AuthService } from "../../shared/auth.service"




@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent  implements OnInit{
    private subscription : Subscription;
    public isSignedin: boolean =false;

    constructor(private recipeService: RecipeService, private authService: AuthService) {

    }

    ngOnInit() {
        this.isSignedin = this.authService.isAuthenticated();
        this.subscription=
        this.authService.authChangedTo.subscribe(
          (isAuthenticated: boolean) => this.isSignedin = isAuthenticated
        );
    }

    onStore() {
        this.recipeService.storeData().subscribe(
            data => console.log(data),
            error => console.log(error)
        )
    }

    onFetch() {
        return this.recipeService.fetchData()
    }

    // isAuth(){
    //  return this.authService.isAuthenticated();
    // }

    onLogout() {
        this.authService.logout();
    }


}
