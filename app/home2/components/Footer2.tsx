"use client";
import { useLang } from "../../lib/LanguageContext";

export default function Footer2() {
  const { t } = useLang();
  const f = t.footer;

  const cols = [
    { title: f.product, links: f.footerLinks.product },
    { title: f.resources, links: f.footerLinks.resources },
    { title: f.company, links: f.footerLinks.company },
  ];

  return (
    <footer style={{ background: "#1E1B4B", direction: t.dir }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black mb-4 text-white">
              deal<span style={{ color: "#818CF8" }}>|</span>awyer
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white">{f.tagline}</p>
            <p className="text-xs text-white/60">DealLayer v2.0 · {f.country}</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-bold mb-5 text-white">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-y-3 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs text-white/50">© 2026 DealLayer. {f.rights}</p>
          <div className="flex gap-4 sm:gap-5">
            {["X", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="text-xs text-white/60 hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
