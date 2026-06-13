import { ArrowRight, CheckCircle, Zap, Shield, Users, Code, Bell, Globe, Rocket, TrendingUp, Handshake, BarChart3, LineChart, Gauge } from "lucide-react";
import NavbarWiz from "../../../components/NavbarWiz";
import CTA2 from "../../../home2/components/CTA2";
import Footer2 from "../../../home2/components/Footer2";
import { RichServiceTemplate } from "../../../components/RichServiceTemplate";
import { LexAIServicePageV2 } from "../../../components/LexAIServicePageV2";
import { DigitalSignatureServicePageV2 } from "../../../components/DigitalSignatureServicePageV2";
import { ContractManagementServicePageV2 } from "../../../components/ContractManagementServicePageV2";
import { FreelancersServicePage } from "../../../components/FreelancersServicePage";
import { AnalyticsServicePageV2 } from "../../../components/AnalyticsServicePageV2";
import { AlertsServicePageV2 } from "../../../components/AlertsServicePageV2";
import { AlertsServicePageV3 } from "../../../components/AlertsServicePageV3";
import { SecurityPrivacyServicePageV3 } from "../../../components/SecurityPrivacyServicePageV3";
import { InternationalContractsServicePageV2 } from "../../../components/InternationalContractsServicePageV2";
import { APIServicePageV3 } from "../../../components/APIServicePageV3";
import { IntegrationsServicePageV3 } from "../../../components/IntegrationsServicePageV3";
import { ClientManagementServicePageV2 } from "../../../components/ClientManagementServicePageV2";
import { TechDevelopmentServicePageV2 } from "../../../components/TechDevelopmentServicePageV2";
import { RealEstateConstructionServicePageV2 } from "../../../components/RealEstateConstructionServicePageV2";

export async function generateStaticParams() {
  return [
    // Platform
    { category: "platform", item: "lex-ai" },
    { category: "platform", item: "digital-signature" },
    { category: "platform", item: "contract-management" },
    { category: "platform", item: "client-management" },
    { category: "platform", item: "alerts" },
    { category: "platform", item: "security-privacy" },
    { category: "platform", item: "api" },
    { category: "platform", item: "integrations" },
    { category: "platform", item: "analytics" },
    { category: "platform", item: "international-contracts" },
    // Solutions
    { category: "solutions", item: "tech" },
    { category: "solutions", item: "property" },
    { category: "solutions", item: "freelancers-creators" },
    { category: "solutions", item: "property-owners" },
    { category: "solutions", item: "small-business-owners" },
    { category: "solutions", item: "contractors-tradespeople" },
    { category: "solutions", item: "entrepreneurs-startups" },
    { category: "solutions", item: "lawyers-consultants" },
    // Templates
    { category: "templates", item: "general-service-agreement" },
    { category: "templates", item: "freelance-contract" },
    { category: "templates", item: "founders-agreement" },
    { category: "templates", item: "business-partnership" },
    { category: "templates", item: "residential-rental" },
    { category: "templates", item: "commercial-lease" },
    { category: "templates", item: "nda-confidentiality" },
    { category: "templates", item: "loan-agreement" },
    { category: "templates", item: "employment-contract" },
    { category: "templates", item: "mediation-agreement" },
    // Resources
    { category: "resources", item: "user-guides" },
    { category: "resources", item: "tutorial-videos" },
    { category: "resources", item: "deallayer-blog" },
    { category: "resources", item: "legal-knowledge-base" },
    { category: "resources", item: "faq" },
    { category: "resources", item: "live-chat-support" },
    { category: "resources", item: "api-documentation" },
    // Company
    { category: "company", item: "blog" },
    { category: "company", item: "careers" },
    { category: "company", item: "investors" },
    { category: "company", item: "partners" },
  ];
}

