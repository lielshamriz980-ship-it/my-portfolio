"use client";
import { ArrowRight, BarChart3, TrendingUp, CheckCircle, Users, MessageSquare, Settings, Activity } from "lucide-react";

export function ClientManagementServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-slate-50 to-white" style={{ direction: "rtl" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700" style={{ background: "rgba(0, 74, 198, 0.1)", color: "#004ac6" }}>
                <CheckCircle size={16} className="mr-2" />
                <span className="text-sm font-semibold">ניהול לקוחות חכם</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight" style={{ color: "#1E1B4B" }}>
                בנה מערכות יחסים, לא רק רשימות אנשי קשר.
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                ה-CRM המשפטי המאפשר לך לראות את התמונה המלאה. חוזים חתומים, היסטוריית עסקאות ותקשורת רציפה - הכל במקום אחד מאובטח ומקצועי.
              </p>

              <div className="pt-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors" style={{ background: "#004ac6" }}>
                  נהל את העסקאות שלך טוב יותר
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                {/* Client Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2" style={{ background: "rgba(0, 74, 198, 0.1)", borderColor: "#004ac6" }}>
                      <Users size={32} color="#004ac6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "#1E1B4B" }}>אבי כהן</h3>
                      <p className="text-sm text-gray-600">מנכ"ל - טכנולוגיות בע"מ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">פעיל</span>
                  </div>
                </div>

                {/* Relationship Network */}
                <div className="relative h-48 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl mb-6 p-8 border border-gray-200">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-600 mb-4">מפת קשרים ארגונית</div>
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto" style={{ background: "#4b41e1" }}>עו"ד</div>
                        <div className="flex items-center justify-center text-gray-400">←</div>
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto" style={{ background: "#004ac6" }}>אבי</div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">4 קשרים פעילים</div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <p className="text-xs text-gray-600 mb-1">סך עסקאות</p>
                    <p className="text-2xl font-black" style={{ color: "#004ac6" }}>₪450,000</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <p className="text-xs text-gray-600 mb-1">חוזים חתומים</p>
                    <p className="text-2xl font-black" style={{ color: "#004ac6" }}>12</p>
                  </div>
                </div>

                {/* Recent History */}
                <div className="space-y-0">
                  <h4 className="text-sm font-bold mb-3">היסטוריית עסקאות אחרונה</h4>
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border-b border-gray-100 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={18} color="#004ac6" />
                      <span className="text-sm font-semibold">הסכם ייעוץ שנתי</span>
                    </div>
                    <span className="text-xs text-gray-500">14/03/24</span>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border-b border-gray-100 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={18} color="#004ac6" />
                      <span className="text-sm font-semibold">רכישת נדל"ן עסקי</span>
                    </div>
                    <span className="text-xs text-gray-500">22/02/24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Insights Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Pie Chart */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold" style={{ color: "#1E1B4B" }}>תובנות עסקיות</h3>
              <Activity size={24} color="#737686" />
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e3dfff" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#004ac6" strokeWidth="8" strokeDasharray="70 100" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#4b41e1" strokeWidth="8" strokeDasharray="25 100" strokeDashoffset="-70" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold" style={{ color: "#004ac6" }}>₪1.2M</span>
                  <span className="text-xs text-gray-500">הכנסה שנתית</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#004ac6" }} />
                    <span className="text-sm font-semibold">חברות הייטק (70%)</span>
                  </div>
                  <span className="text-sm font-semibold">₪840k</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#4b41e1" }} />
                    <span className="text-sm font-semibold">נדל"ן (25%)</span>
                  </div>
                  <span className="text-sm font-semibold">₪300k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Management Flow */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#1E1B4B" }}>ניהול לידים מקצה לקצה</h2>
              <p className="text-lg text-gray-600">
                הפוך מתעניינים ללקוחות נאמנים עם זרימת עבודה אוטומטית ומקצועית.
              </p>
            </div>

            {/* Growth Chart */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 h-32 flex items-end justify-between px-8">
              {[
                { label: "ינו", height: 12 },
                { label: "פבר", height: 16 },
                { label: "מרץ", height: 20 },
                { label: "אפר", height: 28, highlight: true }
              ].map((month, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="w-8 rounded-t-sm transition-all hover:opacity-80"
                    style={{
                      height: `${month.height * 4}px`,
                      background: month.highlight ? "#004ac6" : "rgba(0, 74, 198, 0.3)"
                    }}
                  />
                  <span className={`text-xs ${month.highlight ? "font-bold" : ""}`} style={{ color: month.highlight ? "#004ac6" : "#737686" }}>
                    {month.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Flow Steps */}
            <div className="space-y-4">
              {[
                { icon: "person_add", title: "יצירת קשר ראשוני", desc: "ליד חדש נכנס מהאתר או מ-WhatsApp", active: true },
                { icon: "description", title: "שליחת הצעה", desc: "הפקת הסכם ריטיינר בלחיצת כפתור", active: false },
                { icon: "contract", title: "חתימה וסגירה", desc: "חתימה דיגיטלית ופתיחת תיק לקוח", active: false }
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 bg-white rounded-xl border-2 ${step.active ? "border-l-4" : "border-gray-200"}`} style={{ borderLeftColor: step.active ? "#004ac6" : undefined }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: step.active ? "#004ac6" : "#e3dfff", color: step.active ? "white" : "#004ac6" }}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold" style={{ color: "#1E1B4B" }}>{step.title}</h4>
                    <p className="text-xs text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "#1E1B4B" }}>מסונכרן עם הכלים שאתה כבר אוהב</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Gmail Sync", desc: "כל תכתובת אימייל מתועדת אוטומטית בכרטיס הלקוח" },
              { title: "WhatsApp Integration", desc: "שלח הסכמים ועדכוני סטטוס ישירות לנייד של הלקוח" }
            ].map((integration, i) => (
              <div key={i} className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-sm mb-4 border-2" style={{ borderColor: "#004ac6" }}>
                  {i === 0 ? <MessageSquare size={32} color="#004ac6" /> : <MessageSquare size={32} color="#00AA44" />}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1E1B4B" }}>{integration.title}</h3>
                <p className="text-gray-600 text-sm">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#004ac6" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">מוכן להפוך את ניהול הלקוחות ליתרון תחרותי?</h2>
          <p className="text-xl mb-8 opacity-90">הצטרף למאות משרדים שכבר עברו לניהול חכם ומקצועי עם DealLayer.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors" style={{ color: "#004ac6" }}>
            נהל את העסקאות שלך טוב יותר
          </button>
        </div>
      </section>
    </>
  );
}
