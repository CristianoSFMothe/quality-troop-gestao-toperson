import { expect } from "@playwright/test";

export const register = {
  inputEmail: 'input[name="email"]',
  inputPassword: 'input[name="password"]',
  inputConfirmPassword: 'input[name="confirmPassword"]',
  btnNemRegister: '[href="/cadastro"]',
  btnRegister: 'button[type="submit"]',
  btnLogin: '[href="/login"]',
  toastError: 'li[data-type="error"]',
  alertError: 'p[class="text-sm font-medium text-destructive"]'
};

export class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("/");
  }

  async register(email, password, confirmPassword) {

    await this.page.click(register.btnNemRegister);

    if (email !== null) {

      await this.page.fill(register.inputEmail, email);
    }

    if (password !== null) {
      await this.page.fill(register.inputPassword, password);
    }

    if (confirmPassword !== null) {
      await this.page.fill(register.inputConfirmPassword, confirmPassword);
    }
    await this.page.click(register.btnRegister, { force: true });
  }

  async clickButtonRegister() {
    await this.page.click(register.btnRegister, { force: true });
  }

  async clickButtonLogin() {
    await this.page.click(register.btnLogin, { force: true });
  }

  async message(locator, message) {
    await expect(this.page.locator(locator)).toBeVisible();
    await expect(this.page.locator(locator)).toHaveValue(message);
  }
}


