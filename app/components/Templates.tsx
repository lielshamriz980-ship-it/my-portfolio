"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, Home, Code2, Building2, EyeOff, Briefcase,
  HardHat, Film, Megaphone, CreditCard, UserCheck, Building,
  ShoppingBag, Users, ArrowLeft,
} from "lucide-react";

const TEMPLATES = [
  { Icon: FileText,    name: "הסכם שירות כללי",      color: "#4F46E5", bg: "#EEF2FF" },
  { Icon: Home,        name: "חוזה שכירות דירה",      color: "#0EA5E9", bg: "#F0F9FF" },
  { Icon: Code2,       name: "הסכם פיתוח תוכנה",     color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: Building2,   name: "הסכם מייסדים",          color: "#6366F1", bg: "#EEF2FF" },
  { Icon: EyeOff,      name: "הסכם סודיות NDA",       color: "#64748B", bg: "#F8FAFC" },
  { Icon: Briefcase,   name: "הסכם פרילנס",          color: "#0EA5E9", bg: "#F0F9FF" },
  { Icon: HardHat,     name: "חוזה קבלן שיפוצים",    color: "#F59E0B", bg: "#FFFBEB" },
  { Icon: Film,        name: "הסכם צילום ווידאו",    color: "#EC4899", bg: "#FDF2F8" },
  { Icon: Megaphone,   name: "הסכם תוכן ממומן",      color: "#F97316", bg: "#FFF7ED" },
  { Icon: Users,       name: "הסכם שגרירות מותג",    color: "#8B5CF6", bg: "#F5F3FF" },
  { Icon: CreditCard,  name: "הסכם הלוואה",           color: "#10B981", bg: "#ECFDF5" },
  { Icon: UserCheck,   name: "הסכם עבודה שכיר",      color: "#14B8A6", bg: "#F0FDFA" },
  { Icon: Building,    name: "הסכם שותפות עסקית",    color: "#4F46E5", bg: "#EEF2FF" },
  { Icon: ShoppingBag, name: "חוזה זיכיון",           color: "#F59E0B", bg: "#FFFBEB" },
];

// 3x for seamless infinite loop
const ALL = [...TEMPLATES, ...TEMPLATES, ...TEMPLATES];

export default function Templates() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      // Each "copy" = 1/3 of total scrollWidth
      setSingleWidth(trackRef.current.scrollWidth / 3);
    }
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}
          >
            מוכן לשימוש מיידי
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-black text-[#0F172A] leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
          >
            תבנית לכל עסקה
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg font-light"
            style={{ color: "#6B7280" }}
          >
            מהסכם שכירות ועד חוזה מייסדים - הכל כאן, מוכן וחוקי.
          </motion.p>
        </div>
      </div>

      {/* Force LTR so the animation is directionally consistent */}
      <div className="overflow-hidden" style={{ direction: "ltr" }}>
        <motion.div
          ref={trackRef}
          className="flex"
          style={{ width: "max-content" }}
          animate={singleWidth > 0 ? { x: [0, -singleWidth] } : {}}
          transition={{
            duration: 38,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {ALL.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl p-5 mx-2.5 flex flex-col gap-3"
              style={{
                width: 176,
                border: "1.5px solid #F1F5F9",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                direction: "rtl",
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: t.bg }}>
                <t.Icon size={20} color={t.color} strokeWidth={1.75} />
              </div>
              <p className="text-sm font-bold text-[#0F172A] leading-snug">{t.name}</p>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit"
                style={{ background: "#ECFDF5", color: "#10B981" }}
              >
                מאושר
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <motion.button
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold rounded-[14px] hover:opacity-90 transition-all"
          style={{
            background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#9333EA 100%)",
            color: "white",
            boxShadow: "0 0 26px rgba(79,70,229,0.3)",
          }}
        >
          <span>ראה את כל התבניות</span>
          <ArrowLeft size={17} strokeWidth={2.5} />
        </motion.button>
      </div>
    </section>
  );
}
