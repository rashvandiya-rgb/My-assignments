import { test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto('http://leaftaps.com/opentaps/control/main');
   await page.locator('#username').fill('Demosalesmanager');
   await page.locator('#password').fill('crmsfa');
   await page.locator('.decorativeSubmit').click();
   await page.locator('#label').click();
   await page.locator("//a[text()='Leads']").click();
   await page.locator("//a[text()='Find Leads']").click();
   await page.locator("(//input[@name='firstName'])[3]").fill('rashvandiya');
   await page.locator('//button[text()="Find Leads"]').click();
   await page.locator('(//a[@class="linktext"])[4]').click();
   await page.locator("//a[text()='Edit']").click();
   await page.locator("#updateLeadForm_companyName").fill('CTS');
   await page.locator("#updateLeadForm_annualRevenue").fill('88676');
   await page.locator("#updateLeadForm_departmentName").fill('Consulting');
   await page.locator("#updateLeadForm_description").fill('Hello World');
   await page.locator('(//input[@name="submitButton"])[1]').click();
   await page.waitForTimeout(2000);
   const title2=await page.title();
   console.log("The page title is",title2);










})