const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const p = await browser.newPage();
  await p.setViewport({ width: 375, height: 667 });
  
  await p.goto("http://localhost:3000/service/platform/integrations?lang=he", { 
    waitUntil: "networkidle2", 
    timeout: 30000 
  });
  await p.screenshot({ 
    path: `qa-screenshots/integrations-mobile.png`, 
    fullPage: true 
  });
  console.log("✅ Mobile integrations screenshot saved");

  await browser.close();
})();
