"use client";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Scale, HardDrive } from "lucide-react";

const BADGES = [
  { Icon: Lock,        text: "SSL מוצפן",             color: "#818CF8", bg: "rgba(99,102,241,0.12)" },
  { Icon: ShieldCheck, text: "חתימה מחייבת בחוק",    color: "#34D399", bg: "rgba(16,185,129,0.12)" },
  { Icon: Scale,       text: "מותאם לחוק ישראלי",    color: "#60A5FA", bg: "rgba(59,130,246,0.12)" },
  { Icon: HardDrive,   text: "גיבוי אוטומטי",         color: "#C084FC", bg: "rgba(168,85,247,0.12)" },
];

export default function Security() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#0F0A1E" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,70,229,0.09) 0%, transparent 65%)" }} />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-10"
          style={{ background: "rgba(79,70,229,0.14)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.2)" }}>
          <Lock size={14} strokeWidth={2} />
          <span>אבטחה ואמינות</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-black text-white leading-tight mb-6"
          style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}>
          הנתונים שלך מוגנים.<br />
          העסקאות שלך מחייבות.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl leading-relaxed mb-14 font-light"
          style={{ color: "#9CA3AF" }}>
          DealLayer משתמשת בהצפנת SSL מדרגה גבוהה, אימות דו-שלבי, וגיבוי אוטומטי. החתימות הדיגיטליות שלנו עומדות בתקן הישראלי ומחייבות משפטית.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {BADGES.map(({ Icon, text, color, bg }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl"
              style={{ background: bg, border: "1px solid rgba(255,255,255,0.07)" }}>
              <Icon size={18} color={color} strokeWidth={1.75} />
              <span className="text-sm font-semibold text-white">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
