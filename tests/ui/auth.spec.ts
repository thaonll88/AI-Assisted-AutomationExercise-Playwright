import { test, expect } from '@playwright/test';
import { env } from '../../helpers/env';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';

test.describe('Authentication', () => {
  test('login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/login');
    await loginPage.login(env.testUser.email, env.testUser.password);

    await expect(page).toHaveURL('/');
    await expect(loginPage.loggedInAs).toContainText('Logged in as');
    await expect(loginPage.navLogout).toBeVisible();
  });

  test('login with invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/login');
    await loginPage.login('invalid@example.com', 'wrongpassword');

    await expect(loginPage.loginError).toBeVisible();
    await expect(page).toHaveURL('/login');
    await expect(loginPage.loggedInAs).not.toBeVisible();
  });

  test('logout redirects to login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/login');
    await loginPage.login(env.testUser.email, env.testUser.password);
    await expect(loginPage.loggedInAs).toBeVisible();

    await loginPage.navLogout.click();

    await expect(page).toHaveURL('/login');
    await expect(loginPage.loggedInAs).not.toBeVisible();
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  });

  test('register new account', async ({ page }) => {
    const timestamp = Date.now();
    const name = 'Test User';
    const email = `testuser_${timestamp}@example.com`;

    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    await loginPage.navigate('/login');
    await loginPage.startSignup(name, email);

    await signupPage.fillAccountDetails({
      title: 'Mr',
      password: 'TestPass123',
      birthDay: '15',
      birthMonth: '6',
      birthYear: '1990',
      firstName: 'Test',
      lastName: 'User',
      address1: '123 Main St',
      country: 'United States',
      state: 'New York',
      city: 'New York',
      zipcode: '10001',
      mobileNumber: '5551234567',
    });

    await signupPage.createAccountButton.click();

    await expect(signupPage.accountCreatedHeading).toBeVisible();
    await signupPage.continueButton.click();

    await expect(loginPage.loggedInAs).toContainText(name);
    await expect(loginPage.navLogout).toBeVisible();
  });
});
