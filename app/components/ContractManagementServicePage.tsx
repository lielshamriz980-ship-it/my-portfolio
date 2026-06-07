"use client";
import { Calendar, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export function ContractManagementServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-purple-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#7C3AED" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#A78BFA" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#7C3AED20", color: "#7C3AED" }}>
            ניהול חוזים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            שלוט בכל החוזים שלך
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            דשבורד מרכזי לניהול כל החוזים שלך. ראו בעמ אחד איזה חוזה חתום, מי חתם, אילו מחכים לחתימה, ומתי הוא פוקע. סנכרן עם DealLayer וקבל התראות אוטומטיות.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#7C3AED" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #7C3AED", color: "#7C3AED" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "חוזים נשמרים", value: "50K+", unit: "כולם מתועדים" },
            { label: "זמן חיפוש", value: "< 1", unit: "שניה" },
            { label: "דיוק החיפוש", value: "100%", unit: "תוצאות מדויקות" },
            { label: "זמינות", value: "24/7", unit: "סנכרון רציף" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl" style={{ background: "white", border: "2px solid #7C3AED" }}>
              <div className="text-sm font-bold mb-2" style={{ color: "#7C3AED" }}>{stat.label}</div>
              <div className="text-3xl font-black mb-1" style={{ color: "#1E1B4B" }}>{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.unit}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            דשבורד חכם ברמה אחת
          </h2>

          {/* Dashboard Mockup */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid #7C3AED", boxShadow: "0 20px 60px rgba(124, 58, 237, 0.15)" }}>
            <div className="bg-gray-900 text-white p-6 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: "#EF4444" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#F59E0B" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
              </div>
              <div className="text-sm">ניהול החוזים שלך</div>
              <div className="w-3 h-3" />
            </div>
            <div className="p-8" style={{ background: "#F9FAFB" }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "חוזים פעילים", value: "24", color: "#7C3AED" },
                  { title: "ממתינים לחתימה", value: "5", color: "#F59E0B" },
                  { title: "פוקעים בחודש", value: "3", color: "#EF4444" },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl" style={{ background: "white", border: "2px solid #E5E7EB" }}>
                    <div className="text-sm text-gray-600 mb-2">{item.title}</div>
                    <div className="text-3xl font-black" style={{ color: item.color }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#F3F4F6", borderBottom: "1px solid #E5E7EB" }}>
                      <th className="py-3 px-4 text-right font-bold text-gray-700">שם החוזה</th>
                      <th className="py-3 px-4 text-right font-bold text-gray-700">לקוח</th>
                      <th className="py-3 px-4 text-right font-bold text-gray-700">סטטוס</th>
                      <th className="py-3 px-4 text-right font-bold text-gray-700">תאריך פקיעה</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { contract: "הסכם פיתוח", client: "StartupIL", status: "חתום", expiry: "12.12.26", color: "#10B981" },
                      { contract: "חוזה שכירות", client: "רמת אביב LTD", status: "ממתין", expiry: "10.12.26", color: "#F59E0B" },
                      { contract: "הסכם NDA", client: "משקיע פרטי", status: "חתום", expiry: "08.12.26", color: "#10B981" },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
                        <td className="py-4 px-4 font-semibold">{row.contract}</td>
                        <td className="py-4 px-4 text-gray-600">{row.client}</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: row.color + "20", color: row.color }}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{row.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות שחוסכות זמן וכסף
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Calendar,
                title: "התראות פקיעה אוטומטיות",
                desc: "קבל הודעה אוטומטית לפני שחוזה פוקע. לא תשכחו חוזה חשוב."
              },
              {
                icon: Users,
                title: "ניהול לקוחות מרכזי",
                desc: "ראו כל חוזה עם כל לקוח בלחיצה אחת. קישורים מהירים לחוזי ההיסטוריה."
              },
              {
                icon: TrendingUp,
                title: "ניתוח מהיר וקלול",
                desc: "תמונה כוללת של סטטוס כל חוזה בדקה אחת. דוחות חכמים על מצב הכספים."
              },
              {
                icon: CheckCircle,
                title: "סנכרון עם DealLayer",
                desc: "חוזים מ-DealLayer סנכרונים אוטומטית. עדכונים תוך דקות."
              },
              {
                icon: ArrowRight,
                title: "זרימת עבודה מנוהלת",
                desc: "עקוב חוזים מהיצירה לחתימה לארכיון. כל שלב מתועד."
              },
              {
                icon: CheckCircle,
                title: "ניתוח טקסט חוזים",
                desc: "חוזים מחופשים אוטומטית על סעיפים חשובים. AI משמר זכויות משפטיות."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #7C3AED" }}>
                  <Icon size={32} color="#7C3AED" className="mb-4" />
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

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            למי זה מתאים?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "משרדי עורכי דין",
                desc: "ניהול חוזים עם מאות לקוחות. קבלו דוחות משפטיים מדויקים וגיבוי מלא."
              },
              {
                num: "02",
                title: "חברות בנייה וקבלנות",
                desc: "עקבו אחר חוזי שכירות, קבלנים וספקים. כל המידע בדשבורד אחד."
              },
              {
                num: "03",
                title: "פירמות השקעות ופיננסיות",
                desc: "ניהול חוזים עם משקיעים, שותפים וקרנות. ניתוח משפטי אוטומטי."
              },
              {
                num: "04",
                title: "חברות ההנהלה וציבוריות",
                desc: "חוזים עם ספקים, עובדים וקבלנים. ביקורת מלאה לצורכי דיווח."
              },
              {
                num: "05",
                title: "סטארטאפים וחברות טק",
                desc: "חוזי מומחים, עובדים וספקים. סנכרון עם מערכות ה-HR."
              },
              {
                num: "06",
                title: "חברות טלקום ותקשורת",
                desc: "חוזים עם חברות שותפות וספקים. ניהול חזוזות שנתיות."
              },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "#F9FAFB", border: "2px solid #7C3AED" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#7C3AED" }}>{useCase.num}</div>
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
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            שלוט בכל החוזים שלך בדשבורד אחד
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            חסוך שעות בחיפוש חוזים ובעקיבה אחר סטטוסים. קבל ביקורת אוטומטית וחזוזות מהודקות.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#7C3AED" }}>
            ראה הדגמה חיה
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
