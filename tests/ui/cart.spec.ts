import { test, expect } from "@playwright/test";
import { env } from "../../helpers/env";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { PaymentPage } from "../../pages/PaymentPage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("/login");
  await loginPage.login(env.testUser.email, env.testUser.password);
  await expect(loginPage.loggedInAs).toBeVisible();
});

test.describe("Cart", () => {
  test("add first product to cart and verify cart contents", async ({
    page,
  }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.navigate("/products");
    await productsPage.addFirstProductToCart();
    await productsPage.viewCartFromModal();

    await expect(page).toHaveURL("/view_cart");
    await expect(cartPage.cartTable).toBeVisible();
    await expect(cartPage.productRows.first()).toBeVisible();
    await expect(cartPage.proceedToCheckoutButton).toBeVisible();
  });
});

test.describe("Checkout", () => {
  test("checkout as logged-in user completes order successfully", async ({
    page,
  }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    // Add a product and go to cart
    await productsPage.navigate("/products");
    await productsPage.addFirstProductToCart();
    await productsPage.viewCartFromModal();

    // Proceed to checkout
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL("/checkout");
    await expect(checkoutPage.deliveryAddress).toBeVisible();

    // Place order
    await checkoutPage.placeOrder("Automated test order");
    await expect(page).toHaveURL(/.*payment/);

    // Fill payment details and confirm
    await paymentPage.fillPaymentDetails({
      nameOnCard: "Test User",
      cardNumber: "4111111111111111",
      cvc: "123",
      expiryMonth: "12",
      expiryYear: "2026",
    });
    await paymentPage.confirmPayment();

    await expect(paymentPage.orderSuccessMessage).toBeVisible();
  });
});
