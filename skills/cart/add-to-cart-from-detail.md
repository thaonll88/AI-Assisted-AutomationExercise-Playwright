# Add to Cart from Product Detail Page

**URL:** https://www.automationexercise.com/product_details/{id}  
**Flow:** Add a product to the cart from its detail page, optionally adjusting quantity first.

## Steps

1. Navigate to `https://www.automationexercise.com/products`.
2. Click **"View Product"** on any product card.
3. Verify the product detail page loads at `/product_details/{id}`.
4. Review the product information: name, price, availability, condition, brand.
5. Set the desired **Quantity** using the quantity input field (default is 1; increase by typing or using up/down arrows).
6. Click the **"Add to cart"** button.
7. Verify a modal appears with the message: **"Your product has been added to cart!"**
8. Choose:
   - **"Continue Shopping"** — stay on the current page.
   - **"View Cart"** — go to `/view_cart`.
9. If navigating to the cart, verify:
   - The correct product appears in the cart.
   - The quantity matches what was entered in step 5.

## Expected Result

- Product is added to the cart with the specified quantity.
- Confirmation modal is shown.
- Cart contains the item with correct name, price, and quantity.
