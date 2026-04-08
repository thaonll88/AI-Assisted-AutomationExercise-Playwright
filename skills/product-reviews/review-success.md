# Product Review Success State

**URL:** https://www.automationexercise.com/product_details/{id}  
**Flow:** Verify the success message and behavior after a review is submitted.

## Preconditions

- A product review has been submitted (see `submit-review.md`).

## Steps

1. After clicking **Submit** on the review form, observe the page:
   - The success message **"Thank you for your review."** appears near or within the form.
2. Verify the message is visually prominent (e.g., styled in green or with an alert class).
3. Wait approximately 2 seconds and verify the form fields (Name, Email, Review) are cleared automatically.
4. Verify the page remains on the product detail page (no redirect occurs).
5. Verify the product information above the review section is still intact.

## Expected Result

- Success message confirms the review was received.
- Form auto-clears within ~2 seconds.
- User can optionally submit another review after the form clears.
