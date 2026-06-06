"use client";
import { motion } from "framer-motion";
import { FileText, Lock, Users, Home, Building, BarChart3, Briefcase, Heart, Film, Megaphone, Camera, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    cat: "שירות ועסקים",
    templates: [
      { name: "הסכם שירות כללי", Icon: FileText, color: "#4F46E5" },
      { name: "חוזה פרילנס", Icon: Briefcase, color: "#059669" },
      { name: "הסכם מייסדים", Icon: Users, color: "#7C3AED" },
      { name: "הסכם שותפות", Icon: Heart, color: "#DC2626" },
    ],
  },
  {
    cat: "נדל״ן",
    templates: [
      { name: "חוזה שכירות דירה", Icon: Home, color: "#F59E0B" },
      { name: "הסכם מסחרי", Icon: Building, color: "#0891B2" },
      { name: "הסכם ניהול נכסים", Icon: BarChart3, color: "#8B5CF6" },
    ],
  },
  {
    cat: "משפטי וכספי",
    templates: [
      { name: "הסכם NDA", Icon: Lock, color: "#4F46E5" },
      { name: "הסכם הלוואה", Icon: FileText, color: "#DC2626" },
      { name: "חוזה עבודה", Icon: Briefcase, color: "#059669" },
      { name: "הסכם גישור", Icon: Users, color: "#F59E0B" },
    ],
  },
  {
    cat: "מדיה ויצירה",
    templates: [
      { name: "הסכם צילום ווידאו", Icon: Film, color: "#7C3AED" },
      { name: "הסכם תוכן ממומן", Icon: Megaphone, color: "#0891B2" },
      { name: "הסכם שגרירות מותג", Icon: Camera, color: "#059669" },
    ],
  },
];

export default function TemplateGrid() {
  const allTemplates = CATEGORIES.flatMap(c => c.templates);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          {CATEGORIES.map((section, si) => (
            <div key={si} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
                className="text-2xl font-black mb-8"
                style={{ color: "#1E1B4B" }}>
                {section.cat}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.templates.map((template, ti) => (
                  <motion.div key={ti}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.45, delay: ti * 0.05 }}
                    whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(79,70,229,0.15)" }}
                    className="rounded-2xl p-6 bg-white transition-all cursor-pointer group"
                    style={{ border: "1.5px solid #E5E7EB" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: `${template.color}15` }}>
                      <template.Icon size={20} color={template.color} strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-base" style={{ color: "#1E1B4B" }}>{template.name}</h3>
                    <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#9CA3AF" }}>
                      עדכן וחתום תוך דקות
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href="#" className="text-xs font-bold flex items-center gap-1" style={{ color: template.color }}>
                        בחר <ArrowRight size={12} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center pt-8 border-t border-gray-200">
          <p className="text-base mb-6 font-medium" style={{ color: "#6B7280" }}>
            עוד לא מצאת את מה שחיפשת? ספרו לנו, אנחנו נבנה תבנית עבורך.
          </p>
          <button className="px-8 py-3 rounded-xl font-bold text-sm transition-colors"
            style={{ background: "#EEF2FF", color: "#4F46E5", border: "1.5px solid #C7D2FE" }}>
            הצע תבנית חדשה
          </button>
        </motion.div>
      </div>
    </section>
  );
}
