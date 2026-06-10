"use client";
import { ArrowRight, BarChart3, TrendingUp, AlertCircle, PieChart, Zap, Briefcase, Building2, Scale } from "lucide-react";
import { useState, useEffect } from "react";

export function AnalyticsServicePageV2() {
  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#fbf8ff", direction: "rtl" }}>
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden", background: "linear-gradient(135deg, #152156 0%, #1e2e7e 100%)", padding: "60px 0" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", display: "grid", gap: "48px", alignItems: "center", position: "relative", zIndex: 10, width: "100%" }}>
            <div>
              <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: "800", color: "white", lineHeight: 1.1, marginBottom: "24px" }}>
                כל החוזים שלך. כל הנתונים. תמונה אחת ברורה.
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.85)", maxWidth: "500px", lineHeight: 1.6, marginBottom: "32px" }}>
                לוח בקרה אנליטי שמאגד את כל מחזור חיי החוזים, ביצועי צוות, וסיכונים — בזמן אמת וברמת פירוט גבוהה.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button style={{ padding: "14px 32px", background: "#435eff", color: "white", fontWeight: "600", borderRadius: "12px", border: "none", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  התחל לנתח עכשיו
                  <ArrowRight size={20} />
                </button>
                <button style={{ padding: "14px 32px", background: "transparent", color: "white", fontWeight: "600", borderRadius: "12px", border: "2px solid rgba(255, 255, 255, 0.3)", cursor: "pointer", fontSize: "16px" }}>
                  צפה בדמו
                </button>
              </div>
            </div>

            {/* Hero Dashboard Preview - 3D with Hover */}
            <div
              className="dashboard-3d"
              style={{
                perspective: "1000px",
                cursor: "pointer",
                transition: "all 0.3s ease-out"
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                const rotX = y * 10;
                const rotY = -x * 10;
                el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(20px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
              }}
            >
              <div style={{ borderRadius: "20px", padding: "32px", background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "6px", fontFamily: "Roboto, sans-serif", fontWeight: "600", letterSpacing: "0.1em" }}>DASHBOARD OVERVIEW</p>
                    </div>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: "600", letterSpacing: "0.1em" }}>ACTIVE</span>
                      <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: "600", letterSpacing: "0.1em" }}>SYSTEM</span>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                    <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                      <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "10px", fontFamily: "Roboto, sans-serif", textAlign: "right" }}>חוזים פעילים</p>
                      <p style={{ fontSize: "28px", fontWeight: "700", color: "white", fontFamily: "Roboto, sans-serif", textAlign: "right" }}>22</p>
                    </div>
                    <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                      <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "10px", fontFamily: "Roboto, sans-serif", textAlign: "right" }}>שווי תיק</p>
                      <p style={{ fontSize: "28px", fontWeight: "700", color: "white", fontFamily: "Roboto, sans-serif", textAlign: "right" }}>₪27,700</p>
                    </div>
                  </div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)", fontFamily: "Roboto, sans-serif", fontWeight: "500" }}>ד'חודש הגדול 1.2%+</span>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "white", fontFamily: "Roboto, sans-serif" }}>שיעור חתימה</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", height: "28px", alignItems: "flex-end" }}>
                    <div style={{ flex: 1, background: "#435eff", borderRadius: "3px", height: "85%" }} />
                    <div style={{ flex: 1, background: "rgba(67, 94, 255, 0.6)", borderRadius: "3px", height: "55%" }} />
                    <div style={{ flex: 1, background: "rgba(67, 94, 255, 0.4)", borderRadius: "3px", height: "40%" }} />
                    <div style={{ flex: 1, background: "rgba(67, 94, 255, 0.25)", borderRadius: "3px", height: "30%" }} />
                    <div style={{ flex: 1, background: "rgba(67, 94, 255, 0.15)", borderRadius: "3px", height: "25%" }} />
                  </div>
                  <div style={{ textAlign: "right", marginTop: "12px" }}>
                    <p style={{ fontSize: "24px", fontWeight: "700", color: "white", fontFamily: "Roboto, sans-serif", margin: "0" }}>5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Solution Section */}
        <section style={{ background: "white", padding: "80px 32px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "700", color: "#1a1b24", lineHeight: 1.2 }}>
                הפתרון: ניתוח חוזים בזמן אמת
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                { icon: BarChart3, title: "תמונת מצב מיידית", desc: "לוח בקרה שמרכז את כל החוזים, הכנסות, וביצועים בדף אחד. נתונים בזמן אמת ללא עיכוב." },
                { icon: TrendingUp, title: "מעקב ביצועים", desc: "ראה כמה מהר סוגרים עסקאות, איזה צוותים מנצחים, ומה המגמות החודשיות." },
                { icon: AlertCircle, title: "הערכת סיכונים חכמה", desc: "AI מזהה סעיפים בעייתיים בחוזים, מזהיר על הפרות אפשריות, ומציע שיפורים." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="reveal-on-scroll" style={{ padding: "32px", borderRadius: "12px", background: "#f4f2ff", border: "1px solid #c5c5d8", opacity: 0, transition: "all 0.8s ease-out" }}>
                    <Icon size={40} color="#2241e6" style={{ marginBottom: "16px" }} />
                    <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1a1b24", marginBottom: "12px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "16px", color: "#444656", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section style={{ background: "#1a2a66", padding: "48px 32px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", textAlign: "center" }}>
              {[
                { label: "חוזים בנתח", value: "1,284", unit: "יחידות" },
                { label: "שווי תיק", value: "₪42.5M", unit: "מאובטח" },
                { label: "דיוק בנתונים", value: "100%", unit: "עד זמן אמת" },
                { label: "זמן טעינה", value: "< 2 שנ'", unit: "גם בנתונים ענקיים" },
              ].map((stat, i) => (
                <div key={i} className="reveal-on-scroll" style={{ opacity: 0, transition: "all 0.8s ease-out", transitionDelay: `${i * 100}ms` }}>
                  <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", color: "#bbc3ff", lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)", marginTop: "8px" }}>
                    {stat.unit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Breakdown - Contract Lifecycle */}
        <section style={{ background: "white", padding: "80px 32px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", marginBottom: "80px" }}>
              <div>
                <h3 style={{ fontSize: "clamp(18px, 3vw, 32px)", fontWeight: "800", color: "#1a1b24", marginBottom: "20px", lineHeight: 1.1 }}>
                  סטטוסים חכמים לכל שלב בחוזה
                </h3>
                <p style={{ fontSize: "18px", color: "#444656", lineHeight: 1.6, marginBottom: "20px" }}>
                  המערכת מסווגת אוטומטית כל חוזה לפי שלב החיים שלו — טיוטה, ביקורת, משא ומתן, או חתום — כך שאתה תמיד יודע איפה קל להתחיל.
                </p>
                <ul style={{ color: "#444656" }}>
                  {["טיוטה וקבצים ראשוניים", "בתהליך ביקורת משפטית", "במשא ומתן עם הצד השני", "חתום וסגור"].map((item, i) => (
                    <li key={i} style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "12px" }}>
                      <span style={{ color: "#2241e6", fontWeight: "600", marginLeft: "8px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal-on-scroll" style={{ background: "#f4f2ff", padding: "32px", borderRadius: "16px", opacity: 0, transition: "all 0.8s ease-out" }}>
                <div style={{ space: "16px" }}>
                  {[
                    { stage: "טיוטה", count: "450", color: "#2241e6" },
                    { stage: "ביקורת", count: "380", color: "#435eff" },
                    { stage: "משא ומתן", count: "150", color: "#6366f1" },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontSize: "16px", fontWeight: "600", color: "#1a1b24" }}>{item.stage}</span>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: item.color }}>{item.count}</span>
                      </div>
                      <div style={{ height: "12px", background: "#e2e1ee", borderRadius: "6px", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: item.color, borderRadius: "6px", width: `${(parseInt(item.count) / 450) * 100}%`, transition: "width 1s ease-out" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
              <div className="reveal-on-scroll" style={{ background: "#f4f2ff", padding: "32px", borderRadius: "16px", opacity: 0, transition: "all 0.8s ease-out" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#1a1b24", marginBottom: "24px" }}>
                  מדדי ביצועים לפי צוות
                </h4>
                {[
                  { team: "רכש מרכזי", contracts: "142", time: "3.2 ימים", status: "תקין", color: "#059669" },
                  { team: "מכירות EMEA", contracts: "89", time: "5.1 ימים", status: "במעקב", color: "#dc2626" },
                  { team: "פ.ע גלובלי", contracts: "34", time: "2.4 ימים", status: "תקין", color: "#059669" },
                ].map((row, i) => (
                  <div key={i} style={{ paddingBottom: "16px", marginBottom: "16px", borderBottom: "1px solid #e2e1ee" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontWeight: "600", color: "#1a1b24" }}>{row.team}</span>
                      <span style={{ fontSize: "14px", color: "#757687", fontWeight: "500" }}>{row.time}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "14px", color: "#757687" }}>
                        {row.contracts} חוזים
                      </span>
                      <span style={{ fontSize: "12px", padding: "4px 12px", background: row.color + "15", color: row.color, borderRadius: "100px", fontWeight: "600" }}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: "clamp(18px, 3vw, 32px)", fontWeight: "800", color: "#1a1b24", marginBottom: "20px", lineHeight: 1.1 }}>
                  ראה את שיעורי ההצלחה של כל צוות
                </h3>
                <p style={{ fontSize: "18px", color: "#444656", lineHeight: 1.6, marginBottom: "20px" }}>
                  הדשבורד מציג בזמן אמת איזה צוותים סוגרים עסקאות במהירות, מי עומד במבחן סיכון, ומי זקוק להדרכה נוספת.
                </p>
                <p style={{ fontSize: "18px", color: "#444656", lineHeight: 1.6 }}>
                  השתמש בנתונים אלה כדי להגביר את הביצועים, לתבעת הצוות ולהימנע מטעויות יקרות.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section style={{ padding: "100px 32px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", borderRadius: "40px", padding: "80px 60px", background: "linear-gradient(135deg, #152156 0%, #1e2e7e 100%)", textAlign: "center", color: "white", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.1 }} />
            <div style={{ position: "relative", zIndex: 10 }}>
              <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: "800", marginBottom: "32px", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                הפוך נתונים לתובנות עסקיות
              </h2>
              <p style={{ fontSize: "16px", opacity: 0.9, marginBottom: "48px", maxWidth: "800px", margin: "0 auto 48px", lineHeight: 1.7, fontWeight: "500" }}>
                קבל תמונת מצב ברורה על חוזים, לקוחות, תשלומים וביצועים - עם Analytics חכם שמרכז עבורך את כל הנתונים החשובים בזמן אמת.
              </p>
              <button style={{ padding: "14px 48px", background: "white", color: "#152156", fontWeight: "700", fontSize: "16px", borderRadius: "16px", border: "none", cursor: "pointer", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)", display: "inline-flex", alignItems: "center", gap: "10px", transition: "all 0.3s ease" }}>
                <span>התחל לנתח עכשיו</span>
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
              <p style={{ marginTop: "24px", fontSize: "13px", opacity: 0.75, fontWeight: "500" }}>
                אין צורך בכרטיס אשראי. הקמה מיידית.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .reveal-on-scroll {
          opacity: 0;
        }
        .reveal-on-scroll.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
