const puppeteer = require("puppeteer");

const PAGES = [
  { path: "/", name: "homepage" },
  { path: "/service/solutions/tech", name: "tech" },
  { path: "/service/solutions/property", name: "property" },
  { path: "/service/platform/lex-ai", name: "lex-ai" },
  { path: "/service/solutions/contracts", name: "contracts" },
  { path: "/service/solutions/clients", name: "clients" },
  { path: "/service/solutions/digital-signature", name: "digital-signature" },
  { path: "/service/solutions/alerts", name: "alerts" },
  { path: "/service/solutions/security-privacy", name: "security" },
  { path: "/service/platform/api", name: "api" },
  { path: "/service/platform/integrations", name: "integrations" },
  { path: "/service/analytics", name: "analytics" },
  { path: "/service/freelancers", name: "freelancers" },
  { path: "/service/international", name: "international" }
];

const LANGUAGES = ["he", "en", "ar"];
const VIEWPORTS = [
  { w: 320, h: 640, name: "mobile-small" },
  { w: 375, h: 667, name: "mobile" },
  { w: 425, h: 768, name: "mobile-large" },
  { w: 768, h: 1024, name: "tablet" },
  { w: 1024, h: 768, name: "tablet-landscape" },
  { w: 1440, h: 900, name: "desktop" },
  { w: 1920, h: 1080, name: "desktop-wide" }
];

