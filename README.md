# GetBasis
User Sign in Login Page For Basis App.
Made using React-Redux.
APP-flow: 1. Hit the phone number verify otp - Enter the phone Number 
    In Response -         "token": 1586357783139, "isLogin": true/false
    If isLogin: true - The user will log in upon successful verification of otp from the next API. 
        else: Complete the sign up.
    "token" - this value is used in all the subsequent APIs involved in the login/signup flow.

2. Hit the verify OTP API - It will accept only 1111(controlled from the server).
3. Hit the request email verification API 
4. Hit the verify email link API - It will accept only 112233(controlled from the server).
You also have resend OTP and email verification links, which if hit 3 times with wrong credentials, the user will have to revert back and start afresh.
5. Sign up

6. Check referral token - 
While signing up (new user), when the user enters the referral code, hit this API to check the codes validity. If valid, get and display the details of the referrer returned by the API on top of the screen.

Next two APIs use Bearer Token Authorization Headers in the form of {{USER_ID}},{{AUTH_TOKEN}}
both of which you get from successful login and signup.
e.g. USER_ID = 1, AUTH_TOKEN = 22222
so auth header = "Bearer 1,22222"

7. Update profile
avatar - stands for profile picture (value can be null)

8. Log out user.
