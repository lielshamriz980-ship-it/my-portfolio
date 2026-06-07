"use client";
import { ArrowRight, Plug, Zap, Box, Users, BarChart3, Lock } from "lucide-react";

export function IntegrationsServicePageV3() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-cyan-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#0891B2" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#CFFAFE15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#08B2B220", color: "#0891B2" }}>
            אינטגרציות
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            תשדרג עם הכלים שלך
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            חבור ישירות ל-Slack, Gmail, Outlook, Zapier, נייטיבי וקסם אחרים. כל המערכות שלך בקו אחד.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#0891B2" }}>
              גלה אינטגרציות
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #0891B2", color: "#0891B2" }}>
              בקש אינטגרציה
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #0891B2" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#0891B2" }}>
              <Plug size={18} />
              אינטגרציות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>20+</div>
            <div className="text-sm text-gray-600 text-right">מוכנות להפעלה</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #0891B2" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#0891B2" }}>
              <Zap size={18} />
              זמן קביעה
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>{`< 5`}</div>
            <div className="text-sm text-gray-600 text-right">דקות בממוצע</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #0891B2" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#0891B2" }}>
              <Users size={18} />
              משתמשים
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>1M+</div>
            <div className="text-sm text-gray-600 text-right">בשימוש יומיום</div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            אינטגרציות פופולריות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { name: "Slack", desc: "קבל התראות ישירות לערוץ", icon: "💬" },
              { name: "Gmail", desc: "שלח חוזים דרך אימייל", icon: "📧" },
              { name: "Outlook", desc: "תשדר עם לוח הזמנים שלך", icon: "📅" },
              { name: "Zapier", desc: "התחבר לאלף סביבות", icon: "⚡" },
              { name: "HubSpot", desc: "סיכרון עם CRM שלך", icon: "🎯" },
              { name: "Salesforce", desc: "תשדר עם מנהל המכירות", icon: "☁️" },
            ].map((integration, i) => (
              <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "2px solid #0891B2" }}>
                <div style={{ fontSize: "32px" }} className="mb-4">{integration.icon}</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>
                  {integration.name}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {integration.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            למה אינטגרציות חשובות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "אוטומציה מלאה",
                desc: "אתכן את הזרימה שלך בלי עבודה ידנית."
              },
              {
                icon: BarChart3,
                title: "נתונים בזמן אמת",
                desc: "כל הנתונים מעודכנים בכל מערכת."
              },
              {
                icon: Users,
                title: "שיתוף פעולה",
                desc: "צוות שלך חזור לכל מקום."
              },
              {
                icon: Lock,
                title: "בטוח ותאם",
                desc: "כל הנתונים מוצפנים ובטוחים."
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #0891B2" }}>
                  <Icon size={32} color="#0891B2" className="mb-4" />
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {benefit.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Example */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דוגמה של תזרים עבודה
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: 1, title: "יצירה בצוות", desc: "צור חוזה בדשבורד" },
              { num: 2, title: "שליחה למטע", desc: "שלח להצהרות דרך Gmail" },
              { num: 3, title: "קבלת התראות", desc: "קבל התראות ב-Slack" },
              { num: 4, title: "עדכון CRM", desc: "סיכרון אוטומטי ל-HubSpot" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-2xl text-center" style={{ background: "#F0F9FF", border: "2px solid #0891B2" }}>
                  <div className="text-2xl font-black mb-3" style={{ color: "#0891B2" }}>{step.num}</div>
                  <h4 className="font-bold mb-2" style={{ color: "#1E1B4B" }}>
                    {step.title}
                  </h4>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {step.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-2xl" style={{ color: "#0891B2" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            שדרג את הזרימה שלך
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            חבור לכלים שאתה כבר משתמש בהם. אוטומציה מלאה בדקות ספורות.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#0891B2" }}>
            גלה אינטגרציות
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
