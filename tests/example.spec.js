// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://gestao-toperson.vercel.app/cadastro');
  await page.locator('input[name="email"]').fill('teste@email.com')
  await page.locator('input[name="password"]').fill('1')
  await page.locator('input[name="confirmPassword"]').fill('2')
  await page.getByRole('button', { name: 'Cadastrar' }).click({force:true});

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('div p')).toHaveText('As senhas não coincidem');
});
