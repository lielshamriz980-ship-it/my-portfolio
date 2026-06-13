"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, FolderOpen, Check } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";

function buildTabs(features: any) {
  const { t1, t2, t3, h1, h2, h3, s1, s2, s3, f1, f2, f3 } = features;
  return [
    {
      id: "create",
      icon: Sparkles,
      label: t1,
      heading: h1,
      sub: s1,
      features: f1,
      color: "#4F46E5",
      visual: "create",
    },
    {
      id: "sign",
      icon: Send,
      label: t2,
      heading: h2,
      sub: s2,
      features: f2,
      color: "#059669",
      visual: "sign",
    },
    {
      id: "manage",
      icon: FolderOpen,
      label: t3,
      heading: h3,
      sub: s3,
      features: f3,
      color: "#7C3AED",
      visual: "manage",
    },
  ];
}

export default function Features2() {
  const { t } = useLang();
  const TABS = buildTabs(t.features);
  const [active, setActive] = useState("create");
  const tab = TABS.find(tabItem => tabItem.id === active)!;

  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC", direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}>
            {t.features.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.features.heading}
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all"
              style={{
                background: active === t.id ? "white" : "transparent",
                color: active === t.id ? t.color : "#9CA3AF",
                border: active === t.id ? `1.5px solid ${t.color}30` : "1.5px solid transparent",
                boxShadow: active === t.id ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
              }}>
              <t.icon size={16} strokeWidth={2} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden bg-white"
            style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 8px 40px rgba(79,70,229,0.08)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text */}
              <div className="p-5 sm:p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 w-fit"
                  style={{ background: `${tab.color}12`, color: tab.color, border: `1px solid ${tab.color}25` }}>
                  <tab.icon size={12} strokeWidth={2.5} />
                  {tab.label}
                </div>
                <h3 className="font-black leading-tight mb-4"
                  style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#1E1B4B" }}>
                  {tab.heading}
                </h3>
                <p className="text-base leading-relaxed mb-8 font-light" style={{ color: "#6B7280" }}>{tab.sub}</p>
                <div className="flex flex-col gap-3">
                  {tab.features.map((f: string) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${tab.color}15` }}>
                        <Check size={11} color={tab.color} strokeWidth={3} />
                      </div>
                      <span className="text-sm" style={{ color: "#374151" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-fit flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-80"
                  style={{ color: tab.color }}>
                  {t.features.learnMore}
                </button>
              </div>

              {/* Visual */}
              <div className="relative overflow-hidden min-h-[320px] flex items-center justify-center p-8"
                style={{ background: `${tab.color}06`, borderRight: "1px solid #F1F5F9" }}>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${tab.color}10 0%, transparent 70%)` }} />
                {active === "create" && <CreateVisual color={tab.color} />}
                {active === "sign" && <SignVisual color={tab.color} />}
                {active === "manage" && <ManageVisual color={tab.color} />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CreateVisual({ color }: { color: string }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden"
      style={{ border: "1px solid #E5E7EB" }}>
      <div className="flex items-center gap-2 p-4 border-b border-gray-100">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs text-white"
          style={{ background: color }}>L</div>
        <span className="text-sm font-bold" style={{ color: "#1E1B4B" }}>Lex AI</span>
        <span className="text-xs mr-auto px-2 py-0.5 rounded-full" style={{ background: "#ECFDF5", color: "#10B981" }}>פעיל</span>
      </div>
      <div className="p-4 flex flex-col gap-2.5">
        {[
          { r: "bot",  t: "מה סוג ההסכם?" },
          { r: "user", t: "שירות / פרילנס" },
          { r: "bot",  t: "מה שם הלקוח והסכום?" },
          { r: "user", t: "יוסף כהן, ₪3,500" },
          { r: "done", t: "החוזה מוכן - שלח לחתימה?" },
        ].map((m, i) => (
          <div key={i} className={`flex ${m.r === "user" ? "justify-start" : "justify-end"}`}>
            <div className="max-w-[80%] px-3 py-2 rounded-xl text-xs"
              style={{
                background: m.r === "done" ? `${color}12` : m.r === "user" ? color : "#F8FAFC",
                color: m.r === "done" ? color : m.r === "user" ? "white" : "#374151",
                border: m.r === "done" ? `1px solid ${color}30` : "none",
                fontWeight: m.r === "done" ? 600 : 400,
              }}>
              {m.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SignVisual({ color }: { color: string }) {
  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>הסכם שירות - יוסף כהן</p>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#FFFBEB", color: "#F59E0B" }}>ממתין לחתימה</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "#9CA3AF" }}>₪3,500 - תשלום בסיום</p>
        <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: color }}>
          שלח לוואטסאפ
        </button>
      </div>
      <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm"
        style={{ border: `1.5px solid ${color}30` }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${color}12` }}>
          <Check size={18} color={color} strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>יוסף כהן חתם!</p>
          <p className="text-xs" style={{ color: "#9CA3AF" }}>12.06.2026 · 14:32 · IP תועד</p>
        </div>
      </div>
    </div>
  );
}

function ManageVisual({ color }: { color: string }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
      <div className="flex gap-2 p-3 border-b border-gray-100">
        {[["הכל", true], ["חתום", false], ["ממתין", false]].map(([l, a]) => (
          <span key={String(l)} className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: a ? color : "#F1F5F9", color: a ? "white" : "#6B7280" }}>
            {String(l)}
          </span>
        ))}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {[
          { n: "הסכם - StartupIL",   s: "חתום",  c: "#10B981", bg: "#ECFDF5" },
          { n: "שכירות - רמת גן",    s: "ממתין", c: "#F59E0B", bg: "#FFFBEB" },
          { n: "NDA - אורן לוי",     s: "חתום",  c: "#10B981", bg: "#ECFDF5" },
          { n: "פרילנס - נועה כ.",   s: "ממתין", c: "#F59E0B", bg: "#FFFBEB" },
        ].map(r => (
          <div key={r.n} className="flex items-center justify-between rounded-xl px-3 py-2.5"
            style={{ background: "#F8FAFC", border: "1px solid #F1F5F9" }}>
            <span className="text-xs font-medium" style={{ color: "#374151" }}>{r.n}</span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ color: r.c, background: r.bg }}>{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
