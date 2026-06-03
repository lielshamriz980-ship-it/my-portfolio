"use client";
import { motion } from "framer-motion";
import { Sparkles, Send, ShieldCheck, ArrowLeft } from "lucide-react";

const STEPS = [
  {
    num: "01",
    Icon: Sparkles,
    title: "ספר ל-Lex על העסקה",
    body: "Lex AI ישאל אותך 4 שאלות קצרות: מה סוג ההסכם? עם מי? על כמה? ומה הפרטים. זהו. תוך 2 דקות - חוזה מקצועי מוכן.",
    bg: "#F8FAFF",
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    border: "#E0E7FF",
  },
  {
    num: "02",
    Icon: Send,
    title: "שלח לחתימה בוואטסאפ",
    body: "לחיצה אחת שולחת לינק ייחודי לצד השני. הוא פותח מהמובייל, קורא את החוזה, וחותם. אתה מקבל התראה מיידית.",
    bg: "#F9F8FF",
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    border: "#EDE9FE",
  },
  {
    num: "03",
    Icon: ShieldCheck,
    title: "מוגן. מסודר. מתועד.",
    body: "כל עסקה מקבלת מספר אסמכתא ייחודי, PDF חתום, ותיעוד מלא של מי חתם ומתי. הכל שמור ומאובטח בחשבון שלך.",
    bg: "#F8FFFC",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
    border: "#D1FAE5",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-26 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black text-[#0F172A] leading-tight mb-5"
            style={{ fontSize: "clamp(32px, 5.5vw, 60px)" }}>
            מחוזה לחתימה - ב-3 צעדים
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-light"
            style={{ color: "#6B7280" }}>
            פשוט מספיק לכל אחד. מקצועי מספיק לכל עסקה.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-stretch gap-0">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1 rounded-3xl p-8 relative overflow-hidden"
                style={{ background: step.bg, border: `1.5px solid ${step.border}` }}>
                {/* Step number watermark */}
                <div className="absolute top-4 left-5 font-black text-8xl leading-none select-none"
                  style={{ color: step.iconColor, opacity: 0.07 }}>{step.num}</div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: step.iconBg }}>
                  <step.Icon size={26} color={step.iconColor} strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{step.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{step.body}</p>
              </motion.div>

              {/* Arrow connector */}
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.45 }}
                  className="hidden md:flex items-center justify-center w-6 flex-shrink-0">
                  <ArrowLeft size={20} color="#C7D2FE" strokeWidth={2} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
