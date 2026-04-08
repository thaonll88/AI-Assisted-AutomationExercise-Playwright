# API: Get User Detail by Email

**Endpoint:** `GET https://automationexercise.com/api/getUserDetailByEmail`  
**Flow:** Retrieve a user's account details by providing their email address.

## Request

| Property    | Value                                                              |
|-------------|--------------------------------------------------------------------|
| Method      | GET                                                                |
| URL         | `https://automationexercise.com/api/getUserDetailByEmail?email=john@example.com` |
| Query Param | `email=john@example.com`                                           |

## Steps

1. Send a `GET` request to `https://automationexercise.com/api/getUserDetailByEmail` with the `email` query parameter.
2. Verify the HTTP response status code is `200`.
3. Verify the response body is valid JSON.
4. Verify the response contains `responseCode: 200`.
5. Verify the `user` object in the response contains:
   - `id`
   - `name`
   - `email`
   - `title`
   - `birth_day`, `birth_month`, `birth_year`
   - `first_name`, `last_name`
   - `company`
   - `address1`, `address2`
   - `country`, `state`, `city`, `zipcode`

## Expected Result

- `200 OK` response.
- Full user detail object is returned in the response body.
