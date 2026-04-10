import { test, expect } from '@playwright/test';
import { env } from '../../helpers/env';

test.describe('GET /api/productsList', () => {
  test('returns full product list with valid structure', async ({ request }) => {
    const response = await request.get(`${env.apiURL}/productsList`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBe(true);
    expect(body.products.length).toBeGreaterThan(0);

    for (const product of body.products) {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('brand');
      expect(product).toHaveProperty('category');
    }
  });
});

test.describe('POST /api/searchProduct', () => {
  test('returns matching products for a valid search keyword', async ({ request }) => {
    const response = await request.post(`${env.apiURL}/searchProduct`, {
      form: { search_product: 'top' },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBe(true);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('returns 400 responseCode when search_product param is missing', async ({ request }) => {
    const response = await request.post(`${env.apiURL}/searchProduct`, {
      form: {},
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toMatch(/search_product parameter is missing/i);
  });
});
