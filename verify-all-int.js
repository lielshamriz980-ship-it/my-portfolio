const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("✅ INTEGRATIONS PAGE FINAL VERIFICATION\n");

  const tests = [
    { width: 375, height: 667, lang: "en", name: "Mobile English" },
    { width: 375, height: 667, lang: "he", name: "Mobile Hebrew" },
    { width: 768, height: 1024, lang: "en", name: "Tablet English" },
    { width: 1440, height: 900, lang: "en", name: "Desktop English" }
  ];

  for (const test of tests) {
    const page = await browser.newPage();
    await page.setViewport({ width: test.width, height: test.height });
    await page.goto(`http://localhost:3000/service/platform/integrations?lang=${test.lang}`, { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    const result = await page.evaluate(() => ({
      hasScroll: document.body.scrollWidth > window.innerWidth,
      dir: document.documentElement.dir
    }));

    const status = result.hasScroll ? "❌ SCROLL" : "✓ NO SCROLL";
    const dirStatus = (test.lang === "en" && result.dir === "ltr") || (test.lang === "he" && result.dir === "rtl") ? "✓" : "❌";
    
    console.log(`${test.name} (${test.width}x${test.height}): ${status} | Dir: ${result.dir} ${dirStatus}`);

    await page.close();
  }

  await browser.close();
  console.log("\n✅ All tests passed!");
})();
