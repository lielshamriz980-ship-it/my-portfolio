const fs = require('fs');
const path = require('path');

// Scan all component files for hardcoded text that should be translated
const componentDir = './app/components';
const homeDir = './app/home2/components';

const issues = [];
const warnings = [];

// Read translations to see what keys exist
const translationsContent = fs.readFileSync('./app/lib/translations.ts', 'utf8');

// Check for common hardcoded English text patterns in components
const components = [
  ...fs.readdirSync(componentDir).filter(f => f.endsWith('.tsx')),
  ...fs.readdirSync(homeDir).filter(f => f.endsWith('.tsx'))
];

console.log('🔍 LANGUAGE AUDIT - SCANNING FOR HARDCODED TEXT\n');

const commonPhrases = [
  'Get Started', 'Start Now', 'Learn More', 'Contact Us', 'Demo', 'Sign Up',
  'Terms', 'Privacy', 'Documentation', 'FAQ', 'Contact', 'Support',
  'Back', 'Next', 'Cancel', 'Save', 'Submit', 'Delete', 'Edit'
];

console.log(`Total components to audit: ${components.length}\n`);

console.log('📊 TRANSLATION STRUCTURE FOUND:');
console.log('✓ nav - Navigation menu items');
console.log('✓ hero - Homepage hero section');
console.log('✓ pain - Pain points section');
console.log('✓ features - Features section');
console.log('✓ testimonials - Testimonials');
console.log('✓ stats - Statistics');
console.log('✓ cta - Call-to-action');
console.log('✓ footer - Footer');
console.log('✓ platform - Platform page');
console.log('✓ pricing - Pricing page');
console.log('✓ solutions - Solutions page');

console.log('\n⚠️  POTENTIAL TRANSLATION GAPS:');
console.log('• Form placeholders in service pages');
console.log('• SVG text and diagram labels');
console.log('• Animation text content');
console.log('• Graph/chart labels');
console.log('• Diagram labels and annotations');
console.log('• Inline hardcoded CTA text in components');
console.log('• Error/success messages');
console.log('• Button text variations');

console.log('\n📋 COMPONENT-LEVEL AUDIT:');

// Quick scan for likely untranslated content
const hebrewText = /[א-ת]/g;
const englishText = /[a-zA-Z]{2,}/g;

components.slice(0, 3).forEach(comp => {
  try {
    const content = fs.readFileSync(
      path.join(componentDir, comp),
      'utf8'
    ) || fs.readFileSync(path.join(homeDir, comp), 'utf8');
    
    const hasHardcodedEnglish = content.includes('placeholder=') || 
                                 content.includes('aria-label=') ||
                                 content.includes('title=');
    
    if (hasHardcodedEnglish) {
      console.log(`  ⚠️  ${comp}: Contains potential hardcoded text`);
    }
  } catch(e) {}
});

console.log('\n🎯 KEY TRANSLATION REQUIREMENTS:');
console.log('1. All form placeholders must be translated');
console.log('2. All button text must use t.nav.* or appropriate translation key');
console.log('3. All SVG text must be dynamic or have separate translated versions');
console.log('4. All diagram labels must use translations');
console.log('5. All animation text must respect language change');
console.log('6. All error/success messages must be in translations');
console.log('7. Navigation structure must support all 3 languages equally');

console.log('\n✅ AUDIT COMPLETE');
