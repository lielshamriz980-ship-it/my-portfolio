"use client";

const integrations = [
  {
    name: "WhatsApp Business",
    desc: "שלחו חוזים לחתימה ישירות בוואטסאפ וקבלו התראות על סטטוס המסמך.",
    badge: { text: "מותקן", bg: "#f0fdf4", color: "#15803d" },
    action: "הגדרות חיבור",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "Salesforce CRM",
    desc: "סנכרון מלא של לקוחות, עסקאות וחוזים בין DealLayer ל-Salesforce.",
    badge: { text: "פופולרי", bg: "#eff6ff", color: "#1d4ed8" },
    action: "התחברות",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="#00a1e0">
        <path d="M12.9 8c.2-.3.4-.6.6-.9 1.5-2 4.1-2.4 6-1 1.9 1.4 2.2 4.1.8 6-.3.4-.7.8-1.1 1.1-.1.1-.3.2-.4.2.1.2.2.3.4.5 1.5 2 1.2 4.7-.8 6.3s-4.8 1.4-6.4-.6c-.2-.2-.3-.5-.4-.7-.2.2-.4.5-.6.7-1.7 2-4.5 2.2-6.4.5s-2-4.6-.3-6.5c.3-.3.6-.5.9-.7-.3-.2-.6-.5-.9-.8-1.5-1.9-1.2-4.6.7-6.2 1.9-1.5 4.6-1.1 6.1.8.3.4.6.8.8 1.2.3-.2.6-.4.9-.6z"/>
      </svg>
    ),
  },
  {
    name: "Zapier",
    desc: "חברו את DealLayer ליותר מ-5,000 אפליקציות שונות באמצעות זאפייר.",
    badge: null,
    action: "הגדר זאפ",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="#FF4A00">
        <path d="M14.117 13.938H9.883l-4.27 4.27A9.96 9.96 0 0012 22a9.96 9.96 0 006.388-2.293l-4.27-4.27zM9.883 10.062h4.234l4.27-4.27A9.96 9.96 0 0012 2a9.96 9.96 0 00-6.388 2.293l4.27 4.27zM2 12c0 1.86.51 3.6 1.395 5.09l4.27-4.27v-.82L3.395 6.91A9.96 9.96 0 002 12zm20 0c0-1.86-.51-3.6-1.395-5.09l-4.27 4.27v.82l4.27 4.27A9.96 9.96 0 0022 12z"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    desc: "קבלו עדכונים בזמן אמת על חתימות, תיקונים והערות בערוצי הסלאק שלכם.",
    badge: null,
    action: "התחברות",
    icon: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, width: 36, height: 36 }}>
        <div style={{ borderRadius: "50%", background: "#36C5F0", width: 16, height: 16 }} />
        <div style={{ borderRadius: "50%", background: "#2EB67D", width: 16, height: 16 }} />
        <div style={{ borderRadius: "50%", background: "#E01E5A", width: 16, height: 16 }} />
        <div style={{ borderRadius: "50%", background: "#ECB22E", width: 16, height: 16 }} />
      </div>
    ),
  },
  {
    name: "Gmail",
    desc: "שמרו אימיילים וצרו חוזים ישירות מתיבת הדואר הנכנס שלכם.",
    badge: { text: "מותקן", bg: "#f0fdf4", color: "#15803d" },
    action: "ניהול",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    desc: "משכו נתוני CRM להכנת חוזים אוטומטית ועדכנו סטטוס עסקה לאחר חתימה.",
    badge: null,
    action: "התחברות",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="#FF7A59">
        <path d="M22.162 5.656a8.383 8.383 0 00-1.668-.09c-1.395.098-2.716.662-3.742 1.592V4.5A1.5 1.5 0 0015.25 3h-.5A1.5 1.5 0 0013.25 4.5v6.25a5.5 5.5 0 10.5 2.75V12a5.5 5.5 0 01.5-.25v1.75A1.5 1.5 0 0015.75 15h.5a1.5 1.5 0 001.5-1.5V9.656a5.78 5.78 0 014.412-3.5zm-8.912 9.094a3 3 0 11-3-3 3 3 0 013 3z"/>
      </svg>
    ),
  },
];

