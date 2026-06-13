"use client";
import { ArrowRight, CheckCircle } from "lucide-react";

export function FreelancersServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-amber-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#F59E0B" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#FBBF2415" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#F59E0B20", color: "#F59E0B" }}>
            פתרונות לפרילנסרים ויוצרים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(32px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            הגן על הזכויות שלך
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            חוזים משפטיים מוכנים לכל סוג עבודה עצמאית - מעצבים, מפתחים, כותבים וקונסולטנטים. כל עסקה מתועדת, חתומה דיגיטלית וביטוחה משפטית.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#F59E0B" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #F59E0B", color: "#F59E0B" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F59E0B" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#F59E0B" }}>פרילנסרים פעילים</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>2,000+</div>
            <div className="text-sm text-gray-600">בהצלחה על הפלטפורמה</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F59E0B" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#F59E0B" }}>חוזים בחודש</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>₪5M+</div>
            <div className="text-sm text-gray-600">כל ערך משפטי מובטח</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F59E0B" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#F59E0B" }}>דירוג משתמשים</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>4.9/5</div>
            <div className="text-sm text-gray-600">מ-2,000+ ביקורות</div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-16" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            הבעיות של פרילנסרים - ופתרונות
          </h2>

          <div className="space-y-12">
            {[
              {
                problem: "אין הגנה משפטית",
                solution: "חוזים משפטיים חזקים עם כל לקוח חדש",
                details: "קבלו חוזים מעודכנים וחוקיים לכל סוג עבודה. כל חוזה כתוב על ידי יועצים משפטיים ויכול להיות מותאם לצרכיכם."
              },
              {
                problem: "אי-בהירות בזכויות יוצרים",
                solution: "הגדרו בחוזה מי בעלים של העבודה",
                details: "כל חוזה מגדיר בבהירות - מי משלם, מי בעלים של הקוד/העיצוב/התוכן, וכיצד יעמוד התקשור בעתיד."
              },
              {
                problem: "עבודות לא מתועדות",
                solution: "כל עבודה עם חתימה דיגיטלית ותיעוד",
                details: "חתימה דיגיטלית מחייבת משפטית על כל חוזה. ביקורת אוטומטי משמרת הוכחה של מי חתם ומתי."
              },
              {
                problem: "פרויקטים מתגלגלים ללא סיום",
                solution: "דשבורד מרכזי לכל הפרויקטים",
                details: "ראו בעמ אחד את כל הפרויקטים - סטטוס, תאריכי תשלום, הערות וקישורים לחוזים."
              },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="order-2 md:order-1">
                  <div className="text-sm font-bold mb-2" style={{ color: "#F59E0B" }}>בעיה {i + 1}</div>
                  <h3 className="text-right font-bold text-2xl mb-4" style={{ color: "#1E1B4B" }}>
                    {item.problem}
                  </h3>
                  <p className="text-right text-lg font-semibold mb-4" style={{ color: "#6B7280" }}>
                    {item.solution}
                  </p>
                  <p className="text-right text-base" style={{ color: "#9CA3AF" }}>
                    {item.details}
                  </p>
                </div>
                <div className="order-1 md:order-2 rounded-2xl p-12" style={{ background: "#F59E0B10", border: "1px solid #F59E0B30" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Templates */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תבניות חוזים מוכנות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "חוזה עבודה עצמאית", desc: "לפרויקטים חד-פעמיים ועבודה שוטפת" },
              { title: "הסכם שכר טרחה", desc: "לשירותים מייעצים וניהוליים" },
              { title: "הסכם זכויות יוצרים", desc: "לעבודות עיצוב, כתיבה ופיתוח" },
              { title: "חוזה פיתוח תוכנה", desc: "לפרויקטי טכנולוגיה ומידע" },
              { title: "חוזה עיצוב וקריאטיב", desc: "לעבודות עיצוב גרפי ותוכן ויז'ואלי" },
              { title: "הסכם NDA &保ית סוד", desc: "להגנה על מידע עסקי רגיש" },
            ].map((template, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F59E0B" }}>
                <div className="text-sm font-black mb-3" style={{ color: "#F59E0B" }}>תבנית {String(i + 1).padStart(2, "0")}</div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
                  {template.title}
                </h4>
                <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                  {template.desc}
                </p>
                <button className="w-full px-4 py-3 rounded-lg font-bold text-sm" style={{ background: "#F59E0B20", color: "#F59E0B" }}>
                  השתמש בתבנית
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            סיפורי הצלחה של פרילנסרים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ליאור - מעצב אתרים",
                role: "עיצוב UI/UX",
                story: "עכשיו כל לקוח חדש חותם חוזה ברור בדקה אחת. נעלמו הויכוחים על זכויות היוצרים ותשלומים.",
                result: "הגדיל הכנסות ב-30%"
              },
              {
                name: "מיה - מפתחת React",
                role: "פיתוח Full-Stack",
                story: "הדשבורד משפר לעקוב אחר כל הפרויקטים בזמן אחד. חוסכת שעות בטיהור על סטטוסים ותשלומים.",
                result: "חוסכת 8 שעות בשבוע"
              },
              {
                name: "דני - יועץ עסקי",
                role: "ייעוץ ו-Strategy",
                story: "כל התזכיות שלי מתועדות משפטית. זה נתן לי שקט נפשי שלי כל עסקה מוגנת.",
                result: "לא הפסד כספים מ-1 חוזה"
              },
            ].map((story, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "#F59E0B10", border: "2px solid #F59E0B" }}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "#F59E0B" }}>
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: "#1E1B4B" }}>{story.name}</div>
                    <div className="text-xs" style={{ color: "#6B7280" }}>{story.role}</div>
                  </div>
                </div>
                <p className="text-right mb-6 text-base" style={{ color: "#1E1B4B" }}>
                  "{story.story}"
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} color="#F59E0B" />
                  <span className="text-sm font-bold" style={{ color: "#F59E0B" }}>{story.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            מתאים לכל סוג עבודה עצמאית
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "עיצוב וקריאטיב", items: ["מעצבים גרפיים", "מעצבי UX/UI", "צלמים", "ויידיוגרפים", "אמנים"] },
              { num: "02", title: "פיתוח וטכנולוגיה", items: ["מפתחים Full-Stack", "מהנדסי DevOps", "מומחי Data", "QA Engineers", "Security Consultants"] },
              { num: "03", title: "כתיבה וקוריאציה", items: ["כותבי תוכן", "עורכים", "מתרגמים", "בלוגרים", "עורכי עותק"] },
              { num: "04", title: "ייעוץ ודרכה", items: ["יועצים עסקיים", "אימוני ספורט", "יועצי HR", "מדריכים", "מנטורים"] },
            ].map((industry, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #F59E0B" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#F59E0B" }}>{industry.num}</div>
                <h3 className="font-bold text-xl mb-6" style={{ color: "#1E1B4B" }}>
                  {industry.title}
                </h3>
                <ul className="space-y-3">
                  {industry.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
                      <span style={{ color: "#6B7280" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            התחל להגן על הזכויות שלך כיום
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            חוזים משפטיים, דשבורד פרויקטים, וניהול לקוחות - הכל בצד אחד.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#F59E0B" }}>
            קבל גישה חינם
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
