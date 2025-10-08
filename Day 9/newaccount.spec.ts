import { test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto('https://login.salesforce.com/');
   await page.locator('#username').fill('rashvandiya152@agentforce.com');
   await page.locator('#password').fill('Rashpadma9897@');
   await page.locator('#Login').click();
   await page.locator('.slds-icon-waffle').click();
   await page.locator('//button[@aria-label="View All Applications"]').click();
   await page.locator('//input[@placeholder="Search apps or items..."]').fill('Service')
   await page.locator('//p[@class="slds-truncate"]').nth(0).click();
   await page.locator('//span[text()="Accounts"]').click();
   await page.getByRole('button', { name: 'New' }).click();
   await page.locator('//input[@class="slds-input"]').nth(1).fill('Ramya');
   await page.locator('//button[@name="SaveEdit"]').click();
});