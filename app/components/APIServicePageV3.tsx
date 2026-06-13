"use client";

export function APIServicePageV3() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .api-shimmer { position: relative; overflow: hidden; }
        .api-shimmer::after {
          content: ''; position: absolute; top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(60deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          animation: apiShimmer 3s infinite;
        }
        @keyframes apiShimmer {
          0%{transform:translateX(100%) rotate(45deg)}
          100%{transform:translateX(-100%) rotate(45deg)}
        }
        .api-card { transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
        .api-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(79,70,229,0.08); border-color: #004ac6 !important; }
        .terminal-bg { background: #1e1e2e; color: #cdd6f4; }
        @media (max-width: 768px) {
          .api-grid-2 { grid-template-columns: 1fr !important; }
          .api-grid-3 { grid-template-columns: 1fr !important; }
          .api-section { padding: 48px 16px !important; }
          .api-h2 { font-size: clamp(22px, 6vw, 36px) !important; }
        }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#e9e5ff", borderBottom: "1px solid #c3c6d7", padding: "16px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>API</h1>
      </div>

      <main>
        {/* ─── Hero Section ─── */}
        <section style={{ background: "linear-gradient(to bottom, #dbe1ff, #fcf8ff)", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ display: "inline-block", background: "rgba(88,91,230,0.1)", color: "#3e3fcc", fontSize: 14, fontWeight: 600, padding: "4px 12px", borderRadius: 9999 }}>Developer Portal</span>
              <h2 style={{ fontSize: 48, fontWeight: 700, color: "#181445", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 }}>
                בנו אינטגרציות משפטיות חכמות עם ה-API של DealLayer
              </h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, maxWidth: 560, margin: 0 }}>
                הטמיעו אוטומציה של חוזים, חתימות דיגיטליות וניהול מסמכים ישירות בתוך האפליקציה שלכם. כלים חזקים, תיעוד מפורט וביצועים של High-Scale.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="api-shimmer" style={{ background: "#004ac6", color: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>
                  התחילו עכשיו
                </button>
                <button style={{ background: "transparent", color: "#004ac6", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "1px solid #737686", cursor: "pointer" }}>
                  צפו בדוקומנטציה
                </button>
              </div>
            </div>

            {/* Terminal */}
            <div style={{ position: "relative" }}>
              <div className="terminal-bg" style={{ padding: 24, borderRadius: 12, boxShadow: "0 25px 50px rgba(0,0,0,0.3)", border: "1px solid #c3c6d7", fontFamily: "monospace", fontSize: 14, lineHeight: 1.8, position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 16 }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308", display: "inline-block" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                </div>
                <div dir="ltr" style={{ textAlign: "left" }}>
                  <p style={{ margin: "2px 0" }}><span style={{ color: "#4b41e1" }}>const</span> dealLayer = <span style={{ color: "#3e3fcc" }}>require</span>(<span style={{ color: "#4ade80" }}>'@deallayer/sdk'</span>);</p>
                  <p style={{ margin: "2px 0" }}><span style={{ color: "#4b41e1" }}>const</span> client = <span style={{ color: "#4b41e1" }}>new</span> <span style={{ color: "#b4c5ff" }}>dealLayer.Client</span>{"({"}</p>
                  <p style={{ margin: "2px 0", paddingRight: 16 }}>  apiKey: <span style={{ color: "#4ade80" }}>'DL_LIVE_XXXX'</span></p>
                  <p style={{ margin: "2px 0" }}>{"})"}</p>
                  <p style={{ margin: "8px 0 2px" }}><span style={{ color: "#4b41e1" }}>async function</span> <span style={{ color: "#b4c5ff" }}>createContract</span>{"() {"}</p>
                  <p style={{ margin: "2px 0", paddingRight: 16 }}>  <span style={{ color: "#4b41e1" }}>const</span> contract = <span style={{ color: "#4b41e1" }}>await</span> client.contracts.create({"({"}</p>
                  <p style={{ margin: "2px 0", paddingRight: 32 }}>    template_id: <span style={{ color: "#4ade80" }}>'nda_standard_v2'</span>,</p>
                  <p style={{ margin: "2px 0", paddingRight: 32 }}>    signers: [{"{ email: "}<span style={{ color: "#4ade80" }}>'dev@company.com'</span> {"}]"}</p>
                  <p style={{ margin: "2px 0", paddingRight: 16 }}>  {"});"}</p>
                  <p style={{ margin: "2px 0", paddingRight: 16, color: "#737686" }}>{"// Success response"}</p>
                  <p style={{ margin: "2px 0", paddingRight: 16 }}>  {"console.log(contract.id);"}</p>
                  <p style={{ margin: "2px 0" }}>{"}"}</p>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: -24, right: -24, width: 192, height: 192, background: "rgba(100,94,251,0.2)", borderRadius: "50%", filter: "blur(40px)", zIndex: 0 }} />
            </div>
          </div>
        </section>

        {/* ─── Ecosystem Section ─── */}
        <section style={{ padding: "48px 24px", background: "#fcf8ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 8 }}>האקו-סיסטם של DealLayer</h2>
              <p style={{ fontSize: 16, color: "#434655" }}>התחברו לכל הכלים העסקיים שלכם דרך API אחד חכם</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
              {/* Integrations visual */}
              <div style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32, minHeight: 400 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "center", width: "100%", maxWidth: 480 }}>
                  {/* Left icons */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
                    <div style={{ width: 64, height: 64, background: "#fff", borderRadius: 8, border: "1px solid #c3c6d7", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                        <div style={{ width: 12, height: 12, background: "#f25022" }} />
                        <div style={{ width: 12, height: 12, background: "#7fba00" }} />
                        <div style={{ width: 12, height: 12, background: "#00a4ef" }} />
                        <div style={{ width: 12, height: 12, background: "#ffb900" }} />
                      </div>
                    </div>
                    <div style={{ width: 64, height: 64, background: "#fff", borderRadius: 8, border: "1px solid #c3c6d7", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>

                  {/* Center API hub */}
                  <div style={{ width: 96, height: 96, background: "#004ac6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(0,74,198,0.4)" }}>
                    <svg width="40" height="40" fill="#fff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 5h-2V7h2v2zm0 4h-2v-2h2v2zM9 9H7V7h2v2zm0 4H7v-2h2v2zm6 0h-2v-2h2v2z"/></svg>
                  </div>

                  {/* Right icons */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
                    <div style={{ width: 64, height: 64, background: "#fff", borderRadius: 8, border: "1px solid #c3c6d7", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                      <svg width="32" height="32" fill="#00a1e0" viewBox="0 0 24 24"><path d="M12.9 8c.2-.3.4-.6.6-.9 1.5-2 4.1-2.4 6-1 1.9 1.4 2.2 4.1.8 6-.3.4-.7.8-1.1 1.1-.1.1-.3.2-.4.2.1.2.2.3.4.5 1.5 2 1.2 4.7-.8 6.3s-4.8 1.4-6.4-.6c-.2-.2-.3-.5-.4-.7-.2.2-.4.5-.6.7-1.7 2-4.5 2.2-6.4.5s-2-4.6-.3-6.5c.3-.3.6-.5.9-.7-.3-.2-.6-.5-.9-.8-1.5-1.9-1.2-4.6.7-6.2 1.9-1.5 4.6-1.1 6.1.8.3.4.6.8.8 1.2.3-.2.6-.4.9-.6z"/></svg>
                    </div>
                    <div style={{ width: 64, height: 64, background: "#fff", borderRadius: 8, border: "1px solid #c3c6d7", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                        <div style={{ width: 12, height: 12, background: "#36C5F0", borderRadius: "50%" }} />
                        <div style={{ width: 12, height: 12, background: "#2EB67D", borderRadius: "50%" }} />
                        <div style={{ width: 12, height: 12, background: "#E01E5A", borderRadius: "50%" }} />
                        <div style={{ width: 12, height: 12, background: "#ECB22E", borderRadius: "50%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", margin: 0 }}>אינטגרציה חלקה לכל ה-Stack שלכם</h3>
              </div>

              {/* Sandbox card */}
              <div style={{ background: "#2d2a5b", borderRadius: 12, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", color: "#f3eeff" }}>
                <div>
                  <svg width="32" height="32" fill="#b4c5ff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/><path d="M6 10h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
                  <h3 style={{ fontSize: 24, fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Sandbox Developer</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.8, marginBottom: 24 }}>סביבת פיתוח מלאה המאפשרת לכם לבדוק את כל הקריאות ללא פגיעה במידע חי. קבלו מפתחות בדיקה תוך שניות.</p>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
                  {["לוגים בזמן אמת", "מוקים (Mocking) מתקדמים", "ניהול גרסאות API"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
                      <svg width="16" height="16" fill="#4ade80" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SDKs & Webhooks ─── */}
        <section style={{ padding: "48px 24px", background: "#f6f2ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {/* SDKs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>SDKs לכל שפה</h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>התחילו לפתח בתוך דקות עם הספריות הרשמיות שלנו המותאמות לשפות הפיתוח המובילות.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {[
                  { label: "Node.js", abbr: "JS", color: "#339933" },
                  { label: "Python", abbr: "Py", color: "#3776AB" },
                  { label: "Go", abbr: "Go", color: "#00ADD8" },
                  { label: "Ruby", abbr: "Rb", color: "#CC342D" },
                ].map((sdk) => (
                  <div key={sdk.label} className="api-card" style={{ background: "#fff", padding: 16, borderRadius: 8, border: "1px solid #c3c6d7", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
                    <div style={{ width: 40, height: 40, background: `${sdk.color}18`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontWeight: 700, color: sdk.color, fontFamily: "monospace" }}>{sdk.abbr}</span>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#181445" }}>{sdk.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Webhooks */}
            <div style={{ background: "#fcf8ff", borderRadius: 12, border: "1px solid #c3c6d7", padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ padding: 8, background: "#585be6", borderRadius: 8 }}>
                  <svg width="24" height="24" fill="#f1eeff" viewBox="0 0 24 24"><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/></svg>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", margin: 0 }}>Webhooks & Event Streams</h3>
              </div>
              <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6, marginBottom: 24 }}>
                האזינו לאירועים בזמן אמת. קבלו עדכונים על חתימות מסמכים, אישורי חוזים ושינויי סטטוס ישירות לשרת שלכם.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { event: "contract.signed", time: "לפני 2 דקות" },
                  { event: "document.viewed", time: "לפני 5 דקות" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16, background: "#e9e5ff", borderRadius: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ background: "#dcfce7", color: "#166534", padding: "2px 6px", borderRadius: 4, fontSize: 12, fontWeight: 700 }}>200 OK</span>
                      <span style={{ fontSize: 16, fontFamily: "monospace" }}>{item.event}</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#737686" }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ background: "#004ac6", borderRadius: 16, padding: 64, textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
                <h2 style={{ fontSize: 48, fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>מוכנים להתחיל לבנות?</h2>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32, lineHeight: 1.6 }}>
                  הצטרפו למאות מפתחים שכבר בונים את עתיד המשפט הדיגיטלי עם ה-API של DealLayer.
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                  <button style={{ background: "#fff", color: "#004ac6", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer" }}>
                    הרשמה לפורטל מפתחים
                  </button>
                  <button style={{ background: "transparent", color: "#fff", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "2px solid rgba(255,255,255,0.5)", cursor: "pointer" }}>
                    דברו עם מומחה API
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
