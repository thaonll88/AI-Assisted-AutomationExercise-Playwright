# API: Get All Products

**Endpoint:** `GET https://automationexercise.com/api/productsList`  
**Flow:** Retrieve the full list of products via the API.

## Request

| Property | Value                                              |
|----------|----------------------------------------------------|
| Method   | GET                                                |
| URL      | `https://automationexercise.com/api/productsList`  |
| Body     | None                                               |

## Steps

1. Send a `GET` request to `https://automationexercise.com/api/productsList`.
2. Verify the HTTP response status code is `200`.
3. Verify the response body is valid JSON.
4. Verify the response contains a `responseCode` field equal to `200`.
5. Verify the response contains a `products` array.
6. Verify each product in the array has: `id`, `name`, `price`, `brand`, `category` fields.

## Expected Result

- `200 OK` response.
- JSON body with `responseCode: 200` and a `products` list containing all available products.
