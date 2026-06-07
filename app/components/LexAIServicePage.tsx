"use client";
import { Zap, BarChart3, Gauge, TrendingUp, CheckCircle } from "lucide-react";
import { RichServiceTemplate } from "./RichServiceTemplate";

export function LexAIServicePage() {
  const stats = [
    { label: "חוזים ליום", value: "2,500+", icon: BarChart3 },
    { label: "דיוק משפטי", value: "99.9%", icon: Gauge },
    { label: "זמן חיסכון", value: "80%", icon: TrendingUp },
  ];

  const features = [
    "שיחה טבעית ללא זרחון משפטי",
    "ניתוח סיכונים אוטומטי וביקורת עמידה בתקנות",
    "29+ תבניות מותאמות לחוק ישראלי",
    "הצעות וחיזויים בזמן אמת",
    "יצירת PDF מיידית",
    "דירוג איכות החוזה",
  ];

  const benefits = [
    { title: "2 דקות בממוצע", desc: "יצור חוזה בשיחה אחת עם AI" },
    { title: "100% משפטי", desc: "עמידה מלאה בחוק החוזים הישראלי" },
    { title: "AI חכם", desc: "לומד מההעדפות שלך לאורך הזמן" },
  ];

  const uniqueSection = (
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <h2 className="text-right font-black mb-12" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
        איך זה עובד?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            number: "1",
            title: "תחילת שיחה",
            desc: "פתח דיאלוג עם Lex AI",
            icon: "💬",
          },
          {
            number: "2",
            title: "AI ניתוח",
            desc: "AI מנתח את הדרישות שלך",
            icon: "🧠",
          },
          {
            number: "3",
            title: "חוזה מוכן",
            desc: "קבל חוזה משפטי מלא",
            icon: "✓",
          },
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="bg-white rounded-3xl p-8 text-center border-2" style={{ borderColor: "#4F46E5" }}>
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-white text-xl" style={{ background: "#4F46E5" }}>
                {step.number}
              </div>
              <h3 className="font-black text-xl mb-3" style={{ color: "#1E1B4B" }}>
                {step.title}
              </h3>
              <p style={{ color: "#6B7280" }}>{step.desc}</p>
            </div>
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Use Cases Grid */}
      <div className="mt-20">
        <h3 className="text-right font-black text-3xl mb-12" style={{ color: "#1E1B4B" }}>
          מקרי שימוש
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "הסכמי פיתוח",
            "שכירות מסחרית",
            "NDA וסודיות",
            "הסכמי שותפות",
            "חוזי עבודה",
            "הסכמי לוואה",
          ].map((useCase, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex items-center gap-4"
              style={{ background: "#4F46E515", border: "1.5px solid #4F46E530" }}
            >
              <CheckCircle size={24} color="#4F46E5" className="flex-shrink-0" />
              <span className="font-semibold" style={{ color: "#1E1B4B" }}>
                {useCase}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <RichServiceTemplate
      title="Lex AI"
      subtitle="עורך דין AI אישי שלך"
      description="צור חוזים מקצועיים תוך דקות עם AI יצירתי המבין את המשפט הישראלי. לא צריך לעבור אנשים משפטיים יקרים."
      icon={Zap}
      color="#4F46E5"
      stats={stats}
      features={features}
      benefits={benefits}
      uniqueSection={uniqueSection}
    />
  );
}
