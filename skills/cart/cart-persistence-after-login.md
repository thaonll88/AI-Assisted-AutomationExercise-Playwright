# Cart Persistence After Login

**URL:** https://www.automationexercise.com  
**Flow:** Verify that products added to the cart while logged out are still in the cart after logging in.

## Steps

1. Navigate to `https://www.automationexercise.com/products` without logging in.
2. Search for a product (e.g., search keyword: `dress`).
3. Add one or more products to the cart from the search results.
4. Navigate to `https://www.automationexercise.com/view_cart` and note the products in the cart.
5. Navigate to `https://www.automationexercise.com/login`.
6. Log in with valid credentials.
7. Navigate back to `https://www.automationexercise.com/view_cart`.
8. Verify the products added before login are still present in the cart.
9. Verify product names, quantities, and totals are intact.

## Expected Result

- Cart contents are preserved across the login transition.
- No items are lost when the user authenticates.
