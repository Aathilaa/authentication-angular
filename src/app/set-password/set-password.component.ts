import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule,MatIconModule,MatCheckboxModule,MatButtonModule,MatInputModule, RouterLink,RouterOutlet],
 
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.css'
})
export class SetPasswordComponent {
  signUpForm: FormGroup ; // Ensure this is declared
  hidePassword=true;
  hideConfirmPassword=true;
  setPasswordForm!: FormGroup;
  email: string | undefined;
  constructor(private fb: FormBuilder,private router:Router) {
    this.signUpForm = this.fb.group({
      
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    
    });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
  onLogin(){
    // this.router.navigate(['/login']); 
    if (this.setPasswordForm.valid) {
      const newPassword = this.setPasswordForm.value.newPassword;

      // Here you would typically send newPassword to server to update password
      // For demo purposes, navigate to login or home page after setting password
      console.log('New Password:', newPassword);
      // Navigate to login or home page
      this.router.navigate(['/login']); // Replace with your desired navigation route
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const { newPassword, confirmPassword } = formGroup.value;
    if (newPassword !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  }

