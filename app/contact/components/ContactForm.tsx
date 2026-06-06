"use client";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";
import { useState } from "react";

export default function ContactForm() {
  const { t } = useLang();
  const c = t.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-6">
            {c.methods.map((method, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EEF2FF" }}>
                  {i === 0 && <Mail size={20} color="#4F46E5" />}
                  {i === 1 && <Phone size={20} color="#4F46E5" />}
                  {i === 2 && <MapPin size={20} color="#4F46E5" />}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#1E1B4B" }}>
                    {method.label}
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {method.value}
                  </p>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t" style={{ borderColor: "#E5E7EB" }}>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                {c.responseTime}
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5">
            <input
              type="text"
              placeholder={c.form.placeholder.name}
              className="w-full px-6 py-4 rounded-xl border transition-all focus:outline-none focus:border-indigo-500"
              style={{ borderColor: "#E5E7EB" }}
            />
            <input
              type="email"
              placeholder={c.form.placeholder.email}
              className="w-full px-6 py-4 rounded-xl border transition-all focus:outline-none focus:border-indigo-500"
              style={{ borderColor: "#E5E7EB" }}
            />
            <input
              type="text"
              placeholder={c.form.placeholder.subject}
              className="w-full px-6 py-4 rounded-xl border transition-all focus:outline-none focus:border-indigo-500"
              style={{ borderColor: "#E5E7EB" }}
            />
            <textarea
              placeholder={c.form.placeholder.message}
              rows={5}
              className="w-full px-6 py-4 rounded-xl border transition-all focus:outline-none focus:border-indigo-500 resize-none"
              style={{ borderColor: "#E5E7EB" }}
            />
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => setIsSubmitting(true)}
              className="w-full btn-shimmer py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-white transition-all"
              style={{ background: "#4F46E5" }}>
              {isSubmitting ? "שולח..." : c.form.submit}
              <Send size={18} strokeWidth={2} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
