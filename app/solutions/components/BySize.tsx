"use client";
import { motion } from "framer-motion";
import { User, Building2, Building, Heart } from "lucide-react";

const SIZES = [
  {
    Icon: User,
    title: "יחידים & עצמאים",
    desc: "פתרון פשוט, זול וחופשי. עד 3 חוזים בחודש, לתמיד.",
    badge: "התחלה כאן",
    color: "#4F46E5",
  },
  {
    Icon: Building2,
    title: "עסקים קטנים-בינוניים",
    desc: "10-50 עובדים? זה בדיוק לך. חוזים בלתי מוגבלים, כלים שלמים.",
    badge: "Popular",
    color: "#059669",
  },
  {
    Icon: Building,
    title: "ארגונים גדולים",
    desc: "50+ עובדים. אתה צריך API, SSO, ואינטגרציות מותאמות.",
    badge: "Enterprise",
    color: "#7C3AED",
  },
  {
    Icon: Heart,
    title: "ממשלה & מוסדות",
    desc: "דרישות רגולציה מיוחדות? אנחנו יכולים לטפל בזה.",
    badge: "Custom",
    color: "#DC2626",
  },
];

export default function BySize() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F8FAFC 0%, #EEF2FF 50%, #F3E8FF 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}>לפי גודל</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#1E1B4B" }}>
            כמה עובדים יש לך?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SIZES.map((size, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-10 bg-white transition-all"
              style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${size.color}15` }}>
                  <size.Icon size={28} color={size.color} strokeWidth={1.75} />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: `${size.color}20`, color: size.color }}>
                  {size.badge}
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3" style={{ color: "#1E1B4B" }}>{size.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{size.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
