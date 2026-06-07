"use client";
import { ArrowRight, Shield, Lock, Eye, Server, FileText, Check } from "lucide-react";

export function SecurityPrivacyServicePageV3() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-red-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#DC2626" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#FEE2E215" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#DC262620", color: "#DC2626" }}>
            אבטחה ופרטיות
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            הנתונים שלך בטוחים ברמות הגבוהות
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            הצפנה מקצוע, GDPR מלא, עמידה בחוקי משפט, ובדיקות ביטחון שוטפות. הנתונים שלך הם עסק שלנו.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#DC2626" }}>
              קרא את מדיניות הפרטיות
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #DC2626", color: "#DC2626" }}>
              בקש אודיט אבטחה
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #DC2626" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#DC2626" }}>
              <Shield size={18} />
              הצפנה
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>AES-256</div>
            <div className="text-sm text-gray-600 text-right">בטיחות צבאית</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #DC2626" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#DC2626" }}>
              <Lock size={18} />
              עמידה משפטית
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>100%</div>
            <div className="text-sm text-gray-600 text-right">GDPR / DPA compliant</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #DC2626" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#DC2626" }}>
              <Eye size={18} />
              בדיקות אבטחה
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>יומיות</div>
            <div className="text-sm text-gray-600 text-right">ניטור 24/7</div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            אבטחה בכל שלב
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                num: "01",
                title: "הצפנה end-to-end",
                desc: "כל הנתונים מוצפנים בדרך וביעד. אפילו אנחנו לא יכולים לקרוא."
              },
              {
                icon: Server,
                num: "02",
                title: "שרתים מאובטחים",
                desc: "אירוח בדטה סנטרים בתקנים בינלאומיים עם גיבויים שוטפים."
              },
              {
                icon: Eye,
                num: "03",
                title: "ניטור 24/7",
                desc: "תוכניות ניטור מתמדות שמגנות על כל הגישות לנתונים."
              },
              {
                icon: FileText,
                num: "04",
                title: "דוחות ציבוריים",
                desc: "דוחות אבטחה שנתיים ממומחים בלתי תלויים."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #DC2626" }}>
                  <Icon size={32} color="#DC2626" className="mb-4" />
                  <div className="text-sm font-black mb-4" style={{ color: "#DC2626" }}>{feature.num}</div>
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

      {/* Compliance Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            עמידה בכל החוקים הגדולים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["GDPR (EU)", "CCPA (CA)", "ISO 27001", "SOC 2 Type II", "DPA (Israel)", "eIDAS", "HIPAA", "PCI-DSS"].map((compliance, i) => (
              <div key={i} className="p-6 rounded-2xl text-center" style={{ background: "white", border: "2px solid #DC2626" }}>
                <Check size={28} color="#DC2626" className="mx-auto mb-4" />
                <div className="font-bold" style={{ color: "#1E1B4B" }}>
                  {compliance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FEE2E2", border: "2px solid #DC2626" }}>
              <div className="p-8">
                <div className="space-y-4">
                  {[
                    "זכות מחיקה (right to forget)",
                    "זכות להעתקה (right to copy)",
                    "זכות להתנגדות",
                    "השקיפות מלאה על אחסון",
                    "בקרה על מי ניגישת הנתונים"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#7F1D1D" }}>{item}</span>
                      <Check size={20} color="#DC2626" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                הנתונים שלך, בשליטתך
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                אתה שולט על הנתונים שלך. אתה יכול להעתיק, למחוק, להשתנות, או להרחיל בכל עת.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            אבטחה שאתה יכול להסתמך עליה
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            הצפנה מקצוע, ניטור 24/7, ועמידה בכל החוקים. הנתונים שלך בטוחים בידיים טובות.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#DC2626" }}>
            קרא את דוח הבטיחות
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
