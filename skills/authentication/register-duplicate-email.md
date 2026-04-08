# Register with Duplicate Email

**URL:** https://www.automationexercise.com/login  
**Flow:** Attempt to sign up with an email address that already belongs to an existing account.

## Preconditions

- A user account already exists for the email to be tested.

## Steps

1. Navigate to `https://www.automationexercise.com/login`.
2. Locate the **"New User Signup!"** section.
3. Enter any name in the **Name** field.
4. Enter an email address that is **already registered** in the **Email Address** field.
5. Click the **Signup** button.
6. Verify an error message is displayed: **"Email Address already exist!"**
7. Verify the user remains on the login page and is not redirected to the signup form.

## Expected Result

- Signup is blocked.
- Error message **"Email Address already exist!"** is shown below the signup form.
- No duplicate account is created.
