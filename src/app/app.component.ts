import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { ForgotPasComponent } from './forgot-pas/forgot-pas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,LoginComponent,SignupComponent,FormsModule,CommonModule, VerifyCodeComponent,ForgotPasComponent,SetPasswordComponent,HomeComponent, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
