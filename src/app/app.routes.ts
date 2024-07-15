import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasComponent } from './forgot-pas/forgot-pas.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'set-password', component: SetPasswordComponent},
    { path: 'verify-code', component: VerifyCodeComponent},
    { path: 'home', component:HomeComponent},
    { path: 'forgot-pas', component:ForgotPasComponent},
];
