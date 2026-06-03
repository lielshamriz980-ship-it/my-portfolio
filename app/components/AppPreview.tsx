"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Smartphone, Globe, Clock } from "lucide-react";

const PILLS = [
  { Icon: Globe,      text: "עברית מלאה ו-RTL" },
  { Icon: Smartphone, text: "עובד מהמובייל" },
  { Icon: Clock,      text: "מהיר ובזמן אמת" },
];

export default function AppPreview() {
  return (
    <section className="py-20 md:py-26 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black text-[#0F172A] leading-tight mb-5"
            style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}>
            ממשק שתאהב להשתמש בו
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-light"
            style={{ color: "#6B7280" }}>
            נקי. מהיר. עברית מלאה. מובייל ודסקטופ.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mb-12"
          style={{ maxWidth: 860 }}>

          {/* Browser frame */}
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1.5px solid #E5E7EB" }}>
            {/* Chrome */}
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: "#F8FAFC", borderBottom: "1px solid #E5E7EB" }}>
              <div className="flex gap-1.5">
                {["#EF4444","#F59E0B","#22C55E"].map(c => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="flex-1 rounded-lg px-4 py-2 text-xs text-center mx-6"
                style={{ background: "white", color: "#9CA3AF", border: "1px solid #E5E7EB" }}>
                app.deallayer.co.il/contracts
              </div>
            </div>

            {/* App */}
            <div className="flex" style={{ background: "#0F0A1E", minHeight: 360 }}>
              {/* Sidebar */}
              <div className="w-16 flex flex-col items-center pt-6 gap-6"
                style={{ background: "#130d24", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                {[
                  { Icon: Globe, active: false },
                  { Icon: CheckCircle2, active: true },
                  { Icon: Smartphone, active: false },
                  { Icon: Clock, active: false },
                ].map(({ Icon, active }, i) => (
                  <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: active ? "rgba(79,70,229,0.3)" : "transparent" }}>
                    <Icon size={18} color={active ? "#818CF8" : "#4B5563"} strokeWidth={1.75} />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-7">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-bold text-white">החוזים שלי</h3>
                  <button className="px-4 py-2 rounded-lg text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}>
                    + חוזה חדש
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { name: "הסכם שירות - דן לוי",   date: "12.05.26", status: "חתום",  color: "#10B981", bg: "rgba(16,185,129,0.12)" },
                    { name: "שכירות - רחל כהן",       date: "10.05.26", status: "ממתין", color: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
                    { name: "NDA - אבי מזרחי",        date: "08.05.26", status: "חתום",  color: "#10B981", bg: "rgba(16,185,129,0.12)" },
                  ].map(c => (
                    <div key={c.name}
                      className="flex items-center justify-between rounded-xl px-5 py-3.5"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div>
                        <p className="text-sm font-semibold text-white">{c.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>{c.date}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: c.bg, color: c.color }}>{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating phone */}
          <motion.div
            className="absolute -bottom-12 -left-4 md:-left-12 z-20"
            style={{ animation: "float 3s ease-in-out infinite" }}>
            <div className="w-[128px] md:w-[155px] h-[220px] md:h-[270px] rounded-[28px] overflow-hidden shadow-2xl"
              style={{ background: "#0F0A1E", border: "4px solid #1E1033" }}>
              <div className="h-5 flex items-center justify-center" style={{ background: "#1a0f2e" }}>
                <div className="w-10 h-1 rounded-full" style={{ background: "#3a2a5a" }} />
              </div>
              <div className="p-3">
                <p className="text-white text-[9px] font-bold mb-3">DealLayer</p>
                {["צור חוזה","שלח לחתימה","לקוחות","ייבא"].map(l => (
                  <div key={l} className="flex items-center gap-1.5 rounded-lg p-2 mb-1.5"
                    style={{ background: "rgba(255,255,255,0.05)" }}>
                    <span className="text-[9px] font-medium" style={{ color: "#D1D5DB" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Signed badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 right-4 md:right-10 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
            style={{ border: "1.5px solid #E5E7EB" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#ECFDF5" }}>
              <CheckCircle2 size={20} color="#10B981" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F172A]">יוסף כהן חתם!</p>
              <p className="text-xs" style={{ color: "#9CA3AF" }}>לפני 2 דקות</p>
            </div>
          </motion.div>

          {/* Lex badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute -top-5 right-4 md:right-14 z-20 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5"
            style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)", border: "1px solid #6366F1" }}>
            <Zap size={16} color="white" strokeWidth={2} />
            <p className="text-xs font-bold text-white">Lex הכין חוזה חדש</p>
          </motion.div>
        </motion.div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {PILLS.map((p, i) => (
            <motion.div key={p.text}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-white rounded-full shadow-sm"
              style={{ border: "1.5px solid #E5E7EB" }}>
              <p.Icon size={17} color="#4F46E5" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#0F172A]">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
