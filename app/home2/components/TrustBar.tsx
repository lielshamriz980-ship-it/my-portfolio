"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

export default function TrustBar() {
  const { t } = useLang();
  const { label, items } = t.trustbar;
  const ALL = [...items, ...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => { if (trackRef.current) setW(trackRef.current.scrollWidth / 3); }, []);

  return (
    <section className="py-12 overflow-hidden bg-white"
      style={{ borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
      <div className="text-center mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#9CA3AF" }}>
          {label}
        </p>
      </div>
      <div className="overflow-hidden" style={{ direction: "ltr" }}>
        <motion.div ref={trackRef} className="flex items-center" style={{ width: "max-content" }}
          animate={w > 0 ? { x: [0, -w] } : {}}
          transition={{ duration: 28, ease: "linear", repeat: Infinity, repeatType: "loop" }}>
          {ALL.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0" style={{ direction: t.dir }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C7D2FE" }} />
              <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "#6B7280" }}>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
