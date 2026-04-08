# Order Placed Confirmation

**URL:** https://www.automationexercise.com/payment_done  
**Flow:** Verify the order confirmation page after a successful payment.

## Preconditions

- User has completed the payment step.

## Steps

1. After clicking **"Pay and Confirm Order"** on the payment page, verify:
   - The page URL changes to `/payment_done` or a confirmation URL.
   - A success message is displayed (e.g., **"Your order has been placed successfully!"** or **"Congratulations! Your order has been confirmed!"**).
2. Verify a **"Download Invoice"** button or link is visible.
3. Verify a **"Continue"** button is available to return to the homepage.
4. Click **"Continue"** and verify redirection to the homepage.

## Expected Result

- Order confirmation page is shown after payment.
- Success message confirms the order.
- Download Invoice and Continue options are accessible.
