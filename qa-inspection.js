const puppeteer = require("puppeteer");

const PAGES = [
  { url: "/", name: "homepage" },
  { url: "/service/solutions/tech", name: "tech" },
  { url: "/service/solutions/property", name: "property" },
  { url: "/service/platform/lex-ai", name: "lex-ai" },
  { url: "/service/solutions/contracts", name: "contracts" },
  { url: "/service/solutions/clients", name: "clients" },
  { url: "/service/solutions/digital-signature", name: "digital-signature" },
  { url: "/service/solutions/alerts", name: "alerts" },
  { url: "/service/solutions/security-privacy", name: "security" },
  { url: "/service/platform/api", name: "api" },
  { url: "/service/platform/integrations", name: "integrations" },
  { url: "/service/analytics", name: "analytics" },
  { url: "/service/freelancers", name: "freelancers" },
  { url: "/service/international", name: "international" }
];

async function inspectPage(browser, page, url, lang) {
  const fullUrl = `http://localhost:3000${url}?lang=${lang}`;
  
  try {
    await page.goto(fullUrl, { waitUntil: "networkidle2", timeout: 30000 });

    const report = await page.evaluate(() => {
      const getComputedFontSize = (el) => {
        const style = window.getComputedStyle(el);
        return style.fontSize;
      };

      return {
        // Direction check
        htmlDir: document.documentElement.dir,
        bodyDir: document.body.dir || "not set",
        langAttr: document.documentElement.lang,

        // Content completeness
        emptyHeadings: Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"))
          .filter(h => !h.textContent.trim()).length,
        
        sections: Array.from(document.querySelectorAll("section")).map((s, i) => ({
          index: i,
          hasContent: s.textContent.trim().length > 50,
          childCount: s.children.length
        })),

        // Responsive check
        hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
        scrollWidth: document.body.scrollWidth,
        viewportWidth: window.innerWidth,

        // Typography
        h1Count: document.querySelectorAll("h1").length,
        h1Sizes: Array.from(document.querySelectorAll("h1")).map(h => 
          window.getComputedStyle(h).fontSize
        ),

        // Images and icons
        images: document.querySelectorAll("img").length,
        svgs: document.querySelectorAll("svg").length,

        // Buttons and interactivity
        buttons: document.querySelectorAll("button").length,
        links: document.querySelectorAll("a").length,

        // Layout issues
        overflow: Array.from(document.querySelectorAll("*"))
          .filter(el => {
            const style = window.getComputedStyle(el);
            return el.scrollWidth > el.clientWidth && el.offsetParent;
          }).length
      };
    });

    return { success: true, report };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("🔍 COMPREHENSIVE QA INSPECTION REPORT\n");
  console.log("=" .repeat(70));

  const issues = [];

  for (const pageData of PAGES) {
    console.log(`\n📄 ${pageData.name.toUpperCase()}`);
    console.log("-".repeat(70));

    // Test Hebrew desktop
    {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      const result = await inspectPage(browser, page, pageData.url, "he");
      await page.close();

      if (result.success) {
        const r = result.report;
        console.log(`  Hebrew (Desktop):`);
        console.log(`    ✓ Direction: ${r.htmlDir}`);
        console.log(`    ✓ Horizontal scroll: ${r.hasHorizontalScroll ? "⚠️ YES" : "NO"}`);
        console.log(`    ✓ Empty sections: ${r.sections.filter(s => !s.hasContent).length}`);
        console.log(`    ✓ Empty headings: ${r.emptyHeadings}`);

        if (r.hasHorizontalScroll) {
          issues.push(`${pageData.name} (HE): Horizontal scrolling detected`);
        }
        if (r.emptyHeadings > 0) {
          issues.push(`${pageData.name} (HE): ${r.emptyHeadings} empty headings`);
        }
        if (r.sections.filter(s => !s.hasContent).length > 0) {
          issues.push(`${pageData.name} (HE): ${r.sections.filter(s => !s.hasContent).length} empty sections`);
        }
      }
    }

    // Test English mobile
    {
      const page = await browser.newPage();
      await page.setViewport({ width: 375, height: 667 });
      const result = await inspectPage(browser, page, pageData.url, "en");
      await page.close();

      if (result.success) {
        const r = result.report;
        console.log(`  English (Mobile):`);
        console.log(`    ✓ Direction: ${r.htmlDir} (should be ltr)`);
        console.log(`    ✓ Horizontal scroll: ${r.hasHorizontalScroll ? "⚠️ YES" : "NO"}`);
        console.log(`    ✓ Language attr: ${r.langAttr}`);

        if (r.htmlDir !== "ltr") {
          issues.push(`${pageData.name} (EN): Direction not set to LTR (got ${r.htmlDir})`);
        }
        if (r.hasHorizontalScroll) {
          issues.push(`${pageData.name} (EN Mobile): Horizontal scrolling detected`);
        }
      }
    }
  }

  await browser.close();

  console.log("\n" + "=".repeat(70));
  console.log(`\n⚠️  ISSUES FOUND: ${issues.length}\n`);
  
  if (issues.length > 0) {
    issues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
  } else {
    console.log("✅ No critical issues detected!");
  }
})();
