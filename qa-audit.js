const puppeteer = require("puppeteer");
const fs = require("fs");

const PAGES = [
  { path: "/", name: "homepage" },
  { path: "/service/solutions/tech", name: "tech" },
  { path: "/service/solutions/property", name: "property" },
  { path: "/service/platform/lex-ai", name: "lex-ai" },
  { path: "/service/solutions/contracts", name: "contracts" },
  { path: "/service/solutions/clients", name: "clients" },
  { path: "/service/solutions/digital-signature", name: "digital-signature" },
  { path: "/service/solutions/alerts", name: "alerts" },
  { path: "/service/solutions/security-privacy", name: "security-privacy" },
  { path: "/service/solutions/api", name: "api" },
  { path: "/service/integrations", name: "integrations" },
  { path: "/service/analytics", name: "analytics" },
  { path: "/service/freelancers", name: "freelancers" },
  { path: "/service/international", name: "international" }
];

const VIEWPORTS = [
  { width: 375, height: 667, name: "mobile" },
  { width: 768, height: 1024, name: "tablet" },
  { width: 1440, height: 900, name: "desktop" }
];

async function auditPage(browser, page, pageUrl, viewport, language) {
  try {
    const url = `http://localhost:3000${pageUrl}?lang=${language}`;
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

    const metrics = await page.evaluate(() => {
      return {
        scrollWidth: document.body.scrollWidth,
        viewportWidth: window.innerWidth,
        hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
        emptyHeadings: Array.from(document.querySelectorAll("h1,h2,h3")).filter(
          h => !h.textContent.trim()
        ).length,
        headings: Array.from(document.querySelectorAll("h1,h2,h3")).map(h => ({
          tag: h.tagName,
          text: h.textContent.substring(0, 40)
        })),
        buttonCount: document.querySelectorAll("button").length,
        linkCount: document.querySelectorAll("a").length,
        imageCount: document.querySelectorAll("img").length,
        iconCount: document.querySelectorAll("svg").length,
        sectionCount: document.querySelectorAll("section").length,
        totalHeight: document.documentElement.scrollHeight
      };
    });

    return { success: true, metrics, viewport: viewport.name, language };
  } catch (error) {
    return {
      success: false,
      error: error.message.substring(0, 50),
      viewport: viewport.name,
      language
    };
  }
}

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const results = {};
  const issues = [];

  console.log("🔍 Starting comprehensive QA audit...\n");

  for (const testPage of PAGES) {
    console.log(`Testing: ${testPage.name}`);
    results[testPage.name] = {};

    for (const viewport of [VIEWPORTS[0], VIEWPORTS[2]]) {
      // Test mobile and desktop only for speed
      const page = await browser.newPage();
      await page.setViewport({ width: viewport.width, height: viewport.height });

      for (const lang of ["he", "en"]) {
        const result = await auditPage(browser, page, testPage.path, viewport, lang);

        if (result.success) {
          const hasIssues = result.metrics.hasHorizontalScroll ||
                           result.metrics.emptyHeadings > 0;

          console.log(`  ${viewport.name} ${lang}: ${hasIssues ? "⚠️" : "✅"}`);

          if (hasIssues) {
            if (result.metrics.hasHorizontalScroll) {
              issues.push({
                page: testPage.name,
                viewport: viewport.name,
                lang,
                issue: "Horizontal scroll detected"
              });
            }
            if (result.metrics.emptyHeadings > 0) {
              issues.push({
                page: testPage.name,
                viewport: viewport.name,
                lang,
                issue: `${result.metrics.emptyHeadings} empty headings`
              });
            }
          }
        } else {
          console.log(`  ${viewport.name} ${lang}: ❌ ${result.error}`);
          issues.push({
            page: testPage.name,
            viewport: viewport.name,
            lang,
            issue: result.error
          });
        }
      }

      page.close();
    }
  }

  await browser.close();

  // Report
  console.log("\n========== QA AUDIT REPORT ==========\n");
  if (issues.length === 0) {
    console.log("✅ No critical issues detected\n");
  } else {
    console.log(`⚠️ Found ${issues.length} issues:\n`);
    issues.forEach(i => {
      console.log(`  ${i.page} (${i.viewport}/${i.lang}): ${i.issue}`);
    });
  }
})();
