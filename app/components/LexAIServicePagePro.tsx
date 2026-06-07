"use client";
import { Zap, BarChart3, Gauge, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export function LexAIServicePagePro() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#4F46E515" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#4F46E510" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#4F46E515", color: "#4F46E5" }}>
              Lex AI
            </span>

            <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
              עורך דין AI שלך
            </h1>

            <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
              צור, ערוך וחתום חוזים משפטיים מלאים תוך דקות. Lex AI מבין את המשפט הישראלי, מנתח סיכונים משפטיים, וכל זה ללא צורך בשכר טרחה יקר.
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
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#4F46E5" }}>חוזים שנוצרו</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>50K+</div>
            <div className="text-sm text-gray-600">בחודש האחרון</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#4F46E5" }}>דיוק משפטי</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>99.9%</div>
            <div className="text-sm text-gray-600">עמידה בחוק הישראלי</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#4F46E5" }}>חיסכון בזמן</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>80%</div>
            <div className="text-sm text-gray-600">לעומת שכ"ח משפטי</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            איך זה עובד
          </h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#4F46E515", color: "#4F46E5" }}>
                  שלב 1
                </div>
                <h3 className="text-right font-black text-3xl mb-6" style={{ color: "#1E1B4B" }}>
                  תחילת שיחה עם AI
                </h3>
                <p className="text-right text-lg leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                  פתח דיאלוג טבעי עם Lex AI. תספר לו מה אתה צריך (הסכם פיתוח, שכירות, NDA וכו') ואת העניינים העיקריים שחשובים לך.
                </p>
                <ul className="space-y-3">
                  {["ללא צורך בידע משפטי", "תמיכה בעברית מלאה", "בהבנה של הקשר העסקי שלך"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#6B7280" }}>{item}</span>
                      <CheckCircle size={20} color="#4F46E5" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl p-8" style={{ background: "#4F46E515", border: "2px solid #4F46E5" }}>
                  <div style={{ color: "#4F46E5", fontSize: "48px", fontWeight: "900", textAlign: "center" }}>1</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#4F46E515", color: "#4F46E5" }}>
                  שלב 2
                </div>
                <h3 className="text-right font-black text-3xl mb-6" style={{ color: "#1E1B4B" }}>
                  ניתוח AI מעמיק
                </h3>
                <p className="text-right text-lg leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                  המערכת מנתחת את הדרישות שלך, בודקת סיכונים משפטיים, ומצביעה על סעיפים קריטיים שאתה חייב להשים לב אליהם בחוק הישראלי.
                </p>
                <ul className="space-y-3">
                  {["בדיקה אוטומטית של סיכונים", "הערות על סעיפים קריטיים", "עמידה בחוק הישראלי"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#6B7280" }}>{item}</span>
                      <CheckCircle size={20} color="#4F46E5" />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="rounded-2xl p-8" style={{ background: "#4F46E515", border: "2px solid #4F46E5" }}>
                  <div style={{ color: "#4F46E5", fontSize: "48px", fontWeight: "900", textAlign: "center" }}>2</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#4F46E515", color: "#4F46E5" }}>
                  שלב 3
                </div>
                <h3 className="text-right font-black text-3xl mb-6" style={{ color: "#1E1B4B" }}>
                  חוזה מוכן לחתימה
                </h3>
                <p className="text-right text-lg leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                  קבל חוזה משפטי מלא בפורמט מוכן. אתה יכול לערוך, להוסיף סעיפים, ולהוציא לחתימה דיגיטלית בשניות.
                </p>
                <ul className="space-y-3">
                  {["חוזה בפורמט Word ו-PDF", "כל הסעיפים מתויגים וברורים", "מוכן לחתימה דיגיטלית"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#6B7280" }}>{item}</span>
                      <CheckCircle size={20} color="#4F46E5" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl p-8" style={{ background: "#4F46E515", border: "2px solid #4F46E5" }}>
                  <div style={{ color: "#4F46E5", fontSize: "48px", fontWeight: "900", textAlign: "center" }}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מקרי שימוש נפוצים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "הסכמי פיתוח", desc: "בטיחות משפטית בעבודה עם מפתחי חוץ וקבלנים" },
              { num: "02", title: "שכירות מסחרית", desc: "הגנה על זכויות הדיירים והבעלים בחוזים משפטיים" },
              { num: "03", title: "NDA וסודיות", desc: "הסכמי סודיות המגנים על סוד מסחרי רגיש" },
              { num: "04", title: "הסכמי שותפות", desc: "חלוקת זכויות, משכנתאות והחובות בין שותפים" },
              { num: "05", title: "חוזי עבודה", desc: "הגנה משפטית לעובדים ולמעסיקים" },
              { num: "06", title: "הסכמי לוואה", desc: "תנאים ברורים וחוקי תשלום להלוואות" },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #4F46E5" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#4F46E5" }}>{useCase.num}</div>
                <h4 className="text-right font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {useCase.title}
                </h4>
                <p className="text-right" style={{ color: "#6B7280" }}>
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות מתקדמות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "שיחה טבעית ללא צורך בידע משפטי",
              "ניתוח סיכונים אוטומטי וביקורת עמידה בחוק",
              "29+ תבניות מותאמות לחוק ישראלי",
              "הצעות וחיזויים בזמן אמת",
              "יצירת PDF מיידית",
              "דירוג איכות החוזה",
              "חתימה דיגיטלית משולבת",
              "ניהול גרסאות וקונפליקטים",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: "#4F46E5" }}>
                  <CheckCircle size={18} color="white" />
                </div>
                <p className="text-lg font-semibold" style={{ color: "#1E1B4B" }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            התחל עכשיו בחינם
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            אין צורך בכרטיס אשראי. קבל גישה מלאה לכל התכונות בחינם לשלוש חוזים הראשונים.
          </p>
          <button className="px-10 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "rgba(255,255,255,0.2)", border: "2px solid white" }}>
            יצור חשבון
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
