# Login with Invalid Credentials

**URL:** https://www.automationexercise.com/login  
**Flow:** Attempt to log in with an incorrect email or password and verify the error message.

## Steps

1. Navigate to `https://www.automationexercise.com/login`.
2. Locate the **"Login to your account"** section.
3. Enter an email address that does not exist, or a wrong password for an existing account.
4. Click the **Login** button.
5. Verify an error message is displayed: **"Your email or password is incorrect!"**
6. Verify the user remains on the login page.

## Expected Result

- Login is rejected.
- Inline error message **"Your email or password is incorrect!"** appears below the form.
- No session is created; nav bar still shows **"Signup / Login"**.
