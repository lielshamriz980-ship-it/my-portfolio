"use client";

export function AlertsServicePageV3() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .alerts-shimmer {
          background: linear-gradient(90deg,rgba(255,255,255,0)0%,rgba(255,255,255,0.3)50%,rgba(255,255,255,0)100%);
          background-size: 200% 100%;
          animation: alertsShimmer 3s infinite;
        }
        @keyframes alertsShimmer {
          0%{background-position:200% 0}
          100%{background-position:-200% 0}
        }
        .alerts-pulse {
          animation: alertsPulse 2s cubic-bezier(0.455,0.03,0.515,0.955) infinite;
        }
        @keyframes alertsPulse {
          0%{transform:scale(0.8);opacity:0.5}
          50%{transform:scale(1.2);opacity:0}
          100%{transform:scale(0.8);opacity:0.5}
        }
        .alerts-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,74,198,0.12);
        }
        .alerts-card { transition: transform 0.25s, box-shadow 0.25s; }
        .alerts-more { opacity: 0; transition: opacity 0.2s; }
        .alerts-card:hover .alerts-more { opacity: 1; }
        .alerts-toggle-track {
          width: 44px; height: 24px; border-radius: 9999px;
          background: #c3c6d7; position: relative; cursor: pointer;
          transition: background 0.2s;
        }
        .alerts-toggle-track.on { background: #004ac6; }
        .alerts-toggle-thumb {
          position: absolute; top: 2px; right: 2px;
          width: 20px; height: 20px; border-radius: 9999px;
          background: #fff; transition: transform 0.2s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .alerts-toggle-track.on .alerts-toggle-thumb { transform: translateX(-20px); }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "16px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>התראות</h1>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 8 }}>מרכז התראות ומעקב חוזים</h2>
          <p style={{ fontSize: 18, color: "#434655", maxWidth: 640, margin: 0 }}>
            נהלו את מחזור חיי החוזה שלכם עם התראות חכמות, מעקב אחר חתימות ותזכורות אוטומטיות למועדי פקיעה.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, alignItems: "start" }}>

          {/* ─── Notification Feed ─── */}
          <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Filter bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: "#181445", margin: 0 }}>עדכונים בזמן אמת</h2>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ padding: "4px 16px", background: "#2563eb", color: "#fff", borderRadius: 9999, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>הכל</button>
                <button style={{ padding: "4px 16px", background: "#e9e5ff", color: "#434655", borderRadius: 9999, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>חתימות</button>
                <button style={{ padding: "4px 16px", background: "#e9e5ff", color: "#434655", borderRadius: 9999, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>פקיעה</button>
              </div>
            </div>

            {/* Card 1 */}
            <div className="alerts-card" style={{ background: "#fff", border: "1px solid #c3c6d7", borderRadius: 12, padding: 16, display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(100,94,251,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" fill="#645efb" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#4b41e1" }}>סטטוס חתימה</span>
                  <span style={{ fontSize: 12, color: "#737686" }}>לפני 10 דקות</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#181445", margin: "0 0 4px" }}>הסכם סודיות (NDA) - חברת טק-לוג יק</h3>
                <p style={{ fontSize: 16, color: "#434655", margin: 0 }}>המסמך נחתם על ידי המנכל אבי כהן. עותק חתום נשלח לכל הצדדים במייל.</p>
              </div>
              <button className="alerts-more" style={{ background: "none", border: "none", cursor: "pointer", color: "#737686", padding: 4, flexShrink: 0 }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </button>
            </div>

            {/* Card 2 */}
            <div className="alerts-card" style={{ background: "#fff", border: "1px solid #c3c6d7", borderRadius: 12, padding: 16, display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,218,214,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" fill="#ba1a1a" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#ba1a1a" }}>התראת פקיעה</span>
                  <span style={{ fontSize: 12, color: "#737686" }}>לפני שעתיים</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#181445", margin: "0 0 4px" }}>חוזה שכירות משרדים - קומה 4</h3>
                <p style={{ fontSize: 16, color: "#434655", margin: "0 0 12px" }}>החוזה יפוג בעוד 30 יום. יש להודיע על חידוש או סיום עד ה-15 לחודש.</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ padding: "8px 16px", background: "#004ac6", color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>התחל חידוש</button>
                  <button style={{ padding: "8px 16px", background: "transparent", color: "#181445", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "1px solid #c3c6d7", cursor: "pointer" }}>בטל התראה</button>
                </div>
              </div>
              <button className="alerts-more" style={{ background: "none", border: "none", cursor: "pointer", color: "#737686", padding: 4, flexShrink: 0 }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </button>
            </div>

            {/* Card 3 */}
            <div className="alerts-card" style={{ background: "#fff", border: "1px solid #c3c6d7", borderRadius: 12, padding: 16, display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(88,91,230,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" fill="#3e3fcc" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#3e3fcc" }}>עדכון מערכת</span>
                  <span style={{ fontSize: 12, color: "#737686" }}>אתמול</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#181445", margin: "0 0 4px" }}>תזכורת נשלחה ב-WhatsApp</h3>
                <p style={{ fontSize: 16, color: "#434655", margin: 0 }}>נשלחה תזכורת אוטומטית למר יצחק לוי לחתימה על נספח השירותים הטכניים.</p>
              </div>
              <button className="alerts-more" style={{ background: "none", border: "none", cursor: "pointer", color: "#737686", padding: 4, flexShrink: 0 }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </button>
            </div>

            {/* Timeline */}
            <div style={{ background: "#fff", border: "1px solid #c3c6d7", borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: "#181445", marginBottom: 24 }}>ציר זמן לאבני דרך</h2>
              <div style={{ position: "relative", paddingRight: 24, display: "flex", flexDirection: "column", gap: 32 }}>
                {/* vertical line */}
                <div style={{ position: "absolute", right: 7, top: 8, bottom: 8, width: 2, background: "#c3c6d7" }} />

                <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ position: "absolute", right: -17, width: 16, height: 16, borderRadius: "50%", background: "#004ac6", boxShadow: "0 0 0 4px rgba(0,74,198,0.2)" }} />
                  <div style={{ background: "#f6f2ff", borderRadius: 8, padding: 16, flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#004ac6", marginBottom: 2 }}>היום</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#181445" }}>סיום תקופת ה-Due Diligence</div>
                    <div style={{ fontSize: 12, color: "#434655" }}>פרויקט נאות השרון - שלב ב</div>
                  </div>
                </div>

                <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ position: "absolute", right: -17, width: 16, height: 16, borderRadius: "50%", background: "#c3c6d7" }} />
                  <div style={{ background: "#f6f2ff", borderRadius: 8, padding: 16, flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#434655", marginBottom: 2 }}>15 בינואר, 2025</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#181445" }}>תשלום ראשון - פעימת הצלחה</div>
                    <div style={{ fontSize: 12, color: "#434655" }}>הסכם שירותי ייעוץ - גלובל פיננס</div>
                  </div>
                </div>

                <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16, opacity: 0.6 }}>
                  <div style={{ position: "absolute", right: -17, width: 16, height: 16, borderRadius: "50%", background: "#c3c6d7" }} />
                  <div style={{ background: "#f6f2ff", borderRadius: 8, padding: 16, flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#434655", marginBottom: 2 }}>1 בפברואר, 2025</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#181445" }}>חידוש פוליסת ביטוח חבות</div>
                    <div style={{ fontSize: 12, color: "#434655" }}>סוכנות ביטחון ישיר</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── Sidebar ─── */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Channel Config */}
            <div style={{ background: "rgba(227,223,255,0.3)", border: "1px solid #c3c6d7", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", marginBottom: 16 }}>ערוצי התראות</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* WhatsApp */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="24" height="24" fill="#16a34a" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>WhatsApp</span>
                  </div>
                  <div className="alerts-toggle-track on"><div className="alerts-toggle-thumb" /></div>
                </div>
                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="24" height="24" fill="#3b82f6" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>Email</span>
                  </div>
                  <div className="alerts-toggle-track on"><div className="alerts-toggle-thumb" /></div>
                </div>
                {/* SMS */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="24" height="24" fill="#6366f1" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>SMS</span>
                  </div>
                  <div className="alerts-toggle-track"><div className="alerts-toggle-thumb" /></div>
                </div>
              </div>
            </div>

            {/* Smart Reminders */}
            <div style={{ background: "#004ac6", borderRadius: 16, padding: 24, color: "#fff", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#fff", marginBottom: 8 }}>תזכורות חכמות</h3>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", marginBottom: 24 }}>
                  הגדר תזכורת אוטומטית לפני פקיעת חוזה. המערכת תשלח הודעה חוזרת עד לקבלת תגובה.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 12, border: "1px solid rgba(255,255,255,0.3)" }}>
                  <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>30 יום לפני פקיעה</span>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(40px)" }} />
            </div>

            {/* Performance Widget */}
            <div style={{ background: "#181445", borderRadius: 16, padding: 24, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h4 style={{ fontSize: 24, fontWeight: 600, color: "#fff", margin: 0 }}>מעקב ביצועים</h4>
                  <p style={{ fontSize: 12, color: "#b4c5ff", opacity: 0.8, margin: 0 }}>נתונים בזמן אמת</p>
                </div>
                <div style={{ position: "relative" }}>
                  <div className="alerts-pulse" style={{ width: 12, height: 12, borderRadius: "50%", background: "#ba1a1a" }} />
                </div>
              </div>

              {/* Progress bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>חוזים שנחתמו</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#b4c5ff" }}>85%</span>
                  </div>
                  <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 9999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "85%", background: "#004ac6", borderRadius: 9999 }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>חידושים בתהליך</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#b4c5ff" }}>62%</span>
                  </div>
                  <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 9999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "62%", background: "#c3c0ff", borderRadius: 9999 }} />
                  </div>
                </div>

                {/* Mini chart */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 48 }}>
                  {[40, 60, 30, 80, 50, 90].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: "rgba(0,74,198,0.5)", borderRadius: "3px 3px 0 0", transition: "background 0.2s", cursor: "pointer" }} />
                  ))}
                </div>
              </div>

              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", margin: 0 }}>85% מהחוזים נחתמים תוך 48 שעות</p>

              {/* dot grid */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none", backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            </div>
          </aside>
        </div>
      </div>

      {/* FAB */}
      <button
        className="alerts-shimmer"
        style={{ position: "fixed", bottom: 24, right: 24, width: 64, height: 64, borderRadius: "50%", background: "#004ac6", color: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(0,74,198,0.4)", zIndex: 50, transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
      </button>
    </div>
  );
}
