import { test, expect } from '@playwright/test';
import { env } from '../../helpers/env';

test.describe('POST /api/verifyLogin', () => {
  test('returns User exists! for valid credentials', async ({ request }) => {
    const response = await request.post(`${env.apiURL}/verifyLogin`, {
      form: {
        email: env.testUser.email,
        password: env.testUser.password,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!');
  });

  test('returns 404 responseCode for invalid credentials', async ({ request }) => {
    const response = await request.post(`${env.apiURL}/verifyLogin`, {
      form: {
        email: 'nonexistent@example.com',
        password: 'wrongpassword',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('User not found!');
  });

  test('returns 400 responseCode when email param is missing', async ({ request }) => {
    const response = await request.post(`${env.apiURL}/verifyLogin`, {
      form: { password: 'secret123' },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(400);
  });
});

test.describe('POST /api/createAccount', () => {
  const timestamp = Date.now();

  test('creates a new account with all required fields', async ({ request }) => {
    const response = await request.post(`${env.apiURL}/createAccount`, {
      form: {
        name: 'Test User',
        email: `testuser_${timestamp}@example.com`,
        password: 'TestPass123',
        title: 'Mr',
        birth_date: '15',
        birth_month: '6',
        birth_year: '1990',
        firstname: 'Test',
        lastname: 'User',
        company: 'Test Corp',
        address1: '123 Test St',
        address2: 'Suite 1',
        country: 'United States',
        zipcode: '10001',
        state: 'New York',
        city: 'New York',
        mobile_number: '5551234567',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(201);
    expect(body.message).toBe('User created!');
  });

  test('returns 400 responseCode when email already exists', async ({ request }) => {
    const existingEmail = env.testUser.email;

    const response = await request.post(`${env.apiURL}/createAccount`, {
      form: {
        name: 'Duplicate User',
        email: existingEmail,
        password: 'TestPass123',
        title: 'Mr',
        birth_date: '1',
        birth_month: '1',
        birth_year: '2000',
        firstname: 'Duplicate',
        lastname: 'User',
        company: '',
        address1: '1 Main St',
        address2: '',
        country: 'United States',
        zipcode: '00001',
        state: 'California',
        city: 'Los Angeles',
        mobile_number: '5550000000',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(400);
  });
});
