"use client";
import { Shield, CheckCircle, ArrowRight, Zap } from "lucide-react";

export function DigitalSignatureServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-emerald-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#059669" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#10B98115" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#059669" + "20", color: "#059669" }}>
              חתימה דיגיטלית
            </span>

            <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
              חתמו חוזים בשניות, לא בימים
            </h1>

            <p className="text-right text-xl leading-relaxed max-w-2xl ml-auto mb-8" style={{ color: "#6B7280" }}>
              שלחו חוזים לחתימה דיגיטלית מחייבת משפטית דרך WhatsApp, SMS או אימייל. מקבלים עד 90% קיצור בזמן חתימה. כל חתימה מאומתת ומתועדת בביקורת מלאה.
            </p>

            <div className="flex flex-wrap gap-4 justify-end">
              <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#059669" }}>
                התחל בחינם
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #059669", color: "#059669" }}>
                צפה בדמו
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "1px solid #E5E7EB" }}>
            <div className="text-sm font-bold mb-3 text-gray-600">חתימות בחודש</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>500K+</div>
            <div className="text-sm text-gray-500">בכל הישראל</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "1px solid #E5E7EB" }}>
            <div className="text-sm font-bold mb-3 text-gray-600">זמן חתימה</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>15 שניות</div>
            <div className="text-sm text-gray-500">לעומת 24 שעות בשיטה מסורתית</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "1px solid #E5E7EB" }}>
            <div className="text-sm font-bold mb-3 text-gray-600">עמידה משפטית</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>100%</div>
            <div className="text-sm text-gray-500">כשר בבית משפט ישראלי</div>
          </div>
        </div>
      </section>

      {/* The Flow */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תהליך החתימה - פשוט ומהיר
          </h2>

          {/* Flow Diagram */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "שלח חוזה", desc: "בחר מקבל וישלח קישור" },
                { num: "2", title: "קבלה", desc: "מקבל קולט קישור בודק מידע" },
                { num: "3", title: "חתימה", desc: "חתימה דיגיטלית בנייד או דסקטופ" },
                { num: "4", title: "אישור", desc: "הודעה וביקורת אוטומטית" },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="rounded-2xl p-8 text-center" style={{ background: "#05966910", border: "2px solid #059669" }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-white text-xl" style={{ background: "#059669" }}>
                      {step.num}
                    </div>
                    <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                      {step.title}
                    </h4>
                    <p style={{ color: "#6B7280" }}>{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "חתימה דיגיטלית מחייבת משפטית", desc: "חוקית וחוקית בבית משפט" },
              { title: "ביקורת מלאה לכל חתימה", desc: "IP, זמן, התקן וחתימה אלקטרונית" },
              { title: "שליחה דרך WhatsApp, SMS, אימייל", desc: "בחר את הערוץ המועדף של המקבל" },
              { title: "תמיכה בעברית מלאה", desc: "ממשק וחתימות בעברית" },
              { title: "סנכרון עם DealLayer", desc: "חתימה ישירה מחוזים ב-DealLayer" },
              { title: "תזכורות אוטומטיות", desc: "שלח תזכורים למי שעדיין לא חתם" },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                <div className="flex items-start gap-4 mb-4">
                  <Shield size={24} color="#059669" className="flex-shrink-0 mt-1" />
                  <h4 className="font-bold text-lg" style={{ color: "#1E1B4B" }}>
                    {feature.title}
                  </h4>
                </div>
                <p style={{ color: "#6B7280" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מי משתמש בחתימה דיגיטלית?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "עורכי דין ופירמות משפטיות", desc: "חתימה מחייבת על חוזים, הסכמים וטפסים משפטיים עם לקוחות" },
              { num: "02", title: "יזמים ומשקיעים", desc: "הסכמים עם משקיעים, שותפים וקבלנים בדרך מהירה ובטוחה" },
              { num: "03", title: "קבלנים ובעלי עסקים בנייה", desc: "חוזים עם בעלי בתים וקבלנים משנים עם ביקורת אוטומטית" },
              { num: "04", title: "חברות SaaS וטכנולוגיה", desc: "תנאי שירות, מדיניות פרטיות וחוזי שירות עם משתמשים" },
              { num: "05", title: "משרדים וחברות גדולות", desc: "חוזים פנימיים וחיצוניים עם רישום מרכזי ושקיפות" },
              { num: "06", title: "מוסדות חינוך ובריאות", desc: "הסכמים עם סטודנטים, חולים והוריהם בתמימות מלאה" },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #059669" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#059669" }}>{useCase.num}</div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {useCase.title}
                </h4>
                <p style={{ color: "#6B7280" }}>{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-right font-black mb-8" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#1E1B4B" }}>
                אבטחה ברמת בנק
              </h2>
              <p className="text-right text-lg leading-relaxed mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
                כל חתימה מוצפנת, מאומתת ומתעדת בשלמות גבוהה. רישום ביקורת אוטומטי שומר הוכחה מלאה של מי חתם, מאיפה, איזה התקן, ובאיזה זמן בדיוק.
              </p>
              <div className="space-y-3">
                {[
                  { title: "הצפנת end-to-end", desc: "כל החתימות מוצפנות בשרת ובשידור" },
                  { title: "אימות דו-שלבי", desc: "אימות מחזוקה + קוד סמס או אימייל" },
                  { title: "רישום ביקורת מלא", desc: "כל אירוע מתועד עם IP, התקן וחותמת זמן" },
                  { title: "עמידה ב-GDPR", desc: "הציות מלא לתקנות הגנת הנתונים" },
                  { title: "גיבוי אוטומטי", desc: "החתימות גבועות באופן יתוד בסד נתונים מסוגן" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg" style={{ background: "#F9FAFB" }}>
                    <div className="text-sm font-black mt-1" style={{ color: "#059669" }}>✓</div>
                    <div>
                      <div className="font-bold" style={{ color: "#1E1B4B" }}>{item.title}</div>
                      <div className="text-sm" style={{ color: "#6B7280" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-12" style={{ background: "#05966910", border: "2px solid #059669" }}>
              <div className="space-y-8 text-center">
                <div>
                  <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>256-bit</div>
                  <div style={{ color: "#6B7280" }}>הצפנה בקידוד בנק</div>
                </div>
                <div className="w-full h-px" style={{ background: "#E5E7EB" }} />
                <div>
                  <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>24/7</div>
                  <div style={{ color: "#6B7280" }}>ניטור אבטחה רציף</div>
                </div>
                <div className="w-full h-px" style={{ background: "#E5E7EB" }} />
                <div>
                  <div className="text-4xl font-black mb-2" style={{ color: "#059669" }}>SOC2</div>
                  <div style={{ color: "#6B7280" }}>מוסמך ובודק באופן עצמאי</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #059669 0%, #10B981 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            התחל לחתום חוזים תוך שניות
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            אין התקנה, אין תשלום עד לחתימה הראשונה. חוזה משפטי מחייב בשניות.
          </p>
          <button className="px-10 py-4 text-lg font-bold text-emerald-600 rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white" }}>
            קבל גישה בחינם
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
