# Delete Account

**URL:** https://www.automationexercise.com (any page while logged in)  
**Flow:** Permanently delete the currently logged-in user account.

## Preconditions

- User is logged in. Nav bar shows **"Logged in as [name]"** and a **Delete Account** link.

## Steps

1. From any page, locate the **Delete Account** link in the top navigation bar.
2. Click **Delete Account**.
3. Verify the **"Account Deleted!"** confirmation page is displayed.
4. Click the **Continue** button.
5. Verify the user is redirected to the homepage.
6. Verify the nav bar no longer shows **"Logged in as [name]"** or **"Delete Account"**.

## Expected Result

- Account is permanently removed.
- User is redirected to the homepage after confirmation.
- Attempting to log in with the deleted account's credentials should fail.
