# API: Create Account

**Endpoint:** `POST https://automationexercise.com/api/createAccount`  
**Flow:** Create a new user account via the API.

## Request

| Property     | Value                                               |
|--------------|-----------------------------------------------------|
| Method       | POST                                                |
| URL          | `https://automationexercise.com/api/createAccount`  |
| Content-Type | `application/x-www-form-urlencoded`                 |

## Required Body Parameters

| Parameter      | Example Value       |
|----------------|---------------------|
| name           | John Smith          |
| email          | john@example.com    |
| password       | secret123           |
| title          | Mr                  |
| birth_date     | 15                  |
| birth_month    | 6                   |
| birth_year     | 1990                |
| firstname      | John                |
| lastname       | Smith               |
| company        | Acme Corp           |
| address1       | 123 Main St         |
| address2       | Apt 4B              |
| country        | United States       |
| zipcode        | 10001               |
| state          | New York            |
| city           | New York            |
| mobile_number  | 5551234567          |

## Steps

1. Send a `POST` request to `https://automationexercise.com/api/createAccount` with all required parameters.
2. Verify the HTTP response status code is `201`.
3. Verify the response body contains `responseCode: 201`.
4. Verify the response message is **"User created!"**.

## Expected Result

- `201 Created` response.
- New user account is created and accessible via login.
