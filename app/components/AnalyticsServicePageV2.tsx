"use client";
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart, Activity } from "lucide-react";

export function AnalyticsServicePageV2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-blue-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#2563EB" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#BFDBFE15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#2563EB20", color: "#2563EB" }}>
            עמוד Analytics
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            נתונים חיים לעסק חכם
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            ראה את כל המטריקות החשובות בממבט אחד. דשבורד ממשי שמתעדכן כל שנייה ונותן לך את הבקרה המלאה על הנתונים שלך.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#2563EB" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #2563EB", color: "#2563EB" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#2563EB" }}>
              <BarChart3 size={18} />
              דוחות ביום
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>10K+</div>
            <div className="text-sm text-gray-600 text-right">מנותחים בזמן אמת</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#2563EB" }}>
              <TrendingUp size={18} />
              דיוק הנתונים
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>99.99%</div>
            <div className="text-sm text-gray-600 text-right">אפס טעויות בעדכוני</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#2563EB" }}>
              <Activity size={18} />
              זמן עדכון
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>Real-time</div>
            <div className="text-sm text-gray-600 text-right">כל דקה נתונים טריים</div>
          </div>
        </div>
      </section>

      {/* Dashboard Mockup Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דשבורד מודרני וקל לשימוש
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#F3F4F6", border: "2px solid #2563EB" }}>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ background: "white" }}>
                    <div className="text-xs text-gray-600 mb-2">חוזים פעילים</div>
                    <div className="text-2xl font-black" style={{ color: "#2563EB" }}>24</div>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: "white" }}>
                    <div className="text-xs text-gray-600 mb-2">ערך כולל</div>
                    <div className="text-2xl font-black" style={{ color: "#2563EB" }}>₪4.2M</div>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: "white" }}>
                    <div className="text-xs text-gray-600 mb-2">שיעור היישום</div>
                    <div className="text-2xl font-black" style={{ color: "#2563EB" }}>85%</div>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: "white" }}>
                    <div className="text-xs text-gray-600 mb-2">בממתינה</div>
                    <div className="text-2xl font-black" style={{ color: "#F97316" }}>8</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                בקרה מלאה בממבט אחד
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                כל המטריקות החשובות בעמוד אחד. סטטוסים, ערכים, דיוקים וטרנדים - הכל מעודכן תמיד.
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
                    <div className="w-2 h-2 rounded-full" style={{ background: "#2563EB" }} />
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
            מטריקות שמנהלות את העסק
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                num: "01",
                title: "ערכי חוזים וטרנדים",
                desc: `ראה את סה"כ הערך של כל החוזים, צמיחה חודשית וחיזויים לרבעון הבא.`
              },
              {
                icon: TrendingUp,
                num: "02",
                title: "סטטוסים וזמני ביצוע",
                desc: "עקוב אחר אחוזי היישום, מי חתם, מי עדיין ממתין, ומי שהעדכנו."
              },
              {
                icon: PieChart,
                num: "03",
                title: "ניתוח ביצוע לקוחות",
                desc: "ראה איך כל לקוח מתנהג - כמה חוזים, איזה ערך כולל, וכמה זמן לוקח."
              },
              {
                icon: LineChart,
                num: "04",
                title: "התראות ודוחות מותאמים",
                desc: "קבל הודעות על אירועים חשובים, וייצא דוחות בפורמט שאתה צריך."
              },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="text-sm font-black mb-4" style={{ color: "#2563EB" }}>{metric.num}</div>
                      <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                        {metric.title}
                      </h4>
                      <p style={{ color: "#6B7280" }}>
                        {metric.desc}
                      </p>
                    </div>
                    <Icon size={32} color="#2563EB" className="flex-shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות שתוכל להשתמש בהן כל יום
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "דוחות מותאמים", desc: "צור דוחות בדיוק כמו שאתה צריך" },
              { title: "נוטיפיקציות חכמות", desc: "קבל הודעות כשזה חשוב ממש" },
              { title: "ייצוא דינמי", desc: "הורד את הנתונים בכל פורמט" },
              { title: "גרפים אינטראקטיביים", desc: "דרג, סנן וכלול בקלות" },
              { title: "השוואות ותחזוקות", desc: "ראה מה השתנה מתמש לתמש" },
              { title: "תאימות GDPR", desc: "כל הנתונים שלך בטוחים" },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "#F9FAFB", border: "2px solid #E5E7EB" }}>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {feature.title}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            קבל שליטה מלאה על הנתונים שלך
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            דשבורד חכם, דוחות מדויקים, ותובנות שמעדכנות בזמן אמת. הכל בעמוד אחד.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#2563EB" }}>
            התחל לנתח עכשיו
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
