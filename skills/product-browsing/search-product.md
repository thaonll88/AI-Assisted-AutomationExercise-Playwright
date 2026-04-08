# Search for a Product

**URL:** https://www.automationexercise.com/products  
**Flow:** Use the search bar to find products by keyword.

## Steps

1. Navigate to `https://www.automationexercise.com/products`.
2. Locate the **Search** input field at the top of the page (id: `search_product`).
3. Type a product keyword (e.g., `dress`, `top`, `jeans`).
4. Click the **Search** button (magnifying glass icon) or press **Enter**.
5. Verify the URL updates to `/products?search={keyword}`.
6. Verify the heading **"Searched Products"** is displayed.
7. Verify the product grid shows only products matching the search keyword.
8. Verify each result card contains the product name, image, price, and action buttons.

## Expected Result

- Only products whose names or descriptions match the keyword are shown.
- "Searched Products" heading confirms the filtered state.
- Product cards are actionable (add to cart, view product).
