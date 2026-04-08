# Filter Products by Category

**URL:** https://www.automationexercise.com/products  
**Flow:** Use the sidebar category filter to view products in a specific category and sub-category.

## Categories Available

| Category | Sub-categories          |
|----------|-------------------------|
| Women    | Dress, Tops, Saree      |
| Men      | Tshirts, Jeans          |
| Kids     | Dress, Tops & Shirts    |

## Steps

1. Navigate to `https://www.automationexercise.com/products`.
2. Locate the **Category** panel in the left sidebar.
3. Click a top-level category (e.g., **Women**) to expand it.
4. Click a sub-category link (e.g., **Tops**).
5. Verify the page navigates to the category URL (e.g., `/category_products/{id}`).
6. Verify the page heading shows the selected category name (e.g., **"Women - Tops Products"**).
7. Verify only products belonging to that sub-category are displayed in the grid.

## Expected Result

- Product grid updates to show only items in the selected category/sub-category.
- Page heading confirms the active filter.
