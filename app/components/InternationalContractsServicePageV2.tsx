"use client";
import { ArrowRight, Globe, Scale, CheckCircle, Shield, DollarSign } from "lucide-react";

export function InternationalContractsServicePageV2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-br from-emerald-50 to-white" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "#059669" }} />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "#A7F3D015" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "#05966920", color: "#059669" }}>
            חוזים בינלאומיים
          </span>

          <h1 className="text-right font-black mb-8" style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#1E1B4B", lineHeight: 1.1 }}>
            עסקה בעולם בטוח
          </h1>

          <p className="text-right text-xl leading-relaxed max-w-3xl ml-auto mb-12" style={{ color: "#6B7280", fontWeight: 500 }}>
            חוזים משפטיים לעסקאות בינלאומיות בחוקי 50+ מדינות. מתורגמים, מותאמים, וקשורים לחוק המקום בדיוק.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: "#059669" }}>
              התחל בחינם
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-bold rounded-2xl" style={{ background: "transparent", border: "2px solid #059669", color: "#059669" }}>
              צפה בדמו
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #059669" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#059669" }}>
              <Globe size={18} />
              מדינות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>50+</div>
            <div className="text-sm text-gray-600 text-right">חוקים שונים</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #059669" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#059669" }}>
              <Scale size={18} />
              שפות
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>20+</div>
            <div className="text-sm text-gray-600 text-right">תמיכה מלאה</div>
          </div>

          <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #059669" }}>
            <div className="text-sm font-bold mb-3 flex items-center gap-2 justify-end" style={{ color: "#059669" }}>
              <CheckCircle size={18} />
              טוקול משפטי
            </div>
            <div className="text-4xl font-black mb-2" style={{ color: "#1E1B4B" }}>100%</div>
            <div className="text-sm text-gray-600 text-right">עמידה משפטית</div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            חוקים משפטיים לכל אזור
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "01", region: "אירופה", countries: "UK, France, Germany, Spain, Netherlands, Poland" },
              { num: "02", region: "אמריקה", countries: "USA (50 states), Canada, Mexico, Brazil" },
              { num: "03", region: "אסיה", countries: "Singapore, Hong Kong, Japan, South Korea, India" },
              { num: "04", region: "אוסטרליה", countries: "Australia, New Zealand, Oceania" },
            ].map((region, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #059669" }}>
                <div className="text-sm font-black mb-4" style={{ color: "#059669" }}>{region.num}</div>
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

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-20" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות לעסקאות בינלאומיות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "תרגום אוטומטי",
                desc: "חוזים תורגמים לשפה המקומית בדיוק מושלם."
              },
              {
                icon: Scale,
                title: "חוקים מקומיים",
                desc: "כל חוזה בדיוק על פי חוקי המדינה."
              },
              {
                icon: Shield,
                title: "חתימה משפטית",
                desc: "חתימות דיגיטליות כשרות בכל מדינה."
              },
              {
                icon: DollarSign,
                title: "מטבע והתשלומים",
                desc: "תמיכה בכל מטבע ותשלומים מקומיים."
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid #059669" }}>
                  <Icon size={32} color="#059669" className="mb-4" />
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
      <section className="py-20 md:py-32" style={{ background: "linear-gradient(135deg, #059669 0%, #10B981 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-white font-black mb-8" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            עסקה בחו"ל בטוחה וחוקית
          </h2>
          <p className="text-white text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            חוזים בחוקי המדינה המקומית, מתורגמים בדיוק, וכשרים משפטית.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl flex items-center gap-2 mx-auto" style={{ background: "white", color: "#059669" }}>
            התחל עסקה בינלאומית
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
