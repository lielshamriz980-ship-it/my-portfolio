const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("🔍 Inspecting specific issues...\n");

  // Test 1: Digital Signature page for FAQ section
  {
    console.log("1️⃣ Digital Signature Page - FAQ Section Check");
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto("http://localhost:3000/service/solutions/digital-signature?lang=he", {
      waitUntil: "networkidle2"
    });

    const faqCheck = await page.evaluate(() => {
      const faqHeading = Array.from(document.querySelectorAll("h2, h3")).find(h =>
        h.textContent.includes("שאלות") || h.textContent.includes("FAQ")
      );
      return {
        hasFAQ: !!faqHeading,
        faqText: faqHeading ? faqHeading.textContent : null,
        faqParent: faqHeading ? faqHeading.parentElement.className : null,
        allHeadings: Array.from(document.querySelectorAll("h2, h3")).map(h =>
          h.textContent.substring(0, 40)
        )
      };
    });

    console.log(`   FAQ Section Found: ${faqCheck.hasFAQ ? "YES ⚠️" : "NO ✅"}`);
    if (faqCheck.hasFAQ) {
      console.log(`   FAQ Text: ${faqCheck.faqText}`);
    }
    console.log(`   Page Headings:`, faqCheck.allHeadings.slice(0, 5));
    page.close();
  }

  // Test 2: Mobile menu in English
  {
    console.log("\n2️⃣ Mobile Menu - English Language Test");
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/?lang=en", {
      waitUntil: "networkidle2"
    });

    const menuCheck = await page.evaluate(() => {
      const menuButton = document.querySelector("button[aria-label*='menu'], [class*='menu'] button");
      const nav = document.querySelector("nav");
      return {
        hasMenuButton: !!menuButton,
        navVisible: nav ? window.getComputedStyle(nav).display !== "none" : false,
        navHeight: nav ? nav.clientHeight : 0,
        direction: document.documentElement.getAttribute("dir")
      };
    });

    console.log(`   Menu Button Found: ${menuCheck.hasMenuButton ? "YES" : "NO"}`);
    console.log(`   Nav Visible: ${menuCheck.navVisible ? "YES" : "NO"}`);
    console.log(`   Page Direction: ${menuCheck.direction} (should be ltr for English)`);
    page.close();
  }

  // Test 3: Integrations page icons
  {
    console.log("\n3️⃣ Integrations Page - Icons Check");
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto("http://localhost:3000/service/integrations?lang=he", {
      waitUntil: "networkidle2"
    });

    const iconsCheck = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll("img")).slice(0, 10);
      const svgs = Array.from(document.querySelectorAll("svg")).slice(0, 10);
      return {
        imageCount: images.length,
        svgCount: svgs.length,
        imageSrcs: images.map(img => ({
          src: img.src.substring(img.src.lastIndexOf("/") + 1),
          alt: img.alt
        })),
        pageText: document.body.textContent.includes("Slack") ||
                  document.body.textContent.includes("WhatsApp") ||
                  document.body.textContent.includes("Google")
      };
    });

    console.log(`   Images: ${iconsCheck.imageCount}`);
    console.log(`   SVGs: ${iconsCheck.svgCount}`);
    console.log(`   Integration References: ${iconsCheck.pageText ? "YES" : "NO"}`);
    if (iconsCheck.imageSrcs.length > 0) {
      console.log(`   Sample Images:`);
      iconsCheck.imageSrcs.slice(0, 3).forEach(img => {
        console.log(`     - ${img.src} (alt: ${img.alt})`);
      });
    }
    page.close();
  }

  await browser.close();
})();
