import { test, expect } from '@playwright/experimental-ct-react';

const url = process.env.DEV_URL || 'http://localhost:5173/';

test('Hompage Render', async ({page}) => {
  await page.goto(url);
  await expect(page.getByText('Vite + React')).toBeVisible();
});
