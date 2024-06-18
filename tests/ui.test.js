const { test, expect } = require('@playwright/test');

test('Verify All Books link is visible', async ({ page }) => {
    // Open the application
    await page.goto('http://localhost:3000');

    // // Debugging: Log the page's content to check for the presence of 'nav.navbar'
    // console.log(await page.content());

    // Increase the timeout and locate toolbar
    await page.waitForSelector('nav.navbar'); // Increased timeout to 60 seconds

    // Get allbooks link
    const allBooksLink = page.locator('a[href="/catalog"]'); // Ensure the selector is correct

    // Check if element is visible
    const isElementVisible = await allBooksLink.isVisible();

    // Verify the element is visible
    expect(isElementVisible).toBe(true);
});


test('Verify Login link is visible', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar'); 
    const loginLink = await page.$('a[href="/login"]'); 
    const isElementVisible = await loginLink.isVisible();

    expect(isElementVisible).toBe(true);
});





test('Verify Register link is visible', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar'); 
    const registerLink = await page.$('a[href="/register"]'); 
    const isElementVisible = await registerLink.isVisible();

    expect(isElementVisible).toBe(true);
});


test('Verify Register link text', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const registerLinkText= await registerLink.textContent();
    expect(registerLinkText).toEqual("Register");
});


test('Verify valid user can login', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

   //Navigate to login page

    const loginLink = await page.$('a[href="/login"]');
     
    await loginLink.click();


    //Fill the user data 
    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');

    //click on login btn
    const loginBtn = await page.$('#login-form > fieldset > input');
    await loginBtn.click();

    //Verify the logout btn is present

   // await page.waitForURL('http://localhost:3000/catalog');

    const logoutBtn = await page.$('#logoutBtn'); 
    const logoutBtnText= await logoutBtn.textContent();

    
    expect(logoutBtnText).toEqual("Logout");




});





