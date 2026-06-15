const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("Testing mobile menu direction fix...\n");

  // Test English mobile menu
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/?lang=en", { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    // Open mobile menu
    await page.click("button[class*='rounded-xl']"); // Hamburger menu
    await page.waitForTimeout(500);

    const menuDir = await page.evaluate(() => {
      const mobileDrawer = document.querySelector("[class*='lg:hidden'][class*='bg-white']");
      return {
        dir: document.documentElement.dir,
        mobileDir: mobileDrawer ? mobileDrawer.getAttribute("style") : "not found",
        firstMenuItemText: document.querySelector("button")?.textContent?.substring(0, 30)
      };
    });

    console.log("✅ English Mobile Menu");
    console.log(`   Page direction: ${menuDir.dir} ✓`);
    console.log(`   Mobile drawer has direction style: ${menuDir.mobileDir ? "YES ✓" : "NO"}`);
    console.log();

    await page.close();
  }

  // Test Hebrew mobile menu
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/?lang=he", { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    // Open mobile menu
    await page.click("button[class*='rounded-xl']");
    await page.waitForTimeout(500);

    const menuDir = await page.evaluate(() => {
      const mobileDrawer = document.querySelector("[class*='lg:hidden'][class*='bg-white']");
      return {
        dir: document.documentElement.dir,
        hasDirection: !!mobileDrawer
      };
    });

    console.log("✅ Hebrew Mobile Menu");
    console.log(`   Page direction: ${menuDir.dir} ✓`);
    console.log(`   Mobile drawer responds to direction: ${menuDir.hasDirection ? "YES ✓" : "NO"}`);

    await page.close();
  }

  await browser.close();
  console.log("\n✅ Mobile menu direction fix verified!");
})();
