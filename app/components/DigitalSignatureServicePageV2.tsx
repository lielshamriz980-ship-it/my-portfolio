"use client";
import { ArrowRight, Pen, Check, Clock, Shield, Zap, FileCheck } from "lucide-react";

export function DigitalSignatureServicePageV2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-indigo-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#4F46E5" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#E0E7FF15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#4F46E520", color: "#4F46E5" }}>
            חתימה דיגיטלית
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            חתום בשניות, לא בשעות
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            חתימות דיגיטליות כשרות משפטית בישראל וברחבי העולם. חותמים מביתם, במשרד, או בדרך. בטוח, מהיר ופשוט.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#4F46E5" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #4F46E5", color: "#4F46E5" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#4F46E5" }}>
              <Zap size={18} />
              מהירות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>{`< 1`}</div>
            <div className="text-sm text-gray-600 text-right">דקה בממוצע</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#4F46E5" }}>
              <FileCheck size={18} />
              חתימות שנשלחו
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>1M+</div>
            <div className="text-sm text-gray-600 text-right">בחודש</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#4F46E5" }}>
              <Shield size={18} />
              כשרות משפטית
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>100%</div>
            <div className="text-sm text-gray-600 text-right">בעולם</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תהליך חתימה פשוט
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
              { num: 1, title: "העלה חוזה", desc: "בחר קובץ מהמחשב שלך" },
              { num: 2, title: "הזמן חותמים", desc: "הוסף אנשים לחתימה" },
              { num: 3, title: "שלח לחתימה", desc: "דוא"ל מיידי ישירה" },
              { num: 4, title: "סיום מידי", desc: "קבל תיעוד מלא" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-2xl text-center" style={{ background: "#F0F9FF", border: "2px solid #4F46E5" }}>
                  <div className="text-2xl font-black mb-3" style={{ color: "#4F46E5" }}>{step.num}</div>
                  <h4 className="font-bold mb-2" style={{ color: "#1E1B4B" }}>
                    {step.title}
                  </h4>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {step.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-2xl" style={{ color: "#4F46E5" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Types */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            סוגי חתימה בעולם
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Pen,
                title: "חתימה דיגיטלית",
                desc: "חתימה מתקדמת עם תעודה דיגיטלית"
              },
              {
                icon: Check,
                title: "אישור דיגיטלי",
                desc: "אישור פשוט ומהיר של מסמכים"
              },
              {
                icon: Clock,
                title: "חותמת זמן",
                desc: "תעודת זמן המוכחת משפטית"
              },
            ].map((sigType, i) => {
              const Icon = sigType.icon;
              return (
                <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "2px solid #4F46E5" }}>
                  <Icon size={32} color="#4F46E5" className="mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {sigType.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {sigType.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות אבטחה חזקות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "הצפנה מלאה",
                desc: "כל החתימות מוצפנות בטרנזיט ובאחסון."
              },
              {
                icon: FileCheck,
                title: "אימות זהות",
                desc: "אימות זהות שני-שלבי של כל חותם."
              },
              {
                icon: Zap,
                title: "ניטור 24/7",
                desc: "ניטור בזמן אמת של כל החתימות."
              },
              {
                icon: Check,
                title: "דוחות ושקיפות",
                desc: "דוח מלא של כל אירוע בחוזה."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "#F9FAFB", border: "2px solid #E5E7EB" }}>
                  <Icon size={32} color="#4F46E5" className="mb-4" />
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

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מקרים שבהם זה משתמש
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "חוזי עבודה", desc: "חתום עם עובדים חדשים בדקות" },
              { title: "הסכמים עם לקוחות", desc: "סגור עסקאות במהירות" },
              { title: "אישורים משפטיים", desc: "אישור מסמכים משפטיים רשמית" },
              { title: "הלוואות ובנקאות", desc: "חתימה על מסמכים פיננסיים" },
              { title: "הסכמי בעלות", desc: "חוזי שותפות וחלוקת זכויות" },
              { title: "תיעוד רפואי", desc: "חתימה על טפסים ברופאים" },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
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
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            חתום בשניות, לא בשעות
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            חתימות דיגיטליות כשרות משפטית, בטוחות, ומהירות. בישראל וברחבי העולם.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#4F46E5" }}>
            התחל לחתום
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
