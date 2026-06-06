"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function FeatureGrid() {
  const { t } = useLang();
  const features = t.platform.features;

  return (
    <section className="py-20 md:py-28 bg-white" style={{ direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.platform.featureGridHeading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(79,70,229,0.1)" }}
              className="bg-white rounded-3xl p-8 transition-all"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "#EEF2FF" }}>
                <Check size={24} color="#4F46E5" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color: "#1E1B4B" }}>
                {f.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
