const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const viewports = [
    { width: 375, height: 667, name: 'mobile-375' },
    { width: 768, height: 1024, name: 'tablet-768' },
    { width: 1280, height: 720, name: 'desktop-1280' }
  ];

  const tests = [
    { url: 'http://localhost:3000/', name: 'homepage' },
    { url: 'http://localhost:3000/service/solutions/api', name: 'api-page' },
    { url: 'http://localhost:3000/service/solutions/tech', name: 'tech-page' }
  ];

  console.log('Starting comprehensive responsive design test...\n');

  const results = {};

  for (const test of tests) {
    results[test.name] = {};
    console.log(`\nTesting ${test.name}:`);

    for (const viewport of viewports) {
      try {
        await page.setViewport({ width: viewport.width, height: viewport.height });
        await page.goto(test.url, { waitUntil: 'networkidle2', timeout: 30000 });

        const metrics = await page.evaluate(() => {
          const body = document.body;
          const grids = document.querySelectorAll('[style*="grid"]');
          const gridStates = Array.from(grids).slice(0, 3).map(g => {
            const style = window.getComputedStyle(g);
            return {
              gridCols: style.gridTemplateColumns.substring(0, 30),
              colCount: (style.gridTemplateColumns.match(/1fr/g) || []).length
            };
          });

          return {
            hasHorizontalScroll: body.scrollWidth > window.innerWidth,
            bodyOverflow: body.scrollWidth,
            gridCount: grids.length,
            gridStates: gridStates
          };
        });

        const status = metrics.hasHorizontalScroll ? '⚠️' : '✅';
        console.log(`  ${viewport.name} (${viewport.width}x${viewport.height}): ${status} (grids: ${metrics.gridCount})`);

        if (metrics.gridCount > 0 && metrics.gridStates.length > 0) {
          console.log(`    Grid state: ${metrics.gridStates[0].colCount} cols`);
        }

        results[test.name][viewport.name] = {
          hasScroll: metrics.hasHorizontalScroll,
          gridCount: metrics.gridCount
        };

      } catch (error) {
        console.log(`  ${viewport.name}: ❌ ${error.message.substring(0, 40)}`);
        results[test.name][viewport.name] = { error: error.message };
      }
    }
  }

  await browser.close();

  // Summary
  console.log('\n========== VERIFICATION SUMMARY ==========\n');
  let allPassed = true;
  
  for (const [testName, viewportResults] of Object.entries(results)) {
    console.log(`${testName}:`);
    for (const [viewportName, result] of Object.entries(viewportResults)) {
      if (result.error) {
        console.log(`  ❌ ${viewportName}: ${result.error.substring(0, 40)}`);
        allPassed = false;
      } else {
        const status = result.hasScroll ? '⚠️ SCROLL' : '✅ OK';
        console.log(`  ${status} ${viewportName}`);
        if (result.hasScroll) allPassed = false;
      }
    }
  }

  console.log(`\n${allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
})();
