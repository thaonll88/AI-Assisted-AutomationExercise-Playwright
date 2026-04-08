# API: Get All Brands

**Endpoint:** `GET https://automationexercise.com/api/brandsList`  
**Flow:** Retrieve the full list of brands via the API.

## Request

| Property | Value                                             |
|----------|---------------------------------------------------|
| Method   | GET                                               |
| URL      | `https://automationexercise.com/api/brandsList`   |
| Body     | None                                              |

## Steps

1. Send a `GET` request to `https://automationexercise.com/api/brandsList`.
2. Verify the HTTP response status code is `200`.
3. Verify the response body is valid JSON.
4. Verify the response contains `responseCode: 200`.
5. Verify the response contains a `brands` array.
6. Verify each brand entry has an `id` and `name` field.
7. Verify the expected brands are present: Polo, H&M, Madame, Mast & Harbour, Babyhug, Allen Solly Junior, Kookie Kids, Biba.

## Expected Result

- `200 OK` response.
- JSON body with `responseCode: 200` and a `brands` list.
