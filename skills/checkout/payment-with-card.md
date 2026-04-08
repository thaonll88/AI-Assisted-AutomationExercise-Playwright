# Payment with Card

**URL:** https://www.automationexercise.com/payment  
**Flow:** Complete the payment step using test card details.

## Preconditions

- User has reached the payment page via the checkout flow.

## Payment Form Fields

| Field         | Example Value       |
|---------------|---------------------|
| Name on Card  | John Smith          |
| Card Number   | 4111111111111111    |
| CVC           | 123                 |
| Expiration    | 12/2026 (MM/YYYY)   |

## Steps

1. Verify the payment page loads at `https://www.automationexercise.com/payment`.
2. Enter the cardholder name in the **"Name on Card"** field.
3. Enter the card number in the **"Card Number"** field.
4. Enter the CVC code in the **"CVC"** field.
5. Enter the expiration date in the **"Expiration"** field (MM/YYYY format).
6. Click the **"Pay and Confirm Order"** button.
7. Verify the success/confirmation message appears on the page.

## Expected Result

- Payment form accepts all inputs.
- Clicking "Pay and Confirm Order" processes the order.
- A success message is displayed: order is confirmed.
