"use client";
import { ArrowRight, Zap, Brain, Lightbulb, CheckCircle, FileText, Shield } from "lucide-react";

export function LexAIServicePageV2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-purple-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#7C3AED" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#EDE9FE15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#7C3AED20", color: "#7C3AED" }}>
            Lex AI
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            עורך דין AI שלך
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            צור, ערוך וחתום חוזים משפטיים מלאים תוך דקות. Lex AI מבין את המשפט הישראלי וכל זה בלי שכ"ח משפטי יקר.
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

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #7C3AED" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#7C3AED" }}>
              <FileText size={18} />
              חוזים שנוצרו
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>50K+</div>
            <div className="text-sm text-gray-600 text-right">בחודש האחרון</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #7C3AED" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#7C3AED" }}>
              <CheckCircle size={18} />
              דיוק משפטי
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>99.9%</div>
            <div className="text-sm text-gray-600 text-right">עמידה בחוק ישראלי</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #7C3AED" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#7C3AED" }}>
              <Zap size={18} />
              חיסכון בזמן
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>80%</div>
            <div className="text-sm text-gray-600 text-right">לעומת שכ"ח משפטי</div>
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
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#7C3AED15", color: "#7C3AED" }}>
                  שלב 1
                </div>
                <h3 className="text-right font-black text-3xl mb-6" style={{ color: "#1E1B4B" }}>
                  שחה עם AI בעברית
                </h3>
                <p className="text-right text-lg leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                  תספר ל-Lex AI מה אתה צריך - הסכם פיתוח, שכירות, NDA וכו'. לא צריך ידע משפטי.
                </p>
                <ul className="space-y-3">
                  {["ללא צורך בידע משפטי", "תמיכה בעברית מלאה", "הבנה של הקשר העסקי"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#6B7280" }}>{item}</span>
                      <CheckCircle size={20} color="#7C3AED" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl p-12 text-center" style={{ background: "#7C3AED15", border: "2px solid #7C3AED" }}>
                  <Brain size={64} color="#7C3AED" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#7C3AED15", color: "#7C3AED" }}>
                  שלב 2
                </div>
                <h3 className="text-right font-black text-3xl mb-6" style={{ color: "#1E1B4B" }}>
                  ניתוח AI מעמיק
                </h3>
                <p className="text-right text-lg leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                  המערכת מנתחת את הדרישות שלך, בודקת סיכונים משפטיים, ומציעה סעיפים חשובים.
                </p>
                <ul className="space-y-3">
                  {["בדיקה אוטומטית של סיכונים", "הערות על סעיפים קריטיים", "עמידה בחוק ישראלי"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#6B7280" }}>{item}</span>
                      <CheckCircle size={20} color="#7C3AED" />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="rounded-2xl p-12 text-center" style={{ background: "#7C3AED15", border: "2px solid #7C3AED" }}>
                  <Lightbulb size={64} color="#7C3AED" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#7C3AED15", color: "#7C3AED" }}>
                  שלב 3
                </div>
                <h3 className="text-right font-black text-3xl mb-6" style={{ color: "#1E1B4B" }}>
                  חוזה מוכן לחתימה
                </h3>
                <p className="text-right text-lg leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                  קבל חוזה משפטי מלא בפורמט מוכן. אתה יכול לערוך, להוסיף סעיפים, ולחתום דיגיטלית.
                </p>
                <ul className="space-y-3">
                  {["חוזה בפורמט Word ו-PDF", "כל הסעיפים מתויגים וברורים", "מוכן לחתימה דיגיטלית"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#6B7280" }}>{item}</span>
                      <CheckCircle size={20} color="#7C3AED" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl p-12 text-center" style={{ background: "#7C3AED15", border: "2px solid #7C3AED" }}>
                  <FileText size={64} color="#7C3AED" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מקרי שימוש נפוצים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "הסכמי פיתוח", desc: "בטיחות משפטית בעבודה עם מפתחים" },
              { num: "02", title: "שכירות מסחרית", desc: "הגנה על זכויות בחוזים" },
              { num: "03", title: "NDA וסודיות", desc: "הסכמי סודיות עקובים" },
              { num: "04", title: "הסכמי שותפות", desc: "חלוקת זכויות וחובות" },
              { num: "05", title: "חוזי עבודה", desc: "הגנה משפטית ישירה" },
              { num: "06", title: "הסכמי לוואה", desc: "תנאים ברורים וחוקיים" },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #7C3AED" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#7C3AED" }}>{useCase.num}</div>
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
              { icon: Brain, title: "ניתוח חוזה חכם" },
              { icon: Shield, title: "בדיקת משפטיות" },
              { icon: Lightbulb, title: "הצעות ושיפורים" },
              { icon: FileText, title: "ייצוא רב-פורמט" },
              { icon: CheckCircle, title: "דירוג איכות" },
              { icon: Zap, title: "אוטומציה מלאה" },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "#F9FAFB", border: "2px solid #E5E7EB" }}>
                  <div className="flex items-start gap-4">
                    <Icon size={28} color="#7C3AED" className="flex-shrink-0" />
                    <h4 className="font-bold text-lg" style={{ color: "#1E1B4B" }}>
                      {feature.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)" }}>
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
