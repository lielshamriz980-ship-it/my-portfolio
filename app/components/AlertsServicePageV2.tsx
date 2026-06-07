"use client";
import { ArrowRight, Bell, Clock, Zap, AlertCircle, Mail, Smartphone } from "lucide-react";

export function AlertsServicePageV2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-orange-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#F97316" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#FDBA7415" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#F9731620", color: "#F97316" }}>
            התראות וודיווחים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            אל תפסיד אף יום
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            קבל התראות מיידיות על חוזים שמחכים לחתימה, תאריכי פקיעה, וערכים חדשים. לא תשכח דבר חשוב שוב.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#F97316" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #F97316", color: "#F97316" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#F97316" }}>
              <Clock size={18} />
              מהירות התראה
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>{'<'} 1</div>
            <div className="text-sm text-gray-600 text-right">דקה מהאירוע</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#F97316" }}>
              <Bell size={18} />
              התראות שנשלחו
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>500K+</div>
            <div className="text-sm text-gray-600 text-right">בחודש בלבד</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#F97316" }}>
              <Zap size={18} />
              דיוק גבוה
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>99%</div>
            <div className="text-sm text-gray-600 text-right">פחות התראות שווא</div>
          </div>
        </div>
      </section>

      {/* Alert Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            סוגי התראות שתקבל
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "חוזים בממתינה",
                desc: "קבל התראה כשחוזה ממתין לחתימה או פעולה שלך."
              },
              {
                num: "02",
                title: "תאריכי פקיעה",
                desc: "התראות מעיתוי על חוזים שעומדים להסתיים."
              },
              {
                num: "03",
                title: "עדכוני ערכים",
                desc: "קבל עדכון כשיש שינויים בערכי החוזים."
              },
              {
                num: "04",
                title: "חתימות חסרות",
                desc: "אזהרה על חוזים שעדיין לא חתומים."
              },
            ].map((alert, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#F97316" }}>{alert.num}</div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {alert.title}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {alert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Features */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            קנוצי התראה גמישים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: `דוא"ל`,
                desc: `קבל דוא"ל מוקדש ומעויתת עם כל ההפרטים.`
              },
              {
                icon: Smartphone,
                title: "SMS ודחיפה",
                desc: "התראות מיידיות בטלפון שלך בזמן אמת."
              },
              {
                icon: Bell,
                title: "דשבורד",
                desc: "ראה כל ההתראות בדשבורד המרכזי."
              },
            ].map((channel, i) => {
              const Icon = channel.icon;
              return (
                <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "2px solid #F97316" }}>
                  <Icon size={32} color="#F97316" className="mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {channel.title}
                  </h4>
                  <p style={{ color: "#6B7280" }}>
                    {channel.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FEF3C7", border: "2px solid #F97316" }}>
              <div className="p-8">
                <div className="space-y-4">
                  {["התראות בשעות מסוימות", "סנן לפי סוג חוזה", "עדיפויות וקטגוריות", "הגדרות קבוצתיות"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 justify-end">
                      <span style={{ color: "#92400E" }}>{item}</span>
                      <div className="w-2 h-2 rounded-full" style={{ background: "#F97316" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                התראות בדיוק כמו שאתה רוצה
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                בחר בדיוק איזה התראות תקבל, באילו קנוצים, ובאילו שעות. הגדרות מאד עמוקות וגמישות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            אל תפסיד דבר חשוב שוב
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            התראות חכמות שמגנות על העסק שלך. מעיתוי, דיוק גבוה, וגמישות מלאה.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#F97316" }}>
            הגדר התראות עכשיו
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
