import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare global {
  interface Window {
      signUpWithGoogle: () => void;
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule],

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  constructor(private fb: FormBuilder, private router: Router,  private http: HttpClient) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { 'passwordMismatch': true };
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
  
      // Retrieve existing users from localStorage or initialize as empty array
      let users = JSON.parse(localStorage.getItem('users') || '[]');
  
      // Push new user data to the array
      users.push(formData);
  
      // Store updated users array back into localStorage
      localStorage.setItem('users', JSON.stringify(users));
  
      alert('Signup successful! Please log in.');
      this.router.navigate(['/login']);
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

 callSignUpWithGoogle(){
  window.signUpWithGoogle();
 }
 
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

}
 
