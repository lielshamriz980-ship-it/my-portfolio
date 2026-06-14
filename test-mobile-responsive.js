const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test at 375px (mobile)
  await page.setViewport({ width: 375, height: 667 });

  const tests = [
    { url: 'http://localhost:3000/', name: 'homepage' },
    { url: 'http://localhost:3000/service/solutions/api', name: 'api-page' }
  ];

  const results = [];

  for (const test of tests) {
    try {
      console.log(`\nTesting ${test.name} at 375px...`);
      await page.goto(test.url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Get viewport metrics
      const metrics = await page.evaluate(() => {
        const html = document.documentElement;
        const body = document.body;
        return {
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          bodyWidth: body.clientWidth,
          htmlWidth: html.clientWidth,
          hasHorizontalScroll: body.scrollWidth > window.innerWidth,
          scrollWidth: body.scrollWidth,
          h1Count: document.querySelectorAll('h1').length,
          h1Sizes: Array.from(document.querySelectorAll('h1')).map(h => {
            const style = window.getComputedStyle(h);
            return { text: h.textContent.substring(0, 30), fontSize: style.fontSize };
          })
        };
      });

      results.push({
        page: test.name,
        viewport: '375px',
        metrics: metrics,
        status: metrics.hasHorizontalScroll ? '⚠️ HORIZONTAL SCROLL' : '✅ OK'
      });

      console.log(`✅ Viewport: ${metrics.viewportWidth}x${metrics.viewportHeight}`);
      console.log(`   Body width: ${metrics.bodyWidth}px`);
      console.log(`   Scroll width: ${metrics.scrollWidth}px`);
      console.log(`   Horizontal scroll: ${metrics.hasHorizontalScroll ? 'YES ⚠️' : 'NO ✅'}`);
      console.log(`   H1 count: ${metrics.h1Count}`);
      if (metrics.h1Sizes.length > 0) {
        console.log(`   H1 sizes:`, metrics.h1Sizes.slice(0, 2));
      }

      // Take screenshot
      const screenshotPath = path.join(process.cwd(), `screenshot-${test.name}-375px.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`   Screenshot saved: ${screenshotPath}`);

    } catch (error) {
      console.error(`❌ Error testing ${test.name}:`, error.message);
      results.push({
        page: test.name,
        error: error.message
      });
    }
  }

  await browser.close();

  // Print summary
  console.log('\n========== MOBILE RESPONSIVENESS TEST SUMMARY ==========');
  results.forEach(r => {
    if (r.error) {
      console.log(`\n${r.page}: ❌ ERROR - ${r.error}`);
    } else {
      console.log(`\n${r.page} (${r.viewport}): ${r.status}`);
      if (r.metrics) {
        console.log(`  Viewport: ${r.metrics.viewportWidth}x${r.metrics.viewportHeight}`);
        console.log(`  Body fits: ${!r.metrics.hasHorizontalScroll}`);
        console.log(`  H1 responsive: ${r.metrics.h1Sizes.length > 0 ? 'YES' : 'NO'}`);
      }
    }
  });
})();
