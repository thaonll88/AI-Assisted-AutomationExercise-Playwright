# AutomationExercise Playwright Test Suite

End-to-end and API test suite for [automationexercise.com](https://www.automationexercise.com), built with Playwright + TypeScript.

## Stack

- [Playwright](https://playwright.dev/) — browser automation & API testing
- [TypeScript](https://www.typescriptlang.org/) — strict mode
- [Allure](https://allurereport.org/) — test reporting
- [dotenv](https://github.com/motdotla/dotenv) — environment config
- [GitHub Actions](https://github.com/features/actions) — CI

## Project structure

```
├── pages/               # Page Object Models
├── tests/
│   ├── ui/              # UI tests (Chromium, serial)
│   └── api/             # API tests
├── helpers/             # Shared utilities (env, etc.)
├── types/               # TypeScript type definitions
├── skills/              # Step-by-step flow references
│   ├── authentication/
│   ├── product-browsing/
│   ├── cart/
│   ├── checkout/
│   ├── contact-us/
│   ├── product-reviews/
│   ├── newsletter/
│   ├── api/
│   └── ui-navigation/
├── playwright.config.ts
├── tsconfig.json
└── .github/workflows/ci.yml
```

## Setup

**1. Install dependencies**

```bash
npm install
```

**2. Install Playwright browser**

```bash
npx playwright install chromium
```

**3. Configure environment**

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
BASE_URL=https://www.automationexercise.com
API_URL=https://automationexercise.com/api
TEST_USER_EMAIL=testuser@example.com
TEST_USER_PASSWORD=Test@12345
TEST_USER_NAME=Test User
```

> The test user account must be registered on the site before running tests that require authentication.

## Running tests

| Command | Description |
|---|---|
| `npm test` | Run all tests |
| `npm run test:ui` | UI tests only (Chromium, 1 worker) |
| `npm run test:api` | API tests only |

## Path aliases

Import from anywhere using these aliases (configured in `tsconfig.json`):

| Alias | Resolves to |
|---|---|
| `@pages/*` | `pages/*` |
| `@helpers/*` | `helpers/*` |
| `@appTypes/*` | `types/*` |

```ts
import { LoginPage } from '@pages/LoginPage';
import { env } from '@helpers/env';
import type { UserRegistration } from '@appTypes/index';
```

## Allure reporting

Requires the [Allure CLI](https://allurereport.org/docs/install/) installed globally.

```bash
npm run allure:serve      # generate & open in one step (live results)
npm run allure:generate   # write report to allure-report/
npm run allure:open       # open the generated report
```

## Configuration

Key settings in `playwright.config.ts`:

| Setting | Value |
|---|---|
| Browser | Chromium only |
| UI test mode | Serial (`--workers=1`) |
| Retries | 0 locally / 2 on CI |
| Trace | On first retry |
| Screenshot | On failure |
| Video | Retained on failure |

## CI

GitHub Actions runs UI and API tests in separate parallel jobs on every push and pull request to `main`.

Artifacts uploaded on every run:
- `allure-results-ui` — Allure raw results (30-day retention)
- `allure-results-api` — Allure raw results (30-day retention)
- `playwright-report-ui` — HTML report (7-day retention)

### Required secrets / variables

| Name | Type | Description |
|---|---|---|
| `TEST_USER_EMAIL` | Secret | Registered test account email |
| `TEST_USER_PASSWORD` | Secret | Registered test account password |
| `TEST_USER_NAME` | Secret | Registered test account name |
| `BASE_URL` | Variable | Override site URL (optional) |
| `API_URL` | Variable | Override API base URL (optional) |

## Skills

The `skills/` directory contains step-by-step flow references for all testable scenarios on the site. Use these as the source of truth when writing new tests.

| Category | Files |
|---|---|
| Authentication | register, login-valid, logout, login-invalid, register-duplicate-email, delete-account, update-account |
| Product Browsing | view-all-products, view-product-detail, search-product, filter-by-category, filter-by-brand, search-no-results |
| Cart | add-to-cart-from-listing, add-to-cart-from-detail, adjust-quantity, view-cart, remove-from-cart, cart-persistence-after-login, empty-cart-state, add-from-recommended-items |
| Checkout | checkout-as-logged-in-user, checkout-register-during, checkout-login-before, checkout-register-before, verify-delivery-billing-address, add-order-comment, payment-with-card, order-placed-confirmation, download-invoice, checkout-unauthenticated-blocked |
| Contact Us | contact-us-submit, contact-us-cancel, contact-us-success |
| Product Reviews | submit-review, review-success |
| Newsletter | newsletter-homepage, newsletter-cart, newsletter-product-detail |
| API | api-get-products, api-search-product, api-verify-login, api-create-account, api-delete-account, api-update-account, api-get-user-by-email, api-get-brands, api-unsupported-method, api-missing-params, api-invalid-credentials |
| UI Navigation | scroll-up-button, scroll-up-manual, test-cases-page, verify-navigation-links, responsive-layout |
