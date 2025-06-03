import { test } from "@playwright/test";
import { RegisterPage } from "../src/pages/register-page";
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

  test("Register with invalid email @invalidEmail", async () => {
    await registerPage.register("xeday34519@magpit.com", "a", "a");
    // await registerPage.clickButtonRegister();

    await loginPage.messages("A senha deve ter pelo menos 6 caracteres");

  })
});
