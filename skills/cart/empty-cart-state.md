# Empty Cart State

**URL:** https://www.automationexercise.com/view_cart  
**Flow:** Verify the cart displays the correct empty state when no items have been added.

## Steps

1. Ensure no products have been added to the cart (use a fresh session or remove all items).
2. Navigate to `https://www.automationexercise.com/view_cart`.
3. Verify the cart page loads without errors.
4. Verify the message **"Cart is empty!"** is displayed.
5. Verify a link (e.g., **"here"** or a link to products) is provided for the user to continue shopping.
6. Verify the cart table with product rows is NOT present.

## Expected Result

- Empty cart message is clearly shown.
- No product rows appear in the cart.
- User is prompted or linked to browse products.
