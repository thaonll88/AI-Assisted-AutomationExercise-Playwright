import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  // ─── Search ───────────────────────────────────────────────────────────────

  get searchInput(): Locator {
    return this.page.locator("#search_product");
  }

  get searchButton(): Locator {
    return this.page.locator("#submit_search");
  }

  get searchedProductsHeading(): Locator {
    return this.page.locator('h2:has-text("Searched Products")');
  }

  // ─── Product grid ─────────────────────────────────────────────────────────

  get productCards(): Locator {
    return this.page.locator(".product-image-wrapper");
  }

  // ─── Add-to-cart modal ────────────────────────────────────────────────────

  get cartModal(): Locator {
    return this.page.locator("#cartModal");
  }

  get continueShoppingButton(): Locator {
    return this.page.locator("#cartModal button.close-modal");
  }

  get viewCartButton(): Locator {
    return this.page.locator('#cartModal a[href="/view_cart"]');
  }

  // ─── Actions ──────────────────────────────────────────────────────────────

  async search(keyword: string): Promise<void> {
    await this.dismissConsentPopup();
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async addFirstProductToCart(): Promise<void> {
    await this.dismissConsentPopup();
    const firstCard = this.productCards.first();
    await firstCard.hover();
    await firstCard.locator(".add-to-cart").first().click();
    await this.cartModal.waitFor({ state: "visible" });
  }

  async viewCartFromModal(): Promise<void> {
    await this.viewCartButton.click();
  }
}
