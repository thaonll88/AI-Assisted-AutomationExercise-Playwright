# API: Update Account

**Endpoint:** `PUT https://automationexercise.com/api/updateAccount`  
**Flow:** Update the details of an existing user account via the API.

## Request

| Property     | Value                                               |
|--------------|-----------------------------------------------------|
| Method       | PUT                                                 |
| URL          | `https://automationexercise.com/api/updateAccount`  |
| Content-Type | `application/x-www-form-urlencoded`                 |

## Required Body Parameters

| Parameter      | Example Value       |
|----------------|---------------------|
| name           | John Updated        |
| email          | john@example.com    |
| password       | secret123           |
| title          | Mr                  |
| birth_date     | 20                  |
| birth_month    | 8                   |
| birth_year     | 1992                |
| firstname      | John                |
| lastname       | Updated             |
| company        | New Corp            |
| address1       | 456 Oak Ave         |
| address2       |                     |
| country        | United States       |
| zipcode        | 90001               |
| state          | California          |
| city           | Los Angeles         |
| mobile_number  | 5559876543          |

## Steps

1. Ensure the account to be updated exists.
2. Send a `PUT` request to `https://automationexercise.com/api/updateAccount` with all required parameters (including updated values).
3. Verify the HTTP response status code is `200`.
4. Verify the response body contains `responseCode: 200`.
5. Verify the response message is **"User updated!"**.

## Expected Result

- `200 OK` response.
- Account details are updated on the server.
