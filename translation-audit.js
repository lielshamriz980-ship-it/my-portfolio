const fs = require('fs');
const path = require('path');

console.log("📊 COMPREHENSIVE TRANSLATION AUDIT\n");
console.log("Analyzing all service pages for content that needs translation...\n");

const servicePages = [
  'TechDevelopmentServicePageV2.tsx',
  'RealEstateConstructionServicePageV2.tsx',
  'LexAIServicePageV2.tsx',
  'ContractManagementServicePageV2.tsx',
  'ClientManagementServicePageV2.tsx',
  'DigitalSignatureServicePageV2.tsx',
  'AlertsServicePageV3.tsx',
  'SecurityPrivacyServicePageV3.tsx',
  'APIServicePageV3.tsx',
  'IntegrationsServicePageV3.tsx',
  'AnalyticsServicePageV2.tsx'
];

const contentTypes = {
  titles: 0,
  descriptions: 0,
  buttons: 0,
  labels: 0,
  features: 0,
  steps: 0,
  cards: 0
};

servicePages.forEach(page => {
  const filePath = path.join('./app/components', page);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Count different content types
    if (content.includes('title:')) contentTypes.titles++;
    if (content.includes('desc:')) contentTypes.descriptions++;
    if (content.includes('button')) contentTypes.buttons++;
    if (content.includes('label:')) contentTypes.labels++;
    if (content.includes('features')) contentTypes.features++;
    if (content.includes('step')) contentTypes.steps++;
  }
});

console.log("Pages requiring translation updates:");
servicePages.forEach((p, i) => {
  console.log(`  ${i+1}. ${p}`);
});

console.log("\n✅ TOTAL CONTENT TO TRANSLATE:");
console.log(`  • Titles: ${contentTypes.titles} pages`);
console.log(`  • Descriptions: ${contentTypes.descriptions} pages`);
console.log(`  • Button labels: ${contentTypes.buttons} pages`);
console.log(`  • Feature descriptions: ${contentTypes.features} pages`);

console.log("\n📋 TRANSLATION STRATEGY:");
console.log("1. Extend translations.ts with service page keys");
console.log("2. Create useTranslations hook for service pages");
console.log("3. Update each service page to use translations");
console.log("4. Add English and Arabic for all content");
console.log("5. Test complete language switching");

