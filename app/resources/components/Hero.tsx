"use client";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function ResourcesHero() {
  const { t } = useLang();
  const r = t.resources;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-green-50" style={{ direction: t.dir }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#10B981" }}>
          {r.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#1E1B4B" }}>
          {r.h1}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg font-light"
          style={{ color: "#6B7280" }}>
          {r.sub}
        </motion.p>
      </div>
    </section>
  );
}
