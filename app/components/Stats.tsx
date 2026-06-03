"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { end: 9000, display: "9,000+", label: "חוזים נחתמו עד היום" },
  { end: 2,    display: "2 דקות", label: "מהרעיון לחוזה מוכן", literal: true },
  { end: 29,   display: "29+",    label: "תבניות משפטיות מאושרות" },
  { end: 100,  display: "100%",   label: "עומד בחוק הישראלי" },
];

function CountUp({ end, display, literal, active }: { end: number; display: string; literal?: boolean; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || literal) return;
    let frame = 0;
    const total = 90;
    const tick = () => {
      frame++;
      const p = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, literal]);

  if (literal || !active) return <span>{active ? display : "—"}</span>;
  const suffix = display.replace(/[\d,]/g, "");
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 60%,#9333EA 100%)" }}>
      <div className="max-w-5xl mx-auto px-6 py-28 md:py-32">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center">
              <div className="font-black text-white mb-3 leading-none"
                style={{ fontSize: "clamp(44px, 6vw, 76px)" }}>
                <CountUp end={s.end} display={s.display} literal={s.literal} active={inView} />
              </div>
              <p className="text-sm md:text-base font-medium" style={{ color: "#C7D2FE" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
