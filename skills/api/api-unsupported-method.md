# API: Unsupported HTTP Method

**Endpoints:**  
- `POST https://automationexercise.com/api/productsList`  
- `PUT https://automationexercise.com/api/brandsList`  
- `DELETE https://automationexercise.com/api/verifyLogin`

**Flow:** Call an API endpoint with an HTTP method that is not supported and verify the 405 response.

## Test Cases

### Case 1: POST to productsList

| Property | Value                                             |
|----------|---------------------------------------------------|
| Method   | POST                                              |
| URL      | `https://automationexercise.com/api/productsList` |

### Case 2: PUT to brandsList

| Property | Value                                            |
|----------|--------------------------------------------------|
| Method   | PUT                                              |
| URL      | `https://automationexercise.com/api/brandsList`  |

### Case 3: DELETE to verifyLogin

| Property | Value                                             |
|----------|---------------------------------------------------|
| Method   | DELETE                                            |
| URL      | `https://automationexercise.com/api/verifyLogin`  |

## Steps (for each case)

1. Send a request with the unsupported HTTP method to the endpoint.
2. Verify the HTTP response status code is `200` (the API wraps errors in the body).
3. Verify the response body contains `responseCode: 405`.
4. Verify the response message is **"This request method is not supported."**

## Expected Result

- `responseCode: 405` in the response body for all unsupported method calls.
- Error message confirms the method is not allowed.
