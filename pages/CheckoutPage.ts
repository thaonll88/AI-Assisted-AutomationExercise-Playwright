import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  get deliveryAddress(): Locator {
    return this.page.locator('#address_delivery');
  }

  get commentTextarea(): Locator {
    return this.page.locator('textarea[name="message"]');
  }

  get placeOrderButton(): Locator {
    return this.page.locator('.check_out');
  }

  async placeOrder(comment?: string): Promise<void> {
    if (comment) {
      await this.commentTextarea.fill(comment);
    }
    await this.dismissAdPopup();
    await this.placeOrderButton.click();
  }
}
