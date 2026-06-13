"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Home, Building2, Briefcase, Handshake, FileText, Shield } from "lucide-react";

export function RealEstateConstructionServicePageV2() {
  const [typedText, setTypedText] = useState("");
  const [portfolioVisible, setPortfolioVisible] = useState([false, false, false, false]);
  const [chartsVisible, setChartsVisible] = useState(false);
  const [countValues, setCountValues] = useState({ salary: 0, guarantee: 0 });

  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          if (entry.target.id === "typing-section") {
            startTypingAnimation();
          }
          if (entry.target.id === "portfolio-section") {
            startPortfolioAnimation();
          }
          if (entry.target.id === "chart-section") {
            startChartAnimation();
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const startTypingAnimation = () => {
    const text = "חוזה שכירות - דירה ברחוב דיזנגוף 44, תל אביב";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  };

  const startPortfolioAnimation = () => {
    setPortfolioVisible([false, false, false, false]);
    setTimeout(() => setPortfolioVisible([true, false, false, false]), 300);
    setTimeout(() => setPortfolioVisible([true, true, false, false]), 600);
    setTimeout(() => setPortfolioVisible([true, true, true, false]), 900);
    setTimeout(() => setPortfolioVisible([true, true, true, true]), 1200);
  };

  const startChartAnimation = () => {
    setChartsVisible(true);
    let current = 0;
    const salaryTarget = 24800;
    const guaranteeTarget = 100;
    const step = salaryTarget / 60;

    const update = () => {
      current += step;
      if (current < salaryTarget) {
        setCountValues({ salary: Math.ceil(current), guarantee: Math.ceil((current / salaryTarget) * guaranteeTarget) });
        requestAnimationFrame(update);
      } else {
        setCountValues({ salary: salaryTarget, guarantee: guaranteeTarget });
      }
    };
    update();
  };

  const templates = [
    { title: "חוזה שכירות מגורים", desc: "סטנדרט משרד המשפטים עם הגנות נוספות למשכיר ונספחים למכשירי חשמל.", icon: "home" },
    { title: "הסכם שכירות מסחרי", desc: "מותאם למשרדים וחנויות כולל ניהול דמי ניהול ושימוש בשטחים משותפים.", icon: "building" },
    { title: "הסכם קבלן מפתח", desc: "פירוט אבני דרך, כתב כמויות, לוחות זמנים וביטוחי קבלנים רלוונטיים.", icon: "wrench" },
    { title: "הסכם תיווך במקרקעין", desc: "חוק המתווכים 1996 - טופס הזמנת שירותי תיווך תקני ומעודכן.", icon: "handshake" },
    { title: "ייפוי כוח נוטריוני", desc: "נוסח סטנדרטי לעסקאות נדל\"ן מורכבות והרשאות חתימה ליזמים.", icon: "file" },
    { title: "הסכם סודיות (NDA)", desc: "הגנה משפטית לפני חשיפת פרטי פרויקט ותוכניות ליזמים פוטנציאליים.", icon: "shield" }
  ];

  const portfolioItems = [
    { name: "מגדלי עזריאלי, קומה 24", status: "מושכר", statusColor: "#10B981" },
    { name: "הירקון 120, תל אביב", status: "בשיפוץ", statusColor: "#3B82F6" },
    { name: "רחוב הארבעה, בניין ב'", status: "פנוי", statusColor: "#F59E0B" },
    { name: "שדרות רוטשילד 22", status: "פיגור תשלום!", statusColor: "#EF4444", alert: true }
  ];

  const testimonials = [
    {
      name: "שי דיין, מנהל נכסים",
      title: "לבעלי נכסים",
      text: '"מאז שעברנו ל-DealLayer, זמן ניהול החוזים שלנו ירד ב-70%. אין יותר ניירת אבודה ואין חובות שמתפספסים."'
    },
    {
      name: 'אפרת לוי, יזמית נדל"ן',
      title: "לקבלנים ויזמים",
      text: '"היכולת לנהל את כל הקבלנים המשניים תחת פלטפורמה אחת עם מעקב אבני דרך היא Game Changer בשבילנו."'
    },
    {
      name: "אבי כהן, תיווך אליט",
      title: "למתווכים",
      text: '"חתימה דיגיטלית בשטח דרך הנייד הפכה את העבודה שלי למקצועית ומהירה הרבה יותר."'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "home":
        return <Home size={28} color="#435EFF" />;
      case "building":
        return <Building2 size={28} color="#435EFF" />;
      case "wrench":
        return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#435EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-8.94-8.94l-2.83 2.83a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l2.83-2.83z"></path><path d="M9.7 17.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-3.77 3.77a6 6 0 0 0 8.94 8.94l2.83-2.83a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-2.83 2.83z"></path></svg>;
      case "handshake":
        return <Handshake size={28} color="#435EFF" />;
      case "file":
        return <FileText size={28} color="#435EFF" />;
      case "shield":
        return <Shield size={28} color="#435EFF" />;
      default:
        return null;
    }
  };

  return (
    <div style={{ direction: "rtl", fontFamily: "Assistant, sans-serif", background: "#fcf8ff", color: "#181445", minHeight: "100vh" }}>
      <style>{`
        .reveal-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-up.visible { opacity: 1; transform: translateY(0); }
        .glass-card { background: rgba(255, 255, 255, 0.06); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; transition: all 0.4s ease; }
        .glass-card:hover { transform: translateY(-6px); background: rgba(67, 94, 255, 0.15); border-color: rgba(67, 94, 255, 0.6); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); }
        .shimmer { position: relative; overflow: hidden; }
        .shimmer::after { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: shimmerAnim 3s infinite linear; }
        @keyframes shimmerAnim { 0% { left: -100%; } 100% { left: 200%; } }
        .bar-chart-bar { transition: height 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .portfolio-item { opacity: 0; transform: translateX(16px); transition: all 0.7s ease; }
        .portfolio-item.visible { opacity: 1; transform: translateX(0); }
      `}</style>

      {/* HERO SECTION */}
      <section style={{ background: "linear-gradient(135deg, #0D1B4B 0%, #1A2A66 100%)", color: "#fff", padding: "120px 24px", position: "relative", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(67, 94, 255, 0.15) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.3 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <h1 style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.2 }}>כל חוזה נדל"ן. כל הסכם בנייה. <span style={{ color: "#435EFF" }}>מסודר, מוגן, חתום.</span></h1>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: 500 }}>הפלטפורמה המתקדמת בישראל לניהול מחזור החיים של נכסי נדל"ן ופרויקטים הנדסיים. מאוטומציה של חוזים ועד מעקב תשלומים.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="shimmer" style={{ padding: "16px 40px", background: "#435EFF", color: "#fff", border: "none", borderRadius: 16, fontSize: 18, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px rgba(67,94,255,0.4)" }}>התחילו עכשיו</button>
            </div>
          </div>
          <div style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: 24, borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ fontSize: 14, opacity: 0.6 }}>נכסים פעילים</span>
              <Home size={20} color="#435EFF" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ padding: 12, background: "rgba(255,255,255,0.05)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>נכס {i}</span>
                  <span style={{ padding: "2px 8px", background: i === 1 ? "rgba(51, 204, 102, 0.3)" : i === 2 ? "rgba(255, 193, 7, 0.3)" : "rgba(150, 150, 150, 0.3)", color: i === 1 ? "#66ff66" : i === 2 ? "#ffff66" : "#cccccc", borderRadius: 4, fontSize: 11 }}>
                    {i === 1 ? "פעיל" : i === 2 ? "בתהליך" : "ממתין"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section id="typing-section" className="reveal-up" style={{ padding: "120px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ order: 2 }}>
            <div style={{ background: "#efebff", padding: 32, borderRadius: 32, border: "1px solid #e3dfff", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", height: 350, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: 16, color: "#435EFF", fontWeight: 600, marginBottom: 16, fontFamily: "monospace", minHeight: 24 }}>{typedText}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, width: "100%" }} />
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, width: "85%" }} />
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, width: "70%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ padding: "8px 16px", background: "#e3dfff", color: "#181445", borderRadius: 16, fontSize: 12, fontWeight: 700 }}>טיוטה</div>
              </div>
            </div>
          </div>
          <div style={{ order: 1, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 16, background: "rgba(67,94,255,0.1)" }}>
              <FileText size={24} color="#435EFF" />
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#0D1B4B" }}>חוזים מקצועיים בלחיצת כפתור</h2>
            <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>מחולל החוזים שלנו מתאים את עצמו לסוג הנכס - משרד, מסחרי או מגורים - וכולל את כל סעיפי ההגנה הנדרשים לפי החוק הישראלי. אוטומציה מלאה של נספחים ושינויים מבניים.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio-section" className="reveal-up" style={{ padding: "120px 24px", background: "#F7F8FA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 16, background: "rgba(67,94,255,0.1)" }}>
              <Building2 size={24} color="#435EFF" />
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#0D1B4B" }}>ניהול ריבוי נכסים</h2>
            <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>דאשבורד אחד שמרכז עבורכם את כל הפורטפוליו. סטטוס תפוסה, גבייה ותחזוקה במבט על מהיר ומדויק. לא עוד טבלאות אקסל מפוזרות.</p>
          </div>
          <div style={{ background: "#fff", padding: 24, borderRadius: 32, boxShadow: "0 8px 30px rgba(0,0,0,0.08)", border: "1px solid #e3dfff", display: "flex", flexDirection: "column", gap: 12 }}>
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="portfolio-item"
                style={{
                  padding: 16,
                  background: item.alert ? "#fff" : "#f9f9f9",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: item.alert ? "2px solid #EF4444" : "1px solid #e3dfff",
                  opacity: portfolioVisible[i] ? 1 : 0,
                  transform: portfolioVisible[i] ? "translateX(0)" : "translateX(16px)",
                }}
              >
                <span style={{ fontWeight: 700, color: item.alert ? "#EF4444" : "#1A2A66" }}>{item.name}</span>
                <span style={{ padding: "6px 12px", background: `${item.statusColor}20`, color: item.statusColor, borderRadius: 16, fontSize: 12, fontWeight: 700 }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENTS & GUARANTEES */}
      <section id="chart-section" className="reveal-up" style={{ padding: "120px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ background: "#efebff", padding: 32, borderRadius: 32, border: "1px solid #e3dfff", height: 350, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 16, height: 200 }}>
              {[0.6, 0.45, 0.85, 0.7].map((height, i) => (
                <div
                  key={i}
                  className="bar-chart-bar"
                  style={{
                    width: 32,
                    background: `rgba(67,94,255,${0.3 + i * 0.2})`,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    height: chartsVisible ? `${height * 200}px` : "0px",
                    transition: "height 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                />
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "#fff", padding: 20, borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", textAlign: "center" }}>
                <p style={{ fontSize: 12, color: "#434655", marginBottom: 6 }}>הכנסה חודשית</p>
                <p style={{ fontSize: 24, fontWeight: 700, color: "#435EFF" }}>₪{countValues.salary.toLocaleString()}</p>
              </div>
              <div style={{ background: "#fff", padding: 20, borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", textAlign: "center" }}>
                <p style={{ fontSize: 12, color: "#434655", marginBottom: 6 }}>ערבויות בתוקף</p>
                <p style={{ fontSize: 24, fontWeight: 700, color: "#10B981" }}>{countValues.guarantee}%</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, order: -1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 16, background: "rgba(67,94,255,0.1)" }}>
              <Briefcase size={24} color="#435EFF" />
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#0D1B4B" }}>מעקב תשלומים וערבויות</h2>
            <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.6 }}>מערכת חכמה המתריעה על פיגורים בתשלום, מנהלת את תוקף הערבויות הבנקאיות ושומרת על תזרים מזומנים בריא עם אוטומציה של חשבוניות ודרישות תשלום.</p>
          </div>
        </div>
      </section>

      {/* TEMPLATES SECTION */}
      <section className="reveal-up" style={{ padding: "120px 24px", background: "#0D1B4B", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(67, 94, 255, 0.15) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.1 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#435EFF", textTransform: "uppercase" }}>ספריית תבניות</span>
            <h2 style={{ fontSize: 42, fontWeight: 700, marginTop: 16, marginBottom: 24 }}>תבניות מקצועיות לנדל"ן ובנייה - מוכנות לשימוש</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>הורידו או ערכו ישירות במערכת - מותאם למשרדי עורכי דין, יזמים ומנהלי נכסים מובילים בישראל.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {templates.map((template, i) => (
              <div key={i} className="glass-card reveal-up" style={{ padding: 32, display: "flex", flexDirection: "column", height: "100%", transitionDelay: `${i * 100}ms` }}>
                <div style={{ marginBottom: 24 }}>
                  {getIcon(template.icon)}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{template.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 24, flex: 1 }}>{template.desc}</p>
                <a style={{ display: "flex", alignItems: "center", gap: 8, color: "#435EFF", fontWeight: 700, fontSize: 14, cursor: "pointer", textDecoration: "none" }}>
                  הצג תבנית
                  <ArrowLeft size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="reveal-up" style={{ padding: "120px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="reveal-up" style={{ padding: 32, background: "#efebff", borderRadius: 24, position: "relative", transitionDelay: `${i * 100}ms` }}>
              <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#0D1B4B" }}>{testimonial.title}</h4>
              <p style={{ fontSize: 15, color: "#434655", fontStyle: "italic", lineHeight: 1.6, marginBottom: 20 }}>{testimonial.text}</p>
              <p style={{ fontWeight: 700, color: "#1A2A66" }}>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="reveal-up" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "linear-gradient(to left, #0D1B4B, #435EFF)", borderRadius: 32, padding: 96, textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.2 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24, lineHeight: 1.2 }}>תפסיק לנהל נדל"ן עם PDF ואקסל</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>הצטרפו למאות חברות נדל"ן בישראל שכבר עברו לעידן הניהול החכם. התחילו עכשיו ללא התחייבות.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <button className="shimmer" style={{ padding: "16px 40px", background: "#fff", color: "#435EFF", border: "none", borderRadius: 16, fontSize: 18, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>קבלת גישה מיידית</button>
              <button style={{ padding: "16px 40px", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 16, fontSize: 18, fontWeight: 700, cursor: "pointer" }}>דברו עם מומחה</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
