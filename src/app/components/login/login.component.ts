import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
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
  inputPassword: string = '';
  repeatPasswordInput: string = '';
  signInBtnText: string = 'Sign in';
  signUpBtnText: string = 'Sign up';
  orSignUpText: string = 'sign up';

  @ViewChild('switch') switchInputs!: ElementRef;
  @ViewChild('resetPasswordContainer') resetPasswordContainer!: ElementRef;

  constructor(
    private userDataService: UserDataService,
    public renderer: Renderer2
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.signupForm.valid && this.signInBtnIsActive === false) {
      this.userDataService.login();
      this.userDataService.getRoute('home');
    } else {
    }
  }

  checkPassword() {
    const passwordValue = this.inputPassword;
    const repeatPasswordValue = this.repeatPasswordInput;

    if (passwordValue === repeatPasswordValue) {
    }
  }

  /**
   * enable and disable repeatPassword input, toggle animation for inputfields, set signInBtnIsActive on true or false
   */
  switchToRegister() {
    if (this.signInBtnIsActive == true) {
      this.animateY(0, 0.8, 'bounce.out', '.input-container');
      this.signInFalse();
    } else {
      this.animateY(-50, 0.5, 'expo.out', '.input-container');
      this.animateX(-30, 1, 'expo.out', 'repeatPasswordContainer');
      this.signInTrue();
    }
  }

  /**
   *work on animation for repeat password !!!!
   */

  signInFalse() {
    this.signInBtnIsActive = false;
    this.message = 'Sign up';
    this.signInBtnText = 'Sign in';
    this.signUpBtnText = 'Sign up';
    this.orSignUpText = 'sign up';
    this.renderer.addClass(this.switchInputs.nativeElement, 'd-none');
    this.renderer.removeClass(
      this.resetPasswordContainer.nativeElement,
      'd-none'
    );
  }

  signInTrue() {
    this.signInBtnIsActive = true;
    this.message = 'Sign in';
    this.signInBtnText = 'Sign up';
    this.signUpBtnText = 'Sign in';
    this.orSignUpText = 'sign in';
    this.renderer.removeClass(this.switchInputs.nativeElement, 'd-none');
    this.renderer.addClass(this.resetPasswordContainer.nativeElement, 'd-none');
  }

  signInBtn() {
    return this.signInBtnIsActive;
  }

  animateY(y: number, duration: number, ease: string, element: string) {
    gsap.to(element, {
      y: y,
      duration: duration,
      ease: ease,
    });
  }

  animateX(x: number, duration: number, ease: string, element: string) {
    gsap.from(element, {
      x: x,
      duration: duration,
      ease: ease,
    });
  }
}
