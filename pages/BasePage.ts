import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async navigate(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ─── Newsletter ────────────────────────────────────────────────────────────

  get subscriptionEmailInput(): Locator {
    return this.page.locator('#susbscribe_email');
  }

  get subscriptionSubmitButton(): Locator {
    return this.page.locator('#subscribe');
  }

  get subscriptionSuccessAlert(): Locator {
    return this.page.locator('#success-subscribe');
  }

  async subscribeNewsletter(email: string): Promise<void> {
    await this.subscriptionEmailInput.fill(email);
    await this.subscriptionSubmitButton.click();
  }

  // ─── Navigation ───────────────────────────────────────────────────────────

  get navHome(): Locator {
    return this.page.locator('a[href="/"]').first();
  }

  get navProducts(): Locator {
    return this.page.locator('a[href="/products"]');
  }

  get navCart(): Locator {
    return this.page.locator('a[href="/view_cart"]');
  }

  get navSignupLogin(): Locator {
    return this.page.locator('a[href="/login"]');
  }

  get navLogout(): Locator {
    return this.page.locator('a[href="/logout"]');
  }

  get navDeleteAccount(): Locator {
    return this.page.locator('a[href="/delete_account"]');
  }

  get loggedInAs(): Locator {
    return this.page.locator('a:has-text("Logged in as")');
  }

  async isLoggedIn(): Promise<boolean> {
    return this.loggedInAs.isVisible();
  }

  // ─── Scroll ───────────────────────────────────────────────────────────────

  get scrollUpButton(): Locator {
    return this.page.locator('#scrollUp');
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
}