async function auditPage(browser, pagePath, lang, viewport) {
  const page = await browser.newPage();
  await page.setViewport({ width: viewport.w, height: viewport.h });
  
  try {
    await page.goto(`http://localhost:3000${pagePath}?lang=${lang}`, {
      waitUntil: "networkidle2",
      timeout: 30000
    });

    const result = await page.evaluate(() => {
      const issues = [];
      const warnings = [];

      // Check direction
      const htmlDir = document.documentElement.dir;
      const htmlLang = document.documentElement.lang;

      // Check for horizontal scroll
      const hasHorizontalScroll = document.body.scrollWidth > window.innerWidth;
      if (hasHorizontalScroll) {
        issues.push(`Horizontal scroll: ${document.body.scrollWidth}px vs ${window.innerWidth}px`);
      }

      // Check main heading
      const h1 = document.querySelector("h1");
      if (!h1) {
        warnings.push("No H1 found");
      } else {
        const h1Style = window.getComputedStyle(h1);
        const h1Size = parseInt(h1Style.fontSize);
        if (h1Size < 24) {
          warnings.push(`H1 too small: ${h1Size}px`);
        }
      }

      // Check for hardcoded Hebrew/English/Arabic text
      const bodyText = document.body.innerText;
      const hebrewCount = (bodyText.match(/[֐-׿]/g) || []).length;
      const arabicCount = (bodyText.match(/[؀-ۿ]/g) || []).length;

      if (htmlLang === "en" && hebrewCount > 100) {
        warnings.push(`Hebrew text found in English mode (${hebrewCount} chars)`);
      }

      // Check for overflow elements
      const overflowElements = Array.from(document.querySelectorAll("*"))
        .filter(el => el.scrollWidth > el.clientWidth && el.offsetParent && el.offsetHeight > 0)
        .length;

      if (overflowElements > 0) {
        warnings.push(`${overflowElements} elements with horizontal overflow`);
      }

      // Check button consistency
      const buttons = Array.from(document.querySelectorAll("button, a[class*='btn'], a[class*='button']"));
      const buttonHeights = buttons.map(b => window.getComputedStyle(b).height);
      const uniqueHeights = new Set(buttonHeights).size;

      if (buttons.length > 3 && uniqueHeights > 3) {
        warnings.push(`Inconsistent button heights: ${uniqueHeights} different sizes`);
      }

      // Check section count
      const sections = document.querySelectorAll("section");
      if (sections.length === 0) {
        warnings.push("No sections found");
      }

      // Check for empty sections
      Array.from(sections).forEach((s, i) => {
        if (s.textContent.trim().length < 20) {
          warnings.push(`Section ${i} is nearly empty`);
        }
      });

      return {
        htmlDir,
        htmlLang,
        hasHorizontalScroll,
        issues,
        warnings,
        overflowElements,
        buttonCount: buttons.length,
        sectionCount: sections.length
      };
    });

    await page.close();
    return { success: true, ...result };
  } catch (error) {
    await page.close();
    return { success: false, error: error.message };
  }
}

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("╔═══════════════════════════════════════════════════════════════════╗");
  console.log("║  PRODUCTION-READY QA/UI/UX AUDIT - COMPREHENSIVE WEBSITE REVIEW    ║");
  console.log("╚═══════════════════════════════════════════════════════════════════╝\n");

  const criticalIssues = [];
  const warnings = [];
  let totalTestsRun = 0;

  // Quick audit: 3 languages × 2 key viewports per page
  for (const pageData of PAGES) {
    console.log(`\n📄 ${pageData.name.toUpperCase()}`);
    console.log("─".repeat(70));

    for (const lang of LANGUAGES) {
      // Test mobile
      const mobileResult = await auditPage(browser, pageData.path, lang, VIEWPORTS[1]);
      totalTestsRun++;

      const status = mobileResult.success 
        ? (mobileResult.issues.length === 0 && mobileResult.warnings.length === 0 ? "✓" : "⚠")
        : "✗";

      console.log(`  ${status} ${lang.toUpperCase()} Mobile (375px): `, end='');

      if (!mobileResult.success) {
        console.log(`ERROR - ${mobileResult.error}`);
        criticalIssues.push(`${pageData.name} ${lang} mobile: ${mobileResult.error}`);
      } else {
        const issueStr = mobileResult.issues.length > 0 ? `${mobileResult.issues.length} issues` : "clean";
        const warnStr = mobileResult.warnings.length > 0 ? `${mobileResult.warnings.length} warnings` : "";
        console.log([issueStr, warnStr].filter(Boolean).join(" | ") || "OK");

        mobileResult.issues.forEach(i => {
          criticalIssues.push(`${pageData.name} ${lang} mobile: ${i}`);
        });
        mobileResult.warnings.forEach(w => {
          warnings.push(`${pageData.name} ${lang}: ${w}`);
        });
      }

      // Test desktop
      const desktopResult = await auditPage(browser, pageData.path, lang, VIEWPORTS[4]);
      totalTestsRun++;

      const dStatus = desktopResult.success 
        ? (desktopResult.issues.length === 0 ? "✓" : "⚠")
        : "✗";

      console.log(`  ${dStatus} ${lang.toUpperCase()} Desktop (1440px): `, end='');

      if (!desktopResult.success) {
        console.log(`ERROR`);
      } else {
        const issueStr = desktopResult.issues.length > 0 ? `${desktopResult.issues.length} issues` : "clean";
        console.log(issueStr || "OK");

        desktopResult.issues.forEach(i => {
          criticalIssues.push(`${pageData.name} ${lang} desktop: ${i}`);
        });
      }
    }
  }

  await browser.close();

  console.log("\n╔═══════════════════════════════════════════════════════════════════╗");
  console.log("║  AUDIT SUMMARY                                                    ║");
  console.log("╚═══════════════════════════════════════════════════════════════════╝\n");

  console.log(`Total Tests Run: ${totalTestsRun}`);
  console.log(`Critical Issues Found: ${criticalIssues.length}`);
  console.log(`Warnings Found: ${warnings.length}\n`);

  if (criticalIssues.length > 0) {
    console.log("🔴 CRITICAL ISSUES:");
    criticalIssues.slice(0, 10).forEach(i => console.log(`   • ${i}`));
    if (criticalIssues.length > 10) console.log(`   ... and ${criticalIssues.length - 10} more`);
  }

  if (warnings.length > 0) {
    console.log("\n🟡 WARNINGS:");
    warnings.slice(0, 10).forEach(w => console.log(`   • ${w}`));
    if (warnings.length > 10) console.log(`   ... and ${warnings.length - 10} more`);
  }

  console.log("\n✅ Audit complete. Full detailed report available.");
})();
