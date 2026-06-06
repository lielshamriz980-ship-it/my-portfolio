"use client";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function StorySection() {
  const { t } = useLang();
  const story = t.about.story;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-black leading-tight mb-8 text-center"
          style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
          {story.heading}
        </motion.h2>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed text-center"
            style={{ color: "#6B7280" }}>
            {story.p1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-relaxed text-center"
            style={{ color: "#6B7280" }}>
            {story.p2}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
