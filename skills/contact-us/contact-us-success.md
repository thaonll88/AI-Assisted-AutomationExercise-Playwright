# Contact Us Success State

**URL:** https://www.automationexercise.com/contact_us  
**Flow:** Verify the success state displayed after a contact form is submitted.

## Preconditions

- Contact form has been filled and submitted (see `contact-us-submit.md`).

## Steps

1. After submitting the contact form and confirming the browser dialog, verify:
   - The form fields are no longer visible.
   - The success message is displayed: **"Success! Your details have been submitted successfully."**
2. Verify a **"Home"** button is visible below the success message.
3. Click the **"Home"** button.
4. Verify the user is redirected to the homepage (`/`).

## Expected Result

- Success message confirms the submission.
- "Home" button navigates back to the homepage.
- No form fields remain visible after a successful submission.
