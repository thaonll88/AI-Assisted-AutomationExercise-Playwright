import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('Product Search', () => {
  test('search by keyword shows matching results under Searched Products heading', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.navigate('/products');
    await productsPage.search('dress');

    await expect(page).toHaveURL(/search=dress/);
    await expect(productsPage.searchedProductsHeading).toBeVisible();
    await expect(productsPage.productCards.first()).toBeVisible();
  });
});
