"use client";
import { ArrowRight, FolderOpen, Edit3, Archive, Search, Zap, Share2 } from "lucide-react";

export function ContractManagementServicePageV2() {
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
            ניהול חוזים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            ספריית חוזים חכמה
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            מרכז כל החוזים שלך בקום אחד. חפש, ערוך, שתף, וקבל התראות על כל משהו. דשבורד מרכזי לשליטה מלאה.
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

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#2563EB" }}>
              <FolderOpen size={18} />
              ניהול תיקיות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>Unlimited</div>
            <div className="text-sm text-gray-600 text-right">אחסן כמה שתרצה</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#2563EB" }}>
              <Search size={18} />
              חיפוש מיידי
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>{`< 1`}</div>
            <div className="text-sm text-gray-600 text-right">שנייה לחיפוש</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#2563EB" }}>
              <Share2 size={18} />
              שיתוף צוות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>100%</div>
            <div className="text-sm text-gray-600 text-right">הרשאות מדויקות</div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            כל מה שאתה צריך לנהל חוזים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FolderOpen,
                num: "01",
                title: "ארגון עמוק",
                desc: "תיקיות ותת-תיקיות ללא מגבלה. ממיין חוזים בדיוק כמו שאתה צריך."
              },
              {
                icon: Search,
                num: "02",
                title: "חיפוש חכם",
                desc: "חפש לפי שם, סוג, מצב, לקוח, או טקסט מתוך החוזה."
              },
              {
                icon: Edit3,
                num: "03",
                title: "עריכה קלה",
                desc: "ערוך חוזים ישירות בדשבורד או בחוץ."
              },
              {
                icon: Archive,
                num: "04",
                title: "גרסיונים ויתורים",
                desc: "עקוב אחר כל ההיסטוריה של כל חוזה."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
                  <Icon size={32} color="#2563EB" className="mb-4" />
                  <div className="text-sm font-black mb-4" style={{ color: "#2563EB" }}>{feature.num}</div>
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

      {/* Dashboard Overview */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דשבורד ניהול מרכזי
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#F3F4F6", border: "2px solid #2563EB" }}>
              <div className="p-8">
                <div className="space-y-4">
                  {[
                    { label: "חוזים פעילים", value: "24" },
                    { label: "בממתינה לחתימה", value: "8" },
                    { label: "קרובים לפקיעה", value: "3" },
                    { label: "ארכיב", value: "127" }
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg p-4" style={{ background: "white" }}>
                      <div className="text-xs text-gray-600 mb-2">{item.label}</div>
                      <div className="text-2xl font-black" style={{ color: "#2563EB" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                ניהול מרכזי של כל החוזים
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                ראה סה"כ, סטטוסים, תאריכי פקיעה וכל הנתונים החשובים בעמוד אחד.
              </p>
              <ul className="space-y-4">
                {[
                  "סינון והתאמה של תצוגה",
                  "תווית וסוגים מותאמים",
                  "ניהול בעלויות וגישה",
                  "יצוא דוחות",
                  "אינטגרציות עם כלים אחרים"
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

      {/* Collaboration */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            שיתוף פעולה בצוות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Share2, title: "שתף בקלות", desc: "שתף חוזים עם צוות בלחיצה אחת" },
              { icon: Zap, title: "הרשאות מדויקות", desc: "שלוט בדיוק מי יכול לעשות מה" },
              { icon: Edit3, title: "תגובות אישיות", desc: "דיון ישירה בחוזה" },
            ].map((collab, i) => {
              const Icon = collab.icon;
              return (
                <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "#F9FAFB", border: "2px solid #E5E7EB" }}>
                  <Icon size={32} color="#2563EB" className="mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {collab.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {collab.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            אוטומציה שתוכל להסתמך עליה
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "התראות חכמות", desc: "קבל התראות על כל משהו שחשוב" },
              { title: "תזרים עבודה", desc: "בנה תזרימי עבודה מסובכים" },
              { title: "חוקים ואוטומציה", desc: "כללים להעברה אוטומטית" },
              { title: "בדיקה של תוקף", desc: "בדוק משפטיות אוטומטית" },
            ].map((automation, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #2563EB" }}>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {automation.title}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {automation.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            קבל שליטה מלאה על החוזים שלך
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            דשבורד חזק, ניהול קל, שיתוף פעולה בצוות. הכל בקום אחד.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#2563EB" }}>
            התחל לנהל
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
