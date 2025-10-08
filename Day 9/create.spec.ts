import { test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto('http://leaftaps.com/opentaps/control/main');
   await page.locator('#username').fill('Demosalesmanager');
   await page.locator('#password').fill('crmsfa');
   await page.locator('.decorativeSubmit').click();
   await page.locator('#label').click();
   await page.locator("//a[text()='Create Lead']").click();
   await page.locator('#createLeadForm_companyName').fill('Testleaf');
   await page.locator('#createLeadForm_firstName').fill('Rash');
   await page.locator('#createLeadForm_lastName').fill('Jai');
   await page.locator('#createLeadForm_personalTitle').fill('Mrs');
   await page.locator('#createLeadForm_generalProfTitle').fill('Testlead');
   await page.locator('#createLeadForm_annualRevenue').fill('34567');
   await page.locator('#createLeadForm_departmentName').fill('Consulting');
   await page.locator('#createLeadForm_primaryPhoneNumber').fill('0909080880');
   await page.locator('.smallSubmit').click();
   await page.waitForTimeout(2000);
   const title2 = await page.title();
   console.log('Page title is:',title2);
})

