import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {
  test('LoginwithInvalidCredentialsTest1', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://wiley.scienceconnect.io/login/password');

    // Wait for the login form to load
    await page.waitForSelector('input[name="password"]');

    // Fill in the login form with an invalid email and password
    await page.locator('#pass-input').fill('#Dil.2000*');
    
    // Click the sign-in button
    await page.locator('button[id="password-sign-in-btn"]').click();

    
    const errorMessage1 = await page.locator('#password-error-message'); // Adjust selector if needed
     

  });
});
