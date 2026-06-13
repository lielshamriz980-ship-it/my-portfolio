'use client';

export default function PricingSection() {
  return (
    <section className="py-xl bg-surface" dir="rtl" lang="he">
      <div className="max-w-container-max mx-auto px-lg">
        {/* Header */}
        <div className="text-center mb-xl">
          <h2 className="font-headline-xl text-headline-xl text-on-background mb-md">
            התחילו לחינם. שדרגו כשגדלתם.
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            בחרו בתוכנית המתאימה לעסקכם. אין חוזה, בטלו בכל עת.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-lg border border-outline-variant shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-md">
              <h3 className="font-headline-lg text-headline-lg text-on-background">Starter</h3>
              <span className="bg-surface-container-high px-md py-sm rounded-full text-label-md text-on-surface-variant">
                להתחלה
              </span>
            </div>
            <div className="mb-lg">
              <div className="text-headline-xl font-bold text-on-background">
                ₪0<span className="text-body-md text-on-surface-variant font-normal"> / חודש</span>
              </div>
            </div>
            <ul className="space-y-sm mb-lg">
              <li className="flex items-center gap-sm text-on-surface">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">3 תמיכות בחודש</span>
              </li>
              <li className="flex items-center gap-sm text-on-surface">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">חתימה דיגיטלית בסיסית</span>
              </li>
              <li className="flex items-center gap-sm text-on-surface">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">אחסון 5 קבצים</span>
              </li>
              <li className="flex items-center gap-sm text-on-surface-variant">
                <span className="text-outline">✗</span>
                <span className="font-body-md">API ואינטגרציות</span>
              </li>
            </ul>
            <button className="w-full bg-surface-container-high text-on-background py-md rounded-lg font-label-md hover:bg-surface-container-high/80 transition-colors">
              התחילו עכשיו
            </button>
          </div>

          {/* Pro Plan - Featured */}
          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-lg right-lg bg-white/20 px-md py-sm rounded-full text-label-md text-white">
              ⭐ הפופולרי
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-white mb-md">Pro</h3>
              <div className="mb-lg">
                <div className="text-headline-xl font-bold text-white">
                  ₪99<span className="text-body-md text-white/80 font-normal"> / חודש</span>
                </div>
              </div>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-center gap-sm text-white">
                  <span>✓</span>
                  <span className="font-body-md">תמיכה ללא הגבלה</span>
                </li>
                <li className="flex items-center gap-sm text-white">
                  <span>✓</span>
                  <span className="font-body-md">Lex AI - עורך דין חכם</span>
                </li>
                <li className="flex items-center gap-sm text-white">
                  <span>✓</span>
                  <span className="font-body-md">כל התכונות הבסיסיות</span>
                </li>
                <li className="flex items-center gap-sm text-white">
                  <span>✓</span>
                  <span className="font-body-md">התראות חכמות</span>
                </li>
                <li className="flex items-center gap-sm text-white">
                  <span>✓</span>
                  <span className="font-body-md">API ואינטגרציות</span>
                </li>
              </ul>
              <button className="w-full bg-white text-secondary py-md rounded-lg font-label-md font-bold hover:bg-white/90 transition-colors">
                בחרו Pro
              </button>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-lg">
          <p className="text-on-surface-variant font-body-md">
            כל המחיר כולל מס. עברו בין תוכניות בחינם בכל עת.
          </p>
        </div>
      </div>
    </section>
  );
}
