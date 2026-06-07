"use client";
import { ArrowRight, Zap, Link2, Layers } from "lucide-react";

export function IntegrationsServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-indigo-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#6366F1" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#C7D2FE15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#6366F120", color: "#6366F1" }}>
            שילובים וחיבורים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            חברו את DealLayer לכל קום
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            Slack, Gmail, Drive, Stripe, HubSpot, Salesforce, ועוד. סנכרנו חוזים באופן אוטומטי לכל המערכות שלכם. נתונים זורמים ללא ידני.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#6366F1" }}>
              בחרו שילובים
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #6366F1", color: "#6366F1" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #6366F1" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#6366F1" }}>שילובים</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>100+</div>
            <div className="text-sm text-gray-600">יישומים מחוברים</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #6366F1" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#6366F1" }}>סנכרון</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>Real-time</div>
            <div className="text-sm text-gray-600">ללא עיכובים בסנכרון</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #6366F1" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#6366F1" }}>עיבוד</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>1M+</div>
            <div className="text-sm text-gray-600">סינכרונים ביום</div>
          </div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            שילובים פופולריים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", name: "Slack", desc: "התראות על חוזים ישירות לערוץ" },
              { num: "02", name: "Gmail", desc: "שליחה וקבלה של חוזים דרך גיל" },
              { num: "03", name: "Google Drive", desc: "שמירה אוטומטית של חוזים בכונן" },
              { num: "04", name: "Stripe", desc: "סנכרון חוזים עם תשלומים" },
              { num: "05", name: "HubSpot", desc: "עדכון CRM על כל חוזה" },
              { num: "06", name: "Salesforce", desc: "ניהול חוזים בתוך Salesforce" },
              { num: "07", name: "Zapier", desc: "חברו לעשרות יישומים אחרים" },
              { num: "08", name: "Microsoft Teams", desc: "התראות ישירות לטימס" },
              { num: "09", name: "Calendly", desc: "קבע מפגש לאחר חתימת חוזה" },
            ].map((integration, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #6366F1" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#6366F1" }}>{integration.num}</div>
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

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            איך השילובים עובדים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Link2,
                title: "התחברות",
                desc: "חברו את היישום בלחיצה אחת. OAuth2 מאובטח."
              },
              {
                icon: Zap,
                title: "בחרו אוטומציה",
                desc: "בחרו איזה אירועים תרצו לסנכרן."
              },
              {
                icon: Layers,
                title: "סנכרון אוטומטי",
                desc: "הנתונים מסתנכרנים בזמן אמת בין יישומים."
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "2px solid #6366F1" }}>
                  <Icon size={40} color="#6366F1" className="mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {step.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דוגמות שימוש
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Slack + DealLayer",
                desc: "קבלו הודעה בסלאק כשחוזה חדש נשמר. קישור ישיר להצגת החוזה."
              },
              {
                num: "02",
                title: "HubSpot + DealLayer",
                desc: "כל חוזה מוסף אוטומטית לעסקה בהאבספוט. סנכרון ערך וסטטוס."
              },
              {
                num: "03",
                title: "Gmail + DealLayer",
                desc: "שלחו חוזה דרך הודעת אימייל. סנכרון אוטומטי של הצמדות."
              },
              {
                num: "04",
                title: "Stripe + DealLayer",
                desc: "כשתשלום מובטח בסטריפ, סמן את החוזה כשולם."
              },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "#F8F9FA", border: "2px solid #6366F1" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#6366F1" }}>{useCase.num}</div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {useCase.title}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            חברו DealLayer לכל קום שלכם
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            סנכרון אוטומטי, בלי עבודה ידנית. כל המערכות שלכם מדברות זה עם זה.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#6366F1" }}>
            בחרו שילובים
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
