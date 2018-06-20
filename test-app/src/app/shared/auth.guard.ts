import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from "rxjs"

import { AuthService } from "./auth.service"

@Injectable()
export class AuthGuard implements CanActivate {
   // private isAuthenticated: boolean;

    constructor(private authService: AuthService, private router: Router) { }

    // ngOnInit() {
    //     this.isAuthenticated = this.authService.isAuthenticated();
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (this.authService.isAuthenticated()) {
            return true ;
        } else {
            this.router.navigate(['/signin']);
            return false;
        }
    }
}