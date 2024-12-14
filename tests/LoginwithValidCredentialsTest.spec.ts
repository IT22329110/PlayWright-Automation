import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://wiley.scienceconnect.io/login');

    // Wait for the login form to load
    await page.waitForSelector('input[name="email"]');

    // Fill in the login form with valid credentials
    await page.locator('input[name="email"]').fill('theekshanadilshan758@gmail.com');

    await page.locator('button[id="sign-in-btn"]').click();

    await page.locator('#pass-input').fill('#Dil.2002&');

    

    // Submit the login form
    await page.locator('button[id="password-sign-in-btn"]').click();

  
    
   
    

  });
});
