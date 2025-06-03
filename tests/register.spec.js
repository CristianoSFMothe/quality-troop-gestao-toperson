import { test } from "@playwright/test";
import { RegisterPage } from "../src/pages/register-page";

test.describe("Register Tests", () => {
  let registerPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.navigate();
  });

  test("Register successful @registerSuccess", async () => {
    await registerPage.register("xeday34519@magpit.com", "Abc@1234", "Abc@1234");
  })
});
