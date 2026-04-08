# Remove a Product from Cart

**URL:** https://www.automationexercise.com/view_cart  
**Flow:** Delete a product from the shopping cart.

## Preconditions

- At least one product is in the cart.

## Steps

1. Navigate to `https://www.automationexercise.com/view_cart`.
2. Locate the product row you want to remove.
3. Click the **✕ (delete)** icon / button in that product's row.
4. Verify the product row is removed from the cart table immediately.
5. If the cart is now empty, verify the **"Cart is empty!"** message is displayed.

## Expected Result

- The selected product is removed from the cart.
- If no items remain, the empty cart state is shown.
- No page reload is required; the UI updates dynamically.
