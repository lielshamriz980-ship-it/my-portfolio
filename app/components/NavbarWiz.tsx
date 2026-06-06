"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, PenLine, FolderOpen, Users, Bell, ShieldCheck, Code2, Zap, TrendingUp, Globe,
  Palette, Home, Briefcase, HardHat, Rocket, Scale, User, Building2, Building, Heart,
  FileText, EyeOff, CreditCard, UserCheck, Film, Megaphone, Camera,
  BookOpen, PlayCircle, BookMarked, GraduationCap, HelpCircle, MessageCircle, Phone, Terminal, GitBranch, Webhook,
  Info, Users2, Newspaper, Mail, Lock, ShieldAlert, CheckSquare,
  ChevronDown, ArrowRight, Languages, Check,
} from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import type { Lang } from "../lib/translations";

/* ─── Menu structure (icons fixed, labels from translations) ─── */
function useMenuConfig(t: ReturnType<typeof useLang>["t"]) {
  const m = t.nav;
  return [
    {
      label: m.platform,
      columns: [
        {
          header: m.platformMenu.col1,
          items: [
            { Icon: Sparkles,    label: m.platformMenu.lexAI,        desc: m.platformMenu.lexAIDesc },
            { Icon: PenLine,     label: m.platformMenu.sign,         desc: m.platformMenu.signDesc },
            { Icon: FolderOpen,  label: m.platformMenu.manage,       desc: m.platformMenu.manageDesc },
            { Icon: Users,       label: m.platformMenu.clients,      desc: m.platformMenu.clientsDesc },
          ],
        },
        {
          header: m.platformMenu.col2,
          items: [
            { Icon: Bell,        label: m.platformMenu.alerts,       desc: m.platformMenu.alertsDesc },
            { Icon: ShieldCheck, label: m.platformMenu.security,     desc: m.platformMenu.securityDesc },
            { Icon: Code2,       label: m.platformMenu.api,          desc: m.platformMenu.apiDesc },
            { Icon: Zap,         label: m.platformMenu.integrations, desc: m.platformMenu.integrationsDesc },
          ],
        },
        {
          header: m.platformMenu.col3,
          items: [
            { Icon: TrendingUp,  label: m.platformMenu.analytics,     desc: m.platformMenu.analyticsDesc },
            { Icon: Globe,       label: m.platformMenu.international, desc: m.platformMenu.internationalDesc },
          ],
        },
      ],
    },
    {
      label: m.solutions,
      columns: [
        {
          header: m.solutionsMenu.col1,
          items: [
            { Icon: Palette,    label: m.solutionsMenu.freelancers,  desc: m.solutionsMenu.freelancersDesc },
            { Icon: Home,       label: m.solutionsMenu.realestate,   desc: m.solutionsMenu.realestateDesc },
            { Icon: Briefcase,  label: m.solutionsMenu.business,     desc: m.solutionsMenu.businessDesc },
            { Icon: HardHat,    label: m.solutionsMenu.contractors,  desc: m.solutionsMenu.contractorsDesc },
            { Icon: Rocket,     label: m.solutionsMenu.startups,     desc: m.solutionsMenu.startupsDesc },
            { Icon: Scale,      label: m.solutionsMenu.lawyers,      desc: m.solutionsMenu.lawyersDesc },
          ],
        },
        {
          header: m.solutionsMenu.col2,
          items: [
            { Icon: User,       label: m.solutionsMenu.individuals, desc: null },
            { Icon: Building2,  label: m.solutionsMenu.smb,         desc: null },
            { Icon: Building,   label: m.solutionsMenu.enterprise,  desc: null },
            { Icon: Heart,      label: m.solutionsMenu.government,  desc: null },
          ],
        },
        {
          header: m.solutionsMenu.col3,
          items: [
            { Icon: Code2,    label: m.solutionsMenu.tech,     desc: null },
            { Icon: Home,     label: m.solutionsMenu.property, desc: null },
            { Icon: Camera,   label: m.solutionsMenu.media,    desc: null },
            { Icon: CreditCard, label: m.solutionsMenu.finance, desc: null },
          ],
        },
      ],
    },
    {
      label: m.templates,
      columns: [
        {
          header: m.templatesMenu.col1,
          items: [
            { Icon: FileText,  label: m.templatesMenu.serviceGeneral, desc: null },
            { Icon: Briefcase, label: m.templatesMenu.freelance,       desc: null },
            { Icon: Building2, label: m.templatesMenu.founders,        desc: null },
            { Icon: Users,     label: m.templatesMenu.partnership,     desc: null },
          ],
        },
        {
          header: m.templatesMenu.col2,
          items: [
            { Icon: Home,      label: m.templatesMenu.rental,          desc: null },
            { Icon: Building,  label: m.templatesMenu.commercial,      desc: null },
            { Icon: FolderOpen,label: m.templatesMenu.assetManagement, desc: null },
          ],
        },
        {
          header: m.templatesMenu.col3,
          items: [
            { Icon: EyeOff,    label: m.templatesMenu.nda,             desc: null },
            { Icon: CreditCard,label: m.templatesMenu.loan,            desc: null },
            { Icon: UserCheck, label: m.templatesMenu.employment,      desc: null },
            { Icon: Scale,     label: m.templatesMenu.mediation,       desc: null },
          ],
        },
        {
          header: m.templatesMenu.col4,
          items: [
            { Icon: Film,      label: m.templatesMenu.photography,     desc: null },
            { Icon: Megaphone, label: m.templatesMenu.sponsored,       desc: null },
            { Icon: Camera,    label: m.templatesMenu.brand,           desc: null },
          ],
        },
      ],
      footer: m.templatesMenu.viewAll,
    },
    {
      label: m.resources,
      columns: [
        {
          header: m.resourcesMenu.col1,
          items: [
            { Icon: BookOpen,       label: m.resourcesMenu.guides,    desc: m.resourcesMenu.guidesDesc },
            { Icon: PlayCircle,     label: m.resourcesMenu.videos,    desc: m.resourcesMenu.videosDesc },
            { Icon: BookMarked,     label: m.resourcesMenu.blog,      desc: m.resourcesMenu.blogDesc },
            { Icon: GraduationCap, label: m.resourcesMenu.knowledge,  desc: m.resourcesMenu.knowledgeDesc },
          ],
        },
        {
          header: m.resourcesMenu.col2,
          items: [
            { Icon: HelpCircle,     label: m.resourcesMenu.faq,  desc: m.resourcesMenu.faqDesc },
            { Icon: MessageCircle,  label: m.resourcesMenu.chat, desc: m.resourcesMenu.chatDesc },
            { Icon: Phone,          label: m.resourcesMenu.call, desc: m.resourcesMenu.callDesc },
            { Icon: Terminal,       label: m.resourcesMenu.docs, desc: m.resourcesMenu.docsDesc },
          ],
        },
        {
          header: m.resourcesMenu.col3,
          items: [
            { Icon: GitBranch, label: m.resourcesMenu.github,   desc: null },
            { Icon: Webhook,   label: m.resourcesMenu.webhooks, desc: null },
          ],
        },
      ],
    },
    {
      label: m.company,
      columns: [
        {
          header: m.companyMenu.col1,
          items: [
            { Icon: Info,       label: m.companyMenu.about,   desc: m.companyMenu.aboutDesc },
            { Icon: Users2,     label: m.companyMenu.team,    desc: m.companyMenu.teamDesc },
            { Icon: Newspaper,  label: m.companyMenu.press,   desc: m.companyMenu.pressDesc },
            { Icon: Mail,       label: m.companyMenu.contact, desc: m.companyMenu.contactDesc },
          ],
        },
        {
          header: m.companyMenu.col2,
          items: [
            { Icon: CheckSquare, label: m.companyMenu.terms,      desc: null },
            { Icon: Lock,        label: m.companyMenu.privacy,    desc: null },
            { Icon: ShieldAlert, label: m.companyMenu.security,   desc: null },
            { Icon: ShieldCheck, label: m.companyMenu.compliance, desc: null },
          ],
        },
      ],
    },
  ];
}

