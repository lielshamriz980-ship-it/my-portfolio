"use client";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function TeamHero() {
  const { t } = useLang();
  const tm = t.team;

  return (
    <section className="py-20 md:py-32 bg-white" style={{ direction: t.dir }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#4F46E5" }}>
          {tm.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#1E1B4B" }}>
          {tm.h1}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg font-light"
          style={{ color: "#6B7280" }}>
          {tm.sub}
        </motion.p>
      </div>
    </section>
  );
}
