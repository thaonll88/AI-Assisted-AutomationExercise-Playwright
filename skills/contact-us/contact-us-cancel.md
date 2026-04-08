# Cancel Contact Us Submission

**URL:** https://www.automationexercise.com/contact_us  
**Flow:** Fill the contact form, then cancel at the browser confirmation dialog without submitting.

## Steps

1. Navigate to `https://www.automationexercise.com/contact_us`.
2. Fill in the contact form fields:
   - **Name**
   - **Email**
   - **Subject**
   - **Message**
3. Click the **"Submit"** button.
4. A browser confirmation dialog appears: **"Press OK to proceed!"**
5. Click **Cancel** to dismiss the dialog without submitting.
6. Verify:
   - The dialog closes.
   - The contact form is still visible with the entered data intact.
   - No success message is shown.
   - The page remains on `/contact_us`.

## Expected Result

- Cancelling the dialog aborts the form submission.
- The form retains the user's input.
- No data is submitted to the server.
