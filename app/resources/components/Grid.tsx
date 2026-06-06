"use client";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, BookMarked, GraduationCap, HelpCircle, MessageCircle, Phone, Terminal, GitBranch, Webhook, ArrowRight, Mail } from "lucide-react";

const RESOURCE_SECTIONS = [
  {
    title: "למד בעצמך",
    color: "#4F46E5",
    resources: [
      { Icon: BookOpen, label: "מדריכי שימוש", desc: "8+ מדריכים מפורטים", count: "8+" },
      { Icon: PlayCircle, label: "סרטוני הדרכה", desc: "וידאו קצר לכל פיצ'ר", count: "20+" },
      { Icon: BookMarked, label: "בלוג DealLayer", desc: "עדכונים וטיפים שבועיים", count: "50+" },
      { Icon: GraduationCap, label: "מרכז ידע משפטי", desc: "מאמרים על חוק חוזים", count: "30+" },
    ],
  },
  {
    title: "קבל עזרה",
    color: "#059669",
    resources: [
      { Icon: HelpCircle, label: "שאלות נפוצות", desc: "תשובות למה שמטרידות", count: "100+" },
      { Icon: MessageCircle, label: "צ'אט תמיכה חי", desc: "ענים תוך דקות", count: "24/7" },
      { Icon: Phone, label: "שיחה עם מומחה", desc: "זמן אישי מ-Expert", count: "30 דק'" },
      { Icon: Mail, label: "אימייל Support", desc: "תגובה תוך 24 שעות", count: "24h" },
    ],
  },
  {
    title: "מפתחים",
    color: "#7C3AED",
    resources: [
      { Icon: Terminal, label: "API Documentation", desc: "תיעוד מלא + Examples", count: "REST" },
      { Icon: GitBranch, label: "GitHub Repository", desc: "Code examples בGitHub", count: "SDK" },
      { Icon: Webhook, label: "WebHooks Guide", desc: "Real-time events", count: "Events" },
      { Icon: ArrowRight, label: "Integration Hub", desc: "20+ Ready-made", count: "20+" },
    ],
  },
];

export default function ResourcesGrid() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {RESOURCE_SECTIONS.map((section, si) => (
          <div key={si} className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-10">
              <div className="w-1 h-8 rounded-full" style={{ background: section.color }} />
              <h2 className="text-3xl font-black" style={{ color: "#1E1B4B" }}>{section.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.resources.map((res, ri) => (
                <motion.div key={ri}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: ri * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-6 bg-white transition-all cursor-pointer group"
                  style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: `${section.color}15` }}>
                    <res.Icon size={20} color={section.color} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1E1B4B" }}>{res.label}</h3>
                  <p className="text-sm mb-3" style={{ color: "#9CA3AF" }}>{res.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${section.color}15`, color: section.color }}>
                      {res.count}
                    </span>
                    <a href="#" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} color={section.color} strokeWidth={2.5} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
