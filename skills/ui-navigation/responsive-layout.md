# Verify Responsive Layout

**URL:** https://www.automationexercise.com  
**Flow:** Verify the site layout adapts correctly across different screen sizes.

## Viewport Breakpoints

| Viewport       | Width     |
|----------------|-----------|
| Mobile         | ≤ 600px   |
| Tablet         | ~768px    |
| Desktop        | ≥ 992px   |

## Steps

### Mobile (≤ 600px)

1. Set the browser viewport to a width of 600px or less.
2. Navigate to `https://www.automationexercise.com`.
3. Verify:
   - Navigation collapses into a hamburger menu or stacks vertically.
   - Product images adjust margins appropriately.
   - Cart delete button is repositioned for touch use.
   - Subscription section remains accessible.

### Tablet (~768px)

1. Set the browser viewport to approximately 768px.
2. Navigate the site and verify the layout is neither too compressed nor too sparse.

### Desktop (≥ 992px)

1. Set the browser viewport to 992px or wider.
2. Navigate to `https://www.automationexercise.com/view_cart`.
3. Verify:
   - The **"Proceed To Checkout"** button is correctly positioned (right-aligned).
   - Product grid displays multiple columns.
   - Sidebar filters are visible alongside the product grid.

## Expected Result

- Layout responds correctly at all tested breakpoints.
- No elements overflow or are hidden unintentionally at any viewport.
- Core actions (add to cart, checkout, navigation) are usable at all sizes.
