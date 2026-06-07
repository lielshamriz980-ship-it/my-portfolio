"use client";
import { ArrowRight, Users, BarChart3, MessageSquare, Zap, TrendingUp, ShoppingCart } from "lucide-react";

export function ClientManagementServicePageV2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-amber-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#D97706" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#FEF3C715" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#D9770620", color: "#D97706" }}>
            ניהול לקוחות
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            ניהול לקוחות שלך בקום אחד
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            מרכז כל הנתונים של הלקוחות שלך, היסטוריית חוזים, התקשרויות, וביצועים. דשבורד CRM שמאפשר לך לנהל היחסים בחוכמה.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#D97706" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #D97706", color: "#D97706" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #D97706" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#D97706" }}>
              <Users size={18} />
              ניהול לקוחות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>Unlimited</div>
            <div className="text-sm text-gray-600 text-right">אחסן הרבה שתרצה</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #D97706" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#D97706" }}>
              <BarChart3 size={18} />
              ניתוח נתונים
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>360°</div>
            <div className="text-sm text-gray-600 text-right">תצוגה מלאה</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #D97706" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#D97706" }}>
              <MessageSquare size={18} />
              התקשרויות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>כל</div>
            <div className="text-sm text-gray-600 text-right">בקום אחד</div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            כל מה שאתה צריך לנהל לקוחות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                num: "01",
                title: "פרופיל לקוח מלא",
                desc: "כל הנתונים של הלקוח בקום אחד - פרטיים, כלכליים, משפטיים."
              },
              {
                icon: BarChart3,
                num: "02",
                title: "ניתוח ביצוע",
                desc: "ראה כמה חוזים לכל לקוח, ערכים, מהלך וטרנדים."
              },
              {
                icon: MessageSquare,
                num: "03",
                title: "היסטוריית התקשרויות",
                desc: `עקוב אחר כל דוא"ל, שיחה, פגישה והחלטה עם הלקוח.`
              },
              {
                icon: TrendingUp,
                num: "04",
                title: "חיזויים וניתוח",
                desc: "AI מנבא מכה סיכויי המרה וערך חוזה הבא."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #D97706" }}>
                  <Icon size={32} color="#D97706" className="mb-4" />
                  <div className="text-sm font-black mb-4" style={{ color: "#D97706" }}>{feature.num}</div>
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {feature.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Profile */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            פרופיל לקוח מעמוק
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFBEB", border: "2px solid #D97706" }}>
              <div className="p-8">
                <div className="mb-6 p-4 rounded-lg text-center" style={{ background: "white" }}>
                  <div style={{ fontSize: "48px" }}>👤</div>
                  <div className="font-bold mt-2" style={{ color: "#1E1B4B" }}>דוד כהן</div>
                  <div style={{ color: "#6B7280", fontSize: "14px" }}>{`מנכ"ל שלומי תקשורת`}</div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg p-4" style={{ background: "white" }}>
                    <div className="text-xs text-gray-600 mb-2">חוזים פעילים</div>
                    <div className="text-2xl font-black" style={{ color: "#D97706" }}>5</div>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: "white" }}>
                    <div className="text-xs text-gray-600 mb-2">ערך כולל</div>
                    <div className="text-2xl font-black" style={{ color: "#D97706" }}>₪500K</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                תצוגה 360° של כל לקוח
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                כל הנתונים והיסטוריה בעמוד אחד. פרטים, חוזים, התקשרויות, והערות.
              </p>
              <ul className="space-y-4">
                {[
                  "פרטי קשר ותכניות עבודה",
                  "רישום כל החוזים והעסקאות",
                  `היסטוריית דוא"ל ופגישות`,
                  "הערות פנימיות של הצוות",
                  "סטטוס התקשרות כרונולוגי"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 justify-end">
                    <span style={{ color: "#6B7280" }}>{item}</span>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#D97706" }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentation & Insights */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            סגמנטציה וניתוח
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "VIP", desc: "לקוחות בעלי ערך גבוה", count: "15" },
              { title: "בגדילה", desc: "עסקאות גדלות החודשים", count: "32" },
              { title: "ללא פעילות", desc: "לא פעיל 90 יום", count: "8" },
              { title: "סיכון גבוה", desc: "עלולים לעזוב", count: "5" },
            ].map((segment, i) => (
              <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "#F9FAFB", border: "2px solid #E5E7EB" }}>
                <div className="text-3xl font-black mb-3" style={{ color: "#D97706" }}>{segment.count}</div>
                <h4 className="font-bold mb-2" style={{ color: "#1E1B4B" }}>
                  {segment.title}
                </h4>
                <p className="text-sm" style={{ color: "#6B7280" }}>
                  {segment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            אוטומציה לניהול לקוחות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "מטלות אוטומטיות", desc: "תזכורות מעקב אוטומטיות" },
              { icon: MessageSquare, title: "הודעות חכמות", desc: `דוא"ל לפי אירועים` },
              { icon: TrendingUp, title: "חיזויים", desc: "AI ניבוי קרוב קנייה" },
              { icon: ShoppingCart, title: "עסקאות", desc: "ניהול דיל וערך" },
            ].map((automation, i) => {
              const Icon = automation.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #D97706" }}>
                  <Icon size={32} color="#D97706" className="mb-4" />
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {automation.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {automation.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            בנה יחסים חזקים עם הלקוחות
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            ניהול לקוחות חכם, ניתוח עמוק, אוטומציה מלאה. הכל לשיפור הביצועים שלך.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#D97706" }}>
            התחל לנהל לקוחות
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
