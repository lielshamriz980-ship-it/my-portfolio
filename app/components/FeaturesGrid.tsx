"use client";
import { motion } from "framer-motion";
import { FileText, PenLine, FolderOpen, Users, Bell, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    Icon: FileText, color: "#4F46E5", bg: "#EEF2FF",
    title: "תבניות משפטיות מאושרות",
    body: "29+ תבניות לכל תחום: שכירות, פרילנס, NDA, מייסדים ועוד. כולן מותאמות לחוק הישראלי ומוכנות לשימוש מיידי.",
  },
  {
    Icon: PenLine, color: "#7C3AED", bg: "#F5F3FF",
    title: "חתימה דיגיטלית מחייבת",
    body: "חתימה עם תיעוד מלא: IP, תאריך, שעה ומספר טלפון. מחייבת משפטית כמו חתימה ידנית.",
  },
  {
    Icon: FolderOpen, color: "#0EA5E9", bg: "#F0F9FF",
    title: "ניהול כל החוזים במקום אחד",
    body: "דשבורד נקי שמציג חוזים פעילים, ממתינים, ומוגמרים. מסנן לפי סטטוס, תאריך, ולקוח.",
  },
  {
    Icon: Users, color: "#10B981", bg: "#ECFDF5",
    title: "ניהול לקוחות",
    body: "הוסף לקוחות לחשבון, עקוב אחרי כל ההסכמות מולם, וקבל תמונה ברורה על כל מערכת יחסים עסקית.",
  },
  {
    Icon: Bell, color: "#F59E0B", bg: "#FFFBEB",
    title: "התראות בזמן אמת",
    body: "קבל SMS ו-Push Notification כשהצד השני חותם, מבטל, או כשחוזה עומד לפוג.",
  },
  {
    Icon: ShieldCheck, color: "#6366F1", bg: "#EEF2FF",
    title: "אבטחה ברמה בנקאית",
    body: "הצפנת SSL, אימות דו-שלבי, וגיבוי אוטומטי. הנתונים שלך מאובטחים לחלוטין.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-26 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#4F46E5" }}
          >
            הכלים שאתה צריך
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black text-[#0F172A] leading-tight mb-5"
            style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}
          >
            כל מה שצריך לנהל עסקאות<br className="hidden md:block" /> כמו מקצוען
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-xl font-light"
            style={{ color: "#6B7280" }}
          >
            מהחוזה הראשון ועד העסקה המאה - DealLayer תמיד לצדך.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 cursor-default transition-all card-hover"
              style={{ border: "1.5px solid #F1F5F9" }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: feat.bg }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feat.Icon size={26} color={feat.color} strokeWidth={1.75} />
              </motion.div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feat.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{feat.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
