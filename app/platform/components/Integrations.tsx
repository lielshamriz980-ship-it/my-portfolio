"use client";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function Integrations() {
  const { t } = useLang();
  const integrations = t.platform.integrations;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-black leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.platform.integrationsHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#6B7280" }}>
            {t.platform.integrationsSub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {integrations.slice(0, 8).map((int, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-5 text-center transition-all hover:shadow-lg"
              style={{ border: "1px solid #E5E7EB" }}>
              <p className="font-bold text-sm" style={{ color: "#1E1B4B" }}>
                {int.name}
              </p>
              <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>
                {int.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 text-center"
          style={{ border: "1.5px solid #E0E7FF" }}>
          <p className="font-bold text-lg mb-2" style={{ color: "#1E1B4B" }}>
            {t.platform.integrationsReq}
          </p>
          <p style={{ color: "#6B7280" }}>
            יש לך צורך ספציפי? פנו אלינו ונבנה אותה עבורך.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
