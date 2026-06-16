"use client";

export function ContractManagementServicePageV2() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .cm-shimmer { position: relative; overflow: hidden; }
        .cm-shimmer::after {
          content: ''; position: absolute;
          top: -50%; right: -50%; bottom: -50%; left: -50%;
          background: linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          transform: rotateZ(45deg);
          animation: cmShimmer 3s linear infinite;
        }
        @keyframes cmShimmer {
          from{transform:translate(-100%,-100%) rotate(45deg)}
          to{transform:translate(100%,100%) rotate(45deg)}
        }
        .cm-bar { animation: cmBarGrow 1.5s ease-out forwards; transform-origin: bottom; }
        @keyframes cmBarGrow { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        .cm-float { animation: cmFloat 4s ease-in-out infinite; }
        @keyframes cmFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        .cm-dash { stroke-dasharray: 8; animation: cmDash 20s linear infinite; }
        @keyframes cmDash { to{stroke-dashoffset:-1000} }
        .cm-pulse { animation: cmPulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }
        @keyframes cmPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.1)} }
        .cm-card { transition: transform 0.3s, box-shadow 0.3s; }
        .cm-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,74,198,0.1); }
        @media (max-width: 768px) {
          .cm-grid-2 { grid-template-columns: 1fr !important; gap: 16px !important; }
          .cm-section { padding: 48px 20px !important; }
          .cm-h2 { font-size: clamp(24px, 6vw, 42px) !important; }
        }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "12px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>ניהול חוזים</h1>
      </div>

      <main style={{ overflow: "hidden" }}>
        {/* ─── Hero / Dashboard Mockup ─── */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 800, color: "#181445", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 16 }}>
              ניהול חוזים בעידן הדיגיטלי
            </h2>
            <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
              מערכת חכמה לניהול, מעקב ואוטומציה של הסכמים משפטיים עם דיוק מקסימלי וחווית משתמש מתקדמת.
            </p>
          </div>

          {/* Bento Grid Dashboard */}
          <div className="cm-grid-2" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
            {/* Main Chart */}
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #c3c6d7", padding: 24, boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#004ac6", margin: 0 }}>נפח חוזים לאורך זמן</h3>
                <span style={{ background: "#efebff", padding: "4px 8px", borderRadius: 6, fontSize: 12, color: "#434655" }}>6 חודשים אחרונים</span>
              </div>
              <div style={{ height: 256, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8, padding: "0 16px 16px" }}>
                {[
                  { h: "45%", active: false, delay: "0s" },
                  { h: "60%", active: false, delay: "0.1s" },
                  { h: "52%", active: false, delay: "0.2s" },
                  { h: "75%", active: false, delay: "0.3s" },
                  { h: "65%", active: false, delay: "0.4s" },
                  { h: "90%", active: true, delay: "0.5s" },
                ].map((bar, i) => (
                  <div key={i} className="cm-bar" style={{ flex: 1, height: bar.h, background: bar.active ? "#004ac6" : "rgba(37,99,235,0.2)", borderRadius: "4px 4px 0 0", animationDelay: bar.delay, cursor: "pointer", transition: "background 0.2s" }} />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #c3c6d7", padding: 24, flex: 1, boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#434655" }}>חוזים פעילים</span>
                  <svg width="24" height="24" fill="#004ac6" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                </div>
                <div style={{ fontSize: 48, fontWeight: 700, color: "#004ac6", lineHeight: 1.1 }}>1,284</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#16a34a", fontSize: 12, marginTop: 4 }}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>
                  12%+ מהחודש שעבר
                </div>
              </div>
              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #c3c6d7", padding: 24, flex: 1, boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#434655" }}>ממתינים לחתימה</span>
                  <svg width="24" height="24" fill="#4b41e1" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                </div>
                <div style={{ fontSize: 48, fontWeight: 700, color: "#4b41e1", lineHeight: 1.1 }}>42</div>
                <div style={{ marginTop: 8, height: 6, background: "#e3dfff", borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "65%", background: "#4b41e1", borderRadius: 9999 }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Smart Alerts & Search ─── */}
        <section style={{ background: "#f6f2ff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {/* Smart Alerts */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(0,74,198,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" fill="#004ac6" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                </div>
                <div>
                  <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>התראות חכמות</h2>
                  <p style={{ fontSize: 16, color: "#434655", margin: 0 }}>אל תפספסו אף חידוש או תאריך יעד קריטי.</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: "#fff", padding: 16, borderRadius: 12, borderRight: "4px solid #ba1a1a", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="20" height="20" fill="#ba1a1a" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>חוזה שכירות - משרדים ראשיים</p>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>פג תוקף בעוד 14 ימים</p>
                    </div>
                  </div>
                  <button style={{ color: "#004ac6", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>טפל עכשיו</button>
                </div>
                <div style={{ background: "#fff", padding: 16, borderRadius: 12, borderRight: "4px solid #4b41e1", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="20" height="20" fill="#4b41e1" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>הסכם ספק - שירותי ענן</p>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>חידוש אוטומטי בעוד 30 ימים</p>
                    </div>
                  </div>
                  <button style={{ color: "#004ac6", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>סקירה</button>
                </div>
              </div>
            </div>

            {/* Search & Filter */}
            <div style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>חיפוש וסינון מתקדם</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ position: "relative" }}>
                  <svg style={{ position: "absolute", right: 12, top: 12, color: "#737686" }} width="20" height="20" fill="#737686" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                  <input dir="rtl" placeholder="חפש לפי שם חוזה, צד ג' או תוכן..." style={{ width: "100%", background: "#efebff", padding: "12px 40px 12px 12px", borderRadius: 12, border: "none", fontSize: 16, outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <span style={{ background: "#004ac6", color: "#fff", padding: "4px 12px", borderRadius: 9999, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    סוג: הסכם העסקה
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  </span>
                  <span style={{ background: "rgba(0,74,198,0.08)", color: "#004ac6", padding: "4px 12px", borderRadius: 9999, fontSize: 14, fontWeight: 600, border: "1px solid rgba(0,74,198,0.2)", display: "flex", alignItems: "center", gap: 4 }}>
                    סטטוס: פעיל
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  </span>
                  <span style={{ background: "rgba(0,74,198,0.08)", color: "#004ac6", padding: "4px 12px", borderRadius: 9999, fontSize: 14, fontWeight: 600, border: "1px solid rgba(0,74,198,0.2)", display: "flex", alignItems: "center", gap: 4 }}>
                    שנה: 2024
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  </span>
                </div>
                <div style={{ borderTop: "1px solid #c3c6d7", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "#434655" }}>נמצאו 12 תוצאות מתאימות</span>
                  <button style={{ color: "#004ac6", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>נקה הכל</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Document Flow ─── */}
        <section style={{ padding: "48px 24px", background: "#fcf8ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(88,91,230,0.1)", color: "#3e3fcc", borderRadius: 9999, fontSize: 14, fontWeight: 600, alignSelf: "flex-end" }}>אוטומציה מלאה</span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>זרימת מסמכים חכמה</h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>
                המערכת מנתחת אוטומטית כל חוזה, מזהה שלבים בשרשרת האישורים ומצמצמת זמני המתנה מיותרים בעזרת לוגיקה עסקית מובנית.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: <svg width="20" height="20" fill="#004ac6" viewBox="0 0 24 24"><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"/></svg>, title: "מיפוי תהליכים", desc: "זיהוי צווארי בקבוק בזמן אמת" },
                  { icon: <svg width="20" height="20" fill="#004ac6" viewBox="0 0 24 24"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z"/></svg>, title: "סריקת AI", desc: "חילוץ נתונים אוטומטי" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    {item.icon}
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{item.title}</p>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Diagram */}
            <div style={{ background: "#fff", borderRadius: 24, boxShadow: "0 20px 40px rgba(79,70,229,0.06)", border: "1px solid #c3c6d7", padding: 48, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400, position: "relative", overflow: "hidden" }}>
              <svg style={{ width: "100%", maxWidth: 400, height: "auto", overflow: "visible" }} viewBox="0 0 300 200">
                <defs>
                  <marker id="arrowCM" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
                    <polygon fill="#004ac6" points="0 0, 10 3.5, 0 7"/>
                  </marker>
                </defs>
                <g className="cm-float" style={{ animationDelay: "0s" }}>
                  <rect x="20" y="80" width="60" height="40" rx="8" fill="#fcf8ff" stroke="#004ac6" strokeWidth="2"/>
                  <text x="50" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#004ac6">העלאה</text>
                </g>
                <g className="cm-float" style={{ animationDelay: "0.5s" }}>
                  <rect x="120" y="80" width="60" height="40" rx="8" fill="#004ac6"/>
                  <text x="150" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">ניתוח AI</text>
                  <circle className="cm-pulse" cx="150" cy="80" r="10" fill="#fff" stroke="#004ac6" strokeWidth="2"/>
                  <text x="150" y="84" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#004ac6">✨</text>
                </g>
                <g className="cm-float" style={{ animationDelay: "1s" }}>
                  <rect x="220" y="80" width="60" height="40" rx="8" fill="#fcf8ff" stroke="#004ac6" strokeWidth="2"/>
                  <text x="250" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#004ac6">חתימה</text>
                </g>
                <path className="cm-dash" d="M 80 100 L 115 100" markerEnd="url(#arrowCM)" stroke="#004ac6" strokeWidth="2" fill="none"/>
                <path className="cm-dash" d="M 180 100 L 215 100" markerEnd="url(#arrowCM)" stroke="#004ac6" strokeWidth="2" fill="none"/>
                <path d="M 50 120 Q 100 160 150 120" fill="none" stroke="#c3c6d7" strokeDasharray="4" strokeWidth="1"/>
              </svg>
              <div style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(0,74,198,0.05)", padding: "4px 8px", borderRadius: 4, fontSize: 11, color: "#004ac6", fontWeight: 700 }}>Document Flow Logic V2.0</div>
            </div>
          </div>
        </section>

        {/* ─── Analytics Section ─── */}
        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Dark analytics widget */}
            <div style={{ background: "#2d2a5b", borderRadius: 24, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400, padding: 32 }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }} viewBox="0 0 400 400">
                <pattern id="gridCM" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#gridCM)"/>
              </svg>
              <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", padding: 16, borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>תחזית תזרים רבעונית</span>
                    <span style={{ color: "#b4c5ff", fontSize: 10, background: "rgba(0,74,198,0.2)", padding: "2px 8px", borderRadius: 4 }}>LIVE</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 80 }}>
                    {[60, 40, 80, 95].map((h, i) => (
                      <div key={i} className="cm-bar" style={{ flex: 1, height: `${h}%`, background: i === 3 ? "#b4c5ff" : "rgba(180,197,255,0.4)", borderRadius: "3px 3px 0 0", animationDelay: `${i * 0.1}s` }}/>
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", padding: 16, borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, display: "block", marginBottom: 4 }}>חוזים שנסרקו</span>
                    <span style={{ color: "#fff", fontSize: 24, fontWeight: 600 }}>14.2K</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", padding: 16, borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, display: "block", marginBottom: 4 }}>דיוק מודל</span>
                    <span style={{ color: "#fff", fontSize: 24, fontWeight: 600 }}>98.4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(88,91,230,0.1)", color: "#3e3fcc", borderRadius: 9999, fontSize: 14, fontWeight: 600, alignSelf: "flex-end" }}>אבטחה ברמת Enterprise</span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>אנליטיקה מאובטחת בענן</h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>
                הנתונים שלך מעובדים בסטנדרטים המחמירים ביותר. גישה מהירה לתובנות עסקיות מכל מקום, עם ניהול הרשאות קפדני והצפנה מקצה לקצה.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: <svg width="20" height="20" fill="#004ac6" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/></svg>, title: "הצפנה מתקדמת", desc: "AES-256 להגנה מלאה" },
                  { icon: <svg width="20" height="20" fill="#004ac6" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/></svg>, title: "סנכרון רציף", desc: "עדכוני דאטה בזמן אמת" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    {item.icon}
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{item.title}</p>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section style={{ padding: "0 24px 48px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ background: "#004ac6", borderRadius: 24, padding: 64, textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <circle cx="20" cy="20" r="15" fill="white"/>
                  <circle cx="80" cy="80" r="10" fill="white"/>
                  <circle cx="50" cy="50" r="20" fill="white"/>
                </svg>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 16 }}>מוכנים לייעל את המחלקה המשפטית?</h2>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32, lineHeight: 1.6 }}>
                  הצטרפו למאות חברות שכבר מנהלות את החוזים שלהן בחכמה עם תובנות מבוססות דאטה.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                  <button className="cm-shimmer" style={{ background: "#fff", color: "#004ac6", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                    קבעו הדגמה אישית
                  </button>
                  <button style={{ background: "transparent", color: "#fff", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer" }}>
                    צפו במחירון
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
