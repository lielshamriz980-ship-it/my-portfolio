"use client";
import { motion } from "framer-motion";
import { Flame, UserX, MessageSquareWarning, ArrowLeft } from "lucide-react";

const PILLS = [
  { Icon: Flame,                color: "#EF4444", text: "תשלום שמעולם לא הגיע" },
  { Icon: UserX,                color: "#F59E0B", text: "לקוח שמכחיש את ההסכמה" },
  { Icon: MessageSquareWarning, color: "#F97316", text: "ויכוח על מה בדיוק סוכם" },
];

export default function ProblemSection() {
  return (
    <section className="py-32 md:py-44 relative overflow-hidden" style={{ background: "#0F0A1E" }}>
      <div className="dark-section-glow absolute inset-0 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "#4F46E5", opacity: 0.05, filter: "blur(130px)" }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-10"
          style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          <Flame size={13} strokeWidth={2} />
          <span>הבעיה הידועה</span>
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-black text-white leading-tight mb-8"
          style={{ fontSize: "clamp(32px, 6vw, 60px)" }}
        >
          כמה פעמים סגרת עסקה<br />
          בוואטסאפ... ואז הצטערת?
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl leading-relaxed mb-14 font-light"
          style={{ color: "#9CA3AF" }}
        >
          עסקה שנסגרת בעל פה אינה מחייבת משפטית. אם הצד השני מכחיש, מאחר בתשלום, או &ldquo;שכח&rdquo; מה הוסכם - אין לך שום הגנה. אין ראיה. אין כוח.
        </motion.p>

        {/* Pain pills */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-14">
          {PILLS.map(({ Icon, text, color }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 + i * 0.12 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Icon size={19} color={color} strokeWidth={2} />
              <span className="text-sm font-semibold text-white">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* In-section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <button
            className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold rounded-2xl hover:opacity-90 transition-all"
            style={{
              background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
              boxShadow: "0 0 28px rgba(79,70,229,0.4)",
            }}
          >
            <span className="text-white">הגן על העסקאות שלך - בחינם</span>
            <ArrowLeft size={16} strokeWidth={2.5} color="white" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
