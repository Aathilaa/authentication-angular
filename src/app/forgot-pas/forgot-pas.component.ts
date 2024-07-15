import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-forgot-pas',
  standalone: true,
 imports: [CommonModule,FormsModule, RouterLink,RouterOutlet,MatInputModule, MatIconModule,ReactiveFormsModule,MatButtonModule, RouterModule],
//  imports: [MatIconModule,CommonModule,FormsModule, MatButtonModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './forgot-pas.component.html',
  styleUrl: './forgot-pas.component.css'
})
export class ForgotPasComponent {
  loginForm: FormGroup; // Ensure this is declared
  otpReceived: string | undefined;
  constructor(private fb: FormBuilder, private router: Router,private http:HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
     
    });
  }
onLogin(){
  // console.log(this.loginForm.value);
  // this.router.navigate(['verify-code']);
 
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;

      // Make HTTP request to server to send OTP
      this.http.post<any>('http://localhost:3000/sendotp', { email }).subscribe(
        (response) => {
          if (response.success) {
            this.otpReceived = response.otp; // Store the OTP received from the server (for testing purposes)
            this.router.navigate(['verify-code', { email }]);
          } else {
            console.error('Failed to send OTP');
          }
        },
        (error) => {
          console.error('Error sending OTP:', error);
        }
      );
    }
  }
}
    // Simulate sending OTP request to server and receiving OTP
    // Replace with actual HTTP request to your backend
    // this.simulateSendOTP(email);
 

// simulateSendOTP(email: string) {
//   // Simulate receiving OTP (replace with actual API call)
//   this.otpReceived = '123456'; // Replace with actual OTP received from server
//   this.router.navigate(['verify-code', { email }]);
// }
// }

