"use client";
import { motion } from "framer-motion";
import { Code2, Home, Camera, CreditCard } from "lucide-react";

const INDUSTRIES = [
  {
    Icon: Code2,
    title: "טכנולוגיה & פיתוח",
    desc: "חוזי שירות, NDA, הסכמי שיתוף IP. ממש מה שצריך למדענים.",
    sectors: ["SaaS", "Startups", "פיתוח אפליקציות"],
  },
  {
    Icon: Home,
    title: "נדל\"ן & בנייה",
    desc: "חוזי בנייה, הסכמי שכירות, ניהול פרויקטים.",
    sectors: ["דירות", "משרדים", "חנויות"],
  },
  {
    Icon: Camera,
    title: "מדיה & קנטנט",
    desc: "חוזי צילום, הסכמי תוכן ממומן, רישיונות משימה.",
    sectors: ["בלוגרים", "צלמים", "סוכנויות"],
  },
  {
    Icon: CreditCard,
    title: "פיננסים & שירותים",
    desc: "הסכמי הלוואה, השקעה, ייעוץ, ביטוח.",
    sectors: ["ייעוץ פיננסי", "ביטוח", "השקעות"],
  },
];

export default function ByIndustry() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}>לפי תחום</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#1E1B4B" }}>
            איז<br/>ור שלך בתחום?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-3xl p-8 bg-gradient-to-br from-white to-indigo-50/30 transition-all"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "#EEF2FF" }}>
                <ind.Icon size={24} color="#4F46E5" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: "#1E1B4B" }}>{ind.title}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6B7280" }}>{ind.desc}</p>
              <div className="flex flex-wrap gap-2">
                {ind.sectors.map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full"
                    style={{ background: "#DDD6FE", color: "#4F46E5", fontWeight: 600 }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
