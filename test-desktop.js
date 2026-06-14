const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Test at desktop 1440x900
  await page.setViewport({ width: 1440, height: 900 });

  const pages = [
    { url: 'http://localhost:3000/', name: 'homepage' },
    { url: 'http://localhost:3000/service/solutions/api', name: 'api-page' },
    { url: 'http://localhost:3000/service/solutions/tech', name: 'tech-page' }
  ];

  console.log('Desktop Responsiveness Test (1440x900)\n');

  const results = [];

  for (const test of pages) {
    try {
      await page.goto(test.url, { waitUntil: 'networkidle2', timeout: 30000 });

      const metrics = await page.evaluate(() => {
        const body = document.body;
        const visibleHeight = window.innerHeight;
        const totalScrollHeight = document.documentElement.scrollHeight;
        const grids = document.querySelectorAll('[style*="gridTemplateColumns"]');
        
        const gridAnalysis = Array.from(grids).slice(0, 5).map(g => {
          const style = window.getComputedStyle(g);
          const cols = style.gridTemplateColumns;
          // Count the number of columns
          const colCount = (cols.match(/1fr/g) || []).length || 
                          (cols.includes('auto') ? cols.split(' ').filter(x => x.includes('fr') || x.includes('auto')).length : 1);
          return {
            cols: cols.substring(0, 40),
            colCount: colCount
          };
        });

        return {
          bodyWidth: body.clientWidth,
          hasHorizontalScroll: body.scrollWidth > window.innerWidth,
          totalHeight: totalScrollHeight,
          gridCount: grids.length,
          gridAnalysis: gridAnalysis,
          layoutOK: body.scrollWidth <= window.innerWidth
        };
      });

      const status = metrics.layoutOK ? '✅' : '⚠️';
      console.log(`${status} ${test.name}`);
      console.log(`   Width: ${metrics.bodyWidth}px (no scroll: ${metrics.layoutOK})`);
      console.log(`   Grids: ${metrics.gridCount}`);
      if (metrics.gridAnalysis.length > 0) {
        console.log(`   First grid: ${metrics.gridAnalysis[0].colCount} columns`);
      }
      console.log(`   Page height: ${metrics.totalHeight}px\n`);

      results.push({
        page: test.name,
        passed: metrics.layoutOK,
        gridCount: metrics.gridCount
      });

    } catch (error) {
      console.log(`❌ ${test.name}: ${error.message.substring(0, 50)}\n`);
      results.push({ page: test.name, error: error.message });
    }
  }

  await browser.close();

  // Final verdict
  const allPassed = results.every(r => r.passed);
  console.log(`\n========== DESKTOP TEST RESULT ==========`);
  console.log(allPassed ? '✅ NO REGRESSIONS - All pages render correctly at 1440px' : '❌ Some issues detected');
})();
