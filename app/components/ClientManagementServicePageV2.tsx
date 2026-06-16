"use client";

export function ClientManagementServicePageV2() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .clm-shimmer { position: relative; overflow: hidden; }
        .clm-shimmer::after {
          content: ""; position: absolute; top: 0; right: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: clmShimmer 3s linear infinite;
        }
        @keyframes clmShimmer { 0%{right:-100%} 100%{right:100%} }
        .clm-pulse { animation: clmPulse 2s infinite ease-in-out; }
        @keyframes clmPulse { 0%,100%{transform:scale(1);opacity:0.8} 50%{transform:scale(1.1);opacity:1} }
        .clm-card { transition: transform 0.3s, box-shadow 0.3s; }
        .clm-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(79,70,229,0.1); }
        @media (max-width: 768px) {
          .clm-grid-2 { grid-template-columns: 1fr !important; gap: 16px !important; }
          .clm-section { padding: 40px 20px !important; }
        }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "12px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>ניהול לקוחות</h1>
      </div>

      <main style={{ overflow: "hidden" }}>
        {/* ─── Hero Section ─── */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
          <div className="clm-grid-2" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 48, alignItems: "center" }}>
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "#dbe1ff", color: "#003ea8", borderRadius: 9999, fontSize: 14, fontWeight: 600, alignSelf: "flex-end" }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/></svg>
                ניהול לקוחות חכם
              </span>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 800, color: "#181445", lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
                בנה מערכות יחסים, לא רק רשימות אנשי קשר.
              </h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, maxWidth: 520 }}>
                ה-CRM המשפטי המאפשר לך לראות את התמונה המלאה. חוזים חתומים, היסטוריית עסקאות ותקשורת רציפה - הכל במקום אחד מאובטח ומקצועי.
              </p>
              <button className="clm-shimmer" style={{ background: "#004ac6", color: "#fff", padding: "16px 32px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,74,198,0.3)", alignSelf: "flex-end" }}>
                נהל את העסקאות שלך טוב יותר
              </button>
            </div>

            {/* CRM Card Visual */}
            <div style={{ position: "relative" }}>
              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #c3c6d7", padding: 24, boxShadow: "0 20px 40px rgba(79,70,229,0.08)", position: "relative", zIndex: 1, overflow: "hidden" }}>
                {/* Profile Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e3dfff", paddingBottom: 16, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#eeefff", border: "2px solid #004ac6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="28" height="28" fill="#004ac6" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>אבי כהן</h3>
                      <p style={{ fontSize: 14, color: "#434655", margin: 0 }}>מנכ"ל - טכנולוגיות בע"מ</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ background: "#f0fdf4", color: "#15803d", padding: "4px 10px", borderRadius: 9999, fontSize: 12 }}>פעיל</span>
                    <div style={{ padding: 6, background: "#efebff", borderRadius: 8, cursor: "pointer" }}>
                      <svg width="20" height="20" fill="#434655" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Relationship Map SVG */}
                <div style={{ background: "#f6f2ff", borderRadius: 12, marginBottom: 16, overflow: "hidden", border: "1px solid rgba(195,198,215,0.3)", position: "relative", height: 192 }}>
                  <svg style={{ width: "100%", height: "100%", padding: 16 }} viewBox="0 0 400 200">
                    <defs>
                      <marker id="arrowCLM" markerHeight="10" markerWidth="10" orient="auto" refX="8" refY="5">
                        <path d="M0,0 L0,10 L10,5 Z" fill="#737686"/>
                      </marker>
                    </defs>
                    <path d="M200,100 L100,50" markerEnd="url(#arrowCLM)" stroke="#c3c6d7" strokeDasharray="4" strokeWidth="2"/>
                    <path d="M200,100 L300,50" markerEnd="url(#arrowCLM)" stroke="#c3c6d7" strokeDasharray="4" strokeWidth="2"/>
                    <path d="M200,100 L100,150" markerEnd="url(#arrowCLM)" stroke="#c3c6d7" strokeDasharray="4" strokeWidth="2"/>
                    <path d="M200,100 L300,150" markerEnd="url(#arrowCLM)" stroke="#c3c6d7" strokeDasharray="4" strokeWidth="2"/>
                    <circle className="clm-pulse" cx="200" cy="100" r="25" fill="#004ac6"/>
                    <text x="200" y="105" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">אבי</text>
                    {[{cx:100,cy:50,t:'סמנכ"ל'},{cx:300,cy:50,t:'יועמ"ש'},{cx:100,cy:150,t:'רכש'},{cx:300,cy:150,t:'כספים'}].map((n,i)=>(
                      <g key={i}>
                        <circle cx={n.cx} cy={n.cy} r="18" fill="#4b41e1"/>
                        <text x={n.cx} y={n.cy+4} textAnchor="middle" fontSize="8" fill="white">{n.t}</text>
                      </g>
                    ))}
                  </svg>
                  <div style={{ position: "absolute", bottom: 8, right: 8, padding: "2px 8px", background: "rgba(255,255,255,0.8)", borderRadius: 4, fontSize: 11, color: "#434655" }}>מפת קשרים ארגונית</div>
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                  <div style={{ background: "#f6f2ff", padding: 12, borderRadius: 12, border: "1px solid rgba(195,198,215,0.3)" }}>
                    <p style={{ fontSize: 12, color: "#434655", margin: "0 0 4px" }}>סך עסקאות</p>
                    <p style={{ fontSize: 20, fontWeight: 600, color: "#004ac6", margin: 0 }}>₪450,000</p>
                  </div>
                  <div style={{ background: "#f6f2ff", padding: 12, borderRadius: 12, border: "1px solid rgba(195,198,215,0.3)" }}>
                    <p style={{ fontSize: 12, color: "#434655", margin: "0 0 4px" }}>חוזים חתומים</p>
                    <p style={{ fontSize: 20, fontWeight: 600, color: "#004ac6", margin: 0 }}>12</p>
                  </div>
                </div>

                {/* History */}
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>היסטוריית עסקאות אחרונה</h4>
                  {[
                    { icon: <svg width="18" height="18" fill="#004ac6" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/></svg>, text: "הסכם ייעוץ שנתי", date: "14/03/24" },
                    { icon: <svg width="18" height="18" fill="#004ac6" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>, text: "רכישת נדל\"ן עסקי", date: "22/02/24" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 4px", borderBottom: "1px solid rgba(195,198,215,0.2)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {item.icon}
                        <span style={{ fontSize: 16 }}>{item.text}</span>
                      </div>
                      <span style={{ fontSize: 12, color: "#434655" }}>{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", bottom: -40, left: -40, width: 256, height: 256, background: "rgba(0,74,198,0.04)", borderRadius: "50%", filter: "blur(60px)", zIndex: 0 }} />
            </div>
          </div>
        </section>

        {/* ─── Business Insights & Lead Management ─── */}
        <section style={{ background: "#fff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "flex-start" }}>
            {/* Donut Chart */}
            <div className="clm-card" style={{ background: "#fff", padding: 24, borderRadius: 16, border: "1px solid #c3c6d7", boxShadow: "0 20px 40px rgba(79,70,229,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>תובנות עסקיות</h3>
                <svg width="24" height="24" fill="#434655" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ position: "relative", width: 192, height: 192, marginBottom: 24 }}>
                  <svg style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }} viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2dfff" strokeWidth="3"/>
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#004ac6" strokeDasharray="70, 100" strokeWidth="3"/>
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4b41e1" strokeDasharray="25, 100" strokeDashoffset="-70" strokeWidth="3"/>
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 32, fontWeight: 700 }}>₪1.2M</span>
                    <span style={{ fontSize: 12, color: "#434655" }}>הכנסה שנתית</span>
                  </div>
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { color: "#004ac6", label: "חברות הייטק (70%)", val: "₪840k" },
                    { color: "#4b41e1", label: "נדל\"ן (25%)", val: "₪300k" },
                    { color: "#e3dfff", label: "אחר (5%)", val: "₪60k" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 12, height: 12, borderRadius: "50%", background: item.color }} />
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lead Management Flow */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>ניהול לידים מקצה לקצה</h3>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>
                הפוך מתעניינים ללקוחות נאמנים עם זרימת עבודה אוטומטית ומקצועית.
              </p>

              {/* Growth chart */}
              <div style={{ background: "#fff", padding: 16, borderRadius: 12, border: "1px solid #c3c6d7", height: 128, display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingInline: 24, position: "relative" }}>
                {[
                  { h: 48, label: "ינו", opacity: 0.2 },
                  { h: 64, label: "פבר", opacity: 0.4 },
                  { h: 80, label: "מרץ", opacity: 0.6 },
                  { h: 104, label: "אפר", opacity: 1, badge: "+24%" },
                ].map((bar, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ position: "relative" }}>
                      {bar.badge && (
                        <div style={{ position: "absolute", top: -24, left: "50%", transform: "translateX(-50%)", background: "#004ac6", color: "#fff", fontSize: 10, padding: "2px 6px", borderRadius: 4, whiteSpace: "nowrap" }}>{bar.badge}</div>
                      )}
                      <div style={{ width: 32, background: `rgba(0,74,198,${bar.opacity})`, borderRadius: "4px 4px 0 0", height: bar.h }} />
                    </div>
                    <span style={{ fontSize: 10, color: bar.opacity === 1 ? "#004ac6" : "#434655", fontWeight: bar.opacity === 1 ? 700 : 400 }}>{bar.label}</span>
                  </div>
                ))}
              </div>

              {/* Flow steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <svg width="20" height="20" fill="#004ac6" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>, bg: "#dbe1ff", color: "#004ac6", title: "יצירת קשר ראשוני", desc: "ליד חדש נכנס מהאתר או מ-WhatsApp", border: "#004ac6", opacity: 1 },
                  { icon: <svg width="20" height="20" fill="#4b41e1" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/></svg>, bg: "#e2dfff", color: "#4b41e1", title: "שליחת הצעה", desc: "הפקת הסכם ריטיינר בלחיצת כפתור", border: "#4b41e1", opacity: 0.8 },
                  { icon: <svg width="20" height="20" fill="#3e3fcc" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>, bg: "#e1e0ff", color: "#3e3fcc", title: "חתימה וסגירה", desc: "חתימה דיגיטלית ופתיחת תיק לקוח", border: "#3e3fcc", opacity: 0.6 },
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, background: "#fff", border: `1px solid #c3c6d7`, borderRadius: 12, borderRight: `4px solid ${step.border}`, opacity: step.opacity, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    <div style={{ padding: 8, background: step.bg, borderRadius: 8 }}>{step.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{step.title}</h4>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Integrations ─── */}
        <section style={{ padding: "48px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>מסונכרן עם הכלים שאתה כבר אוהב</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 800, margin: "0 auto" }}>
              {[
                {
                  icon: <svg width="40" height="40" fill="#004ac6" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
                  iconBg: "#eff6ff", iconBorder: "rgba(0,74,198,0.1)",
                  title: "Gmail Sync",
                  desc: "כל תכתובת אימייל מתועדת אוטומטית בכרטיס הלקוח. שקיפות מלאה לכל צוות המשרד.",
                },
                {
                  icon: <svg width="40" height="40" fill="#16a34a" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>,
                  iconBg: "#f0fdf4", iconBorder: "rgba(22,163,74,0.1)",
                  title: "WhatsApp Integration",
                  desc: "שלח הסכמים ועדכוני סטטוס ישירות לנייד של הלקוח. קצב תגובה מהיר פי 3.",
                },
              ].map((int, i) => (
                <div key={i} className="clm-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 48, background: "#efebff", borderRadius: 24, border: "1px solid rgba(195,198,215,0.5)" }}>
                  <div style={{ width: 80, height: 80, background: int.iconBg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 16, border: `2px solid ${int.iconBorder}` }}>
                    {int.icon}
                  </div>
                  <h4 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>{int.title}</h4>
                  <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6, margin: 0 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section style={{ background: "#004ac6", padding: "64px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              מוכן להפוך את ניהול הלקוחות ליתרון תחרותי?
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32, lineHeight: 1.6 }}>
              הצטרף למאות משרדים שכבר עברו לניהול חכם ומקצועי עם DealLayer.
            </p>
            <button className="clm-shimmer" style={{ background: "#fff", color: "#004ac6", padding: "16px 48px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              נהל את העסקאות שלך טוב יותר
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
