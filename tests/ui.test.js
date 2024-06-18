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
