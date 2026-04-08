# API: Invalid Credentials

**Endpoint:** `POST https://automationexercise.com/api/verifyLogin`  
**Flow:** Call the verify login API with credentials that do not match any account and verify the 404 response.

## Request

| Property     | Value                                              |
|--------------|----------------------------------------------------|
| Method       | POST                                               |
| URL          | `https://automationexercise.com/api/verifyLogin`   |
| Content-Type | `application/x-www-form-urlencoded`                |
| Body Params  | `email=nonexistent@example.com&password=wrongpass` |

## Steps

1. Send a `POST` request to `https://automationexercise.com/api/verifyLogin` with an email and password that do not match any registered account.
2. Verify the HTTP response status code is `200` (errors are wrapped in the body).
3. Verify the response body contains `responseCode: 404`.
4. Verify the response message is **"User not found!"**.

## Expected Result

- `responseCode: 404` in the response body.
- Message confirms the user does not exist or credentials are invalid.
