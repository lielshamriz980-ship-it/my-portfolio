"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ArrowLeft } from "lucide-react";
import { GooeyMorphText } from "./GooeyMorphText";

const MORPH_TEXTS = ["בדקות.", "ללא עורך דין.", "מהוואטסאפ.", "בלי בירוקרטיה."];
const STATS = [
  { num: "9,000+", label: "חוזים נחתמו" },
  { num: "2 דקות", label: "מהרעיון לחוזה" },
  { num: "29+",    label: "תבניות מאושרות" },
];
const TRUST = ["ללא כרטיס אשראי", "3 חוזים חינם", "מוכן ב-2 דקות"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-white">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-55 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(79,70,229,0.09) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text ── */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-7"
              style={{ background: "rgba(79,70,229,0.08)", color: "#4F46E5", border: "1px solid rgba(79,70,229,0.18)" }}
            >
              <Zap size={13} strokeWidth={2.5} />
              <span>Lex AI · עורך הדין הצמוד שלך</span>
            </motion.div>

            {/* H1 — spans to keep valid HTML + correct line-height */}
            <h1
              className="font-black text-[#0F172A] mb-6"
              style={{ fontSize: "clamp(48px, 7.5vw, 92px)", lineHeight: 1.08 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                חוזה חכם.
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
              >
                הגנה אמיתית.
              </motion.span>

              {/* Gooey morphing line */}
              <motion.span
                className="block gradient-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
              >
                <GooeyMorphText
                  texts={MORPH_TEXTS}
                  morphTime={1.5}
                  cooldownTime={2.8}
                  className="gradient-text"
                />
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="text-xl leading-relaxed mb-8 font-light max-w-xl"
              style={{ color: "#6B7280" }}
            >
              צור חוזה מקצועי, שלח לחתימה בוואטסאפ, ושמור על ההסכמות שלך - בלי עורך דין, בלי בירוקרטיה.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.74 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <button
                  className="btn-shimmer flex items-center gap-2.5 px-10 py-4 text-lg font-bold text-white rounded-[14px] hover:opacity-95 hover:scale-[1.02] transition-all active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#9333EA 100%)",
                    boxShadow: "0 0 35px rgba(79,70,229,0.45), 0 4px 20px rgba(79,70,229,0.3)",
                  }}
                >
                  <span>התחל בחינם - עכשיו</span>
                  <ArrowLeft size={18} strokeWidth={2.5} />
                </button>
                <button className="px-10 py-4 text-lg font-bold text-[#4F46E5] border border-[#C7D2FE] rounded-[14px] hover:border-[#4F46E5] hover:bg-indigo-50 transition-all active:scale-[0.98]">
                  ראה הדגמה
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {TRUST.map(t => (
                  <div key={t} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#9CA3AF" }}>
                    <CheckCircle2 size={14} strokeWidth={2.5} color="#10B981" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.9 }}
              className="flex items-stretch mt-10 pt-8 border-t"
              style={{ borderColor: "#F1F5F9" }}
            >
              {STATS.map((s, i) => (
                <div key={s.num} className="flex-1 text-center"
                  style={{ borderRight: i > 0 ? "1px solid #F1F5F9" : "none" }}>
                  <div className="text-3xl font-black text-[#0F172A] mb-1">{s.num}</div>
                  <div className="text-sm font-medium" style={{ color: "#9CA3AF" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Phones ── */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "#7C3AED", opacity: 0.09, filter: "blur(100px)", transform: "scale(1.5)" }} />

              <div className="absolute -bottom-10 -right-12 z-10 opacity-80"
                style={{ animation: "float 3.4s ease-in-out infinite", animationDelay: "0.7s" }}>
                <ContractPhone />
              </div>

              <div className="relative z-20 float-animation">
                <DashboardPhone />
              </div>

              {/* Signed badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute -top-6 -left-4 z-30 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 badge-pulse"
                style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#ECFDF5" }}>
                  <CheckCircle2 size={20} color="#10B981" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">יוסף כהן חתם!</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>לפני 2 דקות</p>
                </div>
              </motion.div>

              {/* Lex badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="absolute -bottom-4 -left-10 z-30 rounded-2xl px-4 py-3 flex items-center gap-2.5"
                style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)", boxShadow: "0 6px 24px rgba(79,70,229,0.4)" }}
              >
                <Zap size={15} color="white" strokeWidth={2} />
                <p className="text-xs font-bold text-white">Lex הכין חוזה חדש</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPhone() {
  return (
    <div className="w-[248px] h-[476px] bg-white rounded-[42px] overflow-hidden"
      style={{ border: "5px solid #E5E7EB", boxShadow: "0 30px 80px rgba(0,0,0,0.14), 0 10px 30px rgba(79,70,229,0.1)" }}>
      <div className="h-7 flex items-center justify-center" style={{ background: "#F9FAFB" }}>
        <div className="w-16 h-1.5 rounded-full" style={{ background: "#D1D5DB" }} />
      </div>
      <div className="p-4 h-[calc(100%-28px)]" style={{ background: "#F8FAFC" }}>
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}>ל</div>
          <div>
            <p className="text-xs font-bold text-[#0F172A]">ליאל שמריז</p>
            <p className="text-[10px]" style={{ color: "#9CA3AF" }}>ברוך הבא</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: "צור חוזה",    color: "#EEF2FF", tc: "#4F46E5" },
            { label: "שלח לחתימה", color: "#F5F3FF", tc: "#7C3AED" },
            { label: "הוסף לקוח",  color: "#ECFDF5", tc: "#10B981" },
            { label: "ייבא חוזה",  color: "#FFF7ED", tc: "#F59E0B" },
          ].map(a => (
            <div key={a.label} className="rounded-xl p-3 text-center" style={{ background: a.color }}>
              <p className="text-[10px] font-bold" style={{ color: a.tc }}>{a.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-2.5 shadow-sm" style={{ border: "1px solid #F1F5F9" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold" style={{ color: "#374151" }}>חוזים אחרונים</span>
            <span className="text-[9px]" style={{ color: "#4F46E5" }}>הכל</span>
          </div>
          {[
            { name: "דן לוי",     type: "שירות",  status: "חתום",  color: "#10B981", bg: "#ECFDF5" },
            { name: "רחל כהן",   type: "שכירות", status: "ממתין", color: "#F59E0B", bg: "#FFFBEB" },
            { name: "אבי מזרחי", type: "NDA",    status: "חתום",  color: "#10B981", bg: "#ECFDF5" },
          ].map(c => (
            <div key={c.name} className="flex items-center justify-between py-2 border-t" style={{ borderColor: "#F9FAFB" }}>
              <div>
                <p className="text-[10px] font-semibold text-[#0F172A]">{c.name}</p>
                <p className="text-[9px]" style={{ color: "#9CA3AF" }}>{c.type}</p>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ color: c.color, background: c.bg }}>{c.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContractPhone() {
  return (
    <div className="w-[198px] h-[375px] rounded-[34px] overflow-hidden"
      style={{ background: "#0F0A1E", border: "5px solid #1E1033", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
      <div className="h-6 flex items-center justify-center" style={{ background: "#1a0f2e" }}>
        <div className="w-12 h-1 rounded-full" style={{ background: "#3a2a5a" }} />
      </div>
      <div className="p-4">
        <p className="text-xs font-bold text-white mb-1">חוזה שירות</p>
        <p className="text-[10px] mb-4" style={{ color: "#9CA3AF" }}>יוסף כהן</p>
        <div className="rounded-xl p-3 mb-3" style={{ background: "rgba(255,255,255,0.07)" }}>
          <p className="text-[9px] mb-1" style={{ color: "#9CA3AF" }}>סכום מוסכם</p>
          <p className="text-xl font-black text-white">₪1,500</p>
        </div>
        <div className="rounded-xl p-3 mb-3 flex items-center gap-2" style={{ background: "rgba(16,185,129,0.15)" }}>
          <CheckCircle2 size={16} color="#10B981" strokeWidth={2} />
          <div>
            <p className="text-[10px] font-bold" style={{ color: "#10B981" }}>חתום</p>
            <p className="text-[9px]" style={{ color: "#6EE7B7" }}>12.05.2026</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg p-2 text-center" style={{ background: "rgba(79,70,229,0.25)" }}>
            <p className="text-[9px] font-bold" style={{ color: "#A5B4FC" }}>הורד PDF</p>
          </div>
          <div className="flex-1 rounded-lg p-2 text-center" style={{ background: "rgba(255,255,255,0.07)" }}>
            <p className="text-[9px] font-bold" style={{ color: "#D1D5DB" }}>שתף</p>
          </div>
        </div>
      </div>
    </div>
  );
}
