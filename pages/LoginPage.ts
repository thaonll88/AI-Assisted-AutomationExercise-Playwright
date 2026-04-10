import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  // ─── Login section ────────────────────────────────────────────────────────

  get loginEmailInput(): Locator {
    return this.page.locator('[data-qa="login-email"]');
  }

  get loginPasswordInput(): Locator {
    return this.page.locator('[data-qa="login-password"]');
  }

  get loginButton(): Locator {
    return this.page.locator('[data-qa="login-button"]');
  }

  get loginError(): Locator {
    return this.page.locator(
      'p:has-text("Your email or password is incorrect!")',
    );
  }

  async login(email: string, password: string): Promise<void> {
    await this.dismissConsentPopup();
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  // ─── Signup section ───────────────────────────────────────────────────────

  get signupNameInput(): Locator {
    return this.page.locator('[data-qa="signup-name"]');
  }

  get signupEmailInput(): Locator {
    return this.page.locator('[data-qa="signup-email"]');
  }

  get signupButton(): Locator {
    return this.page.locator('[data-qa="signup-button"]');
  }

  async startSignup(name: string, email: string): Promise<void> {
    await this.dismissConsentPopup();
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}
