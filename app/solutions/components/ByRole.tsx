"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function ByRole() {
  const { t } = useLang();
  const roles = t.solutions.roles;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-black leading-tight mb-12 text-center"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
          {t.solutions.byRole}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 transition-all hover:shadow-lg"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "#EEF2FF" }}>
                <Briefcase size={24} color="#4F46E5" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: "#1E1B4B" }}>
                {role.title}
              </h3>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#6B7280" }}>
                {role.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {role.highlights.map((h, hi) => (
                  <span key={hi} className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "#EEF2FF", color: "#4F46E5" }}>
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
