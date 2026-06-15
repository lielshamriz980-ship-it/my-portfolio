const puppeteer = require("puppeteer");

const PAGES = [
  { path: "/service/platform/integrations", name: "integrations" },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  for (const page of PAGES) {
    const p = await browser.newPage();
    await p.setViewport({ width: 1440, height: 900 });
    
    try {
      await p.goto(`http://localhost:3000${page.path}?lang=he`, { 
        waitUntil: "networkidle2", 
        timeout: 30000 
      });
      await p.screenshot({ 
        path: `qa-screenshots/${page.name}-desktop-correct.png`, 
        fullPage: true 
      });
      console.log(`✅ ${page.name} desktop screenshot saved`);
    } catch (e) {
      console.log(`❌ ${page.name}: ${e.message.substring(0, 50)}`);
    }
    
    await p.close();
  }

  await browser.close();
})();
