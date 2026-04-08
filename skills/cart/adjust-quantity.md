# Adjust Product Quantity in Cart

**URL:** https://www.automationexercise.com/product_details/{id}  
**Flow:** Change the quantity of a product before adding it to the cart.

## Steps

1. Navigate to `https://www.automationexercise.com/product_details/{id}` for any product.
2. Locate the **Quantity** input field on the product detail page.
3. Clear the existing value (default: `1`).
4. Enter a new quantity (e.g., `4`).
5. Click the **"Add to cart"** button.
6. In the confirmation modal, click **"View Cart"**.
7. On the cart page (`/view_cart`), locate the product row.
8. Verify the **Quantity** column displays the value entered in step 4 (e.g., `4`).
9. Verify the **Total** column reflects `price × quantity`.

## Expected Result

- The cart contains the product with the exact quantity specified.
- The total price is correctly calculated as unit price multiplied by quantity.
