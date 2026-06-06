"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const CONTACT_METHODS = [
  { Icon: Mail, label: "אימייל", value: "hello@deallayer.co.il" },
  { Icon: Phone, label: "טלפון", value: "+972-53-123-4567" },
  { Icon: MapPin, label: "כתובת", value: "תל אביב, ישראל" },
];

export default function ContactForm() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <h2 className="text-3xl font-black mb-10" style={{ color: "#1E1B4B" }}>
              דרכים ליצור קשר
            </h2>

            <div className="space-y-6">
              {CONTACT_METHODS.map((method, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EEF2FF" }}>
                    <method.Icon size={20} color="#4F46E5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: "#9CA3AF" }}>{method.label}</p>
                    <p className="text-lg font-semibold" style={{ color: "#1E1B4B" }}>{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 p-8 rounded-2xl"
              style={{ background: "#EEF2FF", border: "1.5px solid #C7D2FE" }}>
              <p className="font-bold mb-2" style={{ color: "#4F46E5" }}>זמן תגובה:</p>
              <p style={{ color: "#6B7280" }}>
                אנחנו מחזירים הודעות בדרך כלל בתוך 24 שעות. בצ'אט חי - תוך דקות.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: "#1E1B4B" }}>שם</label>
              <input
                type="text"
                placeholder="שמך"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4F46E5] focus:outline-none transition-colors"
                style={{ borderColor: "#E5E7EB" }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: "#1E1B4B" }}>אימייל</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                style={{ borderColor: "#E5E7EB" }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: "#1E1B4B" }}>נושא</label>
              <input
                type="text"
                placeholder="בקשה, הנושא שלך..."
                className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                style={{ borderColor: "#E5E7EB" }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: "#1E1B4B" }}>הודעה</label>
              <textarea
                placeholder="ספר לנו יותר..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none"
                style={{ borderColor: "#E5E7EB" }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all"
              style={{ background: "#2563EB", boxShadow: "0 4px 30px rgba(37,99,235,0.35)" }}>
              <Send size={18} strokeWidth={2.5} />
              שלח הודעה
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
