import playwright from "playwright";

const run = async () => {
    const browser = await playwright.webkit.launch({ headless: false });

    const page = await browser.newPage({ viewport: null });

    await page.goto('http://localhost:8000/index.html');

    // await page.waitForLoadState('load');
    // await page.waitForFunction(() => window.CLIENT)

    console.log("FROM CLIENT: ", await page.evaluate(`window.CLIENT()`))

    await page.close()
    await browser.close()
};

run();