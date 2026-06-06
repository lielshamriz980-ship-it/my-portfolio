"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  const reviews = t.testimonials.items;

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}>
            {t.testimonials.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.testimonials.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(79,70,229,0.1)" }}
              className="bg-white rounded-2xl p-6 transition-all"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="text-4xl font-black mb-3 leading-none" style={{ color: "#4F46E5", fontFamily: "Georgia, serif" }}>"</div>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>{r.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>{r.name}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{r.role}</p>
                </div>
                <div className="text-right">
                  <Stars />
                  <p className="text-xs mt-1 font-semibold" style={{ color: "#9CA3AF" }}>{r.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
