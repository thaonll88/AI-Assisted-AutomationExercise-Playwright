# Add a Comment to an Order

**URL:** https://www.automationexercise.com/checkout  
**Flow:** Enter an order comment in the checkout textarea before placing the order.

## Preconditions

- User is logged in.
- At least one product is in the cart.

## Steps

1. Navigate to `https://www.automationexercise.com/view_cart`.
2. Click **"Proceed To Checkout"**.
3. On the checkout page, scroll below the order review table.
4. Locate the **"Add a comment about your order"** textarea.
5. Click inside the textarea and type a comment (e.g., `Please deliver before noon.`).
6. Verify the text is entered correctly.
7. Click the **"Place Order"** button.
8. Proceed to payment and complete it (see `payment-with-card.md`).
9. Verify the order is placed and confirmation page is shown.

## Expected Result

- Order comment is accepted in the textarea.
- The order is placed successfully after the comment is entered.
- No validation error prevents submission with a comment.
