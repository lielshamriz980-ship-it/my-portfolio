"use client";
import { motion } from "framer-motion";
import { Check, Zap, ArrowLeft, Star } from "lucide-react";

const FREE_FEATURES = [
  "3 עסקאות בחודש",
  "גישה ל-Lex AI",
  "כל התבניות הבסיסיות",
  "חתימה דיגיטלית",
  "PDF + אסמכתא",
];

const PRO_FEATURES = [
  "עסקאות ללא הגבלה",
  "Lex AI מלא + ניתוח סיכונים",
  "כל 29+ התבניות",
  "ניהול לקוחות מתקדם",
  "התראות SMS",
  "תמיכה מועדפת",
  "מספר חשבונות",
];

function Row({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: dark ? "rgba(255,255,255,0.2)" : "#ECFDF5" }}
      >
        <Check size={11} color={dark ? "white" : "#10B981"} strokeWidth={2.5} />
      </div>
      <span className="text-base" style={{ color: dark ? "rgba(255,255,255,0.88)" : "#4B5563" }}>{text}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="py-20 md:py-26 bg-white" id="תמחור">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#4F46E5" }}
          >
            תמחור שקוף
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black text-[#0F172A] leading-tight mb-5"
            style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}
          >
            מתחילים בחינם. משדרגים כשצריך.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-xl font-light"
            style={{ color: "#6B7280" }}
          >
            שלם רק כשהעסק שלך צומח.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-9 card-hover"
            style={{ border: "1.5px solid #E5E7EB" }}
          >
            <h3 className="text-2xl font-black text-[#0F172A] mb-2">חינם לנצח</h3>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-5xl font-black text-[#0F172A]">₪0</span>
              <span className="text-base font-medium mb-2" style={{ color: "#9CA3AF" }}>/ חודש</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10">
              {FREE_FEATURES.map(f => <Row key={f} text={f} />)}
            </ul>
            <button
              className="w-full py-4 text-base font-bold rounded-2xl hover:bg-indigo-50 transition-all active:scale-[0.98]"
              style={{ border: "1.5px solid #4F46E5", color: "#4F46E5" }}
            >
              התחל עכשיו - בחינם
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-9 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #4F46E5 0%, #7C3AED 55%, #9333EA 100%)",
              boxShadow: "0 20px 60px rgba(79,70,229,0.35)",
            }}
          >
            {/* Shimmer line at top */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />

            <div className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: "rgba(255,255,255,0.18)", color: "white" }}>
              <Star size={11} strokeWidth={2.5} />
              <span>הכי פופולרי</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2 mt-8">Pro</h3>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-3xl font-black text-white leading-tight">ללא הגבלה</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10">
              {PRO_FEATURES.map(f => <Row key={f} text={f} dark />)}
            </ul>
            <button
              className="btn-shimmer w-full py-4 text-base font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-92 transition-all active:scale-[0.98]"
              style={{ background: "white", color: "#4F46E5" }}
            >
              <span>שדרג עכשיו</span>
              <ArrowLeft size={17} strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm flex items-center justify-center gap-6 flex-wrap"
          style={{ color: "#9CA3AF" }}
        >
          {["ביטול בכל עת", "ללא התחייבות", "תמיכה בעברית"].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <Check size={13} color="#10B981" strokeWidth={2.5} />
              {t}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
