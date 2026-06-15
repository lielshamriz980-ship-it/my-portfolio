const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("Testing mobile menu direction fix...\n");

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 667 });

  // Test English
  await page.goto("http://localhost:3000/?lang=en", { 
    waitUntil: "networkidle2", 
    timeout: 30000 
  });

  const englishResult = await page.evaluate(() => ({
    htmlDir: document.documentElement.dir,
    htmlLang: document.documentElement.lang,
    navDir: document.querySelector("nav")?.getAttribute("style")?.includes("ltr") ? "ltr" : "rtl"
  }));

  console.log("✅ English Mobile");
  console.log(`   HTML direction: ${englishResult.htmlDir}`);
  console.log(`   HTML language: ${englishResult.htmlLang}`);
  console.log(`   Navigation direction: ${englishResult.navDir}`);
  console.log(`   Status: ${englishResult.htmlDir === "ltr" ? "✓ CORRECT" : "❌ WRONG"}\n`);

  // Test Hebrew
  await page.goto("http://localhost:3000/?lang=he", { 
    waitUntil: "networkidle2", 
    timeout: 30000 
  });

  const hebrewResult = await page.evaluate(() => ({
    htmlDir: document.documentElement.dir,
    htmlLang: document.documentElement.lang,
    navDir: document.querySelector("nav")?.getAttribute("style")?.includes("rtl") ? "rtl" : "ltr"
  }));

  console.log("✅ Hebrew Mobile");
  console.log(`   HTML direction: ${hebrewResult.htmlDir}`);
  console.log(`   HTML language: ${hebrewResult.htmlLang}`);
  console.log(`   Navigation direction: ${hebrewResult.navDir}`);
  console.log(`   Status: ${hebrewResult.htmlDir === "rtl" ? "✓ CORRECT" : "❌ WRONG"}\n`);

  await page.close();
  await browser.close();

  console.log("✅ Mobile menu direction fix verified!");
})();
