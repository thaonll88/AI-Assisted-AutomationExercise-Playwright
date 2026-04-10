import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export interface CardDetails {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}

export class PaymentPage extends BasePage {
  get nameOnCardInput(): Locator {
    return this.page.locator('[data-qa="name-on-card"]');
  }

  get cardNumberInput(): Locator {
    return this.page.locator('[data-qa="card-number"]');
  }

  get cvcInput(): Locator {
    return this.page.locator('[data-qa="cvc"]');
  }

  get expiryMonthInput(): Locator {
    return this.page.locator('[data-qa="expiry-month"]');
  }

  get expiryYearInput(): Locator {
    return this.page.locator('[data-qa="expiry-year"]');
  }

  get payButton(): Locator {
    return this.page.locator('[data-qa="pay-button"]');
  }

  get orderSuccessMessage(): Locator {
    return this.page.locator(
      'p:has-text("Congratulations! Your order has been confirmed!")',
    );
  }

  async fillPaymentDetails(card: CardDetails): Promise<void> {
    await this.nameOnCardInput.fill(card.nameOnCard);
    await this.cardNumberInput.fill(card.cardNumber);
    await this.cvcInput.fill(card.cvc);
    await this.expiryMonthInput.fill(card.expiryMonth);
    await this.expiryYearInput.fill(card.expiryYear);
  }

  async confirmPayment(): Promise<void> {
    await this.payButton.click();
  }
}
