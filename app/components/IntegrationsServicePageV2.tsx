"use client";
import { ArrowRight, Link2, Zap, Layers } from "lucide-react";

export function IntegrationsServicePageV2() {
  return (
    <>
      <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 to-white" style={{ direction: "rtl" }}>
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-8" style={{ background: "rgba(99, 102, 241, 0.1)" }}>
            <Link2 size={16} className="mr-2" style={{ color: "#6366F1" }} />
            <span className="text-sm font-semibold" style={{ color: "#6366F1" }}>שילובים וחיבורים</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight" style={{ color: "#1E1B4B" }}>
            חברו DealLayer לכל קום
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
            Slack, Gmail, Drive, Stripe, HubSpot, Salesforce, ועוד. סנכרנו חוזים באופן אוטומטי לכל המערכות שלכם. נתונים זורמים ללא ידני.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-colors" style={{ background: "#6366F1" }}>
              בחרו שילובים
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-lg border-2" style={{ borderColor: "#6366F1", color: "#6366F1" }}>
              צפו בדמו
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center" style={{ color: "#1E1B4B" }}>100+ שילובים זמינים</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", name: "Slack", desc: "התראות ישירות לערוץ" },
              { num: "02", name: "Gmail", desc: "שליחה וקבלה של חוזים" },
              { num: "03", name: "Google Drive", desc: "שמירה אוטומטית" },
              { num: "04", name: "Stripe", desc: "סנכרון עם תשלומים" },
              { num: "05", name: "HubSpot", desc: "עדכון CRM אוטומטי" },
              { num: "06", name: "Salesforce", desc: "ניהול חוזים מלא" },
              { num: "07", name: "Zapier", desc: "אוטומציה מתקדמת" },
              { num: "08", name: "Microsoft Teams", desc: "התראות לטימס" },
              { num: "09", name: "Calendly", desc: "קביעת פגישות אוטומטית" }
            ].map((int, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border-2" style={{ borderColor: "#6366F1" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#6366F1" }}>{int.num}</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>{int.name}</h4>
                <p className="text-gray-600">{int.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-black mb-6">חברו DealLayer לכל קום שלכם</h2>
          <p className="text-xl mb-8 opacity-90">סנכרון אוטומטי, בלי עבודה ידנית.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
            בחרו שילובים
          </button>
        </div>
      </section>
    </>
  );
}
