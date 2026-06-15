const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  console.log("Checking for truly empty sections...\n");

  const pages = [
    { url: "/service/solutions/contracts", name: "Contracts" },
    { url: "/service/solutions/clients", name: "Clients" }
  ];

  for (const pageData of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:3000${pageData.url}?lang=he`, { 
      waitUntil: "networkidle2", 
      timeout: 30000 
    });

    const result = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("section")).map((s, i) => ({
        index: i,
        textLength: s.textContent.trim().length,
        childCount: s.children.length,
        isEmpty: s.textContent.trim().length < 20
      }));
    });

    console.log(`${pageData.name} page sections:`);
    result.forEach(r => {
      const status = r.isEmpty ? "❌ EMPTY" : "✓ HAS CONTENT";
      console.log(`  Section ${r.index}: ${status} (${r.textLength} chars, ${r.childCount} children)`);
    });
    console.log();

    await page.close();
  }

  await browser.close();
})();
