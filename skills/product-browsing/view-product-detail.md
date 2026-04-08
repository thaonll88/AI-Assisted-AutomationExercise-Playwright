# View Product Detail

**URL:** https://www.automationexercise.com/products  
**Flow:** Navigate from the product listing to a product's detail page and verify all information.

## Steps

1. Navigate to `https://www.automationexercise.com/products`.
2. Locate any product card in the grid.
3. Click the **"View Product"** link on the card.
4. Verify the URL changes to `https://www.automationexercise.com/product_details/{id}`.
5. Verify the product detail page displays:
   - Product image (with "new" badge if applicable)
   - Product name
   - Price (e.g., **Rs. 500**)
   - Availability status (e.g., **In Stock**)
   - Condition (e.g., **New**)
   - Brand (e.g., **Polo**)
   - Quantity input field (default value: 1)
   - **"Add to cart"** button
6. Verify the **"Write Your Review"** section is present at the bottom of the page.

## Expected Result

- Product detail page loads with complete product information.
- Quantity field is editable.
- "Add to cart" and review form are accessible.
