const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 667 });

  try {
    await page.goto('http://localhost:3000/service/solutions/tech', { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    });

    const screenshotPath = 'screenshot-tech-page-375px.png';
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✅ Tech page screenshot saved: ${screenshotPath}`);

    // Check for specific tech page elements
    const elements = await page.evaluate(() => {
      return {
        h1: document.querySelector('h1')?.textContent?.substring(0, 30),
        hasTemplates: !!document.querySelector('[class*="template"]'),
        gridCount: document.querySelectorAll('[style*="grid"]').length
      };
    });

    console.log(`Elements found:`, elements);

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

  await browser.close();
})();
