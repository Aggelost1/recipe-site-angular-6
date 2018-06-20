import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from '../../shared/auth.service';


@Component({
    selector: 'signin',
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder,private authService: AuthService,private router:Router) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
      this.router.navigate(['/recipes']);
    }


    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
