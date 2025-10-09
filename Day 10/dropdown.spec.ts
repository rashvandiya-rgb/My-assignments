import { test } from "@playwright/test";

test("dropdown", async({page}) => { 
    
   await page.goto('http://leaftaps.com/opentaps/control/main');
   await page.locator('//input[@id="username"]').fill('Demosalesmanager');
   await page.locator('//input[@id="password"]').fill('crmsfa');
   await page.locator('//input[@class="decorativeSubmit"]').click();
   await page.locator('//a[@style="color: black;"]').click();
   await page.locator('//a[text()="Create Lead"]').click();
   await page.locator('//input[@id="createLeadForm_companyName"]').fill('Microsoft');
   await page.locator('//input[@id="createLeadForm_firstName"]').fill('Ramya');
   await page.locator('//input[@id="createLeadForm_lastName"]').fill('Ram');
   await page.selectOption('//select[@id="createLeadForm_currencyUomId"]',{value:"INR"});
   await page.selectOption('//select[@id="createLeadForm_generalCountryGeoId"]',{value:"IND"});
   await page.locator('//input[@class="smallSubmit"]').click();
})

   



