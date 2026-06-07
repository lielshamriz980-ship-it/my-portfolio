"use client";
import { ArrowRight, Code2, Zap, GitBranch } from "lucide-react";

export function APIServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#10B981" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#6EE7B715" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#10B981" }}>
            API &amp; Developer
          </span>

          <h1 className="text-right font-black mb-8 text-white" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.1 }}>
            שלח סומפחים לעולם שלך
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12 text-gray-200" style={{ fontWeight: 500 }}>
            RESTful API להשלמת חוזים בתוך המערכות שלכם. Webhooks, SDK לכל שפה, ודוקומנטציה מלאה. בנו את החזקות שלכם על DealLayer.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-slate-900 rounded-2xl flex items-center gap-2" style={{ background: "#10B981" }}>
              קראו הדוקומנטציה
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #10B981", color: "#10B981" }}>
              צור API Key
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #10B981" }}>
            <div className="text-sm font-bold mb-3 text-gray-300">API Endpoints</div>
            <div className="text-4xl font-black mb-2 text-white">30+</div>
            <div className="text-sm text-gray-400">כל הפונקציות עומדות בפנים</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #10B981" }}>
            <div className="text-sm font-bold mb-3 text-gray-300">זמן תגובה</div>
            <div className="text-4xl font-black mb-2 text-white">{'<'} 100ms</div>
            <div className="text-sm text-gray-400">ממוצע בכל העולם</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #10B981" }}>
            <div className="text-sm font-bold mb-3 text-gray-300">זמינות</div>
            <div className="text-4xl font-black mb-2 text-white">99.99%</div>
            <div className="text-sm text-gray-400">SLA מובטח</div>
          </div>
        </div>
      </section>

      {/* SDK Support */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            SDK לכל שפה שלכם
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", lang: "JavaScript", type: "npm" },
              { num: "02", lang: "Python", type: "pip" },
              { num: "03", lang: "Ruby", type: "gem" },
              { num: "04", lang: "Go", type: "go get" },
              { num: "05", lang: "Java", type: "maven" },
              { num: "06", lang: "C#", type: "nuget" },
              { num: "07", lang: "PHP", type: "composer" },
              { num: "08", lang: "Rust", type: "cargo" },
            ].map((sdk, i) => (
              <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "#F8F9FA", border: "2px solid #10B981" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#10B981" }}>{sdk.num}</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>
                  {sdk.lang}
                </h4>
                <p style={{ color: "#6B7280" }} className="text-sm">
                  {sdk.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            כל הגדול הדרוש לכם
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Code2,
                title: "דוקומנטציה ברורה",
                desc: "דוקומנטציה מלאה עם דוגמות קוד בכל שפה. קל ללמוד ומהיר ליישום."
              },
              {
                icon: Zap,
                title: "Webhooks",
                desc: "קבלו הודעות בזמן אמת כשמשהו משתנה. סנכרן מירים בין המערכות."
              },
              {
                icon: GitBranch,
                title: "OAuth2 & JWT",
                desc: "אבטחה מודרנית. OAuth2 להרשאה, JWT לסימנים. סטנדרט תעשיה."
              },
              {
                icon: Code2,
                title: "Rate Limiting חכם",
                desc: "עד 10,000 בקשות בדקה. תעריף שיא שמותאם לגודל החברה שלכם."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #10B981" }}>
                  <Icon size={32} color="#10B981" className="mb-4" />
                  <h4 className="text-right font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {feature.title}
                  </h4>
                  <p className="text-right" style={{ color: "#6B7280" }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דוגמה קוד
          </h2>

          <div className="rounded-2xl overflow-hidden" style={{ background: "#1F2937", border: "2px solid #10B981" }}>
            <div className="p-6 flex items-center justify-between" style={{ background: "#111827" }}>
              <div>
                <span style={{ color: "#10B981" }} className="font-bold">JavaScript</span>
              </div>
              <button className="text-sm px-3 py-1 rounded" style={{ background: "#10B981", color: "white" }}>
                Copy
              </button>
            </div>
            <div className="p-8 text-sm overflow-x-auto" style={{ color: "#E5E7EB" }}>
              <pre style={{ fontFamily: "monospace" }}>
{`const deallayer = require('@deallayer/sdk');

const client = new deallayer.Client({
  apiKey: 'dk_live_xxxxx'
});

// Create contract
const contract = await client.contracts.create({
  name: 'Service Agreement',
  parties: ['party@example.com'],
  amount: 5000
});

// Get contract
const contract = await client.contracts.get(
  contract.id
);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            התחל לבנות עם DealLayer API
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            דוקומנטציה מלאה, SDK לכל שפה, ותמיכה טכנית מהנדסים. הכל שאתה צריך.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#10B981" }}>
            קראו את ה-Docs
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
