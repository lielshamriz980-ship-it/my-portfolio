"use client";
import React from "react";

interface RichServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  stats: Array<{ label: string; value: string; icon: any }>;
  features: string[];
  benefits: Array<{ title: string; desc: string }>;
  uniqueSection?: React.ReactNode;
}

export function RichServiceTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  stats,
  features,
  benefits,
  uniqueSection,
}: RichServiceTemplateProps) {
  return (
    <>
      {/* Rich Hero with Gradient Mesh */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32" style={{ direction: "rtl" }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${color}40 0%, transparent 70%)` }} />
          <div className="absolute bottom-10 left-20 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${color}30 0%, transparent 70%)` }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}25` }}>
                <Icon size={20} color={color} />
              </div>
              <span className="text-sm font-bold" style={{ color }}>{title}</span>
            </div>

            <h1 className="text-right font-black mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "#1E1B4B", lineHeight: 1.1 }}>
              {title}
            </h1>

            <p className="text-right text-2xl font-semibold mb-6 max-w-3xl" style={{ color }}>
              {subtitle}
            </p>

            <p className="text-right text-xl leading-relaxed max-w-3xl" style={{ color: "#6B7280" }}>
              {description}
            </p>

            <button className="mt-8 px-8 py-4 text-lg font-bold text-white rounded-2xl flex items-center gap-2" style={{ background: color }}>
              ← התחל עכשיו
            </button>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="rounded-2xl p-6 backdrop-blur-sm" style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                <StatIcon size={24} color={color} className="mb-3" />
                <p className="text-xs text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-black" style={{ color }}>{stat.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Unique Content Section */}
      {uniqueSection && (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
          {uniqueSection}
        </section>
      )}

      {/* Benefits Grid with Icons */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-16" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            יתרונות עיקריים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300" style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)` }} />
                <div className="relative bg-white rounded-3xl p-8" style={{ border: `1.5px solid ${color}20` }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${color}15` }}>
                    <div className="text-2xl font-black" style={{ color }}>✓</div>
                  </div>
                  <h3 className="text-right font-black text-2xl mb-3" style={{ color }}>
                    {benefit.title}
                  </h3>
                  <p className="text-right" style={{ color: "#6B7280" }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features as Interactive List */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-right font-black mb-16" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#1E1B4B" }}>
            תכונות מתקדמות
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl flex items-center gap-4 group hover:shadow-lg transition-all"
                style={{ background: "white", border: `1.5px solid ${color}20` }}
              >
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: `${color}15` }}>
                  <span style={{ color, fontSize: "20px" }}>→</span>
                </div>
                <p className="font-semibold text-lg" style={{ color: "#1E1B4B" }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <h2 className="text-white font-black mb-6" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            התחל עכשיו בחינם
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto opacity-90">
            אין צורך בכרטיס אשראי. כל התכונות זמינות מיד.
          </p>
          <button className="px-10 py-4 text-lg font-bold rounded-2xl bg-white" style={{ color }}>
            יצור חשבון חינם
          </button>
        </div>
      </section>
    </>
  );
}
