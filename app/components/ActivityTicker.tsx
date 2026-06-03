"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Send, Zap } from "lucide-react";

const ACTIVITIES = [
  { Icon: CheckCircle2, color: "#10B981", bg: "#ECFDF5", name: "ריבה לוי",    action: "חתמה על הסכם שירות", time: "כרגע" },
  { Icon: FileText,     color: "#4F46E5", bg: "#EEF2FF", name: "אלון כהן",    action: "יצר חוזה שכירות",   time: "לפני 1 דקה" },
  { Icon: Send,         color: "#7C3AED", bg: "#F5F3FF", name: "נועה גולן",   action: "שלחה חוזה לחתימה", time: "לפני 2 דקות" },
  { Icon: CheckCircle2, color: "#10B981", bg: "#ECFDF5", name: "ד״ר משה לוי", action: "חתם על NDA",         time: "לפני 3 דקות" },
  { Icon: Zap,          color: "#F59E0B", bg: "#FFFBEB", name: "StartupIL",   action: "הסכם מייסדים מוכן", time: "לפני 5 דקות" },
  { Icon: CheckCircle2, color: "#10B981", bg: "#ECFDF5", name: "מאיה שמחי",  action: "הגנה על עסקה של ₪45,000", time: "לפני 7 דקות" },
  { Icon: FileText,     color: "#4F46E5", bg: "#EEF2FF", name: "רועי אבן",    action: "יצר חוזה פרילנס",  time: "לפני 8 דקות" },
  { Icon: Send,         color: "#7C3AED", bg: "#F5F3FF", name: "BuildTech",   action: "חתמה על הסכם קבלן", time: "לפני 11 דקות" },
  { Icon: CheckCircle2, color: "#10B981", bg: "#ECFDF5", name: "שרה אדרי",   action: "חוזה שכירות נחתם",  time: "לפני 13 דקות" },
  { Icon: FileText,     color: "#0EA5E9", bg: "#F0F9FF", name: "TechVenture", action: "הסכם שותפות נוצר",  time: "לפני 15 דקות" },
];

const ALL = [...ACTIVITIES, ...ACTIVITIES, ...ACTIVITIES];

export default function ActivityTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setSingleWidth(trackRef.current.scrollWidth / 3);
    }
  }, []);

  return (
    <section className="py-0 overflow-hidden" style={{ background: "#F8FAFC", borderTop: "1px solid #F1F5F9", borderBottom: "1px solid #F1F5F9" }}>
      <div className="flex items-center" style={{ height: 64 }}>
        {/* Live label */}
        <div
          className="flex-shrink-0 flex items-center gap-2 px-5 h-full"
          style={{ background: "#0F0A1E", borderLeft: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#10B981]" style={{ animation: "badge-pulse 1.5s ease-in-out infinite" }} />
          <span className="text-xs font-black text-white tracking-widest uppercase">LIVE</span>
        </div>

        {/* Scrolling items */}
        <div className="flex-1 overflow-hidden" style={{ direction: "ltr" }}>
          <motion.div
            ref={trackRef}
            className="flex items-center"
            style={{ width: "max-content" }}
            animate={singleWidth > 0 ? { x: [0, -singleWidth] } : {}}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {ALL.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 h-16 flex-shrink-0"
                style={{ direction: "rtl", borderLeft: "1px solid #F1F5F9" }}
              >
                {/* Icon */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: a.bg }}
                >
                  <a.Icon size={14} color={a.color} strokeWidth={2} />
                </div>
                {/* Text */}
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-sm font-bold text-[#0F172A]">{a.name}</span>
                  <span className="text-sm text-[#6B7280]">{a.action}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#F1F5F9", color: "#9CA3AF" }}>
                    {a.time}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
