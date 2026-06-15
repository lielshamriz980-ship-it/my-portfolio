const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  try {
    await page.goto("http://localhost:3000/service/solutions/digital-signature?lang=he", {
      waitUntil: "networkidle2",
      timeout: 30000
    });

    const result = await page.evaluate(() => {
      const h2Elements = Array.from(document.querySelectorAll("h2"));
      const mainTitle = h2Elements.find(h => h.textContent.includes("מאובטחת"));
      const faqSection = h2Elements.find(h => h.textContent.includes("שאלות"));
      
      return {
        mainTitleFound: !!mainTitle,
        mainTitleText: mainTitle ? mainTitle.textContent : null,
        mainTitleHTML: mainTitle ? mainTitle.innerHTML : null,
        faqSectionFound: !!faqSection,
        faqText: faqSection ? faqSection.textContent : null,
        allH2: h2Elements.map(h => h.textContent.substring(0, 40))
      };
    });

    console.log("✅ Digital Signature Page Check:\n");
    console.log("Main Title Found:", result.mainTitleFound ? "YES" : "NO");
    if (result.mainTitleFound) {
      console.log("Main Title Text:", result.mainTitleText);
      console.log("Main Title HTML:", result.mainTitleHTML);
    }
    console.log("\nFAQ Section Found:", result.faqSectionFound ? "YES ⚠️ (should be removed)" : "NO ✅");
    console.log("\nAll H2 Headings:");
    result.allH2.forEach((h, i) => {
      console.log(`  ${i+1}. ${h}`);
    });

    // Take screenshot
    await page.screenshot({ path: "ds-page-check.png", fullPage: true });
    console.log("\n📸 Screenshot saved: ds-page-check.png");

  } catch (error) {
    console.error("Error:", error.message);
  }

  await browser.close();
})();
