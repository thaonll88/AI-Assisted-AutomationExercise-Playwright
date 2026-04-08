# Checkout Blocked for Unauthenticated User

**URL:** https://www.automationexercise.com/view_cart  
**Flow:** Verify that an unauthenticated user is prompted to log in or register before proceeding to checkout.

## Preconditions

- User is NOT logged in.
- At least one product is in the cart.

## Steps

1. Without logging in, navigate to `https://www.automationexercise.com/view_cart`.
2. Verify the cart contains at least one product.
3. Click the **"Proceed To Checkout"** button.
4. Verify a modal dialog appears (instead of redirecting to checkout directly).
5. The modal contains:
   - The message prompting the user to log in or register.
   - A **"Register / Login account"** button.
   - A **"Continue on Cart"** button (to stay on the cart page).
6. Click **"Continue on Cart"** to dismiss the modal without logging in.
7. Verify the user remains on the cart page and no checkout is initiated.

## Expected Result

- Unauthenticated users cannot proceed to checkout directly.
- A modal prompts login or registration.
- The modal can be dismissed to return to the cart.
