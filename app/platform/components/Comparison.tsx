"use client";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

export default function Comparison() {
  const { t } = useLang();

  const comparisonData = [
    {
      feature: "חוזה מקצועי בדקות",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "AI שמבין חוק ישראל",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "חתימה דיגיטלית מחייבת",
      deallayer: true,
      competitors: true,
    },
    {
      feature: "דשבורד ניהול חוזים",
      deallayer: true,
      competitors: true,
    },
    {
      feature: "29+ תבניות משפטיות",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "ניהול לקוחות (CRM)",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "20+ אינטגרציות",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "תמיכה בעברית",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "חוזים בלתי מוגבלים",
      deallayer: true,
      competitors: false,
    },
    {
      feature: "מחיר שקוף ללא הפתעות",
      deallayer: true,
      competitors: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-black leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            למה לבחור ב-DealLayer?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#6B7280" }}>
            השוואה עם פתרונות אחרים בשוק
          </motion.p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB" }}>
                <th className="text-right py-4 px-4 font-bold" style={{ color: "#1E1B4B" }}>
                  תכונה
                </th>
                <th className="text-center py-4 px-4 font-bold" style={{ color: "#4F46E5" }}>
                  DealLayer
                </th>
                <th className="text-center py-4 px-4 font-bold" style={{ color: "#9CA3AF" }}>
                  פתרונות אחרים
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <motion.tr key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
                  style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td className="py-5 px-4 font-semibold" style={{ color: "#1E1B4B" }}>
                    {row.feature}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.deallayer ? (
                      <CheckCircle size={22} color="#10B981" strokeWidth={2} />
                    ) : (
                      <XCircle size={22} color="#D1D5DB" strokeWidth={2} />
                    )}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.competitors ? (
                      <CheckCircle size={22} color="#10B981" strokeWidth={2} />
                    ) : (
                      <XCircle size={22} color="#D1D5DB" strokeWidth={2} />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
