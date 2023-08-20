import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signupForm: FormGroup;
  signInBtnIsActive: boolean = false;
  message: string = 'Sign up';

  constructor(private userDataService: UserDataService) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    /** check form is correct and check value of signIn button */
    if (this.signupForm.valid && this.signInBtnIsActive === false) {
      this.userDataService.login(); /** get value from isLoggedIn variable in userDataService */
      this.userDataService.getRoute(
        /** navigate to landin-page component */
        'home'
      );
    } else {
    }
  }

  async switchToRegister() {
    const tween = gsap.to('.input-container', {
      y: 32,
      duration: 1,
      ease: 'power3.out',
    });
    const tween1 = gsap.to('.input-container', {
      y: -20,
      duration: 1,
      ease: 'power3.out',
    });
    if (this.signInBtnIsActive === true) {
      await tween;
      this.signInBtnIsActive = false;
      this.message = 'Sign up';
      tween.kill;
    } else {
      this.signInBtnIsActive = true;
      await tween1;
      this.message = 'Sign in';
    }
  }

  signInBtn() {
    return this.signInBtnIsActive;
  }
}