const serviceContent: Record<string, any> = {
  "lex-ai": {
    title: "Lex AI",
    subtitle: "יצירת חוזים באמצעות AI",
    description: "צור חוזים מקצועיים תוך דקות עם AI יצירתי המבין את המשפט הישראלי.",
    icon: Zap,
    color: "#4F46E5",
    stats: [
      { label: "חוזים ליום", value: "2,500+", icon: BarChart3 },
      { label: "דיוק משפטי", value: "99.9%", icon: Gauge },
      { label: "זמן חיסכון", value: "80%", icon: TrendingUp }
    ],
    features: [
      "שיחה טבעית ללא זרחון משפטי",
      "ניתוח סיכונים אוטומטי וביקורת עמידה בתקנות",
      "29+ תבניות מותאמות לחוק ישראלי",
      "הצעות וחיזויים בזמן אמת",
      "יצירת PDF מיידית",
      "דירוג איכות החוזה"
    ],
    benefits: [
      { title: "2 דקות בממוצע", desc: "יצור חוזה בשיחה אחת עם AI" },
      { title: "100% משפטי", desc: "עמידה מלאה בחוק החוזים הישראלי" },
      { title: "AI חכם", desc: "לומד מההעדפות שלך לאורך הזמן" }
    ]
  },
  "digital-signature": {
    title: "חתימה דיגיטלית",
    subtitle: "חתימות אלקטרוניות מחייבות משפטית",
    description: "שלח חוזים לחתימה דרך WhatsApp, SMS או אימייל. כולל ביקורת מלאה.",
    icon: Shield,
    color: "#059669",
    stats: [
      { label: "קצב חתימה", value: "15 שניות", icon: TrendingUp },
      { label: "עמידה חוקית", value: "100%", icon: Shield },
      { label: "מקבלים מרובים", value: "אינסופי", icon: Users }
    ],
    features: [
      "חתימות דיגיטליות מחייבות משפטית",
      "רישום ביקורת מלא עם IP וחותמת זמן",
      "חוויית חתימה ידידותית לנייד",
      "תמיכה במקבלים מרובים",
      "התראות תזכורת אוטומטיות",
      "אישורי אמת חתימה"
    ],
    benefits: [
      { title: "90% יותר מהר", desc: "מקבלים חותמים מהנייד תוך שניות" },
      { title: "מוכן לבית משפט", desc: "ניתן להגנה בבתי משפט ישראליים" },
      { title: "ללא מורכבות", desc: "לא צריך תוכנה מיוחדת לחתימה" }
    ]
  },
  "contract-management": {
    title: "ניהול חוזים",
    subtitle: "לוח בקרה מרכזי לכל העסקאות",
    description: "עקוב אחר סטטוס כל חוזה בזמן אמת. דע מי חתם, מה עדיין ממתין ומתי הוא פוקע.",
    icon: Users,
    color: "#7C3AED",
    stats: [
      { label: "חוזים שנוראים", value: "50,000+", icon: BarChart3 },
      { label: "זמן חיפוש", value: "< 1 שניה", icon: Gauge },
      { label: "בקרות אוטומטיות", value: "24/7", icon: TrendingUp }
    ],
    features: [
      "עקיבה אחר סטטוס חוזים בזמן אמת",
      "סנונים וחיפוש חכמים",
      "התראות תאריך פקיעה",
      "ארגון ברמת הלקוח",
      "ארכיון ורקורדים היסטוריים",
      "ייצוא בתפזורת ל-Excel/PDF"
    ],
    benefits: [
      { title: "מקור אמת יחיד", desc: "כל החוזים במקום אחד" },
      { title: "אל תשכח מועד", desc: "התראות אוטומטיות על פקיעה" },
      { title: "תצוגת לקוח", desc: "ראה את כל העסקאות עם כל לקוח מיד" }
    ]
  },
  "client-management": {
    title: "ניהול לקוחות",
    subtitle: "CRM פשוט ליחסי חוזים",
    description: "שמור על כל פרטי הלקוח מסודרים. עקוב אחרי כל עסקה, תנאי תשלום והיסטוריית חוזים.",
    icon: Users,
    color: "#DB2777",
    stats: [
      { label: "נתונים לקוח", value: "סנכרון חי", icon: Gauge },
      { label: "היסטוריית עסקאות", value: "מלא", icon: LineChart },
      { label: "עמידות נתונים", value: "99.99%", icon: Shield }
    ],
    features: [
      "פרופילי לקוח ופרטי יצירת קשר",
      "היסטוריית עסקאות לכל לקוח",
      "עקיבה אחר ערך עסקה",
      "הערות תנאי תשלום",
      "העדפות יצירת קשר",
      "ייצוא רשימות לקוחות"
    ],
    benefits: [
      { title: "גישה מהירה", desc: "מצא את פרטי הלקוח כל שניה" },
      { title: "עקיבה היסטורית", desc: "ראה את כל העסקאות הקודמות בלחיצה" },
      { title: "תצוגת קשר", desc: "הבין את שווי כל לקוח" }
    ]
  },
  "alerts": {
    title: "התראות חכמות",
    subtitle: "קבל התראה כשחשוב",
    description: "הודעות SMS ו-Push שמודיעות לך על כל חתימה, מועד ושינוי סטטוס.",
    icon: Bell,
    color: "#F59E0B",
    stats: [
      { label: "בדיקות ביום", value: "10,000+", icon: TrendingUp },
      { label: "דיוק", value: "100%", icon: Gauge },
      { label: "פיגור", value: "< 1 שניה", icon: Zap }
    ],
    features: [
      "הודעות SMS ו-Push",
      "התראות חתימה בזמן אמת",
      "תזכורים מועדים",
      "כללי התראה מותאמים",
      "תמיכה ברמות התקן מרובות",
      "תזמון 'אל תשדר' אוטומטי"
    ],
    benefits: [
      { title: "אל תפספס חתימה", desc: "קבל התראה מיידית כשמישהו חותם" },
      { title: "הגנה על מועדים", desc: "לעולם אל תשכח חוזה שפוקע" },
      { title: "תמיד בשליטה", desc: "התאם אילו התראות אתה מקבל" }
    ]
  },
  "security-privacy": {
    title: "אבטחה ופרטיות",
    subtitle: "הגנה ברמת ארגון",
    description: "הנתונים שלך מוגנים בהצפנה ברמת בנק, אימות דו-שלבי, והסמכות תאימות.",
    icon: Shield,
    color: "#DC2626",
    stats: [
      { label: "תקן הצפנה", value: "AES-256", icon: Shield },
      { title: "הסמכות", value: "ISO 27001", icon: CheckCircle },
      { label: "התקפות מונעות", value: "100%", icon: Gauge }
    ],
    features: [
      "הצפנת SSL/TLS בעברת נתונים",
      "הצפנת AES-256 במנוחה",
      "אימות דו-שלבי (2FA)",
      "מוסמך ISO 27001",
      "עמידה ב-SOC 2 Type II",
      "עמידה ב-GDPR"
    ],
    benefits: [
      { title: "אבטחת בנקים", desc: "אותה הצפנה כמו במוסדות פיננסיים" },
      { title: "מוכן לעמידה בתקנות", desc: "עמוד בדרישות רגולטוריות מיד" },
      { title: "הנתונים שלך, השליטה שלך", desc: "אפס שיתוף עם צדדים שלישיים" }
    ]
  },
  "api": {
    title: "גישת API",
    subtitle: "בנה אינטגרציות מותאמות",
    description: "API מלא למפתחים לבניית תזרימי עבודה מותאמים ואינטגרציות עם מערכות קיימות.",
    icon: Code,
    color: "#0891B2",
    stats: [
      { label: "דרישות ליום", value: "1M+", icon: BarChart3 },
      { label: "SLA", value: "99.99%", icon: Shield },
      { label: "תיעוד", value: "מלא", icon: Code }
    ],
    features: [
      "REST API עם תיעוד מלא",
      "תמיכה ב-Webhook לאירועים",
      "הגבלת קצב והרחבה",
      "אימות OAuth 2.0",
      "סביבת sandbox",
      "לוח בקרה מפתחים"
    ],
    benefits: [
      { title: "שליטה מלאה", desc: "בטל בדיוק את מה שצריך" },
      { title: "סנכרון בזמן אמת", desc: "Webhooks שומרים מערכות מסונכרנות מיד" },
      { title: "קנה מידה ארגוני", desc: "טופל עם אלפי חוזים ביום" }
    ]
  },
  "integrations": {
    title: "אינטגרציות",
    subtitle: "חבר ל-20+ כלים",
    description: "חבר את DealLayer ל-WhatsApp, Gmail, Zapier ועוד. שמור הכל מסונכרן.",
    icon: Globe,
    color: "#06B6D4",
    stats: [
      { label: "אינטגרציות", value: "20+", icon: Globe },
      { label: "סנכרון", value: "real-time", icon: TrendingUp },
      { label: "כישלונות", value: "0%", icon: CheckCircle }
    ],
    features: [
      "אינטגרציה WhatsApp Business",
      "סנכרון Gmail ו-Outlook",
      "אוטומציית Zapier",
      "הודעות Slack",
      "אחסון Google Drive",
      "20+ אינטגרציות מובנות"
    ],
    benefits: [
      { title: "זרימת עבודה חלקה", desc: "משתמש בכלים שכבר מכיר" },
      { title: "אוטומציה", desc: "הפחת עבודה ידנית ב-80%" },
      { title: "אל תחליף", desc: "הישאר ביישומים האהובים עליך" }
    ]
  },
  "blog": {
    title: "בלוג DealLayer",
    subtitle: "תובנות ועדכונים",
    description: "הישאר מעודכן עם טיפים אחרונים, מגמות חוזים ושיטות אופטימליות לניהול עסקאות.",
    icon: Zap,
    color: "#7C3AED",
    stats: [
      { label: "מאמרים בשנה", value: "52+", icon: BarChart3 },
      { label: "קוראים", value: "10,000+", icon: Users },
      { label: "ממוצע קריאה", value: "8 דק'", icon: TrendingUp }
    ],
    features: [
      "מאמרים שבועיים על ניהול חוזים",
      "שיטות אופטימליות ומקרי מבחן",
      "חדשות וטרנדים בתעשייה",
      "תובנות מומחים מהצוות שלנו",
      "מדריכים הניתנים להורדה בחינם",
      "הרשמה לניוזלטר בדוא״ל"
    ],
    benefits: [
      { title: "הישאר מעודכן", desc: "קבל טיפים אחרונים על ניהול חוזים" },
      { title: "למד מחומרים מומחים", desc: "אסטרטגיות בעולם האמת וממארות אופטימליות" },
      { title: "גדל את העסק שלך", desc: "יישם טכניקות מוכחות בעבודתך" }
    ]
  },
  "careers": {
    title: "קריירה ב-DealLayer",
    subtitle: "הצטרף לצוות שלנו",
    description: "אנחנו משכרים אנשים מוכשרים שרוצים להחולל מהפכה בניהול חוזים. בנה קריירה איתנו.",
    icon: Rocket,
    color: "#F59E0B",
    stats: [
      { label: "מעמדות פתוחות", value: "10+", icon: Users },
      { label: "צוות גלובלי", value: "50+", icon: Globe },
      { label: "צמיחה שנתית", value: "40%", icon: TrendingUp }
    ],
    features: [
      "שכר ותנאים תחרותיים",
      "סביבת עבודה ידידותית לעבודה מרחוק",
      "תקציב פיתוח מקצועי",
      "ביטוח בריאות ותוכניות כושר",
      "שעות עבודה גמישות",
      "פיצוי בדיוק מניות"
    ],
    benefits: [
      { title: "גדל איתנו", desc: "עבוד על מוצר המשמש אלפים" },
      { title: "תרבות מעולה", desc: "צוות שיתופי ותומך" },
      { title: "הנח השפעה", desc: "עזור לעסקים לנהל חוזים בצורה טובה יותר" }
    ]
  },
  "investors": {
    title: "למשקיעים",
    subtitle: "הזדמנות השקעה",
    description: "DealLayer גורפת הון להאיץ גדילה. דע עוד על סבבי הממון שלנו והחזון שלנו.",
    icon: TrendingUp,
    color: "#DC2626",
    stats: [
      { label: "MRR", value: "$2M+", icon: TrendingUp },
      { label: "חודשי גדילה", value: "15%", icon: BarChart3 },
      { label: "עמל", value: "ירוק", icon: Gauge }
    ],
    features: [
      "סבב Series A פתוח",
      "ביקוש שוק מוכח וגדילה",
      "צוות מייסדים מנוסה",
      "נתיב ברור לרווחיות",
      "שותפויות אסטרטגיות בעמדה",
      "תוכניות הרחבה בינלאומית"
    ],
    benefits: [
      { title: "שוק גדל", desc: "ניהול חוזים הוא TAM של 20B+" },
      { title: "כלכלת יחידות חזקה", desc: "שמירה גבוהה וגדילת MRR נטו" },
      { title: "מנהיג שוק", desc: "ראשון בעברית, מתרחב לעולם" }
    ]
  },
  "partners": {
    title: "היו שותף",
    subtitle: "הזדמנויות שותפות",
    description: "בנה את העסק שלך עם DealLayer. מכור מחדש, בצע אינטגרציה או שיווק משותף איתנו.",
    icon: Handshake,
    color: "#10B981",
    stats: [
      { label: "שותפים", value: "100+", icon: Users },
      { label: "פוטנציאל הכנסה", value: "$100K+", icon: TrendingUp },
      { label: "תמיכה", value: "24/7", icon: Globe }
    ],
    features: [
      "תוכנית שותפות מחדש מכרה",
      "שותפויות אינטגרציה עם פלטפורמות",
      "הזדמנויות שיווק משותף",
      "תמיכת שותף ייעודית",
      "מבנה עמלה תחרותי",
      "פורטל שותף ומשאבים"
    ],
    benefits: [
      { title: "זרם הכנסות חדש", desc: "הרוויח עמלות על כל עסקה" },
      { title: "פתרון מהימן", desc: "הוסף ערך לבסיס הלקוחות שלך" },
      { title: "תמיכה מלאה", desc: "צוות הצלחת שותפים מוכן לעזור" }
    ]
  }
};

