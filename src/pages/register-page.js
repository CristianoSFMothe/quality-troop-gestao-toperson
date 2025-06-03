import { expect } from "@playwright/test";

export const register = {
  inputEmail: 'input[name="email"]',
  inputPassword: 'input[name="password"]',
  inputConfirmPassword: 'input[name="confirmPassword"]',
  btnNemRegister: '[href="/cadastro"]',
  btnRegister: 'button[type="submit"]',
  btnLogin: '[href="/login"]',
  textRegisterSuccess: 'data-title',
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

    await this.page.click(register.btnRegister);

    await this.page.click(register.btnLogin);
  }
}

export class AssertsRegisterPage {
  constructor(page) {
    this.page = page;
  }

  async assertRegisterSuccess(text) {
    await expect(page.textRegisterSuccess(text)).toBeVisible();

  }

}