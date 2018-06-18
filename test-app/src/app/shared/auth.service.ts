import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

import { User} from "./user.interface";

declare var firebase: any;

@Injectable()
export class AuthService{

  constructor(private router: Router){}


  signupUser(user:User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
  // Handle Errors here.
     //var errorCode = error.code;
     //var errorMessage = error.message;
     console.log(error);
     
  // ...
});
  }

  signinUser(user:User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
    // Handle Errors here.
     //var errorCode = error.code;
     //var errorMessage = error.message;
     console.log(error);
      
    // ...
    });
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      return true;
    } else {
      return false;
    }
  }

}