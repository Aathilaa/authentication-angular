# authentication-angular
1) Overview

This project is an Angular 17 application that includes user authentication via email/password and Google OAuth. It consists of several components: `Login`, `Signup`, `Home`, `Forgot Password`, `Verify Code`, and `Set Password`.

2) Features

- User Signup: Register with email and password.
- User Login: Authenticate using email and password.
- Google OAuth: Sign-in and Sign-up with Google account.
- LocalStorage: Store user data locally.
- Form Validation: Utilize Angular Reactive Forms for validation.
- Navigation: Seamless transition between Login, Signup, and Home components.

3) Libraries and Tools Used

- Angular 17(standalone)
  - `@angular/common`
  - `@angular/forms`
  - `@angular/router`
  - `@angular/material`
- Google OAuth Client Library
- Express
  - `express`
  - `google-auth-library`
  - `cors`
- Other Tools
  - Font Awesome for icons (via `@angular/material/icon`)

4) File Structure

- `src/app/login`: Login component
- `src/app/signup`: Signup component
- `src/app/home`: Home component
- `src/app/forgot-password`: Forgot Password component
- `src/app/verify-code`: Verify Code component
- `src/app/set-password`: Set Password component
- `src/assets/google-auth.js`: Google OAuth functionalities
- `backend/server.js`: Express server handling Google OAuth

5) Setup and Running the Project

 i) Prerequisites

- Node.js (version 14.x or later)
- Angular CLI (version 17.x)

  ii) Installation

        1.Clone the repository:
          git clone https://github.com/your-repo/angular-authentication-project.git
          cd angular-authentication-project
 
         2.Install dependencies:
           npm install
   
         3.Install Angular Material:
           ng add @angular/material

  iii)Running the Angular Application

          1.Start the Angular development server:
            ng serve
   
   The application will be running at `http://localhost:4200/`.

  iv) Running the Express Server

           1. Navigate to the server directory:
           cd server

           2. Install server dependencies:
           npm install

           3. Start the server:
           node server.js

   The Express server will be running at `http://localhost:3000/`.

6) Google OAuth Setup

1. Create a project in the Google Developer Console.
2. Obtain OAuth 2.0 Client IDs and set authorized JavaScript origins and redirect URIs.
3. Update `CLIENT_ID` in `google-auth.js` and `server.js` with your Client ID.

7) Usage

- Sign Up: Navigate to `/signup` and fill in the details. Data will be stored in `localStorage`.
- Login: Navigate to `/login` and enter the registered email and password. If valid, you'll be redirected to the `Home` component.
- Forgot Password: Click on "Forgot Password" to initiate password recovery.
- Verify Code: Enter email and receive OTP for verification.
- Set Password: Set a new password after verifying OTP.

8) Notes

- This project utilizes Angular Standalone Components, a feature in Angular 17.
- Ensure correct versions of Angular and Node.js are installed for proper functionality.
