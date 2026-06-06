"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GooeyMorphText } from "../../components/GooeyMorphText";
import { useLang } from "../../lib/LanguageContext";

export default function Hero2() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden pt-28 pb-0"
      style={{ background: "linear-gradient(180deg, #EEF2FF 0%, #F5F3FF 40%, #ffffff 100%)", direction: t.dir }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #C7D2FE 0%, transparent 65%)" }} />
        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #DDD6FE 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ background: "rgba(79,70,229,0.1)", color: "#4F46E5", border: "1px solid rgba(79,70,229,0.2)" }}>
          <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
          {h.badge}
        </motion.div>

        <h1 className="font-black text-[#1E1B4B] mb-6 text-center"
          style={{ fontSize: "clamp(44px, 7vw, 88px)", lineHeight: 1.08 }}>
          <motion.span className="block"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}>{h.line1}</motion.span>
          <motion.span className="block"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}>{h.line2}</motion.span>
          <motion.span className="block" style={{ color: "#4F46E5" }}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}>
            <GooeyMorphText texts={h.morph} morphTime={1.4} cooldownTime={3} />
          </motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto"
          style={{ color: "#6B7280", lineHeight: 1.65 }}>{h.sub}</motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button className="btn-shimmer flex items-center gap-2.5 px-10 py-4 text-lg font-bold text-white rounded-2xl hover:scale-[1.02] active:scale-[0.97] transition-all"
            style={{ background: "#2563EB", boxShadow: "0 4px 30px rgba(37,99,235,0.35)" }}>
            <span>{h.cta1}</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
          <button className="px-8 py-4 text-lg font-semibold rounded-2xl transition-all hover:bg-indigo-50"
            style={{ border: "1.5px solid #C7D2FE", color: "#4F46E5" }}>{h.cta2}</button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-14">
          {h.trust.map(t => (
            <span key={t} className="flex items-center gap-1.5 text-sm" style={{ color: "#9CA3AF" }}>
              <CheckCircle2 size={14} strokeWidth={2.5} color="#10B981" />{t}
            </span>
          ))}
        </motion.div>

        {/* Product screenshot */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.9, ease: "easeOut" }}
          className="relative mx-auto" style={{ maxWidth: 860 }}>
          <div className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 30px 80px rgba(79,70,229,0.15), 0 0 0 1px rgba(79,70,229,0.1)", border: "1px solid #E0E7FF" }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: "#F8FAFC", borderBottom: "1px solid #E5E7EB" }}>
              <div className="flex gap-1.5">
                {["#EF4444","#F59E0B","#22C55E"].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
              </div>
              <div className="flex-1 rounded-lg px-4 py-1.5 text-xs text-center mx-8"
                style={{ background: "white", color: "#9CA3AF", border: "1px solid #E5E7EB" }}>
                app.deallayer.co.il/contracts
              </div>
            </div>
            <div className="flex" style={{ background: "#F8FAFC", minHeight: 300 }}>
              <div className="w-14 flex flex-col items-center pt-5 gap-4"
                style={{ background: "#F1F5F9", borderLeft: "1px solid #E5E7EB" }}>
                {[0,1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-xl" style={{ background: i===0?"#EEF2FF":"transparent" }} />)}
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold" style={{ color: "#1E1B4B" }}>החוזים שלי</span>
                  <button className="px-4 py-2 rounded-xl text-sm font-bold text-white" style={{ background: "#4F46E5" }}>+ חוזה חדש</button>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "הסכם פיתוח - StartupIL",  date: "12.06.26", s: "חתום",  c: "#10B981", bg: "#ECFDF5" },
                    { name: "שכירות - רמת אביב",         date: "10.06.26", s: "ממתין", c: "#F59E0B", bg: "#FFFBEB" },
                    { name: "NDA - משקיע פוטנציאלי",    date: "08.06.26", s: "חתום",  c: "#10B981", bg: "#ECFDF5" },
                    { name: "הסכם שותפות - TechVenture", date: "05.06.26", s: "ממתין", c: "#F59E0B", bg: "#FFFBEB" },
                  ].map(r => (
                    <div key={r.name} className="flex items-center justify-between rounded-xl px-5 py-3 bg-white"
                      style={{ border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#1E1B4B" }}>{r.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{r.date}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: r.bg, color: r.c }}>{r.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)", filter: "blur(16px)" }} />
        </motion.div>
      </div>
    </section>
  );
}
