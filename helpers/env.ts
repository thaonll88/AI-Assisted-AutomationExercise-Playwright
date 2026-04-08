import dotenv from 'dotenv';

dotenv.config();

function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  baseURL: process.env.BASE_URL ?? 'https://www.automationexercise.com',
  apiURL: process.env.API_URL ?? 'https://automationexercise.com/api',
  testUser: {
    email: process.env.TEST_USER_EMAIL ?? '',
    password: process.env.TEST_USER_PASSWORD ?? '',
    name: process.env.TEST_USER_NAME ?? '',
  },
  requireEnv,
} as const;
