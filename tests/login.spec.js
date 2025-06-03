import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/login-page";
import { HomePage } from "../src/pages/home-page";
import { home } from "../src/pages/home-page";
import { login } from "../src/pages/login-page";

test.describe('Login Tests', () => {
  let loginPage;
  let homePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page)
    await loginPage.navigate();
  });

  test('Login successful @loginSuccess', async () => {
    await loginPage.login("wexefa7072@jeanssi.com", "Teste123");
    await homePage.message(home.titleWelcome, "Olá, wexefa7072@jeanssi.com");
  });

  test('Login with invalid email @invalidEmail', async () => {
    await loginPage.login("wexefa7072@qa.com", "Teste123");
    await homePage.message(login.toastError, "Erro ao entrar: Invalid login credentials");
  });

  test('Login with invalid password @invalidPassword', async () => {
    await loginPage.login("wexefa7072@jeanssi.com", "Teste12");
    await homePage.message(login.toastError, "Erro ao entrar: Invalid login credentials");
  });

  test('Login with blank email @blankEmail', async () => {
    await loginPage.login("", "Teste12");
    await homePage.message(login.alertError, "Email inválido");
  });

  test('Login with blank password @blankPassword', async () => {
    await loginPage.login("wexefa7072@jeanssi.com", "");
    await homePage.message(login.alertError, "A senha deve ter pelo menos 6 caracteres");
  });

  test('Login with blank fields @blankFields', async () => {
    await loginPage.login("", "");
    await loginPage.messages(["Email inválido", "A senha deve ter pelo menos 6 caracteres"]);
  });
});