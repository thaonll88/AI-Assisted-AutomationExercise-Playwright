# Update Account Information

**URL:** https://www.automationexercise.com/account_info  
**Flow:** Update the details of the currently logged-in user's account.

## Preconditions

- User is logged in. Nav bar shows **"Logged in as [name]"**.

## Steps

1. While logged in, click on the username **"Logged in as [name]"** in the navigation bar, or navigate directly to `https://www.automationexercise.com/account_info`.
2. The **"Account Information"** page is displayed, pre-filled with existing user data.
3. Update one or more of the following fields:
   - **Title** (Mr / Mrs)
   - **Name**
   - **Email**
   - **Password**
   - **Date of Birth** (Day, Month, Year)
   - **Newsletter** checkbox
   - **Special offers** checkbox
   - **First Name**
   - **Last Name**
   - **Company**
   - **Address 1**
   - **Address 2**
   - **Country**
   - **State**
   - **City**
   - **Zipcode**
   - **Mobile Number**
4. Click the **Save Changes** button.
5. Verify a success message is displayed: **"Your details have been updated successfully!"**

## Expected Result

- Account details are updated and persisted.
- Success confirmation message is shown.
- Updated name reflects in the nav bar if the name was changed.
