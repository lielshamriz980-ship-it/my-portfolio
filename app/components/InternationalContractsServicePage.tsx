"use client";
import { ArrowRight, Globe, Scale, CheckCircle } from "lucide-react";

export function InternationalContractsServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-purple-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#8B5CF6" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#DDD6FE15" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#8B5CF620", color: "#8B5CF6" }}>
            חוזים בינלאומיים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            עסקה בכל העולם בטוח
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            חוזים משפטיים לעסקאות בינלאומיות - בחוקי 50+ מדינות. מתורגמים, מותאמים, וקשורים לחוק המקום. עסקה בחו"ל לא תהיה פחות בטוחה מבישראל.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#8B5CF6" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #8B5CF6", color: "#8B5CF6" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #8B5CF6" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#8B5CF6" }}>מדינות</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>50+</div>
            <div className="text-sm text-gray-600">חוקים וסטנדרטים שונים</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #8B5CF6" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#8B5CF6" }}>שפות</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>20+</div>
            <div className="text-sm text-gray-600">תמיכה בעברית ועוד</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #8B5CF6" }}>
            <div className="text-sm font-bold mb-3" style={{ color: "#8B5CF6" }}>טוקול משפטי</div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>100%</div>
            <div className="text-sm text-gray-600">עמידה משפטית בכל מדינה</div>
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            חוקים משפטיים לכל מדינה
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { num: "01", region: "אירופה", countries: "UK, France, Germany, Spain, Netherlands, Poland" },
              { num: "02", region: "אמריקה", countries: "USA (all 50 states), Canada, Mexico" },
              { num: "03", region: "אסיה", countries: "Singapore, Hong Kong, Japan, South Korea, India" },
              { num: "04", region: "אוסטרליה", countries: "Australia, New Zealand" },
            ].map((region, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #8B5CF6" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#8B5CF6" }}>{region.num}</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>
                  {region.region}
                </h4>
                <p style={{ color: "#6B7280" }}>
                  {region.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות לעסקאות בינלאומיות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "תרגום אוטומטי",
                desc: "חוזים תורגמים לשפה המקומית של המדינה. בדיקה משפטית בכל שפה."
              },
              {
                icon: Scale,
                title: "חוקים משפטיים מקומיים",
                desc: "כל חוזה כתוב על פי חוקי המדינה שנבחרה. תאימות מלאה עם החוק."
              },
              {
                icon: CheckCircle,
                title: "חתימה משפטית בינלאומית",
                desc: "חתימות דיגיטליות שכשרות בכל מדינה. eIDAS, UETA - הכל תומך."
              },
              {
                icon: Globe,
                title: "מטבע והתשלומים",
                desc: "תמיכה בכל מטבע, שיטות התשלום מקומיות, והתחזוקה אוטומטית של תא ערך."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #8B5CF6" }}>
                  <Icon size={32} color="#8B5CF6" className="mb-4" />
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

      {/* CTA */}
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            עסקה בחו"ל בטוחה וחוקית
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            חוזים בחוקי המדינה המקומית. תורגמים, מותאמים, וקשורים לחוק.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#8B5CF6" }}>
            התחל עסקה בינלאומית
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
