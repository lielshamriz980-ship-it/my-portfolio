"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Check, TrendingUp } from "lucide-react";

const TRUST = ["ללא כרטיס אשראי", "ביטול בכל עת", "תמיכה בעברית"];

export default function FinalCTA() {
  return (
    <section
      className="relative py-36 md:py-48 text-center overflow-hidden"
      style={{ background: "linear-gradient(140deg, #4F46E5 0%, #7C3AED 55%, #9333EA 100%)" }}
    >
      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)" }}
      />
      {/* Top light streak */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-10"
          style={{ background: "rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.9)" }}
        >
          <TrendingUp size={14} strokeWidth={2} />
          <span>9,000+ עסקאות מוגנות - הצטרף עכשיו</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.06 }}
          className="font-black text-white leading-tight mb-6"
          style={{ fontSize: "clamp(36px, 7.5vw, 76px)" }}
        >
          תתחיל להגן על<br />
          העסקאות שלך.<br />
          עכשיו.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-xl md:text-2xl mb-12 font-light"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          3 חוזים ראשונים - חינם לגמרי. ללא כרטיס אשראי.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="flex flex-col items-center gap-7"
        >
          <button
            className="btn-shimmer inline-flex items-center gap-3 px-14 py-5 text-xl font-black rounded-2xl hover:scale-105 active:scale-95 transition-transform pulse-glow"
            style={{ background: "white", color: "#4F46E5" }}
          >
            <span>צור את החוזה הראשון שלך</span>
            <ArrowLeft size={22} strokeWidth={2.5} />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-7">
            {TRUST.map(t => (
              <span key={t} className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                <Check size={14} strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
