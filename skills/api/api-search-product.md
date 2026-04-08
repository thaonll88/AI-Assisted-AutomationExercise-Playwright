# API: Search Product

**Endpoint:** `POST https://automationexercise.com/api/searchProduct`  
**Flow:** Search for products by keyword via the API.

## Request

| Property     | Value                                               |
|--------------|-----------------------------------------------------|
| Method       | POST                                                |
| URL          | `https://automationexercise.com/api/searchProduct`  |
| Content-Type | `application/x-www-form-urlencoded`                 |
| Body Param   | `search_product=top`                                |

## Steps

1. Send a `POST` request to `https://automationexercise.com/api/searchProduct` with body parameter `search_product=top` (or any keyword).
2. Verify the HTTP response status code is `200`.
3. Verify the response body is valid JSON.
4. Verify `responseCode` equals `200`.
5. Verify the `products` array contains only items matching the search keyword.

## Expected Result

- `200 OK` response.
- JSON body with `responseCode: 200` and a filtered `products` list matching the keyword.
