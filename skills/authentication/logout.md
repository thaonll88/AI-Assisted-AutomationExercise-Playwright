# Logout

**URL:** https://www.automationexercise.com (any page while logged in)  
**Flow:** Log out from an authenticated session.

## Preconditions

- User is logged in and the navigation bar shows **"Logged in as [name]"**.

## Steps

1. From any page, locate the **Logout** link in the top navigation bar.
2. Click **Logout**.
3. Verify the user is redirected to `https://www.automationexercise.com/login`.
4. Verify the **"Login to your account"** and **"New User Signup!"** sections are visible.
5. Verify the **"Logged in as [name]"** text is no longer in the nav bar.

## Expected Result

- Session is terminated.
- User lands on the login page.
- Nav bar reverts to showing **"Signup / Login"** link.
