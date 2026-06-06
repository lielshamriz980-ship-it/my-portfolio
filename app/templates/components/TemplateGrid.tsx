"use client";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function TemplateGrid() {
  const { t } = useLang();
  const categories = t.templates.categories;

  return (
    <section className="py-20 md:py-28 bg-white" style={{ direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {categories.map((cat, i) => (
          <motion.div key={i} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-2xl font-black mb-6"
              style={{ color: "#1E1B4B" }}>
              {cat.name}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.templates.map((tmpl, ti) => (
                <motion.div key={ti}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: ti * 0.05 }}
                  className="bg-white rounded-2xl p-6 text-center transition-all cursor-pointer hover:shadow-lg"
                  style={{ border: "1.5px solid #E5E7EB" }}>
                  <FileText size={32} color="#7C3AED" className="mx-auto mb-3" strokeWidth={1.5} />
                  <p className="font-bold text-sm" style={{ color: "#1E1B4B" }}>
                    {tmpl.name}
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