const decodeSlug = (slug: string) => {
  return slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};

export default async function ServicePage({ params }: any) {
  const resolvedParams = await params;
  const { category, item } = resolvedParams;

  const content = serviceContent[item] || {
    title: decodeSlug(item),
    subtitle: "שירות פרימיום",
    description: "פתרון מקצועי שעוצב להצלחתך.",
    icon: Zap,
    color: "#4F46E5",
    stats: [
      { label: "יתרון 1", value: "מעולה", icon: Gauge },
      { label: "יתרון 2", value: "מעולה", icon: Gauge },
      { label: "יתרון 3", value: "מעולה", icon: Gauge }
    ],
    features: ["תכונה 1", "תכונה 2", "תכונה 3", "תכונה 4"],
    benefits: [
      { title: "יתרון 1", desc: "תיאור היתרון" },
      { title: "יתרון 2", desc: "תיאור היתרון" },
      { title: "יתרון 3", desc: "תיאור היתרון" }
    ]
  };

  const Icon = content.icon;
  const categoryTitle = decodeSlug(category);

  // Special handling for unique professional pages
  if (item === "lex-ai") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <LexAIServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "digital-signature") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <DigitalSignatureServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "contract-management") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <ContractManagementServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "tech") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <TechDevelopmentServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "property") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <RealEstateConstructionServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "freelancers-creators") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <FreelancersServicePage />
          <CTA2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "analytics") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <AnalyticsServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "alerts") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <AlertsServicePageV3 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "security-privacy") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <SecurityPrivacyServicePageV3 />
        </main>
        <Footer2 />
      </>
    );
  }


  if (item === "international-contracts") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <InternationalContractsServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "api") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <APIServicePageV3 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "integrations") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <IntegrationsServicePageV3 />
        </main>
        <Footer2 />
      </>
    );
  }

  if (item === "client-management") {
    return (
      <>
        <NavbarWiz />
        <main className="mt-16">
          <ClientManagementServicePageV2 />
        </main>
        <Footer2 />
      </>
    );
  }

  return (
    <>
      <NavbarWiz />
      <main>
        {/* Rich Hero Section with Stats */}
        <section className="py-20 md:py-36 relative overflow-hidden bg-white mt-16" style={{ direction: "rtl" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
              style={{ background: `radial-gradient(circle, ${content.color}40 0%, transparent 70%)` }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ background: `radial-gradient(circle, ${content.color}20 0%, transparent 70%)` }} />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${content.color}20` }}>
                <Icon size={24} color={content.color} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: content.color }}>
                {categoryTitle}
              </p>
            </div>

            <h1 className="font-black leading-tight mb-4 text-right" style={{ fontSize: "clamp(44px, 6vw, 72px)", color: "#1E1B4B" }}>
              {content.title}
            </h1>

            <p className="text-xl font-semibold mb-6 text-right" style={{ color: content.color }}>
              {content.subtitle}
            </p>

            <p className="text-lg leading-relaxed mb-10 max-w-2xl text-right" style={{ color: "#6B7280" }}>
              {content.description}
            </p>

            <button className="btn-shimmer flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-white"
              style={{ background: content.color }}>
              <ArrowRight size={20} /> התחל ניסיון חינם
            </button>
          </div>

          {/* Stats Row */}
          <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.stats.map((stat: any, i: number) => {
              const StatIcon = stat.icon || Gauge;
              return (
                <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-2">
                    <StatIcon size={20} color={content.color} />
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-black" style={{ color: content.color }}>{stat.value}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="font-black text-center mb-16 text-right" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
              למה לבחור בתכונה זו?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.benefits.map((benefit: any, i: number) => (
                <div key={i} className="rounded-3xl p-8 bg-white text-center" style={{ border: "1.5px solid #E5E7EB" }}>
                  <h3 className="font-black text-2xl mb-3" style={{ color: content.color }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: "#6B7280" }}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="font-black text-center mb-16" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
              תכונות עיקריות
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature: string, i: number) => (
                <div key={i} className="rounded-2xl p-6 flex gap-4 bg-white text-right" style={{ border: "1.5px solid #E5E7EB" }}>
                  <p className="font-semibold text-lg" style={{ color: "#1E1B4B" }}>
                    {feature}
                  </p>
                  <CheckCircle size={24} color={content.color} className="flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
