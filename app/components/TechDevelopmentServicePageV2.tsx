"use client";

export function TechDevelopmentServicePageV2() {
  const painPoints = [
    { title: "NDAs שנשכחו בדרך", desc: "חשיפת סודות מסחריים לפני חתימה פורמלית עם שותפים פוטנציאליים או עובדים חדשים." },
    { title: "חריגה מהגדרות הפרויקט", desc: "Scope Creep שנובע מהסכמי פיתוח מעורפלים שאינם מגדירים אבני דרך ברורות." },
    { title: "עבודה ללא חוזה בתוקף", desc: "התחלת עבודה עם פרילנסרים \"על אמון\" ללא העברת בעלות על הקניין הרוחני (IP)." },
    { title: "מסמכי SaaS מפוזרים", desc: "קושי במעקב אחר תנאי שימוש (ToS) ומדיניות פרטיות שמתעדכנים בנפרד מהמוצר." },
  ];

  const templates = [
    { title: "Software Development", desc: "הסכם פיתוח תוכנה מקיף כולל העברת קניין רוחני.", iconType: "code" },
    { title: "NDA", desc: "הסכם סודיות דו-צדדי מהיר לשימוש מול שותפים.", iconType: "lock" },
    { title: "Subcontractor", desc: "ניהול פרילנסרים ויועצים חיצוניים בצורה בטוחה.", iconType: "user" },
    { title: "SaaS Terms", desc: "תנאי שימוש למוצרי ענן ושירותים דיגיטליים.", iconType: "cloud" },
    { title: "Strategic Partnership", desc: "הסכם שיתוף פעולה אסטרטגי לשיווק או פיתוח משותף.", iconType: "handshake" },
    { title: "Tech Consulting", desc: "הסכם למתן שירותי ייעוץ טכנולוגי וארכיטקטורה.", iconType: "chart" },
  ];

  return (
    <div style={{ direction: "rtl", fontFamily: "Assistant, sans-serif", color: "#181445", background: "#fcf8ff", minHeight: "100vh" }}>
      <style>{`
        .tech-shimmer { position: relative; overflow: hidden; }
        .tech-shimmer::after {
          content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(to bottom right, rgba(255,255,255,0), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          transform: rotate(45deg);
          animation: techShimmer 4s infinite;
        }
        @keyframes techShimmer { 0%{transform:translateX(-150%) rotate(45deg)} 100%{transform:translateX(150%) rotate(45deg)} }
        .tech-fade-in { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .tech-card-hover { transition: all 0.3s ease; }
        .tech-card-hover:hover { transform: translateY(-8px); }
        @media (max-width: 768px) {
          .tech-hero { padding: 56px 20px !important; min-height: 400px !important; }
          .tech-h1 { font-size: clamp(26px, 7vw, 48px) !important; }
          .tech-section { padding: 64px 20px !important; }
          .tech-grid-2 { grid-template-columns: 1fr !important; gap: 20px !important; }
          .tech-grid-3 { grid-template-columns: 1fr !important; gap: 16px !important; }
          .tech-grid-4 { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .tech-order-reset { order: 0 !important; }
          .tech-cta-box { padding: 40px 20px !important; }
          .tech-h2 { font-size: clamp(24px, 6vw, 42px) !important; }
          .tech-btn { font-size: 14px !important; padding: 12px 24px !important; }
        }
        @media (max-width: 480px) {
          .tech-grid-4 { grid-template-columns: 1fr !important; }
          .tech-h1 { font-size: clamp(22px, 6vw, 36px) !important; }
        }
      `}</style>

      <main>
        {/* ─── Hero Section ─── */}
        <section className="tech-hero" style={{ background: "linear-gradient(135deg, #0D1B4B 0%, #1A2A66 100%)", color: "#fff", padding: "120px 24px", position: "relative", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ maxWidth: 800, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="tech-fade-in">
              <h1 className="tech-h1" style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
                החוזים של חברת הטק שלך - מהירים כמו הפיתוח שלך
              </h1>
              <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 32 }}>
                ניהול מחזור חיי חוזה המותאם לדינמיקה של עולם הטכנולוגיה. מ-NDA ועד הסכמי SaaS מורכבים, אנחנו דואגים שהמשפט לא יעכב את המוצר.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                <button className="tech-shimmer" style={{ padding: "16px 32px", background: "#435EFF", color: "#fff", border: "none", borderRadius: 12, fontSize: 18, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px rgba(67,94,255,0.4)" }}>
                  ניהול חוזי טק
                </button>
                <button style={{ padding: "16px 32px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, fontSize: 18, fontWeight: 700, cursor: "pointer" }}>
                  צפייה בתבניות
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pain Points ─── */}
        <section className="tech-section" style={{ padding: "120px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <h2 className="tech-h2" style={{ fontSize: 42, fontWeight: 700, marginBottom: 16 }}>האתגרים המשפטיים של צוותי פיתוח</h2>
              <div style={{ height: 6, width: 96, background: "#435EFF", borderRadius: 9999, margin: "0 auto" }} />
            </div>
            <div className="tech-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              {painPoints.map((point, i) => (
                <div key={i} className="tech-card-hover" style={{ padding: 32, border: "1px solid #c3c6d7", borderRadius: 12, borderTop: "4px solid #ff6b6b", background: "#fff", cursor: "pointer" }}>
                  <div style={{ height: 4, width: 48, background: "#ff6b6b", marginBottom: 24 }} />
                  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{point.title}</h3>
                  <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6 }}>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Solutions ─── */}
        <section className="tech-section" style={{ padding: "120px 24px", background: "#f6f2ff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 96 }}>
            {/* Solution 1 */}
            <div className="tech-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: "#1A2A66" }}>NDA ב-5 דקות (לא 5 ימים)</h3>
                <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, marginBottom: 24 }}>
                  אל תתנו לבירוקרטיה לעצור שיחות עסקיות חשובות. מערכת ה-DealLayer מאפשרת שליחה וחתימה אוטומטית של הסכמי סודיות מותאמים אישית בתוך שניות.
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, fontWeight: 600, color: "#435EFF" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#435EFF" }} />
                    מעקב אחר צפיות בזמן אמת
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, fontWeight: 600, color: "#435EFF" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#435EFF" }} />
                    חתימה דיגיטלית מאובטחת
                  </li>
                </ul>
              </div>
              <div style={{ background: "#fff", padding: 24, borderRadius: 16, border: "1px solid #c3c6d7", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #e3dfff" }}>
                  <span style={{ fontWeight: 700, color: "#1A2A66" }}>הסכם סודיות (NDA)</span>
                  <span style={{ padding: "4px 8px", background: "#d4edda", color: "#155724", borderRadius: 16, fontSize: 12 }}>נחתם</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, width: "100%" }} />
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, width: "85%" }} />
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, width: "70%" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#999", paddingTop: 16, borderTop: "1px solid #e3dfff" }}>
                  <span>נשלח: היום, 10:24</span>
                  <span style={{ fontFamily: "monospace" }}>#NDA-9821</span>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="tech-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div style={{ background: "#1A2A66", padding: 32, borderRadius: 16, order: -1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[1, 2, 3].map((step) => (
                    <div key={step} style={{ padding: 12, background: "rgba(255,255,255,0.1)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#fff", fontWeight: 700 }}>שלב {step}: {step === 1 ? "איפיון" : step === 2 ? "פיתוח" : "בדיקות"}</span>
                      <span style={{ padding: "2px 8px", background: step === 1 ? "rgba(51, 204, 102, 0.3)" : step === 2 ? "rgba(255, 193, 7, 0.3)" : "rgba(150, 150, 150, 0.3)", color: step === 1 ? "#66ff66" : step === 2 ? "#ffff66" : "#cccccc", borderRadius: 4, fontSize: 11 }}>
                        {step === 1 ? "הושלם" : step === 2 ? "בתהליך" : "ממתין"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: "#1A2A66" }}>הסכמי פיתוח עם Scope מוגדר</h3>
                <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, marginBottom: 24 }}>
                  צרו הסכמי פיתוח שמתרגמים אבני דרך טכנולוגיות לסעיפים משפטיים מחייבים.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Templates ─── */}
        <section className="tech-section" style={{ padding: "120px 24px", background: "#0D1B4B", color: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 className="tech-h2" style={{ fontSize: 42, fontWeight: 700, marginBottom: 64 }}>ספריית תבניות Tech</h2>
            <div className="tech-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {templates.map((template, i) => {
                const iconMap = {
                  code: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
                  lock: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
                  user: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
                  cloud: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9H9l-3-9H2"></path></svg>,
                  handshake: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 12h-5v2h5v-2Z"></path><path d="M7 12h5v2H7v-2Z"></path><path d="M5 9a3 3 0 0 0-3 3v2c0 1.1.9 2 2 2h2v-3H4v-3c0-.6.4-1 1-1Z"></path><path d="M19 9a3 3 0 0 1 3 3v2c0 1.1-.9 2-2 2h-2v-3h3v-3c0-.6-.4-1-1-1Z"></path></svg>,
                  chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="19" x2="19" y2="19"></line><polyline points="5 15 8 10 12 14 16 8 19 12"></polyline></svg>
                };

                return (
                  <div key={i} className="tech-card-hover" style={{ padding: 32, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, cursor: "pointer", display: "flex", flexDirection: "column" }}>
                    <div style={{ width: 40, height: 40, background: "rgba(67,94,255,0.2)", borderRadius: 8, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {iconMap[template.iconType as keyof typeof iconMap]}
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{template.title}</h4>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{template.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Benefits ─── */}
        <section className="tech-section" style={{ padding: "120px 24px", background: "#fff" }}>
          <div className="tech-grid-4" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, textAlign: "center" }}>
            {[
              { num: "01", title: "מהירות שיא", desc: "קיצור זמן חתימה ב-85% ממוצע לתעשייה." },
              { num: "02", title: "API & Integrations", desc: "חיבור ישיר ל-Slack, Jira ו-Salesforce." },
              { num: "03", title: "Enterprise Security", desc: "אבטחה ברמת בנקאות ותאימות SOC2." },
              { num: "04", title: "Lex AI for Tech", desc: "ניתוח סיכונים אוטומטי המבוסס על AI." },
            ].map((benefit, i) => (
              <div key={i} className="tech-card-hover" style={{ cursor: "pointer" }}>
                <div style={{ fontSize: 64, fontWeight: 900, color: "rgba(67,94,255,0.1)", marginBottom: 12 }}>{benefit.num}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{benefit.title}</h3>
                <p style={{ fontSize: 14, color: "#434655", lineHeight: 1.6 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="tech-section" style={{ padding: "120px 24px" }}>
          <div className="tech-cta-box" style={{ maxWidth: 1200, margin: "0 auto", background: "linear-gradient(to right, #435EFF, #2244DD)", borderRadius: 40, padding: 96, textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: 44, fontWeight: 900, marginBottom: 32, lineHeight: 1.2 }}>מוכנים להאיץ את תהליכי המשפט בארגון?</h2>
              <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                <button className="tech-shimmer" style={{ padding: "16px 40px", background: "#fff", color: "#435EFF", border: "none", borderRadius: 16, fontSize: 18, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
                  קבלו דמו חינם
                </button>
                <button style={{ padding: "16px 40px", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 16, fontSize: 18, fontWeight: 700, cursor: "pointer" }}>
                  דברו איתנו
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
