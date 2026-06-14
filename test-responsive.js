const http = require('http');

async function testPages() {
  const pages = [
    { url: 'http://localhost:3000/', name: 'Homepage' },
    { url: 'http://localhost:3000/service/solutions/api', name: 'API Service Page' }
  ];

  for (const page of pages) {
    try {
      const response = await new Promise((resolve, reject) => {
        http.get(page.url, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve({ status: res.statusCode, body: data }));
        }).on('error', reject);
      });

      console.log(`✅ ${page.name}: Status ${response.status}`);
      
      // Check for responsive indicators in HTML
      const hasViewportMeta = response.body.includes('viewport');
      const hasMediaQueries = response.body.includes('@media');
      const hasResponsiveClasses = response.body.includes('md:') || response.body.includes('sm:');
      
      console.log(`   - Viewport meta: ${hasViewportMeta ? 'YES' : 'NO'}`);
      console.log(`   - Media queries: ${hasMediaQueries ? 'YES' : 'NO'}`);
      console.log(`   - Responsive classes: ${hasResponsiveClasses ? 'YES' : 'NO'}`);
    } catch (err) {
      console.log(`❌ ${page.name}: ${err.message}`);
    }
  }
}

testPages();
