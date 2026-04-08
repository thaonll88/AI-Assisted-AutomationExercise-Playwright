# Checkout: Register Before Checkout

**URL:** https://www.automationexercise.com/login  
**Flow:** Register a new account first, then add products and complete checkout.

## Steps

1. Navigate to `https://www.automationexercise.com/login`.
2. Complete the registration flow in the **"New User Signup!"** section (see `register.md`).
3. After account creation, verify you are logged in (**"Logged in as [name]"** in nav).
4. Navigate to `https://www.automationexercise.com/products`.
5. Add one or more products to the cart.
6. Navigate to `https://www.automationexercise.com/view_cart`.
7. Click **"Proceed To Checkout"**.
8. Verify the checkout page loads directly.
9. Verify delivery and billing addresses are pre-filled with the registered account info.
10. Review the order summary.
11. Optionally add a comment.
12. Click **"Place Order"**.
13. Complete the payment form (see `payment-with-card.md`).
14. Verify the order confirmation message.
15. Click **"Delete Account"** to clean up the test account (optional).

## Expected Result

- Newly registered user can complete checkout without additional login steps.
- Addresses are populated from the registration details.
- Order is placed and confirmed successfully.
