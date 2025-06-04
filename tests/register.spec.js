import { test } from "@playwright/test";
import { RegisterPage } from "../src/pages/register-page";
import { register } from "../src/pages/register-page";
import { HomePage } from "../src/pages/home-page";

test.describe("Register Tests", () => {
  let registerPage;
  let homePage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    homePage = new HomePage(page)
    await registerPage.navigate();
  });

  test("Register successful @registerSuccess", async () => {
    await registerPage.register("xeday34519@magpit.com", "Abc@1234", "Abc@1234");
    await registerPage.clickButtonRegister();
  })

  test("Register empty fields and confirm filled password @invalidEmptyFieldConfirmPassword", async () => {
    await registerPage.register("", "", "a");
    await registerPage.clickButtonRegister();
    await registerPage.messages(["Email inválido", "A senha deve ter pelo menos 6 caracteres", "As senhas não coincidem"]);

  })

  test("Register empty fields @invalidEmptyField", async () => {
    await registerPage.register("", "", "");
    await registerPage.clickButtonRegister();
    await registerPage.messages(["Email inválido", "A senha deve ter pelo menos 6 caracteres"]);

  })

  test("Register with invalid email @invalidEmail", async () => {
    await registerPage.register("xeday34519", "123456", "123456");
    await registerPage.clickButtonRegister();
    await registerPage.message(register.alertError, "Email inválido");
  })

  test("Register with invalid password @invalidPassword", async () => {
    await registerPage.register("xeday@com.br", "a", "a");
    await registerPage.clickButtonRegister();
    await registerPage.message(register.alertError, "A senha deve ter pelo menos 6 caracteres");
  })

  test("Register with invalid password 2 @invalidPassword", async () => {
    await registerPage.register("xeday@com.br", "123456", "a");
    await registerPage.clickButtonRegister();
    await registerPage.message(register.alertError, "As senhas não coincidem");
  })
});
