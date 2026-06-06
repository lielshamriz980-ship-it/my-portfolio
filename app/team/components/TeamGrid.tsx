"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function TeamGrid() {
  const { t } = useLang();
  const members = t.team.members;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50" style={{ direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden transition-all"
              style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <div className="w-full h-40 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "white" }}>
                  <User size={32} color="#4F46E5" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-5 text-center">
                <p className="font-black text-lg" style={{ color: "#1E1B4B" }}>
                  {member.name}
                </p>
                <p className="text-sm font-bold mb-3" style={{ color: "#4F46E5" }}>
                  {member.role}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
