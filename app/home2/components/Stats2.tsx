"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../lib/LanguageContext";

function getStats(t: any) {
  return [
    { end: 9000, display: "9,000+", label: t.l1, sub: t.s1 },
    { end: 2,    display: "2 דקות", label: t.l2, sub: t.s2, literal: true },
    { end: 29,   display: "29+",    label: t.l3, sub: t.s3 },
    { end: 100,  display: "100%",   label: t.l4, sub: t.s4 },
  ];
}

function CountUp({ end, display, literal, active }: { end: number; display: string; literal?: boolean; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active || literal) return;
    let f = 0;
    const tick = () => {
      f++;
      const p = Math.min(f / 80, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, literal]);
  if (literal) return <>{active ? display : "..."}</>;
  const suffix = display.replace(/[\d,]/g, "");
  return <>{active ? `${n.toLocaleString()}${suffix}` : "..."}</>;
}

export default function Stats2() {
  const { t } = useLang();
  const stats = getStats(t.stats);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.stats.heading}
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-7 text-center bg-white"
              style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 4px 16px rgba(79,70,229,0.06)" }}>
              <div className="font-black mb-2 leading-none"
                style={{ fontSize: "clamp(34px, 4.5vw, 56px)", color: "#4F46E5" }}>
                <CountUp end={s.end} display={s.display} literal={s.literal} active={inView} />
              </div>
              <p className="text-sm font-bold mb-1" style={{ color: "#1E1B4B" }}>{s.label}</p>
              <p className="text-xs" style={{ color: "#9CA3AF" }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
