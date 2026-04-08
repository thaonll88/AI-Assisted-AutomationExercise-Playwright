# API: Verify Login

**Endpoint:** `POST https://automationexercise.com/api/verifyLogin`  
**Flow:** Verify that a user account exists and credentials are valid via the API.

## Request

| Property     | Value                                              |
|--------------|----------------------------------------------------|
| Method       | POST                                               |
| URL          | `https://automationexercise.com/api/verifyLogin`   |
| Content-Type | `application/x-www-form-urlencoded`                |
| Body Params  | `email=test@example.com&password=secret123`        |

## Steps

1. Send a `POST` request to `https://automationexercise.com/api/verifyLogin` with valid `email` and `password` parameters.
2. Verify the HTTP response status code is `200`.
3. Verify the response body contains `responseCode: 200`.
4. Verify the response message is **"User exists!"**.

## Expected Result

- `200 OK` response.
- `responseCode: 200` and message confirming the user exists.
