import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  get cartTable(): Locator {
    return this.page.locator('#cart_info');
  }

  get productRows(): Locator {
    return this.page.locator('#cart_info tbody tr');
  }

  get proceedToCheckoutButton(): Locator {
    return this.page.locator('.check_out');
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
