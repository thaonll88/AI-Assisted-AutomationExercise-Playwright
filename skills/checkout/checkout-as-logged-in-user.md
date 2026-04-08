# Checkout as Logged-In User

**URL:** https://www.automationexercise.com/view_cart  
**Flow:** Complete the full checkout flow as an already-authenticated user.

## Preconditions

- User is logged in.
- At least one product is in the cart.

## Steps

1. Navigate to `https://www.automationexercise.com/view_cart`.
2. Click the **"Proceed To Checkout"** button.
3. Verify the **Checkout** page loads at `/checkout`.
4. Verify the **"Address Details"** section shows:
   - **Delivery Address** (pre-filled from account info)
   - **Billing Address** (pre-filled from account info)
5. Verify the **"Review Your Order"** table lists all cart items with columns: Item, Description, Price, Quantity, Total.
6. Optionally enter a comment in the **"Add a comment about your order"** textarea.
7. Click the **"Place Order"** button.
8. Verify navigation to the **Payment** page (`/payment`).
9. Fill in the payment form:
   - **Name on Card**
   - **Card Number**
   - **CVC**
   - **Expiration** (MM/YYYY)
10. Click the **"Pay and Confirm Order"** button.
11. Verify the success message: **"Your order has been placed successfully!"** (or **"Congratulations! Your order has been confirmed!"**).

## Expected Result

- Order is placed without requiring re-login.
- Delivery/billing addresses are pre-populated from account info.
- Order confirmation page is shown after payment.
