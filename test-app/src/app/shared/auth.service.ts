import {Injectable, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs"

import { AngularFireAuth } from "angularfire2/auth";

//import { map, take } from 'rxjs/operators';
import * as firebase from 'firebase/app';

import { User} from "./user.interface";




@Injectable()
export class AuthService{
 // authState: FirebaseAuthState = null;
  user: Observable<firebase.User>;
  public currentUser: firebase.User;
  authChangedTo = new EventEmitter<boolean>();
  authChecked = new EventEmitter<void>();

  constructor(private router: Router, private afAuth: AngularFireAuth){}
  
  
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
        localStorage.setItem('userStored', JSON.stringify(resp.user));
        this.authChangedTo.emit(true);
        
        this.router.navigate(['/recipes']);
      })
      .catch( (error) => {
        console.log(error);
      });

  }

  logout(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/signin']);
      this.authChangedTo.emit(false);
   });
  
   localStorage.removeItem('userStored');
  }

  isAuthenticated():  boolean {
      this.currentUser=JSON.parse(localStorage.getItem('userStored'));
      if (this.currentUser){
        console.log(this.currentUser.uid);  
        this.authChecked.emit();      
        return true;
      }else{
        console.log("not authorized",this.currentUser);
        this.authChecked.emit(); 
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

  getUserId(){
    this.currentUser =JSON.parse(localStorage.getItem('userStored'));
    if (this.currentUser) {    
      console.log("current user stored ", this.currentUser.uid);  
      return this.currentUser.uid;
    }
    console.log("no getuser stored")
    return 'noUserStored';
  }
}