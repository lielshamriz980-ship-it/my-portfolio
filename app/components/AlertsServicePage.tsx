"use client";
import { ArrowRight, Bell, Clock, Zap } from "lucide-react";

export function AlertsServicePage() {
  return (
    <>
      {/* Hero */}
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
            קבלו התראות מיידיות על כל מה שחשוב - חוזים שמחכים לחתימה, תאריכי פקיעה, חוזים שעדיין לא חתומים וערכים חדשים. לא תשכחו דבר חשוב שוב.
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
            <div className="text-sm font-bold mb-3" style={{ color: "#F97316" }}>מהירות התראה</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>{'<'} 1</div>
            <div className="text-sm text-gray-600">דקה מזמן האירוע</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#F97316" }}>חוזים שנוזכרו</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>500K+</div>
            <div className="text-sm text-gray-600">התראות מנוצלות בחודש</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#F97316" }}>תוקף התראה</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>99.9%</div>
            <div className="text-sm text-gray-600">התראות מדויקות</div>
          </div>
        </div>
      </section>

      {/* Alert Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            התראות שחוסכות לכם זמן וכסף
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                num: "01",
                title: "התראות פקיעה חוזים",
                desc: "קבלו הודעה 30, 14, ו-7 ימים לפני שחוזה פוקע. לא תשכחו לחדש.",
                icon: Clock
              },
              {
                num: "02",
                title: "חוזים שמחכים לחתימה",
                desc: "הודעה מיידית כשחוזה שוגר לחתימה. תוכלו לעקוב אחר ההתקדמות.",
                icon: Bell
              },
              {
                num: "03",
                title: "אירועים בחוזים",
                desc: "התראות על שינויים משמעותיים - כשחוזה חתום, כשיש קומנט חדש, וכו'.",
                icon: Zap
              },
              {
                num: "04",
                title: "דוחות שבועיים וחודשיים",
                desc: "סיכום אוטומטי של כל המתרחש. דוח מפורט שומגיע למייל שלכם.",
                icon: Bell
              },
            ].map((alert, i) => {
              const Icon = alert.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F97316" }}>
                  <div className="flex items-start gap-4 mb-4">
                    <Icon size={32} color="#F97316" className="flex-shrink-0" />
                    <div className="text-sm font-black" style={{ color: "#F97316" }}>{alert.num}</div>
                  </div>
                  <h4 className="text-right font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                    {alert.title}
                  </h4>
                  <p className="text-right" style={{ color: "#6B7280" }}>
                    {alert.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notification Channels */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            קבלו התראות בכל מקום
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", name: "Email", desc: "מייל מתוק עם כל פרטי החוזה" },
              { num: "02", name: "WhatsApp", desc: "הודעה בוואצאפ עם קישור ישיר" },
              { num: "03", name: "SMS", desc: "הודעה קטנה וקצרה לנייד" },
              { num: "04", name: "Dashboard", desc: "לוח בקרה בזמן אמת בחשבונכם" },
            ].map((channel, i) => (
              <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "2px solid #F97316" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#F97316" }}>{channel.num}</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>
                  {channel.name}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {channel.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            התראות ממותגות לכל עסק
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-right font-bold text-2xl mb-6" style={{ color: "#1E1B4B" }}>
                בקרה מלאה על ההתראות
              </h3>
              <p className="text-right text-lg mb-8" style={{ color: "#6B7280" }}>
                בחרו איזה אירועים תרצו להביא לתשומת לב, כמה זמן לפני הפקיעה, ובאיזה ערוץ. כל הברה היא שלכם.
              </p>
              <ul className="space-y-4">
                {[
                  "בחרו אילו התראות חשובות",
                  "קבעו רמות עדיפות",
                  "בחרו בערוצים להודעות",
                  "הגדרו תדירות דוחות",
                  "התראות לקבוצות או אנשים"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 justify-end">
                    <span style={{ color: "#6B7280" }}>{item}</span>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#F97316" }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl p-8" style={{ background: "#FFF7ED", border: "2px solid #F97316" }}>
                <div className="text-sm font-bold mb-8" style={{ color: "#F97316" }}>הדוגמה של הגדרות</div>
                <div className="space-y-6">
                  {["פקיעת חוזה - 30 ימים קודם", "חוזה ממתין חתימה - תוך דקה", "חוזה חתום - Email בלבד", "דוח שבועי - כל יום ראשון"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-lg" style={{ background: "white" }}>
                      <div className="w-4 h-4 rounded" style={{ background: "#F97316" }} />
                      <span className="text-right" style={{ color: "#6B7280" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #F97316 0%, #FDBA74 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            לא תפסיד אף חוזה שוב
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            התראות חכמות שמשמרות על כל חוזה. מ-פקיעה ועד חתימה, הכל מנוהל.
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
