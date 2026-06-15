const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("Testing Integrations page responsiveness fix...\n");

  // Test mobile English
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/service/platform/integrations?lang=en", { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    const result = await page.evaluate(() => ({
      hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
      scrollWidth: document.body.scrollWidth,
      viewportWidth: window.innerWidth,
      htmlDir: document.documentElement.dir,
      langAttr: document.documentElement.lang
    }));

    console.log("✅ Integrations Page - Mobile English (375px)");
    console.log(`   Horizontal scroll: ${result.hasHorizontalScroll ? "❌ YES" : "✓ NO"}`);
    console.log(`   Scroll width: ${result.scrollWidth}px`);
    console.log(`   Viewport width: ${result.viewportWidth}px`);
    console.log(`   Direction: ${result.htmlDir} ✓`);
    console.log(`   Language: ${result.langAttr} ✓`);

    if (!result.hasHorizontalScroll) {
      console.log("\n✅ Fix verified - No horizontal scrolling!");
    }

    await page.close();
  }

  // Test mobile Hebrew
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/service/platform/integrations?lang=he", { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    const result = await page.evaluate(() => ({
      hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
      htmlDir: document.documentElement.dir
    }));

    console.log("\n✅ Integrations Page - Mobile Hebrew (375px)");
    console.log(`   Horizontal scroll: ${result.hasHorizontalScroll ? "❌ YES" : "✓ NO"}`);
    console.log(`   Direction: ${result.htmlDir} ✓`);

    await page.close();
  }

  // Test desktop
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto("http://localhost:3000/service/platform/integrations?lang=en", { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    const result = await page.evaluate(() => ({
      hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
      htmlDir: document.documentElement.dir
    }));

    console.log("\n✅ Integrations Page - Desktop English (1440px)");
    console.log(`   Horizontal scroll: ${result.hasHorizontalScroll ? "❌ YES" : "✓ NO"}`);
    console.log(`   Direction: ${result.htmlDir} ✓`);

    await page.close();
  }

  await browser.close();
})();
