import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async navigate(path = ""): Promise<void> {
    await this.page.goto(path);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  // ─── Consent popup ────────────────────────────────────────────────────────

  async dismissConsentPopup(): Promise<void> {
    const consentRoot = this.page.locator(".fc-consent-root");
    if (await consentRoot.isVisible({ timeout: 5000 }).catch(() => false)) {
      const acceptButton = consentRoot
        .locator(
          'button[aria-label="Consent"], button.fc-cta-consent, button:has-text("Consent")',
        )
        .first();
      await acceptButton.click({ timeout: 5000 });
      await consentRoot.waitFor({ state: "hidden", timeout: 5000 });
    }
  }

  // ─── Ad popup ─────────────────────────────────────────────────────────────

  async dismissAdPopup(): Promise<void> {
    const closeButton = this.page.getByText("Close", { exact: true });
    if (await closeButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await closeButton.click();
      await this.page.waitForTimeout(500);
    }
  }

  // ─── Newsletter ────────────────────────────────────────────────────────────

  get subscriptionEmailInput(): Locator {
    return this.page.locator("#susbscribe_email");
  }

  get subscriptionSubmitButton(): Locator {
    return this.page.locator("#subscribe");
  }

  get subscriptionSuccessAlert(): Locator {
    return this.page.locator("#success-subscribe");
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
    return this.page.locator("#scrollUp");
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
}
