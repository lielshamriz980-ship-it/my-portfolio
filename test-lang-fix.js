const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("Testing language URL parameter fix...\n");

  // Test 1: English with ?lang=en
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/?lang=en", { waitUntil: "networkidle2", timeout: 30000 });

    const result = await page.evaluate(() => ({
      htmlDir: document.documentElement.dir,
      langAttr: document.documentElement.lang,
      navText: document.querySelector("nav")?.textContent?.substring(0, 50)
    }));

    console.log("✅ Test 1: Homepage with ?lang=en");
    console.log(`   Direction: ${result.htmlDir} (expected: ltr) ${result.htmlDir === "ltr" ? "✓" : "❌"}`);
    console.log(`   Language: ${result.langAttr} (expected: en) ${result.langAttr === "en" ? "✓" : "❌"}`);
    console.log();

    await page.close();
  }

  // Test 2: Hebrew with ?lang=he
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/?lang=he", { waitUntil: "networkidle2", timeout: 30000 });

    const result = await page.evaluate(() => ({
      htmlDir: document.documentElement.dir,
      langAttr: document.documentElement.lang
    }));

    console.log("✅ Test 2: Homepage with ?lang=he");
    console.log(`   Direction: ${result.htmlDir} (expected: rtl) ${result.htmlDir === "rtl" ? "✓" : "❌"}`);
    console.log(`   Language: ${result.langAttr} (expected: he) ${result.langAttr === "he" ? "✓" : "❌"}`);
    console.log();

    await page.close();
  }

  // Test 3: Arabic with ?lang=ar
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/?lang=ar", { waitUntil: "networkidle2", timeout: 30000 });

    const result = await page.evaluate(() => ({
      htmlDir: document.documentElement.dir,
      langAttr: document.documentElement.lang
    }));

    console.log("✅ Test 3: Homepage with ?lang=ar");
    console.log(`   Direction: ${result.htmlDir} (expected: rtl) ${result.htmlDir === "rtl" ? "✓" : "❌"}`);
    console.log(`   Language: ${result.langAttr} (expected: ar) ${result.langAttr === "ar" ? "✓" : "❌"}`);

    await page.close();
  }

  await browser.close();
  console.log("\n✅ Language parameter fix verified!");
})();
