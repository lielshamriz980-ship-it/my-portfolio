"use client";
import { ArrowRight, Code, Zap, BookOpen, Shield, Cloud, Box } from "lucide-react";

export function APIServicePageV3() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-slate-900 to-slate-800" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#3B82F6" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#3B82F6" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#3B82F620", color: "#3B82F6" }}>
            API
          </span>

          <h1 className="text-white font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.1 }}>
            תשילוב אפילו חוזים לעבודה שלך
          </h1>

          <p className="text-white text-xl leading-relaxed max-w-3xl ml-auto mb-12 opacity-90" style={{ fontWeight: 500 }}>
            API חזקה וגמישה שמאפשרת לך להטמיע את כל הפונקציות במערכת שלך. תומכת בכל השפות וביסודות.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#3B82F6" }}>
              קרא את התיעוד
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #3B82F6", color: "#3B82F6" }}>
              תקבל API Key
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#3B82F6" }}>
              <Zap size={18} />
              אפס זמן קביעה
            </div>
            <div className="text-4xl font-black mb-2 text-white">{`< 1hr`}</div>
            <div className="text-sm text-gray-400 text-right">שילוב מלא</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#3B82F6" }}>
              <Cloud size={18} />
              זמינות
            </div>
            <div className="text-4xl font-black mb-2 text-white">99.9%</div>
            <div className="text-sm text-gray-400 text-right">uptime מובטח</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#3B82F6" }}>
              <Code size={18} />
              endpoints
            </div>
            <div className="text-4xl font-black mb-2 text-white">50+</div>
            <div className="text-sm text-gray-400 text-right">פונקציות עשירות</div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            כל מה שאתה צריך לבנות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                num: "01",
                title: "REST API ונטיבה",
                desc: "קל להשתמש, תיעוד מלא, ודוגמות בכל שפה."
              },
              {
                icon: Zap,
                num: "02",
                title: "Webhooks עמוקים",
                desc: "קבל התראות בזמן אמת על כל השינויים."
              },
              {
                icon: Shield,
                num: "03",
                title: "אבטחה מובנית",
                desc: "OAuth 2.0, JWT tokens, ותאימות בדיקות אבטחה."
              },
              {
                icon: BookOpen,
                num: "04",
                title: "תיעוד מקיף",
                desc: "תיעוד אינטראקטיבי, דוגמות Code, ובחינות הרצה."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #3B82F6" }}>
                  <Icon size={32} color="#3B82F6" className="mb-4" />
                  <div className="text-sm font-black mb-4" style={{ color: "#3B82F6" }}>{feature.num}</div>
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

      {/* Code Example */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right text-white font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            דוגמה פשוטה
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-bold text-2xl mb-6">שלח בקשה</h3>
              <div className="rounded-2xl p-6 overflow-auto" style={{ background: "#1F2937", border: "2px solid #3B82F6" }}>
                <pre style={{ color: "#A0AEC0", fontSize: "14px", lineHeight: 1.6 }}>{`const response = await fetch(
  'https://api.platform.co/contracts',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Contractor Agreement',
      parties: ['Party A', 'Party B']
    })
  }
);

const contract = await response.json();`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-2xl mb-6">קבל תשובה</h3>
              <div className="rounded-2xl p-6 overflow-auto" style={{ background: "#1F2937", border: "2px solid #10B981" }}>
                <pre style={{ color: "#A0AEC0", fontSize: "14px", lineHeight: 1.6 }}>{`{
  "id": "contract_123",
  "title": "Contractor Agreement",
  "status": "draft",
  "created_at": "2024-06-08T10:30:00Z",
  "parties": ["Party A", "Party B"],
  "value": 50000,
  "currency": "ILS",
  "url": "https://platform.co/c/abc123"
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מקרים שבהם API משמשת
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "יצירת חוזים בקבצות", desc: "יצור הרבה חוזים בזמן מינימלי דרך API." },
              { title: "תשלוב עם CRM", desc: "חובר ישירות לנתוני הלקוח שלך." },
              { title: "ממידע מניטורינג", desc: "קבל עדכונים בזמן אמת על כל החוזים." },
              { title: "אוטומציה של תזרים עבודה", desc: "בנה תזרים עבודה מסובך ללא קוד." },
              { title: "ניתוח נתונים מתקדם", desc: "שלוף נתונים לניתוח בעיבודים שלך." },
              { title: "דוחות בתדירות גבוהות", desc: "צור דוחות מתאימים אוטומטית." },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "#F9FAFB", border: "2px solid #E5E7EB" }}>
                <Box size={24} color="#3B82F6" className="mb-4" />
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
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            התחל לבנות עם ה-API שלנו
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            תיעוד מלא, דוגמות קוד, וסיוע של קהילה תמיד זמין.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#3B82F6" }}>
            קרא את התיעוד
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
