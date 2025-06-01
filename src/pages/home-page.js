import { expect } from '@playwright/test';

export const home = {
  titleWelcome: 'h1[class="text-2xl font-bold text-navy-800 mb-1"]'
};

export class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async message(locator, message) {
    await expect(this.page.locator(locator)).toBeVisible();
    await expect(this.page.locator(locator)).toHaveText(message);
    }
}