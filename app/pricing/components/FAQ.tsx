"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";
import { useState } from "react";

export default function FAQ() {
  const { t } = useLang();
  const faqs = t.pricing.faqs;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white" style={{ direction: t.dir }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.pricing.faqHeading}
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden transition-all"
              style={{
                border: `1.5px solid ${openIdx === i ? "#4F46E5" : "#E5E7EB"}`,
                boxShadow: openIdx === i ? "0 8px 24px rgba(79,70,229,0.1)" : "none",
              }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between transition-colors hover:bg-gray-50"
                style={{ background: openIdx === i ? "#EEF2FF" : "white" }}>
                <p className="text-left font-bold" style={{ color: "#1E1B4B" }}>
                  {faq.q}
                </p>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} color="#4F46E5" strokeWidth={2.5} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                    className="px-6 overflow-hidden"
                    style={{ borderTop: "1px solid #E5E7EB", background: "#EEF2FF" }}>
                    <p className="py-5 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
