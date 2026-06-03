"use client";
import { motion } from "framer-motion";
import { Palette, Home, Briefcase, Rocket, HardHat, Camera } from "lucide-react";

const CARDS = [
  {
    Icon: Palette, color: "#7C3AED", bg: "#F5F3FF",
    title: "פרילנסרים ויוצרים",
    body: "מעצבים, מפתחים, צלמים, יוצרי תוכן. שמור על הזכויות שלך, קבע תנאי תשלום ברורים, ומנע אי-הבנות.",
  },
  {
    Icon: Home, color: "#0EA5E9", bg: "#F0F9FF",
    title: "משכירי נכסים",
    body: "שכר דירה ברורות, חוזים מעודכנים לחוק, פיקדון מתועד. הכל בסדר ולא צריך עורך דין.",
  },
  {
    Icon: Briefcase, color: "#4F46E5", bg: "#EEF2FF",
    title: "בעלי עסקים קטנים",
    body: "קבלנים, יועצים, מאמנים, ספקי שירות. כל עסקה מוגנת, כל לקוח ברור, כל תשלום מובטח.",
  },
  {
    Icon: Rocket, color: "#9333EA", bg: "#FDF4FF",
    title: "יזמים וסטארטאפים",
    body: "הסכמי מייסדים, NDA, הסכמי שותפות. בנה את הבסיס המשפטי של החברה שלך נכון מהיום הראשון.",
  },
  {
    Icon: HardHat, color: "#F59E0B", bg: "#FFFBEB",
    title: "קבלנים ובעלי מקצוע",
    body: "שיפוצניקים, גננים, אינסטלטורים. חוזה ברור לפני כל עבודה - כולל לוח זמנים ותשלום שלבי.",
  },
  {
    Icon: Camera, color: "#EC4899", bg: "#FDF2F8",
    title: "ספקי מדיה ואירועים",
    body: "צלמים, וידאוגרפים, מפיקי אירועים. הגן על זכויות היוצרים שלך ומנע ביטולים של הרגע האחרון.",
  },
];

export default function ForWhom() {
  return (
    <section className="py-20 md:py-26 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black text-[#0F172A] leading-tight mb-5"
            style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}>
            DealLayer בנויה בשבילך
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            style={{ color: "#6B7280" }}>
            לא משנה מה אתה עושה - אם יש לך עסקאות, יש לך מה להגן עליו.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-8 transition-all"
              style={{ background: "#FAFAFA", border: "1.5px solid #F1F5F9" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: card.bg }}>
                <card.Icon size={26} color={card.color} strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{card.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
