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
      this.animate(0, 1, 'bounce.out');
      this.signInFalse();
    } else {
      this.animate(-20, 1, 'expo.out');
      this.signInTrue();
    }
  }

  signInFalse() {
    this.signInBtnIsActive = false;
    this.message = 'Sign up';
    this.renderer.addClass(this.switchInputs.nativeElement, 'd-none');
    this.renderer.removeClass(
      this.resetPasswordContainer.nativeElement,
      'd-none'
    );
  }

  signInTrue() {
    this.signInBtnIsActive = true;
    this.renderer.removeClass(this.switchInputs.nativeElement, 'd-none');
    this.message = 'Sign in';
    this.renderer.addClass(this.resetPasswordContainer.nativeElement, 'd-none');
  }

  signInBtn() {
    return this.signInBtnIsActive;
  }

  animate(y: number, duration: number, ease: string) {
    gsap.to('.input-container', {
      y: y,
      duration: duration,
      ease: ease,
    });
  }
}
