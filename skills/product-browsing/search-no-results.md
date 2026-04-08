# Search with No Results

**URL:** https://www.automationexercise.com/products  
**Flow:** Search for a keyword that matches no products and verify the empty state.

## Steps

1. Navigate to `https://www.automationexercise.com/products`.
2. Locate the **Search** input field (id: `search_product`).
3. Enter a keyword that is unlikely to match any product (e.g., `xyznotaproduct123`).
4. Click the **Search** button or press **Enter**.
5. Verify the URL updates to `/products?search=xyznotaproduct123`.
6. Verify the heading **"Searched Products"** is displayed.
7. Verify the product grid is empty — no product cards are shown.

## Expected Result

- No products are displayed in the results grid.
- Page heading still shows "Searched Products" to confirm the search ran.
- No error page is shown; the page remains stable.
