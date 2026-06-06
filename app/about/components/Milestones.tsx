"use client";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function MilestoneSection() {
  const { t } = useLang();
  const milestones = t.about.milestones;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white" style={{ direction: t.dir }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-black leading-tight mb-12 text-center"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
          {t.dir === "rtl" ? "דרך הנסע" : "Our Journey"}
        </motion.h2>

        <div className="space-y-5">
          {milestones.map((ms, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 flex gap-5"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg"
                style={{ background: "#EEF2FF", color: "#4F46E5" }}>
                {ms.year}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg" style={{ color: "#1E1B4B" }}>
                  {ms.title}
                </h3>
                <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                  {ms.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
