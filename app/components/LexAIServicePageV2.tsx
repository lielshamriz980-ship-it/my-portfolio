"use client";

export function LexAIServicePageV2() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .lex-shimmer { position: relative; overflow: hidden; }
        .lex-shimmer::after {
          content: ''; position: absolute; top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          animation: lexShimmer 3s infinite;
        }
        @keyframes lexShimmer {
          0%{transform:translateX(-100%) rotate(45deg)}
          100%{transform:translateX(100%) rotate(45deg)}
        }
        .lex-pulse { animation: lexPulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }
        @keyframes lexPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:0.5;transform:scale(1.1)}
        }
        .lex-bounce1 { animation: lexBounce 1s infinite; }
        .lex-bounce2 { animation: lexBounce 1s -0.15s infinite; }
        .lex-bounce3 { animation: lexBounce 1s -0.3s infinite; }
        @keyframes lexBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        .lex-bar { animation: lexBarGrow 1.5s ease-out forwards; transform-origin: bottom; }
        @keyframes lexBarGrow { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        .lex-dash { stroke-dasharray: 5; animation: lexDash 10s linear infinite; }
        @keyframes lexDash { to{stroke-dashoffset:-100} }
        .lex-card { transition: transform 0.3s, box-shadow 0.3s; }
        .lex-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(79,70,229,0.1); }
        .lex-dots {
          background-image: radial-gradient(circle, #004ac6 1px, transparent 1px);
          background-size: 24px 24px;
        }
        @media (max-width: 768px) {
          .lex-grid-2 { grid-template-columns: 1fr !important; gap: 20px !important; }
          .lex-grid-3 { grid-template-columns: 1fr !important; gap: 16px !important; }
          .lex-h2 { font-size: clamp(24px, 6vw, 42px) !important; }
          .lex-section { padding: 56px 20px !important; }
          .lex-cta { padding: 40px 20px !important; }
        }
      `}</style>

      {/* Page Title Bar */}
      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "12px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>Lex AI</h1>
      </div>

      <main>
        {/* ─── Hero Section ─── */}
        <section style={{ padding: "48px 24px 96px", position: "relative", overflow: "hidden" }}>
          <div className="lex-grid-2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Text */}
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "rgba(0,74,198,0.08)", color: "#004ac6", borderRadius: 9999, border: "1px solid rgba(0,74,198,0.2)", fontSize: 14, fontWeight: 600, alignSelf: "flex-end" }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>
                הדור הבא של עריכת הדין
              </div>
              <h2 style={{ fontSize: 48, fontWeight: 700, color: "#181445", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 }}>
                Lex AI: המוח המשפטי שבונה את החוזים שלך בזמן אמת
              </h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, maxWidth: 520 }}>
                שיחה קצרה בצ'אט, ניתוח משפטי מעמיק ומסמך מוכן לחתימה. חסוך שבועות של עבודה בדקות בודדות.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="lex-shimmer" style={{ background: "#004ac6", color: "#fff", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,74,198,0.3)", display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.07-.78 1.72-.89l1.42-.25zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 3.57-9.7 3.57-9.7s-4.31-1.83-9.7 3.57C8.78 9.32 7.23 13.06 7.23 13.06L11.17 17zm5.48-5.84l-4.05 4.05-1.55-1.55s.82-2.17 2.37-3.72c1.98-1.98 4.22-2.04 4.22-2.04s.06 2.24-2.99 3.26zm-3.56 7.68c0 .55-.45 1-1 1H4.5c-.55 0-1-.45-1-1v-3.59l3 3c.15.15.35.23.54.23H12.1c.27 0 .5-.23.5-.5v-.91c0-.27.23-.5.5-.5s.5.23.5.5v.91c0 .83-.67 1.5-1.5 1.5H7.04l-3-3V21c0 1.1.9 2 2 2h7.59c1.1 0 2-.9 2-2v-1.84c0-.27.23-.5.5-.5s.5.23.5.5V21c0 1.66-1.34 3-3 3H6.04c-1.66 0-3-1.34-3-3v-4.5c0-.83.34-1.58.88-2.12l.71-.71-1.41-1.41-.71.71c-.83.83-1.29 1.96-1.29 3.12V21c0 2.21 1.79 4 4 4h7.59c2.21 0 4-1.79 4-4v-1.84c0-.83-.67-1.5-1.5-1.5h-1.41c-.27 0-.5-.23-.5-.5s.23-.5.5-.5h1.41c1.38 0 2.5 1.12 2.5 2.5V21c0 2.76-2.24 5-5 5H6.04C3.28 26 1.04 23.76 1.04 21v-4.5c0-1.66.67-3.16 1.76-4.24l.71-.71-1.41-1.41-.71.71C0.5 12.64 0 14.02 0 15.5V21c0 3.31 2.69 6 6.04 6h7.59c3.35 0 6.04-2.69 6.04-6v-1.84c0-1.93-1.57-3.5-3.5-3.5h-1.41z"/></svg>
                  התחל חוזה ראשון בחינם
                </button>
                <button style={{ background: "transparent", color: "#181445", padding: "14px 32px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "1px solid #737686", cursor: "pointer" }}>
                  צפה בוידאו הדגמה
                </button>
              </div>
            </div>

            {/* Chat UI Visual */}
            <div style={{ position: "relative" }}>
              <div style={{ background: "#fff", borderRadius: 32, boxShadow: "0 25px 50px rgba(0,0,0,0.12)", border: "1px solid #c3c6d7", padding: 12, position: "relative", zIndex: 1, overflow: "hidden" }}>
                <div style={{ background: "#f6f2ff", borderRadius: 20, padding: 16, height: 480, display: "flex", flexDirection: "column" }}>
                  {/* Messages */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, overflowY: "auto", padding: 8 }}>
                    {/* AI Message */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#004ac6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zM9 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                      </div>
                      <div style={{ background: "#fff", padding: 12, borderRadius: "16px 16px 16px 2px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #c3c6d7", maxWidth: "85%" }}>
                        <p style={{ fontSize: 16, margin: 0 }}>שלום! אני Lex AI. איזה סוג של חוזה תרצה שנבנה היום?</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, flexDirection: "row-reverse" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#645efb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                      <div style={{ background: "#004ac6", color: "#fff", padding: 12, borderRadius: "16px 16px 2px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", maxWidth: "85%" }}>
                        <p style={{ fontSize: 16, margin: 0 }}>אני צריך הסכם שותפות לסטארטאפ טכנולוגי עם חלוקת אקוויטי של 50/50.</p>
                      </div>
                    </div>

                    {/* AI Building */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#004ac6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12z"/></svg>
                      </div>
                      <div style={{ background: "#fff", padding: 12, borderRadius: "16px 16px 16px 2px", border: "1px solid #c3c6d7", width: "90%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e3dfff", paddingBottom: 8, marginBottom: 8 }}>
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#004ac6" }}>מייצר טיוטת סעיף: חלוקת מניות</span>
                          <div style={{ display: "flex", gap: 3 }}>
                            <span className="lex-bounce1" style={{ width: 6, height: 6, borderRadius: "50%", background: "#004ac6", display: "inline-block" }}/>
                            <span className="lex-bounce2" style={{ width: 6, height: 6, borderRadius: "50%", background: "#004ac6", display: "inline-block" }}/>
                            <span className="lex-bounce3" style={{ width: 6, height: 6, borderRadius: "50%", background: "#004ac6", display: "inline-block" }}/>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                          <div style={{ height: 8, width: "75%", background: "rgba(0,74,198,0.1)", borderRadius: 4 }}/>
                          <div style={{ height: 8, width: "100%", background: "rgba(0,74,198,0.06)", borderRadius: 4 }}/>
                          <div style={{ height: 8, width: "83%", background: "rgba(0,74,198,0.06)", borderRadius: 4 }}/>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <div style={{ flex: 1, height: 80, background: "rgba(75,65,225,0.05)", borderRadius: 8, border: "1px solid rgba(75,65,225,0.1)", display: "flex", alignItems: "flex-end", justifyContent: "space-around", padding: 8 }}>
                            {[60, 80, 50].map((h, i) => (
                              <div key={i} className="lex-bar" style={{ width: 16, background: `rgba(75,65,225,${0.3 + i * 0.15})`, borderRadius: "2px 2px 0 0", height: `${h}%`, animationDelay: `${i * 0.2}s` }}/>
                            ))}
                          </div>
                          <div style={{ flex: 1, height: 80, background: "rgba(0,74,198,0.04)", borderRadius: 8, border: "1px solid rgba(0,74,198,0.1)", padding: 8, display: "flex", alignItems: "center" }}>
                            <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 100 40">
                              <path className="lex-dash" d="M0,20 Q25,5 50,20 T100,20" fill="none" stroke="#004ac6" strokeWidth="2"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div style={{ marginTop: 16, background: "#fff", border: "1px solid #c3c6d7", borderRadius: 9999, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="20" height="20" fill="#737686" viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/></svg>
                    <input dir="rtl" placeholder="שאל שאלה או הוסף פרטים..." style={{ flex: 1, border: "none", background: "transparent", fontSize: 16, outline: "none", color: "#181445" }} />
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#004ac6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", top: -48, right: -48, width: 256, height: 256, background: "rgba(0,74,198,0.08)", borderRadius: "50%", filter: "blur(60px)", zIndex: 0 }} />
              <div style={{ position: "absolute", bottom: -48, left: -48, width: 256, height: 256, background: "rgba(75,65,225,0.08)", borderRadius: "50%", filter: "blur(60px)", zIndex: 0 }} />
            </div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section style={{ padding: "64px 24px 96px", background: "#f6f2ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 8 }}>איך זה עובד?</h2>
              <p style={{ fontSize: 18, color: "#434655" }}>תהליך פשוט, חכם ומדויק בשלושה שלבים</p>
            </div>
            <div className="lex-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                { icon: <svg width="32" height="32" fill="#004ac6" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>, title: "שיחה", desc: "ענה על מספר שאלות פשוטות בשיחה קולחת. ה-AI לומד את הצרכים הספציפיים שלך.", border: false },
                { icon: <svg width="32" height="32" fill="#004ac6" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>, title: "ניתוח", desc: "האלגוריתמים שלנו סורקים תקדימים משפטיים וחוקים עדכניים כדי להבטיח הגנה מקסימלית.", border: true },
                { icon: <svg width="32" height="32" fill="#004ac6" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>, title: "מסמך סופי", desc: "קבל מסמך משפטי מושלם בפורמט Word או PDF, מוכן לחתימה דיגיטלית.", border: false },
              ].map((step) => (
                <div key={step.title} className="lex-card" style={{ background: "#fff", padding: 32, borderRadius: 16, border: step.border ? "1px solid #004ac6" : "1px solid #c3c6d7", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                  {step.border && <div style={{ position: "absolute", top: 0, right: 0, left: 0, height: 4, background: "#004ac6" }} />}
                  <div style={{ width: 64, height: 64, background: "rgba(0,74,198,0.08)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{step.icon}</div>
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: "#181445", marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 16, color: "#434655", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Risk Analysis ─── */}
        <section style={{ padding: "64px 24px 96px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Circle chart */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)", borderRadius: "50%", boxShadow: "0 20px 40px rgba(0,74,198,0.1)" }}>
                <svg style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                  <circle cx="160" cy="160" r="120" fill="transparent" stroke="rgba(195,198,215,0.3)" strokeWidth="20"/>
                  <circle cx="160" cy="160" r="120" fill="transparent" stroke="#004ac6" strokeDasharray="754" strokeDashoffset="113" strokeLinecap="round" strokeWidth="20"/>
                </svg>
                <div style={{ position: "absolute", textAlign: "center" }}>
                  <span style={{ fontSize: 48, fontWeight: 700, color: "#004ac6", display: "block", lineHeight: 1 }}>85%</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#434655" }}>ציון הגנה</span>
                </div>
                <div className="lex-pulse" style={{ position: "absolute", top: "calc(50% - 120px)", left: "50%", transform: "translateX(-50%)", width: 16, height: 16, background: "#004ac6", borderRadius: "50%", boxShadow: "0 0 15px rgba(0,74,198,0.5)" }} />
              </div>
            </div>

            {/* Text */}
            <div style={{ textAlign: "right" }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#181445", marginBottom: 16 }}>ניתוח סיכונים חכם</h2>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6, marginBottom: 24 }}>
                Lex AI לא רק כותב, הוא מנתח. המערכת מזהה פרצות אפשריות ומציעה תיקונים בזמן אמת כדי לשפר את ציון ההגנה של החוזה שלך.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {["זיהוי ניגודי עניינים פוטנציאליים", "אופטימיזציה של סעיפי שיפוי", "התאמה לרגולציה הישראלית (2024)"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16 }}>
                    <svg width="20" height="20" fill="#004ac6" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison ─── */}
        <section style={{ padding: "64px 24px 96px", background: "#f6f2ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 40 }}>למה לבחור ב-Lex AI?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 800, margin: "0 auto" }}>
              {/* Lex AI */}
              <div style={{ background: "#004ac6", borderRadius: 24, padding: 32, color: "#fff", position: "relative", overflow: "hidden" }}>
                <div className="lex-dots" style={{ position: "absolute", inset: 0, opacity: 0.1 }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                    <h3 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>Lex AI</h3>
                    <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
                  </div>
                  {[["מהירות", "דקות בודדות"], ["עלות", "החל מ-₪99"], ["זמינות", "24/7"]].map(([label, val], i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16, marginBottom: 16, borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
                      <span style={{ opacity: 0.8, fontSize: 16 }}>{label}</span>
                      <span style={{ fontWeight: 700, fontSize: 16 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traditional */}
              <div style={{ background: "#fff", borderRadius: 24, padding: 32, border: "1px solid #c3c6d7" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>עורך דין מסורתי</h3>
                  <svg width="28" height="28" fill="#737686" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
                </div>
                {[["מהירות", "3-7 ימי עסקים"], ["עלות", "₪1,500 - ₪5,000"], ["זמינות", "שעות פעילות משרד"]].map(([label, val], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16, marginBottom: 16, borderBottom: i < 2 ? "1px solid #c3c6d7" : "none", opacity: 0.8 }}>
                    <span style={{ fontSize: 16 }}>{label}</span>
                    <span style={{ fontSize: 16 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section style={{ padding: "48px 24px 64px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", background: "#2d2a5b", borderRadius: 40, padding: 64, textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 25px 50px rgba(45,42,91,0.3)" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.1 }}>
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path className="lex-dash" d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.2"/>
                <path className="lex-dash" d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.2" style={{ animationDelay: "-5s" }}/>
              </svg>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="lex-pulse" style={{ width: 64, height: 64, background: "#004ac6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 16 }}>מוכן ליצור את החוזה הראשון שלך?</h2>
              <p style={{ fontSize: 18, color: "rgba(227,223,255,0.8)", marginBottom: 32, lineHeight: 1.6 }}>
                הצטרף לאלפי עסקים בישראל שכבר עברו לניהול חוזים חכם ומהיר.
              </p>
              <button className="lex-shimmer" style={{ background: "#004ac6", color: "#fff", padding: "16px 48px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 12, boxShadow: "0 8px 32px rgba(0,74,198,0.4)" }}>
                התחל עכשיו בחינם
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              </button>
              <p style={{ marginTop: 16, fontSize: 12, color: "rgba(227,223,255,0.5)" }}>אין צורך בכרטיס אשראי לניסיון הראשון</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
