"use client";
import { ArrowRight, Shield, Lock, Eye } from "lucide-react";

export function SecurityPrivacyServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#ffffff" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#60A5FA" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(59, 130, 246, 0.2)", color: "#3B82F6" }}>
            אבטחה ופרטיות
          </span>

          <h1 className="text-right font-black mb-8 text-white" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.1 }}>
            אבטחה ברמת ממשלה
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12 text-gray-200" style={{ fontWeight: 500 }}>
            כל החוזים והנתונים שלכם מוצפנים בהצפנה צבאית. GDPR, ISO 27001, SOC 2 - הכל מוסמך ובודק בעצמאות. הנתונים שלכם הם שלכם בלבד.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-slate-900 rounded-2xl flex items-center gap-2" style={{ background: "#3B82F6" }}>
              קרא את מדיניות האבטחה
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #3B82F6", color: "#3B82F6" }}>
              צור קשר עם אבטחה
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3 text-gray-300">הצפנה</div>
            <div className="text-4xl font-black mb-2 text-white">256-bit</div>
            <div className="text-sm text-gray-400">בקידוד בנק עולמי</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3 text-gray-300">זמינות</div>
            <div className="text-4xl font-black mb-2 text-white">99.99%</div>
            <div className="text-sm text-gray-400">עם גיבוי מלא</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid #3B82F6" }}>
            <div className="text-sm font-bold mb-3 text-gray-300">ניטור</div>
            <div className="text-4xl font-black mb-2 text-white">24/7</div>
            <div className="text-sm text-gray-400">ניטור אבטחה רציף</div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            הגנה שלמה בכל שלב
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                title: "הצפנה End-to-End",
                desc: "כל החוזים מוצפנים משדרו ועד הגעתם. אף אחד לא יכול לראות את הנתונים שלכם בדרך."
              },
              {
                icon: Shield,
                title: "אימות דו-שלבי",
                desc: "הגנה נוספת עם קוד SMS או authenticator. רק אתם יכולים להיכנס לחשבון."
              },
              {
                icon: Eye,
                title: "ביקורת מלאה",
                desc: "כל פעולה מתועדת - מי נכנס, מה עם, מתי בדיוק. לחזור בזמן בתמונה מלאה."
              },
              {
                icon: Shield,
                title: "GDPR עמיד",
                desc: "עמידה מלאה בתקנות הגנת הנתונים באירופה. זכויות משתמשים מלאות וברורות."
              },
              {
                icon: Lock,
                title: "גיבוי אוטומטי",
                desc: "כל הנתונים גבויים בעשרה מקומות שונים. אם משהו יקרה, הכל בטוח."
              },
              {
                icon: Shield,
                title: "SOC 2 Type II",
                desc: "בדיקה עצמאית של אבטחה פעם בשנה. סטנדרט הזהב של תעשיית הטק."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "#F8F9FA", border: "2px solid #3B82F6" }}>
                  <Icon size={32} color="#3B82F6" className="mb-4" />
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

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מוסמך ובדוק בעצמאות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", cert: "ISO 27001", desc: "סטנדרט בינלאומי לניהול אבטחת מידע" },
              { num: "02", cert: "SOC 2 Type II", desc: "בדיקה עצמאית של אבטחה וזמינות" },
              { num: "03", cert: "GDPR Compliant", desc: "עמידה מלאה בתקנות אירופאיות" },
              { num: "04", cert: "CCPA Ready", desc: "עמידה בחוקי פרטיות קליפורניה" },
              { num: "05", cert: "PCI DSS", desc: "תאימות לעיבוד כרטיסי אשראי" },
              { num: "06", cert: "HIPAA Eligible", desc: "בטיחות לתעשייה הרפואית" },
            ].map((cert, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #3B82F6" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#3B82F6" }}>{cert.num}</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>
                  {cert.cert}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            הנתונים שלכם בידיים בטוחות
          </h2>
          <p className="text-gray-200 text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            אבטחה ברמת ממשלה. הצפנה צבאית. ניטור 24/7. אתם יכולים להיות שקטים.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "#3B82F6", color: "white" }}>
            קרא את ניירות האבטחה
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
