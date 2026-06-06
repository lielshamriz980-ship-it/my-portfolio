"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Scale, TrendingDown } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

const CARD_COLORS = [
  { color: "#F59E0B", lightBg: "#FFFBEB", border: "#FDE68A" },
  { color: "#EF4444", lightBg: "#FEF2F2", border: "#FECACA" },
  { color: "#4F46E5", lightBg: "#EEF2FF", border: "#C7D2FE" },
];

const CARD_ICONS = [AlertTriangle, Scale, TrendingDown];

export default function PainPoints() {
  const { t } = useLang();
  const { badge, heading, accent, s1, l1, b1, s2, l2, b2, s3, l3, b3 } = t.pain;

  const CARDS = [
    { stat: s1, label: l1, body: b1, ...CARD_COLORS[0], Icon: CARD_ICONS[0] },
    { stat: s2, label: l2, body: b2, ...CARD_COLORS[1], Icon: CARD_ICONS[1] },
    { stat: s3, label: l3, body: b3, ...CARD_COLORS[2], Icon: CARD_ICONS[2] },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" style={{ direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}>
            {badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {heading}<br />
            <span style={{ color: "#4F46E5" }}>{accent}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(79,70,229,0.1)" }}
              className="rounded-3xl p-8 transition-all bg-white"
              style={{ border: `1.5px solid ${c.border}` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: c.lightBg }}>
                <c.Icon size={22} color={c.color} strokeWidth={1.75} />
              </div>
              <div className="font-black mb-1" style={{ fontSize: 46, lineHeight: 1, color: c.color }}>{c.stat}</div>
              <p className="text-sm font-bold mb-3" style={{ color: "#374151" }}>{c.label}</p>
              <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
