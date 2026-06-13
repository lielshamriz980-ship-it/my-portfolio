"use client";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export function InternationalContractsServicePageV2() {
  useEffect(() => {
    // Scroll Animations Observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-up")) {
            entry.target.classList.add("active");
          }
          if (entry.target.classList.contains("slide-left") || entry.target.classList.contains("slide-right")) {
            entry.target.classList.add("slide-active");
          }
          if (entry.target.classList.contains("stagger-item")) {
            entry.target.classList.add("stagger-active");
          }
          if (entry.target.querySelector(".count")) {
            startCount(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up, .slide-left, .slide-right, .stagger-item, .group").forEach((el) => {
      observer.observe(el);
    });

    // Count up logic
    function startCount(container: Element) {
      const counts = container.querySelectorAll(".count");
      counts.forEach((count) => {
        const target = +count.getAttribute("data-target")!;
        let current = 0;

        const updateCount = () => {
          const increment = target / 100;
          if (current < target) {
            current += Math.ceil(increment);
            count.textContent = current > target ? target.toString() : current.toString();
            setTimeout(updateCount, 20);
          } else {
            count.textContent = target.toString();
          }
        };
        updateCount();
      });
    }

    // Stagger logic for rows
    const staggerItems = document.querySelectorAll(".stagger-item");
    staggerItems.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div dir="rtl" className="bg-background text-on-background font-['Assistant',sans-serif]">
      <style>{`
        body { font-family: 'Assistant', sans-serif; overflow-x: hidden; }

        .orbit-container {
            position: absolute;
            top: -200px;
            right: -200px;
            width: 800px;
            height: 800px;
            pointer-events: none;
        }

        .orbit {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 50%;
            animation: rotate 60s linear infinite;
        }

        .orbit-large { width: 600px; height: 600px; }
        .orbit-small { width: 400px; height: 400px; animation-direction: reverse; }

        @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .dot-grid {
            display: grid;
            grid-template-columns: repeat(10, 4px);
            gap: 12px;
            opacity: 0.08;
        }
        .dot { width: 4px; height: 4px; background-color: white; border-radius: 50%; }

        .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .fade-up.active {
            opacity: 1;
            transform: translateY(0);
        }

        .slide-left { transform: translateX(100px); opacity: 0; transition: all 0.8s ease-out; }
        .slide-right { transform: translateX(-100px); opacity: 0; transition: all 0.8s ease-out; }
        .slide-active { transform: translateX(0); opacity: 1; }

        .stagger-item { opacity: 0; transform: translateY(20px); transition: all 0.5s ease-out; }
        .stagger-item.stagger-active { opacity: 1; transform: translateY(0); }

        .stat-divider { width: 1px; height: 40px; background-color: #E2E8F0; }
      `}</style>

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-[#0D1B4B] to-[#1A2A66]">
          {/* CSS Orbits */}
          <div className="orbit-container">
            <div className="orbit orbit-large"></div>
            <div className="orbit orbit-small"></div>
          </div>

          {/* CSS Dot Grid */}
          <div className="absolute bottom-12 right-12 md:right-24 dot-grid">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="dot"></div>
            ))}
          </div>

          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="fade-up active">
              <span className="inline-block mb-6 px-4 py-1 rounded-full bg-[#435EFF]/20 text-[#435EFF] font-bold tracking-widest text-[13px] border border-[#435EFF]/30">
                חוזים בינלאומיים
              </span>

              <h1 className="text-white font-black text-4xl md:text-[64px] leading-tight mb-8">
                חוזים בינלאומיים - בלי בלגן, <br className="hidden md:block" /> בלי בלבול, בלי עיכובים
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                נהל עסקאות עם לקוחות וספקים מכל העולם - בעברית, באנגלית, ובכל שפה שתצטרך - בצורה מסודרת, מאובטחת, ומקצועית.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="px-10 py-5 bg-[#435EFF] text-white rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(67,94,255,0.4)] transition-all">
                  התחל לנהל חוזים בינלאומיים
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                  ראה דמו
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: STATS */}
        <section className="bg-white border-b border-[#c5c5d8]/30 py-8 md:py-0 md:h-[100px] flex items-center">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-around items-center gap-6">
              <div className="text-center group">
                <div className="text-3xl font-bold text-[#435EFF] flex items-center gap-1 justify-center">
                  <span className="count" data-target="40">
                    0
                  </span>
                  <span>+</span>
                </div>
                <div className="text-sm font-semibold text-[#444656]">מדינות שבהן לקוחות DealLayer עובדים</div>
              </div>

              <div className="hidden md:block stat-divider"></div>

              <div className="text-center group">
                <div className="text-3xl font-bold text-[#435EFF] flex items-center gap-1 justify-center">
                  <span className="count" data-target="3">
                    0
                  </span>
                  <span>שפות</span>
                </div>
                <div className="text-sm font-semibold text-[#444656]">נתמכות במלואן כרגע</div>
              </div>

              <div className="hidden md:block stat-divider"></div>

              <div className="text-center group">
                <div className="text-3xl font-bold text-[#435EFF] flex items-center gap-1 justify-center">
                  <span className="count" data-target="100">
                    0
                  </span>
                  <span>%</span>
                </div>
                <div className="text-sm font-semibold text-[#444656]">חוזים בינלאומיים עם חתימה דיגיטלית</div>
              </div>

              <div className="hidden md:block stat-divider"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#435EFF]">24/7</div>
                <div className="text-sm font-semibold text-[#444656]">גישה לחוזים מכל אזור זמן</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM */}
        <section className="bg-[#F7F8FA] py-20 md:py-32">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-[#1a1b24]">
              עסקאות בינלאומיות הן מורכבות - <br className="hidden md:block" /> ניהול החוזים שלהן לא חייב להיות
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  num: "01",
                  title: "מחסומי שפה והבדלי תרבות",
                  body: "משא ומתן נתקע כי כל צד רואה את החוזה בשפה אחרת? אנחנו מסנכרנים את הגרסאות בצורה מושלמת.",
                },
                {
                  num: "02",
                  title: "חוקיות וחתימות חוצות גבולות",
                  body: "חשש שהחתימה לא תהיה תקפה במדינה זרה? הפתרון שלנו עומד בתקנים הבינלאומיים המחמירים ביותר.",
                },
                {
                  num: "03",
                  title: "ניהול גרסאות ושינויים אינסופי",
                  body: "המייל הלך לאיבוד? מישהו שינה סעיף בלי לעדכן? ב-DealLayer הכל מתועד, שקוף ונגיש בזמן אמת.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-[#435EFF] flex items-start gap-6 stagger-item">
                  <span className="text-[#435EFF] font-bold text-2xl opacity-20">{item.num}</span>
                  <div>
                    <h3 className="text-[#034E7C] font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-[#444656] text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: FEATURES */}
        <section className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-8">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
              <div className="md:w-1/2 fade-up">
                <h3 className="text-3xl md:text-4xl font-black text-[#1a1b24] mb-6">תמיכה רב-לשונית</h3>
                <p className="text-lg text-[#444656] leading-relaxed">
                  צור חוזים בממשק דו-לשוני המאפשר לכל צד לקרוא את התנאים בשפה הנוחה לו, תוך שמירה על אחידות משפטית מוחלטת.
                </p>
              </div>
              <div className="md:w-1/2 bg-[#eeecfa] rounded-3xl h-64 shadow-inner flex items-center justify-center p-6">
                <div className="w-full h-full bg-white rounded-xl shadow-lg border border-[#c5c5d8] flex flex-col p-4 gap-2">
                  <div className="h-4 w-3/4 bg-[#435EFF]/10 rounded"></div>
                  <div className="h-4 w-full bg-[#e2e1ee] rounded"></div>
                  <div className="h-4 w-2/3 bg-[#e2e1ee] rounded"></div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-8 w-24 bg-[#435EFF]/20 rounded-full"></div>
                    <div className="h-8 w-24 bg-[#e2e1ee] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Reversed */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-20">
              <div className="md:w-1/2 fade-up">
                <h3 className="text-3xl md:text-4xl font-black text-[#1a1b24] mb-6">תבניות בינלאומיות מוכנות</h3>
                <p className="text-lg text-[#444656] leading-relaxed">
                  אל תתחיל מאפס. השתמש בספריית התבניות שלנו שנבדקו על ידי מומחים משפטיים להתאמה לשווקים גלובליים.
                </p>
              </div>
              <div className="md:w-1/2 bg-[#eeecfa] rounded-3xl h-64 shadow-inner flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-white rounded-xl shadow p-4 border-t-4 border-[#435EFF]"></div>
                  <div className="bg-white rounded-xl shadow p-4 border-t-4 border-[#4c5b99]"></div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
              <div className="md:w-1/2 fade-up">
                <h3 className="text-3xl md:text-4xl font-black text-[#1a1b24] mb-6">חתימה דיגיטלית ממכל מקום</h3>
                <p className="text-lg text-[#444656] leading-relaxed">
                  תהליך חתימה מהיר, מאובטח וקביל משפטית המותאם לכל מכשיר - נייד, טאבלט או מחשב - בכל מקום בעולם.
                </p>
              </div>
              <div className="md:w-1/2 bg-[#eeecfa] rounded-3xl h-64 shadow-inner flex items-center justify-center p-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-64 h-40 border border-[#c5c5d8] relative flex flex-col justify-center items-center">
                  <div className="w-32 h-1 bg-[#444656]/20 mb-4"></div>
                  <div className="w-40 h-10 border-b-2 border-[#435EFF] border-dashed flex items-end justify-center pb-1 text-[#435EFF] italic font-serif">
                    Signature
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="mt-20 pt-12 border-t border-[#c5c5d8]/30 flex flex-wrap justify-between gap-6">
              {[
                "מעקב בזמן אמת",
                "אחסון מאובטח (Cloud)",
                "תמיכה בתשלומים",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#435EFF]/10 flex items-center justify-center text-[#435EFF] font-bold text-sm">{idx + 1}</div>
                  <span className="text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: BEFORE/AFTER */}
        <section className="bg-[#0D1B4B] py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="slide-left p-6 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-red-500 font-bold text-xl mb-8 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  בלי DealLayer
                </h4>
                <ul className="space-y-6">
                  {[
                    "אימיילים מתפזרים ואובדן גרסאות קריטיות",
                    "אי הבנות עקב תרגום לא מקצועי או חסר",
                    "זמן סגירת עסקה ארוך (שבועות במקום ימים)",
                    "סיכונים משפטיים עקב חתימות לא תקניות",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/60">
                      <span className="mt-2 block w-6 h-[1px] bg-red-500 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="slide-right p-6 bg-white/10 rounded-3xl border border-[#435EFF]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <h4 className="text-[#10B981] font-bold text-xl mb-8 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#10B981] rounded-full"></span>
                  עם DealLayer
                </h4>
                <ul className="space-y-6">
                  {[
                    "מרכז שליטה אחד לכל החוזים הבינלאומיים",
                    "סנכרון שפות מובנה לכל סעיף ונספח",
                    "חתימה בלחיצת כפתור המזרזת את העסקה ב-70%",
                    "ביטחון מלא עם תאימות לתקנים גלובליים",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white">
                      <span className="mt-2 block w-6 h-[2px] bg-[#10B981] flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: USE CASES */}
        <section className="bg-[#F7F8FA] py-20 md:py-32">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-[#1a1b24]">למי זה מתאים?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "חברות SaaS",
                  body: "מכירת רשיונות גלובלית וניהול חוזי שירות מול לקוחות ארגוניים בכל מקום בעולם ללא חיכוך.",
                },
                {
                  title: "יצואנים וסוחרים",
                  body: "ניהול שרשרת אספקה מורכבת מול ספקים בינלאומיים והבטחת תנאי תשלום ברורים.",
                },
                {
                  title: "עורכי דין ויועצים",
                  body: "מתן שירות מקצועי ללקוחות בינלאומיים תוך שימוש בכלי ניהול מסמכים מתקדמים ומאובטחים.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border-t-4 border-[#435EFF] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal-on-scroll"
                >
                  <div className="text-[#435EFF] font-bold mb-4">{item.title}</div>
                  <p className="text-[#444656] text-sm leading-relaxed mb-6">{item.body}</p>
                  <a href="#" className="text-[#435EFF] text-sm font-semibold flex items-center gap-2">
                    קרא עוד
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#435EFF] py-16 md:py-20">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-8">מוכן להפוך את ניהול החוזים שלך לבינלאומי?</h2>
            <button className="px-12 py-6 bg-white text-[#435EFF] rounded-xl font-bold text-lg hover:shadow-2xl active:scale-95 transition-all">
              הצטרף ל-DealLayer היום
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
