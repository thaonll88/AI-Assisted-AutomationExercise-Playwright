# API: Delete Account

**Endpoint:** `DELETE https://automationexercise.com/api/deleteAccount`  
**Flow:** Delete an existing user account via the API.

## Request

| Property     | Value                                               |
|--------------|-----------------------------------------------------|
| Method       | DELETE                                              |
| URL          | `https://automationexercise.com/api/deleteAccount`  |
| Content-Type | `application/x-www-form-urlencoded`                 |
| Body Params  | `email=john@example.com&password=secret123`         |

## Steps

1. Ensure the account to be deleted exists.
2. Send a `DELETE` request to `https://automationexercise.com/api/deleteAccount` with the account's `email` and `password`.
3. Verify the HTTP response status code is `200`.
4. Verify the response body contains `responseCode: 200`.
5. Verify the response message is **"Account deleted!"**.
6. Optionally verify the account no longer exists by calling `GET /api/getUserDetailByEmail` or attempting login.

## Expected Result

- `200 OK` response.
- Account is permanently deleted.
