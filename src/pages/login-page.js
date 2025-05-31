import { expect } from "@playwright/test";

export const login = {
  inputEmail: 'input[name="email"]',
  inputPassword: 'input[name="password"]',
  btnEnter: 'button[type="submit"]',
};

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("/");
  }

  async login(email, password) {
    if (email !== null) {
      await this.page.fill(login.inputEmail, email);
    }

    if (password !== null) {
      await this.page.fill(login.inputPassword, password);
    }

    await this.page.click(login.btnEnter);
  }
}