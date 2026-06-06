"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function PlatformHero() {
  const { t } = useLang();
  const p = t.platform;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C7D2FE 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #DDD6FE 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#4F46E5" }}>
            {p.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#1E1B4B" }}>
            {p.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg font-light leading-relaxed mb-10"
            style={{ color: "#6B7280" }}>
            {p.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4">
            <button className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
              style={{ background: "#4F46E5", color: "white", boxShadow: "0 8px 32px rgba(79,70,229,0.3)" }}>
              {p.cta}
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