export function IntegrationsServicePageV3() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .int-shimmer { position: relative; overflow: hidden; }
        .int-shimmer::after {
          content: ""; position: absolute; top: 0; right: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: intShimmer 3s linear infinite;
        }
        @keyframes intShimmer { 0%{right:-100%} 100%{right:100%} }
        .int-float { animation: intFloat 6s ease-in-out infinite; }
        @keyframes intFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .int-dash { stroke-dasharray: 8; animation: intDash 20s linear infinite; }
        @keyframes intDash { to{stroke-dashoffset:-1000} }
        .int-card { transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
        .int-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(79,70,229,0.1); }
        .int-card:hover .int-btn { background: #004ac6 !important; color: #fff !important; }
        @media (max-width: 768px) {
          .int-grid-2 { grid-template-columns: 1fr !important; }
          .int-grid-3 { grid-template-columns: 1fr !important; }
          .int-section { padding: 48px 16px !important; }
          .int-h2 { font-size: clamp(22px, 6vw, 36px) !important; }
        }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "16px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>אינטגרציות</h1>
      </div>

      <main>
        {/* ─── Hero Section ─── */}
        <header style={{ padding: "64px 24px 96px", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Text */}
            <div style={{ textAlign: "right" }}>
              <span style={{ display: "inline-block", padding: "4px 16px", background: "rgba(100,94,251,0.1)", color: "#4b41e1", fontSize: 14, fontWeight: 600, borderRadius: 9999, marginBottom: 16 }}>חיבורים חכמים</span>
              <h2 style={{ fontSize: 48, fontWeight: 700, color: "#181445", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 24 }}>
                חברו את DealLayer לכל הכלים שלכם
              </h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, maxWidth: 560, marginBottom: 32 }}>
                אוטומציה מלאה של תהליכי העבודה המשפטיים והעסקיים. סנכרנו נתונים בזמן אמת בין המערכות המרכזיות שלכם וצמצמו עבודה ידנית.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="int-shimmer" style={{ background: "#004ac6", color: "#fff", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,74,198,0.3)" }}>התחילו עכשיו</button>
                <button style={{ background: "#fcf8ff", color: "#004ac6", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "1px solid #c3c6d7", cursor: "pointer" }}>צפו בדוקומנטציה</button>
              </div>
            </div>

            {/* Connection Animation */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: 400 }}>
              {/* Background circles */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15, pointerEvents: "none" }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="80" stroke="#004ac6" strokeDasharray="4 4" strokeWidth="1" fill="none"/>
                  <circle cx="200" cy="200" r="140" stroke="#4b41e1" strokeDasharray="4 4" strokeWidth="1" fill="none"/>
                </svg>
              </div>

              {/* Connection lines */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 400 400">
                <path className="int-dash" d="M200 200 L320 60" stroke="#004ac6" strokeWidth="2" fill="none" opacity="0.3"/>
                <path className="int-dash" d="M200 200 L80 340" stroke="#004ac6" strokeWidth="2" fill="none" opacity="0.3"/>
                <path className="int-dash" d="M200 200 L20 200" stroke="#004ac6" strokeWidth="2" fill="none" opacity="0.3"/>
                <path className="int-dash" d="M200 200 L120 40" stroke="#004ac6" strokeWidth="2" fill="none" opacity="0.3"/>
              </svg>

              {/* Center DL hub */}
              <div className="int-float" style={{ zIndex: 20, background: "#004ac6", width: 96, height: 96, borderRadius: 24, boxShadow: "0 8px 32px rgba(0,74,198,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 24 }}>DL</span>
              </div>

              {/* Floating app icons */}
              {[
                { top: "10%", right: "20%", delay: "1s", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                { bottom: "10%", left: "20%", delay: "2s", icon: <svg width="40" height="40" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
                { top: "50%", left: "-2%", delay: "1.5s", icon: <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}><div style={{ width: 14, height: 14, borderRadius: "50%", background: "#36C5F0" }}/><div style={{ width: 14, height: 14, borderRadius: "50%", background: "#2EB67D" }}/><div style={{ width: 14, height: 14, borderRadius: "50%", background: "#E01E5A" }}/><div style={{ width: 14, height: 14, borderRadius: "50%", background: "#ECB22E" }}/></div> },
                { top: "0%", left: "25%", delay: "0.5s", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF4A00"><path d="M14.117 13.938H9.883l-4.27 4.27A9.96 9.96 0 0012 22a9.96 9.96 0 006.388-2.293l-4.27-4.27zM9.883 10.062h4.234l4.27-4.27A9.96 9.96 0 0012 2a9.96 9.96 0 00-6.388 2.293l4.27 4.27zM2 12c0 1.86.51 3.6 1.395 5.09l4.27-4.27v-.82L3.395 6.91A9.96 9.96 0 002 12zm20 0c0-1.86-.51-3.6-1.395-5.09l-4.27 4.27v.82l4.27 4.27A9.96 9.96 0 0022 12z"/></svg> },
              ].map((item, i) => (
                <div key={i} className="int-float" style={{ position: "absolute", ...item, background: "#fff", padding: 14, borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", animationDelay: item.delay, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ─── Integration Marketplace ─── */}
        <section style={{ padding: "48px 24px", background: "#f6f2ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
              <div>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 8 }}>מרכז האינטגרציות</h2>
                <p style={{ fontSize: 16, color: "#434655" }}>בחרו את הכלים שאתם כבר עובדים איתם וחברו אותם בלחיצת כפתור</p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["הכל", "CRM", "תקשורת", "אוטומציה"].map((f, i) => (
                  <span key={f} style={{ padding: "8px 20px", borderRadius: 9999, fontSize: 14, fontWeight: 600, cursor: "pointer", background: i === 0 ? "#fcf8ff" : "#fcf8ff", color: i === 0 ? "#004ac6" : "#434655", border: i === 0 ? "1px solid #004ac6" : "1px solid #c3c6d7" }}>{f}</span>
                ))}
              </div>
            </div>

            {/* Cards grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {integrations.map((int) => (
                <div key={int.name} className="int-card" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(227,223,255,0.5)", borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                    <div style={{ width: 56, height: 56, background: "#fff", borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
                      {int.icon}
                    </div>
                    {int.badge && (
                      <span style={{ padding: "4px 12px", background: int.badge.bg, color: int.badge.color, fontSize: 12, borderRadius: 9999 }}>{int.badge.text}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", marginBottom: 8 }}>{int.name}</h3>
                  <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6, marginBottom: 24 }}>{int.desc}</p>
                  <button className="int-btn" style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid #004ac6", color: "#004ac6", fontSize: 14, fontWeight: 600, background: "transparent", cursor: "pointer" }}>
                    {int.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── No-Code Automation Section ─── */}
        <section style={{ padding: "48px 24px", background: "#fcf8ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Visual */}
            <div style={{ background: "#181445", borderRadius: 24, padding: 32, minHeight: 400, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: "▶", label: "כאשר:", value: "חוזה נחתם", bg: "rgba(0,74,198,0.2)", vc: "#b4c5ff" },
                    { icon: "✉", label: "בצע:", value: "שלח אימייל אישור ללקוח", bg: "rgba(75,65,225,0.2)", vc: "#c3c0ff" },
                    { icon: "🗄", label: "בצע:", value: "עדכן סטטוס ב-CRM", bg: "rgba(62,63,204,0.2)", vc: "#c0c1ff" },
                  ].map((step, i) => (
                    <div key={i}>
                      {i > 0 && <div style={{ width: 2, height: 24, background: "rgba(255,255,255,0.15)", margin: "0 16px -8px" }} />}
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ padding: 8, background: step.bg, borderRadius: 8, fontSize: 16 }}>{step.icon}</div>
                        <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                          {step.label} <span style={{ color: step.vc }}>{step.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ textAlign: "right" }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 16 }}>אוטומציה ללא קוד</h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, marginBottom: 32 }}>
                הפכו תהליכים מורכבים לפשוטים. בעזרת בונה האוטומציות שלנו, תוכלו להגדיר תהליכי עבודה המופעלים אוטומטית על פי אירועים במערכת DealLayer.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "עדכון אוטומטי של מערכות CRM לאחר חתימה",
                  "שליחת העתקי חוזים לתיקיות ייעודיות ב-Google Drive",
                  "התראות מותאמות אישית ב-Slack ובוואטסאפ",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, flexDirection: "row-reverse" }}>
                    <span style={{ fontSize: 16, color: "#181445" }}>{item}</span>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(0,74,198,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" fill="#004ac6" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="int-shimmer" style={{ background: "#4b41e1", color: "#fff", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(75,65,225,0.3)" }}>
                התחילו לבנות אוטומציה
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
