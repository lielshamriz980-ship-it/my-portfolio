'use client';

export default function SecuritySection() {
  return (
    <section className="py-xl bg-gradient-to-b from-on-background to-on-background/95" dir="rtl" lang="he">
      <div className="max-w-container-max mx-auto px-lg">
        {/* Badge */}
        <div className="flex justify-center mb-lg">
          <div className="bg-white/10 border border-white/20 px-md py-sm rounded-full text-label-md text-white flex items-center gap-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            אבטחה וצפיפיות
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          {/* Left: Text */}
          <div className="text-white">
            <h2 className="font-headline-xl text-headline-xl mb-md">
              הנתונים שלך מוגנים במימנו. העסקאות שלך בטוחות.
            </h2>
            <p className="font-body-lg text-white/80 mb-lg">
              DealLayer משתמשת בהצפנת SSL בדרגה גבוהה, חוקי IT בינלאומיים, גיבוי אוטומטי, וחתימות דיגיטליות חוקיות בישראל.
            </p>

            {/* Feature List */}
            <ul className="space-y-md mb-xl">
              <li className="flex items-start gap-md">
                <span className="text-tertiary mt-1">✓</span>
                <div>
                  <div className="font-label-md text-white">הצפנה בדרגה גבוהה</div>
                  <div className="text-white/60 text-caption">כל הנתונים מוצפנים במלואם</div>
                </div>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-tertiary mt-1">✓</span>
                <div>
                  <div className="font-label-md text-white">גיבוי יומי אוטומטי</div>
                  <div className="text-white/60 text-caption">הנתונים שלך בטוחים תמיד</div>
                </div>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-tertiary mt-1">✓</span>
                <div>
                  <div className="font-label-md text-white">ציות לחוקי ישראל</div>
                  <div className="text-white/60 text-caption">תואם לתקנות הגנת הנתונים</div>
                </div>
              </li>
            </ul>

            <button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md hover:bg-primary/90 transition-colors">
              קרא עוד על הביטחון
            </button>
          </div>

          {/* Right: Visual Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-lg backdrop-blur-sm">
            <div className="space-y-lg">
              {/* SSL Badge */}
              <div className="bg-white/10 p-md rounded-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-label-md text-white">SSL מוסמך</div>
                    <div className="text-caption text-white/60">תעודה בתוקף</div>
                  </div>
                  <svg className="w-8 h-8 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
              </div>

              {/* Encryption Badge */}
              <div className="bg-white/10 p-md rounded-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-label-md text-white">הצפנת AES-256</div>
                    <div className="text-caption text-white/60">דרגה צבאית</div>
                  </div>
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                  </svg>
                </div>
              </div>

              {/* Compliance Badge */}
              <div className="bg-white/10 p-md rounded-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-label-md text-white">תואם GDPR</div>
                    <div className="text-caption text-white/60">הגנה בינלאומית</div>
                  </div>
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-lg mt-xl pt-xl border-t border-white/10">
          <div className="text-center">
            <div className="text-headline-lg font-bold text-white">99.9%</div>
            <div className="text-caption text-white/60">זמן פעולה</div>
          </div>
          <div className="text-center">
            <div className="text-headline-lg font-bold text-white">24/7</div>
            <div className="text-caption text-white/60">תמיכה</div>
          </div>
          <div className="text-center">
            <div className="text-headline-lg font-bold text-white">2000+</div>
            <div className="text-caption text-white/60">חברות מוגנות</div>
          </div>
        </div>
      </div>
    </section>
  );
}
