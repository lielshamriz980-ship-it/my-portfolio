"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";

type NavItem = string | { label: string; href: string };
const NAV_LINKS: NavItem[] = ["מוצר", "תבניות", "תמחור", "שאלות נפוצות", { label: "עמוד בית 2", href: "/home2" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between" style={{ height: 72 }}>

          {/* Logo */}
          <a href="#" className="text-2xl font-black tracking-tight select-none" style={{ color: "#4F46E5" }}>
            deal<span style={{ color: "#7C3AED" }}>|</span>awyer
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => {
              const label = typeof link === "string" ? link : link.label;
              const href = typeof link === "string" ? "#" : link.href;
              const isSpecial = typeof link !== "string";
              return (
                <a key={label} href={href}
                  className="text-[15px] font-medium transition-colors hover:text-[#4F46E5]"
                  style={{ color: isSpecial ? "#4F46E5" : "#6B7280", fontWeight: isSpecial ? 700 : undefined }}>
                  {label}
                </a>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-semibold text-[#4F46E5] border border-[#C7D2FE] rounded-xl hover:border-[#4F46E5] hover:bg-indigo-50 transition-all">
              כניסה
            </button>
            <button
              className="btn-shimmer flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-xl hover:opacity-90 transition-all"
              style={{
                background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 50%,#9333EA 100%)",
                boxShadow: "0 0 20px rgba(79,70,229,0.32)",
              }}
            >
              <span>התחל בחינם</span>
              <ArrowLeft size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="flex flex-col gap-4 py-6">
                {NAV_LINKS.map(link => {
                  const label = typeof link === "string" ? link : link.label;
                  const href = typeof link === "string" ? "#" : link.href;
                  return <a key={label} href={href} className="text-base font-medium text-gray-600 hover:text-[#4F46E5]">{label}</a>;
                })}
                <div className="flex flex-col gap-3 pt-2">
                  <button className="w-full py-3 text-base font-semibold text-[#4F46E5] border border-[#C7D2FE] rounded-xl">כניסה</button>
                  <button className="btn-shimmer w-full py-3 text-base font-bold text-white rounded-xl"
                    style={{ background: "linear-gradient(135deg,#4F46E5,#9333EA)" }}>
                    התחל בחינם
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
