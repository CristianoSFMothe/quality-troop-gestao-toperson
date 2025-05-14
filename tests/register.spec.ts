import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://gestao-toperson.vercel.app/login");
  await expect(
    page.getByRole("heading", { name: "Gestão Toperson" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Cadastre-se" }).click();
  await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();

  await expect(page.getByText("Criar Conta")).toBeVisible();

  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("xeday34519@magpit.com");
  await page.getByRole("textbox", { name: "Senha", exact: true }).click();
  await page
    .getByRole("textbox", { name: "Senha", exact: true })
    .fill("Abc@1234");
  await page.getByRole("textbox", { name: "Confirmar senha" }).click();
  await page.getByRole("textbox", { name: "Confirmar senha" }).fill("Abc@1234");
  await page.getByRole("button", { name: "Cadastrar" }).click();
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("xeday34519@magpit.com");
  await page.getByRole("textbox", { name: "Senha" }).click();
  await page.getByRole("textbox", { name: "Senha" }).fill("Abc@1234");
  await page.getByRole("button", { name: "Entrar" }).click();
  await expect(page.getByText("Bem-vindo ao seu painel")).toBeVisible();
  await page
    .getByRole("heading", { name: "Olá, xeday34519@magpit.com" })
    .click();
});
