# Checkout: Register During Checkout

**URL:** https://www.automationexercise.com/view_cart  
**Flow:** Place an order by registering a new account when prompted at checkout.

## Preconditions

- User is NOT logged in.
- At least one product is in the cart.

## Steps

1. Navigate to `https://www.automationexercise.com/view_cart`.
2. Click the **"Proceed To Checkout"** button.
3. A modal dialog appears with two options:
   - **"Register / Login account"**
   - **"Continue on Cart"**
4. Click **"Register / Login account"**.
5. On the login page, go to the **"New User Signup!"** section.
6. Enter a name and a new unique email address.
7. Click **Signup** and complete the full registration form (see `register.md`).
8. After account creation, click **Continue** on the "Account Created!" page.
9. Navigate back to the cart (`/view_cart`).
10. Click **"Proceed To Checkout"** again.
11. Verify the checkout page shows delivery and billing addresses from the new account.
12. Review the order and click **"Place Order"**.
13. Complete payment (see `payment-with-card.md`).
14. Verify the order confirmation page.
15. Optionally click **"Delete Account"** to clean up the test account.

## Expected Result

- New account is created during the checkout flow.
- Order is placed successfully with the new account's address details.
- Order confirmation is displayed.
