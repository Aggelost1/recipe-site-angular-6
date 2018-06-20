import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs"

import { AngularFireAuth } from "angularfire2/auth";

//import { map, take } from 'rxjs/operators';
import * as firebase from 'firebase/app';

import { User} from "./user.interface";



@Injectable()
export class AuthService{
 // authState: FirebaseAuthState = null;
  constructor(private router: Router, private afAuth: AngularFireAuth){}
  user: Observable<firebase.User>;
  public currentUser: firebase.User;
  
  signupUser(user:User){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
    // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      console.log(error);
      
    // ...
    });
  }

  signinUser(user:User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( (resp) => {
        this.currentUser = resp.user
        localStorage.setItem('userStored', JSON.stringify(resp.user));
      })
      .catch( (error) => {
        console.log(error);
      });
    // this.currentUser =  this.afAuth.auth.currentUser;
    // console.log('signedin',this.currentUser);
    // localStorage.setItem('userStored', JSON.stringify(this.currentUser));
  }

  logout(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/signin']);
   });
   localStorage.removeItem('userStored');
  }

  isAuthenticated():  boolean {
      this.currentUser =JSON.parse(localStorage.getItem('userStored'));
      if (this.currentUser){
        console.log('stored');
        return true;
      }
      if(this.currentUser){
        console.log("requested authorized");
        return true;
      }else{
        console.log("not authorized",this.currentUser);
        return false;
      }
     /* this.user =  this.afAuth.auth.currentUser;
      return  this.user.pipe(
      map(
        user => {
          return (user) ? true : false;
        }
      )
    );*/
    
  }

}