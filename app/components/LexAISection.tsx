"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Check, BrainCircuit } from "lucide-react";

const CHAT: { role: "bot" | "user"; text: string; isChoice?: boolean; isLoading?: boolean; isDone?: boolean }[] = [
  { role: "bot", text: "שלום, אני Lex. מה סוג ההסכם שתרצה ליצור?" },
  { role: "user", text: "שירות / פרילנס", isChoice: true },
  { role: "bot", text: "מה שם הלקוח והסכום המוסכם?" },
  { role: "user", text: "יוסף כהן - ₪3,500" },
  { role: "bot", text: "כותב את החוזה שלך...", isLoading: true },
  { role: "bot", text: "החוזה מוכן. שלח לחתימה?", isDone: true },
];

const FEATURES = [
  "יצירת חוזה מ-0 בשיחה פשוטה",
  "ניתוח סיכונים וציון הגנה אוטומטי",
  "המלצות משפטיות בשפה פשוטה",
  "מעודכן תמיד לחוק הישראלי",
];

export default function LexAISection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const delays = [300, 1400, 2600, 3600, 4700, 6000];
    const timers = delays.map((d, i) => setTimeout(() => setVisible(i + 1), d));
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F0A1E 0%, #130d24 100%)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none"
        style={{ background: "#4F46E5", opacity: 0.07, filter: "blur(130px)" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Chat */}
          <div ref={ref} className="order-2 lg:order-1">
            <div className="rounded-3xl p-6"
              style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)" }}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm"
                    style={{ background: "linear-gradient(135deg,#4F46E5,#9333EA)" }}>L</div>
                  <div>
                    <p className="text-white font-bold text-sm">Lex AI</p>
                    <p className="text-xs" style={{ color: "#34D399" }}>פעיל עכשיו</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
                  <Zap size={12} strokeWidth={2.5} />
                  <span>LEX INTELLIGENCE</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-3 min-h-[260px]">
                {CHAT.slice(0, visible).map((msg, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}>
                    {msg.isLoading ? (
                      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm"
                        style={{ background: "rgba(79,70,229,0.18)", color: "#A5B4FC" }}>
                        <Zap size={14} strokeWidth={2} />
                        <span>{msg.text}</span>
                        <span className="flex gap-1">
                          {[0,1,2].map(d => (
                            <span key={d} className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ background: "#818CF8", animation: `bounce 1s ${d*0.2}s ease-in-out infinite` }} />
                          ))}
                        </span>
                      </div>
                    ) : msg.isDone ? (
                      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-semibold"
                        style={{ background: "rgba(16,185,129,0.15)", color: "#34D399" }}>
                        <Check size={16} strokeWidth={2.5} />
                        <span>{msg.text}</span>
                      </div>
                    ) : msg.isChoice ? (
                      <div className="px-4 py-2.5 rounded-xl text-sm font-semibold"
                        style={{ background: "rgba(79,70,229,0.22)", color: "#C4B5FD", border: "1px solid rgba(79,70,229,0.35)" }}>
                        {msg.text}
                      </div>
                    ) : msg.role === "bot" ? (
                      <div className="max-w-[82%] px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
                        style={{ background: "rgba(255,255,255,0.07)", color: "#D1D5DB" }}>
                        {msg.text}
                      </div>
                    ) : (
                      <div className="max-w-[72%] px-4 py-3 rounded-2xl rounded-tr-sm text-sm font-medium text-white"
                        style={{ background: "#4F46E5" }}>
                        {msg.text}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center gap-3 mt-5 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex-1 rounded-xl px-4 py-3 text-sm"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#4B5563" }}>
                  כתוב כאן...
                </div>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}>
                  <ArrowLeftIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
                style={{ background: "rgba(79,70,229,0.14)", color: "#818CF8", border: "1px solid rgba(79,70,229,0.2)" }}>
                <BrainCircuit size={15} strokeWidth={2} />
                <span>מופעל על ידי AI</span>
              </div>

              <h2 className="font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(32px, 5.5vw, 60px)" }}>
                Lex AI -<br />
                עורך הדין<br />
                הצמוד שלך
              </h2>

              <p className="text-xl leading-relaxed mb-10 font-light" style={{ color: "#9CA3AF" }}>
                Lex מבין את ההקשר, יוצר חוזה שעומד בחוק הישראלי, ומנתח סיכונים - תוך שניות, 24/7.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {FEATURES.map((f, i) => (
                  <motion.div key={f}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(16,185,129,0.18)" }}>
                      <Check size={13} color="#10B981" strokeWidth={2.5} />
                    </div>
                    <span className="text-base" style={{ color: "#D1D5DB" }}>{f}</span>
                  </motion.div>
                ))}
              </div>

              <button
                className="flex items-center gap-2.5 px-8 py-4 text-base font-bold rounded-[14px] hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg,#F59E0B,#D97706)", color: "#0F172A" }}>
                <Zap size={16} strokeWidth={2.5} />
                <span>נסה את Lex עכשיו</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-4px) } }
      `}</style>
    </section>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
  );
}
