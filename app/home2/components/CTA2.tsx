"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function CTA2() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #EEF2FF 0%, #F5F3FF 50%, #EDE9FE 100%)" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, #C7D2FE 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #DDD6FE 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
          className="font-black leading-tight mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#1E1B4B" }}>
          {c.heading}<br />
          <span style={{ color: "#4F46E5" }}>{c.accent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl font-light mb-10" style={{ color: "#6B7280" }}>{c.sub}</motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col items-center gap-6">
          <button
            className="btn-shimmer inline-flex items-center gap-3 px-12 py-5 text-xl font-black rounded-2xl hover:scale-[1.03] active:scale-[0.97] transition-transform"
            style={{ background: "#2563EB", boxShadow: "0 8px 40px rgba(37,99,235,0.35)", color: "white" }}>
            <span>{c.btn}</span>
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {c.trust.map(tr => (
              <span key={tr} className="flex items-center gap-2 text-sm" style={{ color: "#9CA3AF" }}>
                <Check size={14} strokeWidth={2.5} color="#10B981" />{tr}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
