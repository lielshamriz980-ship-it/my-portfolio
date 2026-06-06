"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

const SECURITY_ICONS = [Shield, Lock, Eye, CheckCircle];

export default function Security() {
  const { t } = useLang();
  const security = t.platform.security;
  const certs = t.platform.certifications;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#4F46E5" }}>
              {t.platform.securitySpecial || "אבטחה מיוחדת"}
            </p>
            <h2 className="font-black leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#1E1B4B" }}>
              {t.platform.securityHeading}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              {t.platform.securitySub}
            </p>

            <div className="flex flex-wrap gap-3">
              {certs.map((cert, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full text-sm font-bold"
                  style={{ background: "#EEF2FF", color: "#4F46E5" }}>
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {security.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 flex gap-4"
                style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EEF2FF" }}>
                  {(() => {
                    const Icon = SECURITY_ICONS[i];
                    return <Icon size={22} color="#4F46E5" strokeWidth={2} />;
                  })()}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#1E1B4B" }}>
                    {s.title}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
