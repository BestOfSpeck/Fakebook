import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  imageDataUrl: string | null = null;

  constructor() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        repeatPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password === repeatPassword ? null : { passwordMismatch: true };
  };

  onSubmit() {}

  previewImage(event: any): void {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageDataUrl = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      this.imageDataUrl = null;
    }
  }

}
