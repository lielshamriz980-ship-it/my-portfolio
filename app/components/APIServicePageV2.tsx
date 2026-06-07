"use client";
import { ArrowRight, Code2, GitBranch, Zap, CheckCircle, Webhook } from "lucide-react";

export function APIServicePageV2() {
  return (
    <>
      {/* Hero Section - Dark Terminal Theme */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" style={{ direction: "rtl" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ background: "rgba(16, 185, 129, 0.15)" }}>
                <Code2 size={16} className="mr-2" style={{ color: "#10B981" }} />
                <span className="text-sm font-semibold" style={{ color: "#10B981" }}>Developer Portal</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                בנו אינטגרציות משפטיות חכמות
              </h1>

              <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
                הטמיעו אוטומציה של חוזים, חתימות דיגיטליות וניהול מסמכים ישירות בתוך האפליקציה שלכם. כלים חזקים, תיעוד מפורט וביצועים של High-Scale.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-colors" style={{ background: "#10B981" }}>
                  התחילו עכשיו
                </button>
                <button className="px-8 py-4 rounded-xl font-bold text-lg hover:opacity-80 transition-colors border-2" style={{ borderColor: "#10B981", color: "#10B981", background: "transparent" }}>
                  צפו בדוקומנטציה
                </button>
              </div>
            </div>

            {/* Right Code Block */}
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(16, 185, 129, 0.3)", background: "#1F2937" }}>
              <div className="p-6 flex items-center justify-between" style={{ background: "#111827", borderBottomColor: "rgba(16, 185, 129, 0.2)", borderBottomWidth: 1 }}>
                <span style={{ color: "#10B981" }} className="font-bold">JavaScript</span>
                <button className="text-sm px-3 py-1 rounded text-white" style={{ background: "#10B981" }}>
                  Copy
                </button>
              </div>
              <div className="p-8 text-sm font-mono overflow-x-auto" style={{ color: "#E5E7EB" }}>
                <pre>{`const dealLayer = require('@deallayer/sdk');

const client = new dealLayer.Client({
  apiKey: 'dk_live_xxxxx'
});

// Create contract
const contract =
  await client.contracts.create({
  name: 'Service Agreement',
  parties: ['party@example.com'],
  amount: 5000
});`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4" style={{ color: "#1E1B4B" }}>האקו-סיסטם של DealLayer</h2>
            <p className="text-lg text-gray-600">התחברו לכל הכלים העסקיים שלכם דרך API אחד חכם</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main API Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-emerald-50 to-white p-12 rounded-2xl border-2" style={{ borderColor: "#10B981" }}>
              <div className="relative flex items-center justify-center h-48">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 rounded-2xl" style={{ background: "#10B981" }}>
                    <Code2 size={40} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: "#1E1B4B" }}>API RESTful</h3>
                  <p className="text-gray-600 max-w-sm">
                    30+ endpoints לכל צרכי ניהול חוזים. מלאי documentation, SDKs ודוגמות קוד.
                  </p>
                </div>
              </div>
            </div>

            {/* Sandbox Card */}
            <div className="bg-slate-900 p-8 rounded-2xl text-white flex flex-col justify-between">
              <div>
                <div className="inline-block p-3 rounded-lg mb-4" style={{ background: "rgba(16, 185, 129, 0.2)" }}>
                  <GitBranch size={24} color="#10B981" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sandbox Developer</h3>
                <p className="text-sm opacity-80">
                  סביבת פיתוח מלאה לבדיקה בטוחה. קבלו מפתחות בדיקה תוך שניות.
                </p>
              </div>
              <ul className="space-y-2 mt-6 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: "#10B981" }} />
                  לוגים בזמן אמת
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: "#10B981" }} />
                  מוקים מתקדמים
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: "#10B981" }} />
                  ניהול גרסאות
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center" style={{ color: "#1E1B4B" }}>SDKs לכל שפה</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { lang: "JavaScript", pm: "npm" },
              { lang: "Python", pm: "pip" },
              { lang: "Ruby", pm: "gem" },
              { lang: "Go", pm: "go get" },
              { lang: "Java", pm: "maven" },
              { lang: "C#", pm: "nuget" },
              { lang: "PHP", pm: "composer" },
              { lang: "Rust", pm: "cargo" }
            ].map((sdk, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border-2 border-gray-200 text-center hover:border-emerald-400 transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                  <Code2 size={20} style={{ color: "#10B981" }} />
                </div>
                <h4 className="font-bold" style={{ color: "#1E1B4B" }}>{sdk.lang}</h4>
                <p className="text-sm text-gray-600">{sdk.pm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Webhooks */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black" style={{ color: "#1E1B4B" }}>כל הגדול הדרוש לכם</h2>
            <p className="text-gray-600 text-lg">
              כלים חזקים, תיעוד מפורט וביצועים של High-Scale. הכל שאתה צריך כדי לבנות משהו גדול.
            </p>

            <div className="space-y-4">
              {[
                { icon: Code2, title: "דוקומנטציה ברורה", desc: "דוגמות קוד בכל שפה" },
                { icon: Webhook, title: "Webhooks", desc: "עדכונים בזמן אמת" },
                { icon: Zap, title: "OAuth2 & JWT", desc: "אבטחה מודרנית" },
                { icon: CheckCircle, title: "Rate Limiting חכם", desc: "עד 10,000 req/min" }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <Icon size={24} style={{ color: "#10B981" }} className="flex-shrink-0" />
                    <div>
                      <h4 className="font-bold" style={{ color: "#1E1B4B" }}>{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Webhooks Card */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                <Webhook size={24} color="#10B981" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#1E1B4B" }}>Webhooks & Events</h3>
            </div>

            <p className="text-gray-600 mb-6">
              האזינו לאירועים בזמן אמת. קבלו עדכונים על חתימות מסמכים, אישורי חוזים ושינויי סטטוס ישירות.
            </p>

            <div className="space-y-3">
              {[
                { status: "200 OK", event: "contract.signed" },
                { status: "200 OK", event: "document.viewed" }
              ].map((webhook, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ background: "#10B981" }}>
                      {webhook.status}
                    </span>
                    <span className="text-sm" style={{ color: "#1E1B4B" }}>{webhook.event}</span>
                  </span>
                  <span className="text-xs text-gray-500">לפני 2 דקות</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl font-black mb-6">מוכנים להתחיל לבנות?</h2>
          <p className="text-xl mb-8 opacity-90">
            הצטרפו למאות מפתחים שכבר בונים עם ה-API של DealLayer.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors" style={{ color: "#10B981" }}>
            הרשמה לפורטל מפתחים
            <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
