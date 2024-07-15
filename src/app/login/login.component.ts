import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GoogleOAuthProvider } from '@react-oauth/google';
declare global {
  interface Window {
    signInWithGoogle: () => void;
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,CommonModule,FormsModule, MatButtonModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup; // Ensure this is declared
  hidePassword=true;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      console.log('success');
      alert('Login successful!');
      setTimeout(() => {
        this.router.navigate(['/home']); // Navigate to home page
      }, 120000);
    
    } else {
      alert('User not found. Please sign up first.');
    }
  }
 
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
  
  signInWithGoogle() {
    window.signInWithGoogle();
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
 
  navigateToForgotPassword() {
    this.router.navigate(['/forgot-pas']);
  }
 

  onGoogleSignInFailure(error: any) {
    console.error('Google Sign-In failed:', error);
    alert('Google Sign-In failed. Please try again.');
  }
}
