const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

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
    overflow: document.body.scrollWidth - window.innerWidth,
    bodyDisplay: window.getComputedStyle(document.body).overflow,
    elements: Array.from(document.querySelectorAll("*")).filter(el => {
      return el.scrollWidth > el.clientWidth && el.offsetParent;
    }).slice(0, 3).map((el, i) => ({
      tag: el.tagName,
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      overflow: el.scrollWidth - el.clientWidth
    }))
  }));

  console.log("Mobile Test Results:");
  console.log(`Horizontal scroll: ${result.hasHorizontalScroll ? "YES ❌" : "NO ✓"}`);
  console.log(`Total overflow: ${result.overflow}px`);
  console.log(`Overflowing elements:`, result.elements);

  await page.close();
  await browser.close();
})();
