"use client";
import { ArrowRight, TrendingUp, BarChart3, Zap } from "lucide-react";

export function AnalyticsServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-blue-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#3B82F6" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#BFDBFE15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#3B82F620", color: "#3B82F6" }}>
            ניתוח נתונים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            תובנות עסקיות בזמן אמת
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            ראו דוחות מלאים על כל חוזה, סטטוסים, ערכים וטרנדים. דשבורד חכם שנותן לכם את כל הנתונים שאתם צריכים כדי להנהל את הבעיסקה שלכם בחוכמה.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#3B82F6" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #3B82F6", color: "#3B82F6" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#3B82F6" }}>דוחות ליום</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>10K+</div>
            <div className="text-sm text-gray-600">מחברות בכל גדלים</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#3B82F6" }}>דיוק הנתונים</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>99.99%</div>
            <div className="text-sm text-gray-600">אפס טעויות בעדכוני נתונים</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#3B82F6" }}>זמן עדכון</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>Real-time</div>
            <div className="text-sm text-gray-600">נתונים מעודכנים כל דקה</div>
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דשבורד חכם לחברות כל גדלים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#F3F4F6", border: "2px solid #3B82F6" }}>
              <div className="p-8">
                <div className="text-sm font-bold mb-6" style={{ color: "#3B82F6" }}>דוגמה מדשבורד</div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-2">חוזים פעילים</div>
                    <div className="h-2 rounded" style={{ background: "#3B82F6" }} />
                    <div className="text-xl font-black mt-2" style={{ color: "#1E1B4B" }}>24</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">ערך כולל</div>
                    <div className="h-2 rounded" style={{ background: "#60A5FA" }} />
                    <div className="text-xl font-black mt-2" style={{ color: "#1E1B4B" }}>₪4.2M</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">שיעור היישום</div>
                    <div className="h-2 rounded" style={{ background: "#93C5FD" }} />
                    <div className="text-xl font-black mt-2" style={{ color: "#1E1B4B" }}>85%</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                מעקב מלא בזמן אמת
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                ראו את כל המטריקות החשובות בעמ אחד. סטטוסים, ערכים, דיוקים וטרנדים - הכל מעודכן כל דקה.
              </p>
              <ul className="space-y-4">
                {[
                  "סטטיסטיקות חוזים בזמן אמת",
                  "דוחות הכנסות וערכים",
                  "ניתוח טרנדים וחיזויים",
                  "השוואות לתקופות קודמות",
                  "ייצוא דוחות PDF/Excel",
                  "התראות על חריגות"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 justify-end">
                    <span style={{ color: "#6B7280" }}>{item}</span>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#3B82F6" }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מטריקות שמאנהלות את העסק
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "ערכי חוזים וטרנדים",
                desc: "ראו את סה\"כ הערך של כל החוזים, צמיחה חודשית וחיזויים לרבעון הבא."
              },
              {
                num: "02",
                title: "סטטוסים וזמני ביצוע",
                desc: "עקוב אחר אחוזי היישום, מי חתם, מי עדיין ממתין, ומי שהעדכנו."
              },
              {
                num: "03",
                title: "ניתוח ביצוע לקוחות",
                desc: "ראו איך כל לקוח מתנהג - כמה חוזים, איזה ערך כולל, וכמה זמן לוקח להם."
              },
              {
                num: "04",
                title: "התראות ודוחות מותאמים",
                desc: "קבלו הודעות על אירועים חשובים, וייצאו דוחות בפורמט שאתם צריכים."
              },
            ].map((metric, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #3B82F6" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#3B82F6" }}>{metric.num}</div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {metric.title}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            קבל שליטה מלאה על הנתונים שלך
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            דשבורד חכם, דוחות מדויקים, ותובנות שמעדכנות בזמן אמת. הכל בעמ אחד.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#3B82F6" }}>
            התחל לנתח עכשיו
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
