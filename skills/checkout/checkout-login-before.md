# Checkout: Login Before Checkout

**URL:** https://www.automationexercise.com/login  
**Flow:** Log in first, then add products and complete checkout.

## Preconditions

- A registered user account exists.

## Steps

1. Navigate to `https://www.automationexercise.com/login`.
2. Log in with valid credentials (see `login-valid.md`).
3. Verify the nav bar shows **"Logged in as [name]"**.
4. Navigate to `https://www.automationexercise.com/products`.
5. Add one or more products to the cart.
6. Navigate to `https://www.automationexercise.com/view_cart`.
7. Click **"Proceed To Checkout"**.
8. Verify the checkout page loads directly (no modal prompt).
9. Verify delivery and billing addresses are pre-filled.
10. Review the order summary.
11. Optionally add a comment.
12. Click **"Place Order"**.
13. Complete the payment form (see `payment-with-card.md`).
14. Verify the order confirmation message.

## Expected Result

- Logged-in user proceeds to checkout without interruption.
- Addresses are pre-populated from the account.
- Order is placed and confirmed.
