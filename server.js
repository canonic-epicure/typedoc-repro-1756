import playwright from "playwright";

const run = async () => {
    const browser = await playwright.webkit.launch({ headless: true });

    const page = await browser.newPage({ viewport: null });

    await page.goto('http://localhost:8000/index.html');

    // await page.waitForLoadState('load');
    // await page.waitForFunction(() => document.readyState === 'complete')

    try {
        console.log("FROM CLIENT: ", await page.evaluate(`window.CLIENT()`))
    } finally {
        await page.close()
        await browser.close()
    }
};

run();