/* ─── Dropdown panel ─── */
function DropdownPanel({ item, isRtl }: { item: ReturnType<typeof useMenuConfig>[0]; isRtl: boolean }) {
  // Generate URL slug from label
  const getHref = (label: string, parentLabel: string) => {
    const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    return `/service/${slugify(parentLabel)}/${slugify(label)}`;
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white z-50 shadow-xl border-t border-gray-100"
      style={{ minWidth: 700 }}>
      <div className="max-w-7xl mx-auto px-8 py-7">
        <div className={`flex gap-8 ${isRtl ? "flex-row-reverse" : ""}`}>
          {item.columns.map((col, ci) => (
            <div key={ci} className="flex-1 min-w-0">
              <p className="text-xs font-black uppercase tracking-widest mb-4 pb-2 border-b border-gray-100"
                style={{ color: "#9CA3AF" }}>{col.header}</p>
              <div className="flex flex-col gap-1">
                {col.items.map((it, ii) => (
                  <a key={ii} href={getHref(it.label, item.label)}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
                    style={{ textDecoration: "none" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                      style={{ background: "#EEF2FF" }}>
                      <it.Icon size={17} color="#4F46E5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold transition-colors" style={{ color: "#1E1B4B" }}>{it.label}</p>
                      {it.desc && <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#9CA3AF" }}>{it.desc}</p>}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {(item as any).footer && (
          <div className="mt-5 pt-4 border-t border-gray-100">
            <a href={`/${item.label.toLowerCase()}`} className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "#4F46E5" }}>
              {(item as any).footer}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Language switcher ─── */
function LangSwitcher() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const langs: Lang[] = ["he", "en", "ar"];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
        style={{ color: "#374151" }}>
        <Globe size={18} strokeWidth={1.75} />
        <span className="text-sm font-medium hidden md:block">{t.lang[lang]}</span>
        <ChevronDown size={14} strokeWidth={2} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden z-50"
            style={{ width: 160, border: "1px solid #E5E7EB", insetInlineEnd: 0 }}>
            {langs.map(l => (
              <button key={l} onClick={() => { setLang(l); setOpen(false); }}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-indigo-50 transition-colors"
                style={{ color: lang === l ? "#4F46E5" : "#374151", fontWeight: lang === l ? 700 : 400, textAlign: "start" }}>
                <span>{t.lang[l]}</span>
                {lang === l && <Check size={14} color="#4F46E5" strokeWidth={2.5} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function NavbarWiz() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menu = useMenuConfig(t);
  const isRtl = t.dir === "rtl";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(i);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: 68, direction: t.dir }}>
          {isRtl && <style>{`nav { direction: rtl; } nav > * { direction: rtl; }`}</style>}

          {/* Logo */}
          <a href="/" className="flex-shrink-0 text-xl font-black select-none" style={{ color: "#4F46E5" }}>
            deal<span style={{ color: "#7C3AED" }}>|</span>awyer
          </a>

          {/* Desktop nav items with dropdowns */}
          <div className="hidden lg:flex items-center gap-1">
            {menu.map((item, i) => (
              <div key={i} className="relative"
                onMouseEnter={() => openDropdown(i)}
                onMouseLeave={scheduleClose}>
                <button
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${open === i ? "bg-indigo-50 text-[#4F46E5]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
                  {item.label}
                  <ChevronDown size={13} strokeWidth={2.5}
                    className={`transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => openDropdown(i)}
                      onMouseLeave={scheduleClose}
                      style={{ position: "fixed", top: 68, left: 0, right: 0, zIndex: 100 }}>
                      <DropdownPanel item={item} isRtl={isRtl} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Pricing (no dropdown) */}
            <a href="/pricing" className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all">
              {t.nav.pricing}
            </a>
          </div>

          {/* Right: Lang + CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <LangSwitcher />
            <a href="/contact" className="px-4 py-2.5 text-sm font-medium rounded-xl transition-colors hover:bg-gray-50"
              style={{ color: "#374151" }}>{t.nav.login}</a>
            <a href="/platform"
              className="btn-shimmer flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-all hover:opacity-90"
              style={{ background: "#2563EB", boxShadow: "0 2px 16px rgba(37,99,235,0.3)" }}>
              {t.nav.cta}
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile right: lang + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <LangSwitcher />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-xl hover:bg-gray-50"
              style={{ color: "#374151" }}>
              <div className="flex flex-col gap-1.5 w-5">
                {[0,1,2].map(i => (
                  <div key={i} className="h-0.5 rounded-full bg-gray-700 transition-all"
                    style={{
                      transform: mobileOpen && i === 0 ? "rotate(45deg) translateY(8px)" :
                                 mobileOpen && i === 2 ? "rotate(-45deg) translateY(-8px)" : "none",
                      opacity: mobileOpen && i === 1 ? 0 : 1,
                    }} />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100">
            <div className="px-6 py-5 flex flex-col gap-3">
              <a href="/platform" className="text-base font-medium py-2 text-gray-700 border-b border-gray-50">
                {t.nav.platform}
              </a>
              <a href="/solutions" className="text-base font-medium py-2 text-gray-700 border-b border-gray-50">
                {t.nav.solutions}
              </a>
              <a href="/templates" className="text-base font-medium py-2 text-gray-700 border-b border-gray-50">
                {t.nav.templates}
              </a>
              <a href="/pricing" className="text-base font-medium py-2 text-gray-700 border-b border-gray-50">
                {t.nav.pricing}
              </a>
              <a href="/resources" className="text-base font-medium py-2 text-gray-700 border-b border-gray-50">
                {t.nav.resources}
              </a>
              <a href="/about" className="text-base font-medium py-2 text-gray-700 border-b border-gray-50">
                {t.nav.company}
              </a>
              <div className="flex flex-col gap-2 pt-3">
                <a href="/contact" className="w-full py-3 text-center text-base font-semibold rounded-xl border border-gray-200 text-gray-700">{t.nav.login}</a>
                <a href="/platform" className="w-full py-3 text-center text-base font-bold text-white rounded-xl"
                  style={{ background: "#2563EB" }}>{t.nav.cta}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
