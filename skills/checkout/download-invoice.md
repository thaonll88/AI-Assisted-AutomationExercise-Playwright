# Download Invoice After Order

**URL:** https://www.automationexercise.com/payment_done  
**Flow:** Download the order invoice from the order confirmation page.

## Preconditions

- User has just placed an order and is on the confirmation page.

## Steps

1. After a successful order, verify the order confirmation page is displayed.
2. Locate the **"Download Invoice"** button on the page.
3. Click **"Download Invoice"**.
4. Verify a PDF or text file is downloaded to the local machine.
5. Verify the downloaded file contains order details (e.g., order number, items, total amount).
6. After verifying the download, click **"Continue"** to return to the homepage.

## Expected Result

- Clicking "Download Invoice" triggers a file download.
- The downloaded invoice contains correct order information.
- Navigation back to homepage works via the Continue button.
