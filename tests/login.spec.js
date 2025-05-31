import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/login-page";

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Login successful @loginSuccess', async () => {
    await loginPage.login("teste@teste.com", "Teste123@");
  });
});