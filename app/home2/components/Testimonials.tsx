"use client";
import { Star } from "lucide-react";
import { useLang } from "../../lib/LanguageContext";
import { motion } from "framer-motion";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  const reviews = t.testimonials.items;

  // Need ~5-6 copies to fill entire screen width continuously
  // Card: 384px (w-96), Gap: 16px (gap-4)
  // Total per card with gap: 400px
  // For 1920px screen: need 5+ cards visible
  const multiplier = 6;
  const allItems = Array.from({ length: multiplier }).flatMap(() => reviews);

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-white" style={{ direction: t.dir }}>
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-14 px-6 lg:px-10 max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#4F46E5" }}>
            {t.testimonials.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-black leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "#1E1B4B" }}>
            {t.testimonials.heading}
          </motion.h2>
        </div>

        {/* Infinite Carousel - Row 1: LTR scrolls left, RTL scrolls right */}
        <div className="overflow-hidden mb-6">
          <style>{`
            @keyframes carousel-ltr {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50%)); }
            }
            @keyframes carousel-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(50%)); }
            }
            .carousel-row-1 {
              animation: ${t.dir === 'rtl' ? 'carousel-rtl' : 'carousel-ltr'} 60s linear infinite;
            }
            .carousel-row-1:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex gap-4 carousel-row-1" style={{ width: 'fit-content' }}>
            {/* First set - visible on load */}
            {allItems.slice(0, Math.ceil(allItems.length / 2)).map((r, i) => (
              <div key={`set1-${i}`}
                className="flex-shrink-0 w-[min(384px,85vw)] bg-white rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: "#4F46E5", fontFamily: "Georgia, serif" }}>"</div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>{r.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>{r.name}</p>
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{r.role}</p>
                  </div>
                  <div className="text-right">
                    <Stars />
                    <p className="text-xs mt-1 font-semibold" style={{ color: "#9CA3AF" }}>{r.platform}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Second set - loops seamlessly */}
            {allItems.slice(0, Math.ceil(allItems.length / 2)).map((r, i) => (
              <div key={`set2-${i}`}
                className="flex-shrink-0 w-[min(384px,85vw)] bg-white rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: "#4F46E5", fontFamily: "Georgia, serif" }}>"</div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>{r.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>{r.name}</p>
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{r.role}</p>
                  </div>
                  <div className="text-right">
                    <Stars />
                    <p className="text-xs mt-1 font-semibold" style={{ color: "#9CA3AF" }}>{r.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Carousel - Row 2: Opposite direction */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes carousel-ltr-rev {
              0% { transform: translateX(calc(-50%)); }
              100% { transform: translateX(0); }
            }
            @keyframes carousel-rtl-rev {
              0% { transform: translateX(calc(50%)); }
              100% { transform: translateX(0); }
            }
            .carousel-row-2 {
              animation: ${t.dir === 'rtl' ? 'carousel-rtl-rev' : 'carousel-ltr-rev'} 65s linear infinite;
            }
            .carousel-row-2:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex gap-4 carousel-row-2" style={{ width: 'fit-content' }}>
            {/* First set - visible on load */}
            {allItems.slice(Math.ceil(allItems.length / 2)).map((r, i) => (
              <div key={`row2-set1-${i}`}
                className="flex-shrink-0 w-[min(384px,85vw)] bg-white rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: "#4F46E5", fontFamily: "Georgia, serif" }}>"</div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>{r.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>{r.name}</p>
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{r.role}</p>
                  </div>
                  <div className="text-right">
                    <Stars />
                    <p className="text-xs mt-1 font-semibold" style={{ color: "#9CA3AF" }}>{r.platform}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Second set - loops seamlessly */}
            {allItems.slice(Math.ceil(allItems.length / 2)).map((r, i) => (
              <div key={`row2-set2-${i}`}
                className="flex-shrink-0 w-[min(384px,85vw)] bg-white rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: "#4F46E5", fontFamily: "Georgia, serif" }}>"</div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>{r.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1E1B4B" }}>{r.name}</p>
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{r.role}</p>
                  </div>
                  <div className="text-right">
                    <Stars />
                    <p className="text-xs mt-1 font-semibold" style={{ color: "#9CA3AF" }}>{r.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
