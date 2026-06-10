"use client";

export function AlertsServicePageV3() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden" dir="rtl" lang="he">
      <style>{`
        .shimmer {
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
            background-size: 200% 100%;
            animation: shimmer 3s infinite;
        }
        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        .pulse-notification {
            animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0; }
            100% { transform: scale(0.8); opacity: 0.5; }
        }
      `}</style>

      {/* TopNavBar */}
      <div className="w-full bg-surface-container-low py-lg border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-lg text-center">
          <h1 className="font-headline-xl text-headline-xl text-on-background">התראות</h1>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center h-20 px-lg max-w-container-max mx-auto">
          <div className="flex items-center gap-xl">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">DealLayer</span>
            <nav className="hidden md:flex gap-lg">
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Platform</a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Solutions</a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Templates</a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Resources</a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </button>
            <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md active:scale-95 transition-transform shimmer">Get Demo</button>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-lg py-xl">
        {/* Hero Header */}
        <div className="mb-xl text-right">
          <h1 className="font-headline-xl text-headline-xl text-on-background mb-sm">מרכז התראות ומעקב חוזים</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">נהלו את מחזור חיי החוזה שלכם עם התראות חכמות, מעקב אחר חתימות ותזכורות אוטומטיות למועדי פקיעה.</p>
        </div>

        {/* Dashboard Layout: Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Notification Feed (8 columns) */}
          <section className="lg:col-span-8 flex flex-col gap-md">
            <div className="flex items-center justify-between mb-sm">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">עדכונים בזמן אמת</h2>
              <div className="flex gap-sm">
                <button className="px-md py-xs bg-primary-container text-on-primary-container rounded-full text-label-md">הכל</button>
                <button className="px-md py-xs bg-surface-container-high text-on-surface-variant rounded-full text-label-md">חתימות</button>
                <button className="px-md py-xs bg-surface-container-high text-on-surface-variant rounded-full text-label-md">פקיעה</button>
              </div>
            </div>

            {/* Notification Cards */}
            <div className="flex flex-col gap-md">
              {/* Notification 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-md group">
                <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary-container flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="font-label-md text-label-md text-secondary">סטטוס חתימה</span>
                    <span className="font-caption text-caption text-outline">לפני 10 דקות</span>
                  </div>
                  <h3 className="font-label-md text-on-surface mb-xs">הסכם סודיות (NDA) - חברת טק-לוג יק</h3>
                  <p className="font-body-md text-on-surface-variant">המסמך נחתם על ידי המנכל אבי כהן. עותק חתום נשלח לכל הצדדים במייל.</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-outline hover:text-primary transition-opacity flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
              </div>

              {/* Notification 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-md group">
                <div className="w-12 h-12 rounded-full bg-error-container/20 flex items-center justify-center text-error flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="font-label-md text-label-md text-error">התראת פקיעה</span>
                    <span className="font-caption text-caption text-outline">לפני שעתיים</span>
                  </div>
                  <h3 className="font-label-md text-on-surface mb-xs">חוזה שכירות משרדים - קומה 4</h3>
                  <p className="font-body-md text-on-surface-variant">החוזה יפוג בעוד 30 יום. יש להודיע על חידוש או סיום עד ה-15 לחודש.</p>
                  <div className="mt-md flex gap-sm">
                    <button className="px-md py-sm bg-primary text-on-primary rounded-lg text-label-md">התחל חידוש</button>
                    <button className="px-md py-sm border border-outline-variant text-on-surface rounded-lg text-label-md">בטל התראה</button>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-outline hover:text-primary transition-opacity flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
              </div>

              {/* Notification 3 */}
              <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-md group">
                <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="font-label-md text-label-md text-tertiary">עדכון מערכת</span>
                    <span className="font-caption text-caption text-outline">אתמול</span>
                  </div>
                  <h3 className="font-label-md text-on-surface mb-xs">תזכורת נשלחה ב-WhatsApp</h3>
                  <p className="font-body-md text-on-surface-variant">נשלחה תזכורת אוטומטית למר יצחק לוי לחתימה על נספח השירותים הטכניים.</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-outline hover:text-primary transition-opacity flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mt-xl bg-white p-lg rounded-xl border border-outline-variant shadow-sm overflow-hidden relative">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">ציר זמן לאבני דרך</h2>
              <div className="relative flex flex-col gap-xl pr-6">
                <div className="absolute right-[9px] top-2 bottom-2 w-[2px] bg-outline-variant"></div>
                <div className="relative flex items-center gap-md">
                  <div className="absolute -right-[23px] w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  <div className="bg-surface-container-low p-md rounded-lg flex-1">
                    <div className="font-label-md text-primary">היום</div>
                    <div className="font-body-md font-bold">סיום תקופת ה-Due Diligence</div>
                    <div className="font-caption text-on-surface-variant">פרויקט נאות השרון - שלב ב</div>
                  </div>
                </div>
                <div className="relative flex items-center gap-md">
                  <div className="absolute -right-[23px] w-4 h-4 rounded-full bg-outline-variant"></div>
                  <div className="bg-surface-container-low p-md rounded-lg flex-1">
                    <div className="font-label-md text-on-surface-variant">15 בינואר, 2025</div>
                    <div className="font-body-md font-bold">תשלום ראשון - פעימת הצלחה</div>
                    <div className="font-caption text-on-surface-variant">הסכם שירותי ייעוץ - גלובל פיננס</div>
                  </div>
                </div>
                <div className="relative flex items-center gap-md">
                  <div className="absolute -right-[23px] w-4 h-4 rounded-full bg-outline-variant"></div>
                  <div className="bg-surface-container-low p-md rounded-lg flex-1 opacity-60">
                    <div className="font-label-md text-on-surface-variant">1 בפברואר, 2025</div>
                    <div className="font-body-md font-bold">חידוש פוליסת ביטוח חבות</div>
                    <div className="font-caption text-on-surface-variant">סוכנות ביטחון ישיר</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar Configuration (4 columns) */}
          <aside className="lg:col-span-4 flex flex-col gap-lg">
            {/* Channel Config */}
            <div className="bg-surface-container-highest/30 p-lg rounded-2xl border border-outline-variant">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">ערוצי התראות</h3>
              <div className="space-y-md">
                <div className="flex items-center justify-between p-md bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-sm">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                    <span className="font-label-md">WhatsApp</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-10 h-6 rounded-full" />
                </div>
                <div className="flex items-center justify-between p-md bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-sm">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <span className="font-label-md">Email</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-10 h-6 rounded-full" />
                </div>
                <div className="flex items-center justify-between p-md bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-sm">
                    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg>
                    <span className="font-label-md">SMS</span>
                  </div>
                  <input type="checkbox" className="w-10 h-6 rounded-full" />
                </div>
              </div>
            </div>

            {/* Smart Reminders Widget */}
            <div className="bg-primary p-lg rounded-2xl text-on-primary shadow-xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg mb-sm">תזכורות חכמות</h3>
                <p className="font-body-md mb-lg opacity-90">הגדר תזכורת אוטומטית לפני פקיעת חוזה. המערכת תשלח הודעה חוזרת עד לקבלת תגובה.</p>
                <div className="flex items-center gap-sm bg-white/20 p-md rounded-xl backdrop-blur-sm border border-white/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  <span className="font-label-md">30 יום לפני פקיעה</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Performance Dashboard Widget */}
            <div className="rounded-2xl bg-on-background p-lg shadow-lg border border-outline-variant aspect-square flex flex-col justify-between relative overflow-hidden text-white">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-md">
                  <div>
                    <h4 className="font-headline-lg">מעקב ביצועים</h4>
                    <p className="font-caption text-primary-fixed opacity-80">נתונים בזמן אמת</p>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-error rounded-full pulse-notification"></div>
                  </div>
                </div>
                <div className="space-y-lg mt-xl">
                  <div>
                    <div className="flex justify-between mb-xs">
                      <span className="text-label-md">חוזים שנחתמו</span>
                      <span className="text-primary-fixed text-label-md">85%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-xs">
                      <span className="text-label-md">חידושים בתהליך</span>
                      <span className="text-primary-fixed text-label-md">62%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary-fixed-dim h-full rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>

                  <div className="flex items-end gap-1 h-12 pt-4">
                    {[40, 60, 30, 80, 50, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/40 hover:bg-primary transition-colors cursor-pointer rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-auto">
                <p className="font-body-md">85% מהחוזים נחתמים תוך 48 שעות</p>
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-xl bg-surface-container-low border-t border-outline-variant mt-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-lg px-lg max-w-container-max mx-auto text-right">
          <div className="col-span-2">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">DealLayer</span>
            <p className="mt-md font-caption text-caption text-on-surface-variant max-w-xs">
              המערכת המתקדמת ביותר בישראל לניהול חוזים וחתימות דיגיטליות בסביבה משפטית מאובטחת.
            </p>
          </div>
          <div>
            <h5 className="font-label-md text-on-surface mb-md">מוצר</h5>
            <ul className="space-y-sm">
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Platform</a></li>
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Solutions</a></li>
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Templates</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-on-surface mb-md">חברה</h5>
            <ul className="space-y-sm">
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Resources</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-on-surface mb-md">משפטי</h5>
            <ul className="space-y-sm">
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Legal</a></li>
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-xl text-center border-t border-outline-variant pt-lg">
          <p className="font-caption text-caption text-on-surface-variant">© 2024 DealLayer. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* FAB */}
      <button className="fixed bottom-lg right-lg w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 shimmer">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
      </button>
    </div>
  );
}
