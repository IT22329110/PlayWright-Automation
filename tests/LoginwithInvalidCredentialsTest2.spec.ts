import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {
  test('Login with invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://wiley.scienceconnect.io/login');

    // Wait for the login form to load
    await page.waitForSelector('input[name="email"]');

    // Fill in the login form with an invalid email and password
    await page.locator('input[name="email"]').fill('dban769@gmail.com');

    // Click the sign-in button
    await page.locator('button[id="sign-in-btn"]').click();

    // Wait for and validate the error message for email
    const errorMessage = await page.locator('#css-9ttv0z'); // Adjust selector if needed
    
   
    
    
  });
});
