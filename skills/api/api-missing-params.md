# API: Missing Required Parameters

**Endpoints:**  
- `POST https://automationexercise.com/api/searchProduct` (missing `search_product`)  
- `POST https://automationexercise.com/api/verifyLogin` (missing `email`)

**Flow:** Call an API endpoint without a required parameter and verify the 400 response.

## Test Cases

### Case 1: Search Product — missing `search_product`

| Property     | Value                                               |
|--------------|-----------------------------------------------------|
| Method       | POST                                                |
| URL          | `https://automationexercise.com/api/searchProduct`  |
| Body         | *(empty or no search_product param)*                |

### Case 2: Verify Login — missing `email`

| Property     | Value                                              |
|--------------|----------------------------------------------------|
| Method       | POST                                               |
| URL          | `https://automationexercise.com/api/verifyLogin`   |
| Body Params  | `password=secret123` *(email omitted)*             |

## Steps (for each case)

1. Send the request without the required parameter.
2. Verify the HTTP response status code is `200` (errors are wrapped in the body).
3. Verify the response body contains `responseCode: 400`.
4. Verify the response message indicates a bad/missing parameter (e.g., **"Bad request, search_product parameter is missing in POST request."** or **"Bad request, email or account not found."**).

## Expected Result

- `responseCode: 400` in the response body.
- Error message identifies the missing parameter.
