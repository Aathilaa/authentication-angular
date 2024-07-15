import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,MatCheckboxModule,RouterLink,RouterOutlet],
 
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent {
  hidePassword =true;
  loginForm:FormGroup;
  email: string | undefined;
  constructor(private fb: FormBuilder, private router: Router,private http:HttpClient) {
    this.loginForm = this.fb.group({
      
      password: ['', Validators.required],
    });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  onVerifyOTP() {
    if (this.loginForm.valid) {
      const otp = this.loginForm.value.otp;

      // Make HTTP request to server to verify OTP
      this.http.post<any>('http://localhost:3000/verifyotp', { email: this.email, otp }).subscribe(
        (response) => {
          if (response.success) {
            this.router.navigate(['set-password', { email: this.email }]);
          } else {
            console.error('Failed to verify OTP');
            // Optionally, you can display an error message to the user
          }
        },
        (error) => {
          console.error('Error verifying OTP:', error);
          // Optionally, you can display an error message to the user
        }
      );
    }
  }

  onLogin() {
    this.router.navigate(['/set-password']);
  }
}