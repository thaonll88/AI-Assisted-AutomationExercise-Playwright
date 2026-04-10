import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export interface AccountDetails {
  title: "Mr" | "Mrs";
  password: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  firstName: string;
  lastName: string;
  address1: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export class SignupPage extends BasePage {
  // ─── Account info form ────────────────────────────────────────────────────

  titleRadio(title: "Mr" | "Mrs"): Locator {
    return this.page.locator(`#id_gender${title === "Mr" ? "1" : "2"}`);
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-qa="password"]');
  }

  get birthDaySelect(): Locator {
    return this.page.locator('[data-qa="days"]');
  }

  get birthMonthSelect(): Locator {
    return this.page.locator('[data-qa="months"]');
  }

  get birthYearSelect(): Locator {
    return this.page.locator('[data-qa="years"]');
  }

  // ─── Address section ──────────────────────────────────────────────────────

  get firstNameInput(): Locator {
    return this.page.locator('[data-qa="first_name"]');
  }

  get lastNameInput(): Locator {
    return this.page.locator('[data-qa="last_name"]');
  }

  get address1Input(): Locator {
    return this.page.locator('[data-qa="address"]');
  }

  get countrySelect(): Locator {
    return this.page.locator('[data-qa="country"]');
  }

  get stateInput(): Locator {
    return this.page.locator('[data-qa="state"]');
  }

  get cityInput(): Locator {
    return this.page.locator('[data-qa="city"]');
  }

  get zipcodeInput(): Locator {
    return this.page.locator('[data-qa="zipcode"]');
  }

  get mobileNumberInput(): Locator {
    return this.page.locator('[data-qa="mobile_number"]');
  }

  get createAccountButton(): Locator {
    return this.page.locator('[data-qa="create-account"]');
  }

  // ─── Account created page ─────────────────────────────────────────────────

  get accountCreatedHeading(): Locator {
    return this.page.locator('[data-qa="account-created"]');
  }

  get continueButton(): Locator {
    return this.page.locator('[data-qa="continue-button"]');
  }

  // ─── Fill and submit ──────────────────────────────────────────────────────

  async fillAccountDetails(details: AccountDetails): Promise<void> {
    await this.waitForPageLoad();
    await this.dismissConsentPopup();
    await this.titleRadio(details.title).check();
    await this.passwordInput.fill(details.password);
    await this.birthDaySelect.selectOption(details.birthDay);
    await this.birthMonthSelect.selectOption(details.birthMonth);
    await this.birthYearSelect.selectOption(details.birthYear);
    await this.firstNameInput.scrollIntoViewIfNeeded();
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.address1Input.fill(details.address1);
    await this.countrySelect.selectOption(details.country);
    await this.stateInput.fill(details.state);
    await this.cityInput.fill(details.city);
    await this.zipcodeInput.fill(details.zipcode);
    await this.mobileNumberInput.fill(details.mobileNumber);
  }
}
