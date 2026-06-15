const puppeteer = require("puppeteer");
const fs = require("fs");

const PAGES = [
  { path: "/", name: "homepage", desktop: true, mobile: true, he: true, en: true },
  { path: "/service/solutions/digital-signature", name: "digital-signature", desktop: true, mobile: true, he: true, en: true },
  { path: "/service/integrations", name: "integrations", desktop: true, mobile: true, he: true, en: true },
  { path: "/service/solutions/api", name: "api", desktop: true, mobile: true, he: true, en: true },
  { path: "/service/solutions/tech", name: "tech", desktop: true, mobile: true, he: true, en: true },
];

async function takeScreenshots(browser) {
  console.log("📸 Taking screenshots for visual QA...\n");

  for (const page of PAGES) {
    console.log(`📄 ${page.name}:`);

    // Desktop Hebrew
    {
      const p = await browser.newPage();
      await p.setViewport({ width: 1440, height: 900 });
      try {
        await p.goto(`http://localhost:3000${page.path}?lang=he`, { 
          waitUntil: "networkidle2", 
          timeout: 30000 
        });
        await p.screenshot({ 
          path: `qa-screenshots/${page.name}-desktop-he.png`, 
          fullPage: true 
        });
        console.log(`  ✅ Desktop Hebrew screenshot saved`);
      } catch (e) {
        console.log(`  ❌ Desktop Hebrew: ${e.message.substring(0, 40)}`);
      }
      await p.close();
    }

    // Mobile Hebrew
    {
      const p = await browser.newPage();
      await p.setViewport({ width: 375, height: 667 });
      try {
        await p.goto(`http://localhost:3000${page.path}?lang=he`, { 
          waitUntil: "networkidle2", 
          timeout: 30000 
        });
        await p.screenshot({ 
          path: `qa-screenshots/${page.name}-mobile-he.png`, 
          fullPage: true 
        });
        console.log(`  ✅ Mobile Hebrew screenshot saved`);
      } catch (e) {
        console.log(`  ❌ Mobile Hebrew: ${e.message.substring(0, 40)}`);
      }
      await p.close();
    }

    // Mobile English
    {
      const p = await browser.newPage();
      await p.setViewport({ width: 375, height: 667 });
      try {
        await p.goto(`http://localhost:3000${page.path}?lang=en`, { 
          waitUntil: "networkidle2", 
          timeout: 30000 
        });
        await p.screenshot({ 
          path: `qa-screenshots/${page.name}-mobile-en.png`, 
          fullPage: true 
        });
        console.log(`  ✅ Mobile English screenshot saved`);
      } catch (e) {
        console.log(`  ❌ Mobile English: ${e.message.substring(0, 40)}`);
      }
      await p.close();
    }
  }
}

(async () => {
  // Create screenshots directory
  if (!fs.existsSync("qa-screenshots")) {
    fs.mkdirSync("qa-screenshots", { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  await takeScreenshots(browser);

  await browser.close();
  console.log("\n✅ Screenshot capture complete!");
})();
