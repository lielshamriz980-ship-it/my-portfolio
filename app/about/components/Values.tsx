"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function ValuesSection() {
  const { t } = useLang();
  const values = t.about.values;

  return (
    <section className="py-20 md:py-28 bg-white" style={{ direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-black leading-tight mb-12 text-center"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
          {t.dir === "rtl" ? "הערכים שלנו" : "Our Values"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <Heart size={28} color="#EF4444" className="mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-black mb-3" style={{ color: "#1E1B4B" }}>
                {val.title}
              </h3>
              <p style={{ color: "#6B7280" }}>
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
