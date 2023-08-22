import { Component, Renderer2, ElementRef, ViewChild, } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors
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

  @ViewChild('switch') switchInputs!: ElementRef;
  @ViewChild('resetPasswordContainer') resetPasswordContainer!: ElementRef;

  constructor(
    private userDataService: UserDataService,
    public renderer: Renderer2
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { validators: this.passwordMatchValidator });
  }
  
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;
  
    return password === repeatPassword ? null : { 'passwordMismatch': true };
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
    if (this.signInBtnIsActive == true) {
      this.animate(0, 1, 'power3.out');
      this.signInBtnIsActive = false;
      this.message = 'Sign up';
      this.renderer.addClass(this.switchInputs.nativeElement, 'd-none');
      this.renderer.removeClass(
        this.resetPasswordContainer.nativeElement,
        'd-none'
      );
    } else {
      this.signInBtnIsActive = true;
      this.renderer.removeClass(this.switchInputs.nativeElement, 'd-none');
      this.renderer.addClass(
        this.resetPasswordContainer.nativeElement,
        'd-none'
      );
      this.animate(-20, 1, 'power3.out');
      this.message = 'Sign in';
      this.animateRepeatPassword(-60, 1, 'power3.out');
    }
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
  animateRepeatPassword(y: number, duration: number, ease: string) {
    gsap.to(this.switchInputs, {
      x: y,
      duration: duration,
      ease: ease,
    });
  }
}
