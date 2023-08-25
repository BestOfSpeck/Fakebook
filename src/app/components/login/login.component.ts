import { Component, Renderer2 } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signupForm: FormGroup;

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
    if (this.signupForm.valid) {
      this.userDataService.handleLogin();
      this.userDataService.getRoute('home');
    } else {
    }
  }

  goToRegister() {
    this.userDataService.getRoute('register');
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
