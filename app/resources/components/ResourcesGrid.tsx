"use client";
import { motion } from "framer-motion";
import { BookOpen, Video, FileText, MessageSquare } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

const ICONS = [BookOpen, Video, FileText, MessageSquare];

export default function ResourcesGrid() {
  const { t } = useLang();
  const sections = t.resources.sections;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {sections.map((sec, i) => (
          <motion.div key={i} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-2xl font-black mb-6"
              style={{ color: "#1E1B4B" }}>
              {sec.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {sec.resources.map((res, ri) => (
                <motion.div key={ri}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: ri * 0.05 }}
                  className="bg-white rounded-2xl p-6 transition-all hover:shadow-lg"
                  style={{ border: "1.5px solid #E5E7EB" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#ECFDF5" }}>
                      {ICONS[ri % 4]({ size: 20, color: "#10B981", strokeWidth: 2 })}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "#ECFDF5", color: "#10B981" }}>
                      {res.count}
                    </span>
                  </div>
                  <p className="font-bold text-sm mb-2" style={{ color: "#1E1B4B" }}>
                    {res.label}
                  </p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>
                    {res.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
