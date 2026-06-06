"use client";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function SolutionsHero() {
  const { t } = useLang();
  const s = t.solutions;

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" style={{ direction: t.dir }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C7D2FE 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#4F46E5" }}>
          {s.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#1E1B4B" }}>
          {s.h1}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg font-light"
          style={{ color: "#6B7280" }}>
          {s.sub}
        </motion.p>
      </div>
    </section>
  );
}
