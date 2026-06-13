"use client";

export function SecurityPrivacyServicePageV3() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .sec-shimmer { position: relative; overflow: hidden; }
        .sec-shimmer::after {
          content: ""; position: absolute; top: 0; left: -150%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: secShimmer 3s infinite;
        }
        @keyframes secShimmer { 0%{left:-150%} 100%{left:150%} }
        .sec-card { transition: transform 0.3s, box-shadow 0.3s; }
        .sec-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(79,70,229,0.08); }
        @keyframes secDash { to { stroke-dashoffset: 0; } }
        .security-path {
          stroke-dasharray: 1000; stroke-dashoffset: 1000;
          animation: secDash 5s linear infinite;
        }
        @keyframes secPing {
          0%{transform:scale(1);opacity:1}
          75%,100%{transform:scale(2);opacity:0}
        }
        .sec-ping { animation: secPing 1.5s cubic-bezier(0,0,0.2,1) infinite; }
        @media (max-width: 768px) {
          .sec-grid-2 { grid-template-columns: 1fr !important; }
          .sec-grid-3 { grid-template-columns: 1fr !important; }
          .sec-section { padding: 48px 16px !important; }
          .sec-h2 { font-size: clamp(22px, 6vw, 36px) !important; }
        }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "16px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>אבטחה ופרטיות</h1>
      </div>

      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>

        {/* ─── Hero Section ─── */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 96 }}>
          {/* Text */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "#dbe1ff", color: "#003ea8", borderRadius: 9999, fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/></svg>
              סטנדרט אבטחה ארגוני
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: "#181445", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              הגנה רב-שכבתית על המידע המשפטי שלך
            </h2>
            <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, marginBottom: 32, maxWidth: 600 }}>
              ב-DealLayer, אבטחת מידע היא לא תכונה, היא היסוד עליו נבנינו. אנו מיישמים את הסטנדרטים המחמירים ביותר בעולם כדי להבטיח שהחוזים והנתונים שלך נשארים חסויים ומוגנים.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, background: "#f6f2ff", borderRadius: 12, border: "1px solid #c3c6d7" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", border: "2px solid rgba(0,74,198,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div className="sec-ping" style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "rgba(0,74,198,0.1)" }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#004ac6" }}>SOC2</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#181445" }}>SOC2 Type II</div>
                  <div style={{ fontSize: 12, color: "#434655" }}>מוסמך באופן מלא</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, background: "#f6f2ff", borderRadius: 12, border: "1px solid #c3c6d7" }}>
                <svg width="40" height="40" fill="#004ac6" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#181445" }}>AES-256</div>
                  <div style={{ fontSize: 12, color: "#434655" }}>הצפנה מקצה לקצה</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "1", borderRadius: 24, overflow: "hidden", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }} viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="flowGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <g fill="none" strokeWidth="2">
                  <path className="security-path" d="M0,50 Q100,20 200,50 T400,50" stroke="url(#flowGrad)" />
                  <path className="security-path" d="M0,150 Q100,120 200,150 T400,150" stroke="url(#flowGrad)" style={{ animationDelay: "-1s" }} />
                  <path className="security-path" d="M0,250 Q100,220 200,250 T400,250" stroke="url(#flowGrad)" style={{ animationDelay: "-2s" }} />
                  <path className="security-path" d="M0,350 Q100,320 200,350 T400,350" stroke="url(#flowGrad)" style={{ animationDelay: "-3s" }} />
                </g>
              </svg>
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ position: "relative", marginBottom: 24 }}>
                  <div style={{ position: "absolute", inset: -8, background: "rgba(0,74,198,0.2)", borderRadius: "50%", filter: "blur(20px)" }} />
                  <div style={{ width: 96, height: 96, borderRadius: "50%", background: "rgba(0,74,198,0.2)", border: "2px solid rgba(0,74,198,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="48" height="48" fill="#fff" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                  </div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontFamily: "monospace", fontSize: 12, textAlign: "center" }}>
                  <div>ENCRYPTING DATA_PACKETS...</div>
                  <div style={{ marginTop: 8, opacity: 0.4, fontSize: 10 }}>AES-256-GCM // RSA-4096</div>
                </div>
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,74,198,0.2), transparent)" }} />
            </div>
            {/* Floating card */}
            <div style={{ position: "absolute", bottom: -24, right: -24, background: "#fcf8ff", padding: 16, borderRadius: 16, boxShadow: "0 20px 40px rgba(79,70,229,0.08)", border: "1px solid #c3c6d7", maxWidth: 240 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#181445" }}>ניטור בזמן אמת</span>
              </div>
              <p style={{ fontSize: 12, color: "#434655", margin: 0, lineHeight: 1.5 }}>המערכת מנטרת 24/7 ניסיונות גישה לא מורשים ופרצות אבטחה פוטנציאליות.</p>
            </div>
          </div>
        </section>

        {/* ─── Features Bento Grid ─── */}
        <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>ארכיטקטורת אבטחה ללא פשרות</h2>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 24 }}>
          {/* 2FA Card */}
          <div className="sec-card" style={{ background: "#fcf8ff", border: "1px solid #c3c6d7", borderRadius: 24, padding: 32, boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#dbe1ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="24" height="24" fill="#004ac6" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", marginBottom: 8 }}>אימות דו-שלבי (2FA)</h3>
                <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6, marginBottom: 16 }}>שכבת הגנה נוספת לכל משתמש. הגנה מפני גניבת זהויות וסיסמאות באמצעות אפליקציות אימות או קודי SMS מוצפנים.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["תמיכה ב-Google Authenticator ו-Authy", "קודי גיבוי חד-פעמיים"].map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#181445" }}>
                      <svg width="18" height="18" fill="#16a34a" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              {/* Mock 2FA UI */}
              <div style={{ background: "#f6f2ff", borderRadius: 16, border: "1px dashed #c3c6d7", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ background: "#fff", padding: 16, borderRadius: 12, border: "1px solid #c3c6d7", width: "100%", maxWidth: 180, display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ height: 8, width: "50%", background: "#e3dfff", borderRadius: 4 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                    <div style={{ width: 40, height: 40, border: "2px solid #004ac6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#004ac6" }}>4</div>
                    {[1, 2, 3].map(i => (
                      <div key={i} style={{ width: 40, height: 40, border: "1px solid #c3c6d7", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#737686" }}>_</div>
                    ))}
                  </div>
                  <div style={{ height: 32, background: "#004ac6", borderRadius: 8 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Encryption Card */}
          <div style={{ background: "#004ac6", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, color: "#fff", marginBottom: 8 }}>הצפנת AES-256</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>הנתונים שלך מוצפנים במצב מנוחה ובזמן העברה באמצעות תקני ההצפנה של הבנקים והצבא.</p>
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 8, position: "relative", zIndex: 1 }}>
              {["M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z", "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"].map((d, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24"><path d={d} /></svg>
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, background: "rgba(255,255,255,0.05)", borderRadius: "50%", filter: "blur(40px)" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 96 }}>
          {/* Cloud Storage */}
          <div className="sec-card" style={{ background: "#fcf8ff", border: "1px solid #c3c6d7", borderRadius: 24, padding: 32, boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e2dfff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <svg width="24" height="24" fill="#4b41e1" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", marginBottom: 8 }}>אחסון ענן מאובטח</h3>
            <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6 }}>הנתונים מאוחסנים בחוות שרתים מאובטחות (AWS/Azure) באזורי פריסה המותאמים לרגולציה המקומית, כולל יתירות מלאה וגיבויים אוטומטיים.</p>
          </div>

          {/* Privacy Card */}
          <div style={{ background: "#585be6", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <svg width="40" height="40" fill="#f1eeff" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l7 3.11V11c0 3.82-2.63 7.4-7 8.93-4.37-1.53-7-5.11-7-8.93V8.11L12 5z"/></svg>
              <h3 style={{ fontSize: 24, fontWeight: 600, color: "#f1eeff" }}>פרטיות כערך עליון</h3>
            </div>
            <p style={{ fontSize: 16, color: "rgba(241,238,255,0.9)", lineHeight: 1.6, marginBottom: 16 }}>אנו מתחייבים לעולם לא למכור או לשתף את הנתונים שלך עם צדדים שלישיים לצרכי שיווק. המידע שלך שייך לך, ואנחנו רק השומרים שלו.</p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none" }}>
              קרא את מדיניות הפרטיות המלאה
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
            </a>
          </div>
        </div>

        {/* ─── Privacy Policy Summary ─── */}
        <section style={{ background: "#fff", borderRadius: 24, border: "1px solid #c3c6d7", padding: 48, marginBottom: 96 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 40 }}>סיכום מדיניות הפרטיות</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { title: "איסוף נתונים", text: "אנו אוספים רק את המידע הנחוץ למתן השירות: פרטי משתמש בסיסיים ומסמכים המועלים על ידך באופן יזום." },
              { title: "שימוש במידע", text: "השימוש היחיד במידע הוא לשיפור חווית המשתמש ומתן כלים לניהול חוזים בצורה חכמה ויעילה יותר." },
              { title: "זכויות המשתמש", text: "זכותך לבקש מחיקה מלאה של המידע שלך בכל עת. אנו מיישמים את הסטנדרטים של GDPR גם עבור לקוחותינו בישראל." },
              { title: "שיתוף צד ג'", text: "אין שיתוף מידע עם צדדים שלישיים למעט ספקי תשתית הכרחיים תחת הסכמי סודיות קפדניים." },
              { title: "עדכוני מדיניות", text: "כל שינוי מהותי במדיניות הפרטיות ידווח למשתמשים באופן יזום בדוא״ל לפחות 30 יום מראש." },
              { title: "אחראי הגנת פרטיות", text: "מיניתנו ממונה הגנת פרטיות (DPO) ייעודי שאחראי על עמידה בתקנים ובדיקות תקופתיות." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: "#004ac6", margin: 0 }}>{item.title}</h4>
                <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section style={{ background: "#2563eb", borderRadius: 24, padding: 64, textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#fff", marginBottom: 16 }}>מוכנים לאבטח את העסק שלכם?</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32, lineHeight: 1.6 }}>
              הצטרפו למאות חברות שכבר נהנות מהשקט הנפשי של DealLayer. המידע שלכם בידיים הטובות ביותר.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="sec-shimmer" style={{ background: "#fff", color: "#004ac6", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                התחילו עכשיו חינם
              </button>
              <button style={{ background: "transparent", color: "#fff", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer" }}>
                דברו עם מומחה אבטחה
              </button>
            </div>
          </div>
          <div style={{ position: "absolute", top: -96, left: -96, width: 256, height: 256, background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: -96, right: -96, width: 256, height: 256, background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(60px)" }} />
        </section>
      </main>
    </div>
  );
}
