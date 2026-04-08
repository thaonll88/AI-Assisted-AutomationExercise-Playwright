# Verify Delivery and Billing Address at Checkout

**URL:** https://www.automationexercise.com/checkout  
**Flow:** Confirm that the address shown at checkout matches the account's registered address.

## Preconditions

- User is logged in with a fully completed account profile (address details filled in).
- At least one product is in the cart.

## Steps

1. Note the address details saved in the user's account (from registration or account info page):
   - Title, First Name, Last Name
   - Company
   - Address 1, Address 2
   - City, State, Zipcode, Country
   - Mobile Number
2. Navigate to `https://www.automationexercise.com/view_cart`.
3. Click **"Proceed To Checkout"**.
4. On the checkout page, locate the **"Address Details"** section.
5. Verify the **Delivery Address** block matches the account address noted in step 1.
6. Verify the **Billing Address** block also matches (typically same as delivery).
7. Confirm the full name format includes Title (e.g., **Mr. John Smith**).

## Expected Result

- Both delivery and billing addresses match the account's registered address exactly.
- No address fields are blank or mismatched.
