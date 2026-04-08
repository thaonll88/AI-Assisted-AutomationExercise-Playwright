# Verify Navigation Links

**URL:** https://www.automationexercise.com  
**Flow:** Verify all navigation bar links are present and navigate to the correct pages.

## Navigation Links to Verify

| Link Text        | Expected URL / Page                                   |
|------------------|-------------------------------------------------------|
| Home             | `https://www.automationexercise.com/`                 |
| Products         | `https://www.automationexercise.com/products`         |
| Cart             | `https://www.automationexercise.com/view_cart`        |
| Signup / Login   | `https://www.automationexercise.com/login`            |
| Test Cases       | `https://www.automationexercise.com/test_cases`       |
| API Testing      | `https://www.automationexercise.com/api_list`         |
| Video Tutorials  | External YouTube or tutorial link                     |
| Contact us       | `https://www.automationexercise.com/contact_us`       |

## Steps

1. Navigate to `https://www.automationexercise.com`.
2. Verify all navigation links listed above are visible in the header.
3. For each internal link:
   a. Click the link.
   b. Verify the URL matches the expected URL.
   c. Verify the target page loads without errors.
   d. Navigate back to the homepage.
4. Verify the **logo** (if present) also links back to the homepage.

## Expected Result

- All navigation links are present in the header.
- Each link correctly routes to its expected destination.
- No broken links (404 errors) are encountered.
