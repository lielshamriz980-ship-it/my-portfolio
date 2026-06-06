"use client";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";
import { useState } from "react";

export default function PricingTable() {
  const { t } = useLang();
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = t.pricing.plans;

  const getPrice = (plan: any) => {
    if (plan.price === null) return plan.note;
    if (isAnnual && plan.price > 0) {
      return `₪${Math.floor(plan.price * 12 * 0.8)}/שנה`;
    }
    return plan.price === 0 ? "חינם" : `₪${plan.price}/חודש`;
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white rounded-full p-1"
            style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                !isAnnual ? "text-white" : "text-gray-600"
              }`}
              style={{ background: !isAnnual ? "#4F46E5" : "transparent" }}>
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                isAnnual ? "text-white" : "text-gray-600"
              }`}
              style={{ background: isAnnual ? "#4F46E5" : "transparent" }}>
              {t.pricing.annual}
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl transition-all overflow-hidden"
              style={{
                background: i === 1 ? "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)" : "white",
                border: `1.5px solid ${i === 1 ? "#4F46E5" : "#E5E7EB"}`,
                boxShadow: i === 1 ? "0 20px 60px rgba(79,70,229,0.15)" : "0 4px 16px rgba(0,0,0,0.08)",
              }}>
              <div className="p-8">
                {i === 1 && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "#4F46E5", color: "white" }}>
                    מומלץ
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2" style={{ color: "#1E1B4B" }}>
                  {plan.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: "#9CA3AF" }}>
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <div className="text-4xl font-black mb-2" style={{ color: "#4F46E5" }}>
                    {getPrice(plan)}
                  </div>
                  <p className="text-sm" style={{ color: "#9CA3AF" }}>
                    {plan.note}
                  </p>
                </div>

                <button className={`w-full py-3 rounded-xl font-bold transition-all mb-8 flex items-center justify-center gap-2 ${
                  i === 1 ? "btn-shimmer" : ""
                }`}
                  style={{
                    background: i === 1 ? "#4F46E5" : "white",
                    color: i === 1 ? "white" : "#4F46E5",
                    border: `1.5px solid ${i === 1 ? "#4F46E5" : "#E5E7EB"}`,
                  }}>
                  {plan.cta}
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>

                <div className="space-y-3">
                  {plan.features.map((feat, fi) => (
                    <motion.div key={fi}
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.3, delay: fi * 0.05 }}
                      className="flex items-center gap-3">
                      {feat.included ? (
                        <Check size={18} color="#10B981" strokeWidth={2.5} />
                      ) : (
                        <X size={18} color="#D1D5DB" strokeWidth={2.5} />
                      )}
                      <span className={`text-sm ${feat.included ? "font-medium" : "opacity-50"}`} style={{ color: "#374151" }}>
                        {feat.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
