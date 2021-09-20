import playwright from "playwright";

const run = async () => {
    const browser = await playwright.chromium.launch({ headless: false, devtools : true });

    const page = await browser.newPage({ viewport: null });

    await page.goto(`http://localhost:8000/index.html`);
};

run();

