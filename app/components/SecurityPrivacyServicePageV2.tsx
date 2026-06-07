"use client";
import { ArrowRight, Lock, Eye, Shield, CheckCircle, Zap } from "lucide-react";

export function SecurityPrivacyServicePageV2() {
  return (
    <>
      {/* Hero Section - Dark Mode */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-8" style={{ background: "rgba(59, 130, 246, 0.15)" }}>
            <Shield size={16} className="mr-2" style={{ color: "#60A5FA" }} />
            <span className="text-sm font-semibold" style={{ color: "#60A5FA" }}>אבטחה ופרטיות</span>
          </div>

          <h1 className="text-6xl font-black mb-8 leading-tight">אבטחה ברמת ממשלה</h1>

          <p className="text-xl max-w-3xl mb-12 opacity-90 leading-relaxed">
            כל החוזים והנתונים שלכם מוצפנים בהצפנה צבאית. GDPR, ISO 27001, SOC 2 - הכל מוסמך ובודק בעצמאות. הנתונים שלכם הם שלכם בלבד.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors">
              קרא את מדיניות האבטחה
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="bg-transparent text-white border-2 border-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-400/10 transition-colors">
              צור קשר עם אבטחה
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative z-10">
          {[
            { label: "הצפנה", value: "256-bit", desc: "בקידוד בנק עולמי" },
            { label: "זמינות", value: "99.99%", desc: "עם גיבוי מלא" },
            { label: "ניטור", value: "24/7", desc: "ניטור אבטחה רציף" }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(59, 130, 246, 0.3)" }}>
              <div className="text-sm font-bold mb-2 opacity-70">{stat.label}</div>
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-sm opacity-70">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16" style={{ color: "#1E1B4B" }}>הגנה שלמה בכל שלב</h2>

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
                icon: CheckCircle,
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
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl bg-gray-50 border-2 border-gray-200 hover:border-blue-400 transition-colors">
                  <Icon size={32} color="#004ac6" className="mb-4" />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1E1B4B" }}>{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center" style={{ color: "#1E1B4B" }}>מוסמך ובדוק בעצמאות</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", cert: "ISO 27001", desc: "סטנדרט בינלאומי לניהול אבטחת מידע" },
              { num: "02", cert: "SOC 2 Type II", desc: "בדיקה עצמאית של אבטחה וזמינות" },
              { num: "03", cert: "GDPR Compliant", desc: "עמידה מלאה בתקנות אירופאיות" },
              { num: "04", cert: "CCPA Ready", desc: "עמידה בחוקי פרטיות קליפורניה" },
              { num: "05", cert: "PCI DSS", desc: "תאימות לעיבוד כרטיסי אשראי" },
              { num: "06", cert: "HIPAA Eligible", desc: "בטיחות לתעשייה הרפואית" }
            ].map((cert, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border-2 border-gray-200">
                <div className="text-sm font-bold mb-4" style={{ color: "#004ac6" }}>{cert.num}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1E1B4B" }}>{cert.cert}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-black mb-6">הנתונים שלכם בידיים בטוחות</h2>
          <p className="text-xl mb-8 opacity-90">אבטחה ברמת ממשלה. הצפנה צבאית. ניטור 24/7. אתם יכולים להיות שקטים.</p>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors">
            קרא את ניירות האבטחה
            <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
