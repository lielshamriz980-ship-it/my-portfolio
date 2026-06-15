export type Lang = "he" | "en" | "ar";

export type T = {
  dir: "rtl" | "ltr";
  lang: { he: string; en: string; ar: string };
  nav: {
    platform: string; solutions: string; templates: string;
    pricing: string; resources: string; company: string;
    cta: string; login: string; back: string;
    platformMenu: {
      col1: string; col2: string; col3: string;
      lexAI: string; lexAIDesc: string;
      sign: string; signDesc: string;
      manage: string; manageDesc: string;
      clients: string; clientsDesc: string;
      alerts: string; alertsDesc: string;
      security: string; securityDesc: string;
      api: string; apiDesc: string;
      integrations: string; integrationsDesc: string;
      analytics: string; analyticsDesc: string;
      international: string; internationalDesc: string;
    };
    solutionsMenu: {
      col1: string; col2: string; col3: string;
      freelancers: string; freelancersDesc: string;
      realestate: string; realestateDesc: string;
      business: string; businessDesc: string;
      contractors: string; contractorsDesc: string;
      startups: string; startupsDesc: string;
      lawyers: string; lawyersDesc: string;
      individuals: string; smb: string; enterprise: string; government: string;
      tech: string; property: string; media: string; finance: string;
    };
    templatesMenu: {
      col1: string; col2: string; col3: string; col4: string;
      serviceGeneral: string; freelance: string; founders: string; partnership: string;
      rental: string; commercial: string; assetManagement: string;
      nda: string; loan: string; employment: string; mediation: string;
      photography: string; sponsored: string; brand: string;
      viewAll: string;
    };
    resourcesMenu: {
      col1: string; col2: string; col3: string;
      guides: string; guidesDesc: string;
      videos: string; videosDesc: string;
      blog: string; blogDesc: string;
      knowledge: string; knowledgeDesc: string;
      faq: string; faqDesc: string;
      chat: string; chatDesc: string;
      call: string; callDesc: string;
      docs: string; docsDesc: string;
      github: string; webhooks: string;
    };
    companyMenu: {
      col1: string; col2: string; col3: string;
      about: string; aboutDesc: string;
      team: string; teamDesc: string;
      press: string; pressDesc: string;
      contact: string; contactDesc: string;
      blog: string; blogDesc: string;
      careers: string; careersDesc: string;
      investors: string; investorsDesc: string;
      partners: string; partnersDesc: string;
      terms: string; privacy: string; security: string; compliance: string;
    };
  };
  hero: {
    badge: string; line1: string; line2: string;
    morph: string[]; sub: string;
    cta1: string; cta2: string; trust: string[];
    dashboard: {
      title: string;
      newButton: string;
      contracts: { name: string; date: string; status: string }[];
      statusColors: Record<string, { color: string; bg: string }>;
    };
  };
  trustbar: { label: string; items: string[] };
  pain: {
    badge: string; heading: string; accent: string;
    s1: string; l1: string; b1: string;
    s2: string; l2: string; b2: string;
    s3: string; l3: string; b3: string;
  };
  features: {
    badge: string; heading: string;
    t1: string; t2: string; t3: string;
    h1: string; h2: string; h3: string;
    s1: string; s2: string; s3: string;
    f1: string[]; f2: string[]; f3: string[];
    learnMore: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    items: {
      text: string;
      name: string;
      role: string;
      platform: string;
    }[];
  };
  stats: { heading: string; l1: string; l2: string; l3: string; l4: string; s1: string; s2: string; s3: string; s4: string; statDisplay: string };
  cta: { heading: string; accent: string; sub: string; btn: string; trust: string[] };
  footer: { tagline: string; product: string; resources: string; company: string; rights: string; footerLinks: { product: string[]; resources: string[]; company: string[] }; country: string };
  // Platform page
  platform: {
    badge: string; h1: string; sub: string; cta: string;
    featureGridHeading: string;
    features: { title: string; desc: string }[];
    integrations: { name: string; desc: string }[];
    integrationsHeading: string; integrationsSub: string; integrationsReq: string;
    security: { title: string; desc: string }[];
    securityHeading: string; securitySub: string; securitySpecial: string;
    certifications: string[];
    comparisonHeading: string; comparisonSub: string;
    comparison: { feature: string; deallayer: boolean; competitors: boolean }[];
  };
  // Pricing page
  pricing: {
    badge: string; h1: string; sub: string;
    monthly: string; annual: string; save: string;
    yearSuffix: string;
    plans: {
      name: string; desc: string; price: number | null; note: string; cta: string;
      features: { text: string; included: boolean }[];
    }[];
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
  // Solutions page
  solutions: {
    badge: string; h1: string; sub: string;
    byRole: string;
    roles: { title: string; desc: string; highlights: string[] }[];
    sizes: { title: string; desc: string; badge: string }[];
    industries: { title: string; desc: string; sectors: string[] }[];
  };
  // Templates page
  templates: {
    badge: string; h1: string; sub: string;
    categories: {
      name: string;
      templates: { name: string }[];
    }[];
    viewAll: string;
    suggest: string;
  };
  // Resources page
  resources: {
    badge: string; h1: string; sub: string;
    sections: {
      title: string;
      resources: { label: string; desc: string; count: string }[];
    }[];
  };
  // About page
  about: {
    badge: string; h1: string; sub: string;
    story: { heading: string; p1: string; p2: string };
    values: { title: string; desc: string }[];
    milestones: { year: string; title: string; desc: string }[];
  };
  // Team page
  team: {
    badge: string; h1: string; sub: string;
    members: { name: string; role: string; bio: string }[];
  };
  // Contact page
  contact: {
    badge: string; h1: string; sub: string;
    methods: { label: string; value: string }[];
    responseTime: string;
    form: {
      name: string; email: string; subject: string; message: string;
      placeholder: { name: string; email: string; subject: string; message: string };
      submit: string;
    };
  };
  // Service Pages
  servicePages: {
    techDevelopment: {
      hero: { title: string; subtitle: string; cta1: string; cta2: string };
      painPoints: { heading: string; items: { title: string; desc: string }[] };
      solutions: { heading: string; description: string; benefits?: string[]; steps?: { num: number; label: string; status: string }[]; docName?: string; docStatus?: string; docMeta?: { sent: string; id: string }; docMeta_labels?: { sent: string; label_step: string; label_complete: string; label_inprogress: string; label_pending: string } }[];
      templatesHeading: string;
      templates: { title: string; desc: string; iconType: string }[];
      benefits: { num: string; title: string; desc: string }[];
      cta: { heading: string; button1: string; button2: string };
    };
  };
};

const he: T = {
  dir: "rtl",
  lang: { he: "עברית", en: "English", ar: "العربية" },
  nav: {
    platform: "פלטפורמה", solutions: "פתרונות", templates: "תבניות",
    pricing: "תמחור", resources: "משאבים", company: "חברה",
    cta: "קבל הדגמה", login: "כניסה", back: "חזור",
    platformMenu: {
      col1: "כלי הליבה", col2: "כלים מתקדמים", col3: "בקרוב",
      lexAI: "Lex AI", lexAIDesc: "יצור חוזה מקצועי בשיחה עם AI תוך 2 דקות",
      sign: "חתימה דיגיטלית", signDesc: "חתימה מחייבת עם תיעוד משפטי מלא",
      manage: "ניהול חוזים", manageDesc: "דשבורד לכל העסקאות שלך בזמן אמת",
      clients: "ניהול לקוחות", clientsDesc: "CRM פשוט - כל לקוח עם היסטוריית עסקאות",
      alerts: "התראות", alertsDesc: "SMS ו-Push Notification כשחוזה נחתם",
      security: "אבטחה ופרטיות", securityDesc: "SSL, אימות דו-שלבי, הצפנה מלאה",
      api: "API", apiDesc: "חבר את DealLayer למערכות הקיימות שלך",
      integrations: "אינטגרציות", integrationsDesc: "WhatsApp, Gmail, Zapier ועוד 20+",
      analytics: "Analytics", analyticsDesc: "דוחות ותובנות עסקיות על העסקאות",
      international: "חוזים בינלאומיים", internationalDesc: "תמיכה בחוקים של מדינות נוספות",
    },
    solutionsMenu: {
      col1: "לפי תפקיד", col2: "לפי גודל", col3: "לפי תחום",
      freelancers: "פרילנסרים ויוצרים", freelancersDesc: "הגן על הזכויות שלך, קבל תשלום בזמן",
      realestate: "משכירי נכסים", realestateDesc: "חוזי שכירות מקצועיים ומעודכנים לחוק",
      business: "בעלי עסקים קטנים", businessDesc: "כל עסקה מוגנת, כל לקוח מסודר",
      contractors: "קבלנים ובעלי מקצוע", contractorsDesc: "חוזה ברור לכל פרויקט עם תשלום שלבי",
      startups: "יזמים וסטארטאפים", startupsDesc: "הסכמי מייסדים, NDA, הסכמי שותפות",
      lawyers: "עורכי דין ויועצים", lawyersDesc: "כלים לניהול הסכמים עם לקוחות",
      individuals: "יחידים ועצמאים", smb: "עסקים קטנים-בינוניים",
      enterprise: "ארגונים גדולים", government: "ממשלה ומוסדות ציבוריים",
      tech: "טכנולוגיה ופיתוח", property: "נדל״ן ובנייה",
      media: "מדיה ואירועים", finance: "פיננסים ומימון",
    },
    templatesMenu: {
      col1: "שירות ועסקים", col2: "נדל״ן", col3: "משפטי וכספי", col4: "מדיה ויצירה",
      serviceGeneral: "הסכם שירות כללי", freelance: "חוזה פרילנס",
      founders: "הסכם מייסדים", partnership: "הסכם שותפות עסקית",
      rental: "חוזה שכירות דירה", commercial: "הסכם מסחרי",
      assetManagement: "הסכם ניהול נכסים",
      nda: "הסכם NDA סודיות", loan: "הסכם הלוואה",
      employment: "חוזה עבודה שכיר", mediation: "הסכם גישור",
      photography: "הסכם צילום ווידאו", sponsored: "הסכם תוכן ממומן",
      brand: "הסכם שגרירות מותג",
      viewAll: "ראה את כל 29+ התבניות →",
    },
    resourcesMenu: {
      col1: "למד", col2: "עזרה ותמיכה", col3: "מפתחים",
      guides: "מדריכי שימוש", guidesDesc: "איך להפיק את המקסימום מ-DealLayer",
      videos: "סרטוני הדרכה", videosDesc: "למד ויזואלית עם מדריכים קצרים",
      blog: "בלוג DealLayer", blogDesc: "עדכונים, טיפים, ומגמות בעולם החוזים",
      knowledge: "מרכז ידע משפטי", knowledgeDesc: "מאמרים על חוק חוזים ישראלי",
      faq: "שאלות נפוצות", faqDesc: "תשובות לשאלות הנפוצות ביותר",
      chat: "צ'אט תמיכה חי", chatDesc: "עונים תוך דקות בעברית",
      call: "שיחה עם מומחה", callDesc: "קבל עזרה אישית מהצוות שלנו",
      docs: "תיעוד API", docsDesc: "Docs מלאים לפיתוח אינטגרציות",
      github: "GitHub", webhooks: "Webhooks",
    },
    companyMenu: {
      col1: "DealLayer", col2: "מדיניות", col3: "צמיחה",
      about: "אודות", aboutDesc: "הסיפור שלנו, המשימה, והחזון",
      team: "הצוות", teamDesc: "הכירו את האנשים מאחורי DealLayer",
      press: "עיתונות ומדיה", pressDesc: "כתבות, לוגואים, ומשאבי מדיה",
      contact: "צרו קשר", contactDesc: "נשמח לשמוע מכם",
      blog: "בלוג DealLayer", blogDesc: "טיפים, עדכונים, ותובנות שימושיות",
      careers: "קריירה", careersDesc: "הצטרפו לצוות שלנו",
      investors: "משקיעים", investorsDesc: "פרטים לגבי סבב ההשקעות",
      partners: "שותפים", partnersDesc: "הפכו לשותף ב-DealLayer",
      terms: "תנאי שימוש", privacy: "מדיניות פרטיות",
      security: "דו״ח אבטחה", compliance: "תאימות ורגולציה",
    },
  },
  hero: {
    badge: "הגנה משפטית לכל עסק ישראלי",
    line1: "הגן על כל עסקה", line2: "שאתה בונה ומנהל",
    dashboard: {
      title: "החוזים שלי",
      newButton: "+ חוזה חדש",
      contracts: [
        { name: "הסכם פיתוח - StartupIL", date: "12.06.26", status: "חתום" },
        { name: "שכירות - רמת אביב", date: "10.06.26", status: "ממתין" },
        { name: "NDA - משקיע פוטנציאלי", date: "08.06.26", status: "חתום" },
        { name: "הסכם שותפות - TechVenture", date: "05.06.26", status: "ממתין" },
      ],
      statusColors: { "חתום": { color: "#10B981", bg: "#ECFDF5" }, "ממתין": { color: "#F59E0B", bg: "#FFFBEB" } },
    },
    morph: ["בדקות.", "ללא עורך דין.", "בוואטסאפ.", "בלי בירוקרטיה."],
    sub: "DealLayer מחברת בין החוזה, הלקוח, והחתימה - למערכת אחת חכמה. בלי עורכי דין, בלי המתנה.",
    cta1: "קבל הדגמה חינם", cta2: "ראה את הפלטפורמה",
    trust: ["ללא כרטיס אשראי", "3 חוזים ראשונים חינם", "מוכן ב-2 דקות"],
  },
  trustbar: { label: "בשימוש יומיומי על ידי אלפי ישראלים", items: ["פרילנסרים","משכירי נכסים","בעלי עסקים","יזמים","קבלנים","מאמנים","יועצים","צלמים","מפתחים","מעצבים"] },
  pain: {
    badge: "הבעיה האמיתית",
    heading: "עסקאות בלי חוזה הן הימור", accent: "על הכסף שלך",
    s1: "67%", l1: "מהעסקים הקטנים", b1: "חוו לפחות מחלוקת חוזית אחת בשנה האחרונה - כשלא היה להם מסמך שמגן עליהם.",
    s2: "₪12,000", l2: "עלות ניסוח חוזה אצל עו\"ד", b2: "DealLayer עושה את אותו הדבר - תוך 2 דקות, ב-0 עלות לחוזה הראשון.",
    s3: "89%", l3: "מהמחלוקות היו נמנעות", b3: "אם היה חוזה כתוב. הבעיה היא לא רצון טוב - אלא חוסר בתיעוד ברגע הנכון.",
  },
  features: {
    badge: "הפלטפורמה", heading: "הכל במקום אחד - חוזה, חתימה, ניהול",
    t1: "יצירה", t2: "חתימה", t3: "ניהול",
    h1: "חוזה מקצועי תוך 2 דקות עם Lex AI",
    h2: "חתימה דיגיטלית שמחייבת בבית המשפט",
    h3: "כל העסקאות שלך - מקום אחד, סדר מושלם",
    s1: "ספר ל-Lex על העסקה, הוא ישאל 4 שאלות ויכין חוזה שעומד בחוק הישראלי.",
    s2: "לינק ייחודי נשלח לוואטסאפ, הצד השני חותם מהמובייל, אתה מקבל התראה מיידית.",
    s3: "דשבורד חכם שמציג מצב כל חוזה בזמן אמת. מי חתם, מי ממתין, מה עומד לפוג.",
    f1: ["שיחה פשוטה - לא צריך ידע משפטי","ניתוח סיכונים וציון הגנה אוטומטי","29+ תבניות לכל תחום","עדכון שוטף לחוק הישראלי"],
    f2: ["שליחה ישירה לוואטסאפ או SMS","תיעוד IP, שעה, תאריך, ומספר טלפון","PDF חתום עם מספר אסמכתא","תקן חוק החתימה האלקטרונית"],
    f3: ["פילטור לפי סטטוס, לקוח, ותאריך","ניהול לקוחות עם היסטוריית עסקאות","התראות SMS כשחוזה עומד לפוג","ייצוא מלא ל-PDF ולאקסל"],
    learnMore: "למד עוד →",
  },
  testimonials: {
    badge: "ביקורות",
    heading: "ראה מה המשתמשים שלנו חושבים",
    items: [
      { text: "DealLayer שינתה לי את חיי כפרילנסרית. במקום לדאוג שלקוחות יכחישו הסכמות, עכשיו הכל מתועד ומוגן.", name: "נועה גולן", role: "מעצבת UX, פרילנסרית", platform: "G2" },
      { text: "ניסיתי כמה פתרונות לפני, אבל DealLayer היא הפעם הראשונה שמשהו פשוט עובד. 2 דקות לחוזה מקצועי.", name: "אלון בן-דוד", role: "יזם, מייסד StartupIL", platform: "G2" },
      { text: "כמשכיר דירות, לא הייתי מדמיין שאוכל לנהל 6 חוזי שכירות בלי עורך דין. DealLayer עשתה את זה אפשרי.", name: "ד\"ר משה לוי", role: "משקיע נדל\"ן", platform: "PeerSpot" },
      { text: "Lex AI מבין מה אני צריך לפני שאני מסיים לנסח. החוזה שיוצא מוכן, מקצועי, ועומד בחוק.", name: "מאיה שמחי", role: "מאמנת עסקית", platform: "G2" },
      { text: "קבלן שיפוצים כמוני לא מצפה לפתרון כזה פשוט. עכשיו כל פרויקט מתחיל עם חוזה - ואין ויכוחים בסוף.", name: "רועי אבן", role: "קבלן שיפוצים", platform: "PeerSpot" },
      { text: "ההתראה שמגיעה כשהלקוח חותם היא כזו הרגשה טובה. הכל אוטומטי, הכל מתועד. מומלץ בחום.", name: "שרה אדרי", role: "יועצת שיווק", platform: "G2" },
    ],
  },
  stats: {
    heading: "המספרים מדברים בעצמים",
    l1: "חוזים נחתמו", l2: "מהרעיון לחוזה", l3: "תבניות משפטיות", l4: "חוקי ומחייב",
    s1: "ועדיין סופרים", s2: "ממוצע עם Lex AI", s3: "מותאמות לחוק ישראלי", s4: "חוק החתימה האלקטרונית",
    statDisplay: "2 דקות",
  },
  cta: {
    heading: "מוכן לראות את", accent: "DealLayer בפעולה?",
    sub: "3 חוזים ראשונים חינם לגמרי. ללא כרטיס אשראי. ללא התחייבות.",
    btn: "קבל הדגמה", trust: ["ביטול בכל עת","ללא כרטיס אשראי","תמיכה בעברית"],
  },
  footer: { tagline: "חוזה חכם. הגנה אמיתית. בדקות.", product: "מוצר", resources: "משאבים", company: "חברה", rights: "כל הזכויות שמורות.", footerLinks: { product: ["התחל בחינם", "פיצ'רים", "תבניות", "תמחור", "Lex AI"], resources: ["מרכז עזרה", "שאלות נפוצות", "בלוג", "אבטחה"], company: ["אודות", "צרו קשר", "תנאי שימוש", "מדיניות פרטיות"] }, country: "ישראל" },

  // Platform
  platform: {
    badge: "כל מה שצריך בעמוד אחד",
    h1: "פלטפורמת DealLayer\nבכל הפרטים",
    sub: "מיצירה דרך חתימה ועד ניהול מלא - כל כלי מעוצב לתמיכה בעיסקותיך ולהגנה על הזכויות שלך.",
    cta: "התחל עכשיו",
    featureGridHeading: "כל הכלים שצריך בעמוד אחד",
    features: [
      { title: "Lex AI - סייען אינטליגנט", desc: "צ'אט בעברית, חוזה בדקות. AI שמבין את הדקויות של חוק ישראל." },
      { title: "חתימה דיגיטלית", desc: "וואטסאפ, SMS, לינק. חתימה מיידית עם תיעוד משפטי מלא." },
      { title: "ניהול חוזים", desc: "דשבורד שמציג כל עסקה בזמן אמת. מצב, אחסון, אליוטים." },
      { title: "ניהול לקוחות", desc: "CRM שעוקב אחרי כל לקוח, כל עסקה, כל תאריך. לא תשכחו שום דבר." },
      { title: "התראות חכמות", desc: "SMS וPush כשחוזה נחתם, כשמישהו בודק, כשעומד לפוג." },
      { title: "אבטחה ברמה ממשלתית", desc: "SSL, 2FA, הצפנה מלאה. מאובטח כמו בנק." },
      { title: "API גמיש", desc: "חבר DealLayer לאפליקציה שלך. WebHooks, REST, מלא תיעוד." },
      { title: "20+ אינטגרציות", desc: "WhatsApp, Gmail, Slack, Zapier, Make ועוד. אוטומציה מלאה." },
      { title: "Analytics", desc: "דוחות מפורטים על עסקאות, כנסות, זמני סגירה." },
      { title: "חוזים בינלאומיים", desc: "קרקע בישראל? אנחנו גם בתוכנית להרחבה לארצות נוספות." },
    ],
    integrations: [
      { name: "WhatsApp Business", desc: "שלח חוזים לחתימה ישירה ב-WA" },
      { name: "Gmail & Workspace", desc: "אחסן חוזים בשולחן העבודה שלך" },
      { name: "Zapier & Make", desc: "חבר לאלפי אפליקציות דרך Zapier" },
      { name: "Slack", desc: "קבל התראות ישירות לקנל" },
      { name: "Google Drive & OneDrive", desc: "גיבוי אוטומטי של כל חוזה" },
      { name: "Stripe & PayPal", desc: "סגור עסקה וקבל תשלום בצעד אחד" },
      { name: "HubSpot CRM", desc: "סנכרן לקוחות עם HubSpot" },
      { name: "REST API", desc: "בנה אינטגרציה מותאמת משלך" },
    ],
    integrationsHeading: "עוצר לא עם 1,000 כלים",
    integrationsSub: "חבור לכל מה שאתה משתמש",
    integrationsReq: "רוצה אינטגרציה שלא רשומה? עזור לנו לבנות אותה.",
    security: [
      { title: "הצפנה מלאה", desc: "כל הנתונים מוצפנים ב-AES-256. בשרתים וגם בתעבורה." },
      { title: "אבטחה דו-שלבית (2FA)", desc: "כל חשבון מוגן בקוד OTP דרך Google Authenticator." },
      { title: "ביקורת מלאה", desc: "כל פעולה נרשמת. IP, זמן, כל דבר. לעולם לא תהיה טינה." },
      { title: "GDPR & Compliance", desc: "עומדים בדרישות GDPR, ISO 27001 ודרישות ישראליות." },
    ],
    securityHeading: "החוזים שלך בידיים בטוחות",
    securitySpecial: "אבטחה מיוחדת",
    securitySub: "אנחנו מבינים שהחוזים שלך הם ערך קריטי. ממוצא עמודי החוקית עד לנתונים הרגישים ביותר שלך - הכל מוגן בסטנדרטים הגבוהים ביותר בתעשייה.",
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "חוק הגנת הפרטיות ישראלי"],
    comparisonHeading: "למה לבחור ב-DealLayer?",
    comparisonSub: "השוואה עם פתרונות אחרים בשוק",
    comparison: [
      { feature: "חוזה מקצועי בדקות", deallayer: true, competitors: false },
      { feature: "AI שמבין חוק ישראל", deallayer: true, competitors: false },
      { feature: "חתימה דיגיטלית מחייבת", deallayer: true, competitors: true },
      { feature: "דשבורד ניהול חוזים", deallayer: true, competitors: true },
      { feature: "29+ תבניות משפטיות", deallayer: true, competitors: false },
      { feature: "ניהול לקוחות (CRM)", deallayer: true, competitors: false },
      { feature: "20+ אינטגרציות", deallayer: true, competitors: false },
      { feature: "תמיכה בעברית", deallayer: true, competitors: false },
      { feature: "חוזים בלתי מוגבלים", deallayer: true, competitors: false },
      { feature: "מחיר שקוף ללא הפתעות", deallayer: true, competitors: false },
    ],
  },

  // Pricing
  pricing: {
    badge: "תמחור שקוף וחוסר הפתעות",
    h1: "כל עסקה בה תוכלו להרשים\nללא הלם לחשבון בנק",
    sub: "גמיש, הוגן ושקוף. בחרו את התוכנית המתאימה - או בנו משלכם אם צריך.",
    monthly: "חודשי",
    annual: "שנתי (חסוך 20%)",
    save: "חסוך 20%",
    plans: [
      {
        name: "Starter",
        desc: "להתחלה",
        price: 0,
        note: "לתמיד",
        cta: "התחל בחינם",
        features: [
          { text: "3 חוזים חודשיים", included: true },
          { text: "5 תבניות", included: true },
          { text: "חתימה דיגיטלית", included: true },
          { text: "ניהול לקוחות בסיסי", included: true },
          { text: "ללא תמיכה", included: true },
          { text: "Lex AI", included: false },
          { text: "אינטגרציות", included: false },
          { text: "API", included: false },
        ],
      },
      {
        name: "Professional",
        desc: "להצלחה",
        price: 99,
        note: "לחודש",
        cta: "קבל הדגמה",
        features: [
          { text: "חוזים בלתי מוגבלים", included: true },
          { text: "כל 29+ התבניות", included: true },
          { text: "Lex AI - סייען אינטליגנט", included: true },
          { text: "ניהול לקוחות מלא", included: true },
          { text: "התראות SMS וPush", included: true },
          { text: "צ'אט תמיכה חי", included: true },
          { text: "20+ אינטגרציות", included: true },
          { text: "API", included: false },
        ],
      },
      {
        name: "Enterprise",
        desc: "לארגונים גדולים",
        price: null,
        note: "מקום מיוחד",
        cta: "דברו איתנו",
        features: [
          { text: "הכל ב-Professional +", included: true },
          { text: "API מלא ללא הגבלה", included: true },
          { text: "SSO ו-Advanced Security", included: true },
          { text: "Custom integrations", included: true },
          { text: "דדיקטד account manager", included: true },
          { text: "SLA בכתב", included: true },
          { text: "On-premise option", included: true },
          { text: "התאמות מותאמות", included: true },
        ],
      },
    ],
    yearSuffix: "/שנה",
    faqHeading: "כל מה שצריך לדעת על התמחור",
    faqs: [
      { q: "אפשר לעבור בין תוכניות בכל רגע?", a: "בהחלט! אפשר לעבור למעלה או למטה בכל זמן. אם תעברו למטה, קצת בהן תחזיר פרורציה." },
      { q: "מה קורה למחלקה שלי אם אני משהה את ה-Pro?", a: "לא קורה כלום. החוזים שלך נשארים בשרתים שלנו. אתה רק לא יכול ליצור חדשים. תוכל להיכנס ולקרוא/להוריד בכל רגע." },
      { q: "יש מחיר מינימום בחודש?", a: "לא. Starter הוא לתמיד חינם - 3 חוזים חודשיים, כל מה שצריך כדי להתחיל." },
      { q: "אתם מעבדים כרטיסי אשראי?", a: "כן! אנחנו משתמשים ב-Stripe. כל כרטיס בעולם עובד - Visa, Mastercard, American Express." },
      { q: "עוד שאלות? נתן להתקשר?", a: "כן! אנחנו כאן בצ'אט חי, בטלפון ובאימייל. ענים תוך דקות, בעברית." },
    ],
  },

  // Solutions
  solutions: {
    badge: "בנוי לכל אחד",
    h1: "בין אם אתה עצמאי\nאו ארגון שלם",
    sub: "DealLayer יודעת את צורך שלך. בחרו משלוש זוויות - לפי התפקיד שלכם, גודל הארגון, או את התחום שלכם.",
    byRole: "לפי תפקיד וסוג עסק",
    roles: [
      { title: "פרילנסרים & יוצרים", desc: "הגן על עבודתך. קבל תשלום בזמן. לא עוד לקוחות שלא משלמים.", highlights: ["חוזי שירות", "הצעות מחיר", "ניהול זמן"] },
      { title: "משכירי נכסים", desc: "חוזי שכירות מעודכנים. כל מה שצריך בשיטה חוקית.", highlights: ["שכירות דיור", "שכירות מסחרית", "ניהול נכסים"] },
      { title: "בעלי עסקים קטנים", desc: "כל עסקה מוגנת. כל לקוח מסודר. בדיוק כמו שצריך.", highlights: ["הסכמי לקוחות", "הוצאה לאור", "שיתופיים"] },
      { title: "קבלנים", desc: "חוזים ברורים לכל פרויקט. תשלום שלבי. כל סכנה מעוגנת.", highlights: ["חוזים תחזוקה", "פרויקטים", "הערכות"] },
      { title: "יזמים", desc: "הסכמי מייסדים, NDA, השקעה. הכל מהיר ומקצועי.", highlights: ["הסכמי מייסדים", "NDA", "הסכמי השקעה"] },
      { title: "עורכי דין", desc: "כלים לניהול הסכמים עם לקוחות. חסוך זמן, אוטומציה.", highlights: ["שרות משפטי", "ניהול חוזים", "דוחות"] },
    ],
    sizes: [
      { title: "יחידים & עצמאים", desc: "פתרון פשוט, זול וחופשי. עד 3 חוזים בחודש, לתמיד.", badge: "התחלה כאן" },
      { title: "עסקים קטנים-בינוניים", desc: "10-50 עובדים? זה בדיוק לך. חוזים בלתי מוגבלים, כלים שלמים.", badge: "Popular" },
      { title: "ארגונים גדולים", desc: "50+ עובדים. אתה צריך API, SSO, ואינטגרציות מותאמות.", badge: "Enterprise" },
      { title: "ממשלה & מוסדות", desc: "דרישות רגולציה מיוחדות? אנחנו יכולים לטפל בזה.", badge: "Custom" },
    ],
    industries: [
      { title: "טכנולוגיה & פיתוח", desc: "חוזי שירות, NDA, הסכמי שיתוף IP. ממש מה שצריך למדענים.", sectors: ["SaaS", "Startups", "פיתוח אפליקציות"] },
      { title: "נדל\"ן & בנייה", desc: "חוזי בנייה, הסכמי שכירות, ניהול פרויקטים.", sectors: ["דירות", "משרדים", "חנויות"] },
      { title: "מדיה & קנטנט", desc: "חוזי צילום, הסכמי תוכן ממומן, רישיונות משימה.", sectors: ["בלוגרים", "צלמים", "סוכנויות"] },
      { title: "פיננסים & שירותים", desc: "הסכמי הלוואה, השקעה, ייעוץ, ביטוח.", sectors: ["ייעוץ פיננסי", "ביטוח", "השקעות"] },
    ],
  },

  // Templates
  templates: {
    badge: "29+ תבניות מקצועיות",
    h1: "חוזה לכל\nסוג עסקה",
    sub: "תבניות שנכתבו על ידי עורכי דין ישראליים, עדכנות לחוק ישראלי. בחרו, התאימו, ובחתמו.",
    categories: [
      {
        name: "שירות ועסקים",
        templates: [
          { name: "הסכם שירות כללי" },
          { name: "חוזה פרילנס" },
          { name: "הסכם מייסדים" },
          { name: "הסכם שותפות" },
        ],
      },
      {
        name: "נדל״ן",
        templates: [
          { name: "חוזה שכירות דירה" },
          { name: "הסכם מסחרי" },
          { name: "הסכם ניהול נכסים" },
        ],
      },
      {
        name: "משפטי וכספי",
        templates: [
          { name: "הסכם NDA" },
          { name: "הסכם הלוואה" },
          { name: "חוזה עבודה" },
          { name: "הסכם גישור" },
        ],
      },
      {
        name: "מדיה ויצירה",
        templates: [
          { name: "הסכם צילום ווידאו" },
          { name: "הסכם תוכן ממומן" },
          { name: "הסכם שגרירות מותג" },
        ],
      },
    ],
    viewAll: "ראה את כל 29+ התבניות",
    suggest: "הצע תבנית חדשה",
  },

  // Resources
  resources: {
    badge: "כל מה שאתה צריך כדי להצליח",
    h1: "למד, אחסן, התפתח\nעם DealLayer",
    sub: "מדריכים מפורטים, סרטונים, בלוג, אסמכתאות משפטיות, ותמיכה חי. הכל בעברית.",
    sections: [
      {
        title: "למד בעצמך",
        resources: [
          { label: "מדריכי שימוש", desc: "8+ מדריכים מפורטים", count: "8+" },
          { label: "סרטוני הדרכה", desc: "וידאו קצר לכל פיצ'ר", count: "20+" },
          { label: "בלוג DealLayer", desc: "עדכונים וטיפים שבועיים", count: "50+" },
          { label: "מרכז ידע משפטי", desc: "מאמרים על חוק חוזים", count: "30+" },
        ],
      },
      {
        title: "קבל עזרה",
        resources: [
          { label: "שאלות נפוצות", desc: "תשובות למה שמטרידות", count: "100+" },
          { label: "צ'אט תמיכה חי", desc: "ענים תוך דקות", count: "24/7" },
          { label: "שיחה עם מומחה", desc: "זמן אישי מ-Expert", count: "30 דק'" },
          { label: "אימייל Support", desc: "תגובה תוך 24 שעות", count: "24h" },
        ],
      },
      {
        title: "מפתחים",
        resources: [
          { label: "API Documentation", desc: "תיעוד מלא + Examples", count: "REST" },
          { label: "GitHub Repository", desc: "Code examples בGitHub", count: "SDK" },
          { label: "WebHooks Guide", desc: "Real-time events", count: "Events" },
          { label: "Integration Hub", desc: "20+ Ready-made", count: "20+" },
        ],
      },
    ],
  },

  // About
  about: {
    badge: "הסיפור שלנו",
    h1: "חוזים הם תועד של\nאמון וביטחון",
    sub: "DealLayer נוצרה כדי להביא את הגנת חוזים לכולנו - לא רק לאלה שמסוגלים לשלם עורך דין.",
    story: {
      heading: "כשהמייסדים שלנו הפסידו כסף בגלל חוזה גרוע",
      p1: "מייסד אחד מצא עצמו בסכסוך עם לקוח שלא רצה לשלם. הלקוח טען שלא היה הסכמה בכתב. למרות שהעבודה הושלמה, הכל היה בטלפון וקשקוש.",
      p2: "זה הזיע את המיסד השני. 'למה אין כלים פשוטים וזולים ליצור חוזה?' בחודש שאחרי, DealLayer נולדה.",
    },
    values: [
      {
        title: "להיות לצד העצמאים",
        desc: "כל עסקה קטנה, כל עצמאי, זוכה לאותה הגנה משפטית כמו ארגון גדול.",
      },
      {
        title: "מהירות = כוח",
        desc: "לא צריך לקחת חופש מהעבודה. חוזה בדקות, לא בשבועות.",
      },
      {
        title: "אבטחה בהחלט",
        desc: "הנתונים שלך הם קדשים לנו. הצפנה, ביקורת, קומפליינס - כל דבר.",
      },
      {
        title: "שקיפות מלאה",
        desc: "ללא הפתעות, ללא כותנים קטנים. אתה יודע בדיוק מה אתה משלם.",
      },
    ],
    milestones: [
      { year: "2024", title: "DealLayer נולדה", desc: "שתי מייסדים, הרבה אתוס." },
      { year: "Q2 2024", title: "Alpha בקרב בטא", desc: "10 עסקים פתחו חשבון וטסטו את הפלטפורמה." },
      { year: "Q3 2024", title: "Lex AI מתוודה", desc: "AI שמבין חוקי ישראל. 29+ תבניות משפטיות." },
      { year: "Q4 2024", title: "50 חוזים בשבוע", desc: "500+ משתמשים רשומים. העד קטן." },
      { year: "Q1 2025", title: "סיבב A סגור", desc: "מימון - יעלה להרחבה למדינות נוספות." },
      { year: "Q2 2025", title: "9,000+ חוזים", desc: "נוכל להגיד - כיוונו נכון." },
    ],
  },

  // Team
  team: {
    badge: "הצוות שלנו",
    h1: "מי אנחנו\nומדוע יש לנו ברירה",
    sub: "צוות קטן של עבריינים משפטיים, מהנדסים וביצוע שחקנים. כולנו עדים שחוזים גרועים גורמים נזק - אנחנו כאן כדי לתקן זאת.",
    members: [
      {
        name: "יוסי כהן",
        role: "מייסד ו-CEO",
        bio: "משפטן בהכשרה, יזם בקר. הפסיד כסף בחוזה גרוע, זה השנה שזה הזיע אותו.",
      },
      {
        name: "אורן לוי",
        role: "מייסד ו-CTO",
        bio: "מהנדס תוכנה עם 10 שנות ניסיון. בנה 3 סטארטאפים. יודע זה קשה - אנחנו כאן לעשות קל.",
      },
      {
        name: "דרור ויינברג",
        role: "עורך דין בכיר",
        bio: "20 שנות ניסיון בחוק חוזים. אם אתה משפטן וישן בלילה, אנחנו כאן עבורך.",
      },
      {
        name: "רות שיטן",
        role: "Head of Product",
        bio: "עבדה במשך שנים עם עורכי דין. מוצאת כל הבעיות שאנחנו יכולים לפתור.",
      },
    ],
  },

  // Contact
  contact: {
    badge: "בואו נדברים",
    h1: "חלומות, שאלות,\nאו כשלם עצום?",
    sub: "אנחנו כאן כדי לשמוע. למי יש שאלה עבור אחד מהצוות שלנו? שלח הודעה עכשיו.",
    methods: [
      { label: "אימייל", value: "hello@deallayer.co.il" },
      { label: "טלפון", value: "+972-53-123-4567" },
      { label: "כתובת", value: "תל אביב, ישראל" },
    ],
    responseTime: "אנחנו מחזירים הודעות בדרך כלל בתוך 24 שעות. בצ'אט חי - תוך דקות.",
    form: {
      name: "שם",
      email: "אימייל",
      subject: "נושא",
      message: "הודעה",
      placeholder: {
        name: "שמך",
        email: "your@email.com",
        subject: "בקשה, הנושא שלך...",
        message: "ספר לנו יותר...",
      },
      submit: "שלח הודעה",
    },
  },

  servicePages: {
    techDevelopment: {
      hero: {
        title: "החוזים של חברת הטק שלך - מהירים כמו הפיתוח שלך",
        subtitle: "ניהול מחזור חיי חוזה המותאם לדינמיקה של עולם הטכנולוגיה. מ-NDA ועד הסכמי SaaS מורכבים, אנחנו דואגים שהמשפט לא יעכב את המוצר.",
        cta1: "ניהול חוזי טק",
        cta2: "צפייה בתבניות",
      },
      painPoints: {
        heading: "האתגרים המשפטיים של צוותי פיתוח",
        items: [
          { title: "NDAs שנשכחו בדרך", desc: "חשיפת סודות מסחריים לפני חתימה פורמלית עם שותפים פוטנציאליים או עובדים חדשים." },
          { title: "חריגה מהגדרות הפרויקט", desc: "Scope Creep שנובע מהסכמי פיתוח מעורפלים שאינם מגדירים אבני דרך ברורות." },
          { title: "עבודה ללא חוזה בתוקף", desc: "התחלת עבודה עם פרילנסרים \"על אמון\" ללא העברת בעלות על הקניין הרוחני (IP)." },
          { title: "מסמכי SaaS מפוזרים", desc: "קושי במעקב אחר תנאי שימוש (ToS) ומדיניות פרטיות שמתעדכנים בנפרד מהמוצר." },
        ],
      },
      solutions: [
        {
          heading: "NDA ב-5 דקות (לא 5 ימים)",
          description: "אל תתנו לבירוקרטיה לעצור שיחות עסקיות חשובות. מערכת ה-DealLayer מאפשלת שליחה וחתימה אוטומטית של הסכמי סודיות מותאמים אישית בתוך שניות.",
          benefits: ["מעקב אחר צפיות בזמן אמת", "חתימה דיגיטלית מאובטחת"],
          docName: "הסכם סודיות (NDA)",
          docStatus: "נחתם",
          docMeta: { sent: "היום, 10:24", id: "#NDA-9821" },
          docMeta_labels: { sent: "נשלח:", label_step: "שלב", label_complete: "הושלם", label_inprogress: "בתהליך", label_pending: "ממתין" },
        },
        {
          heading: "הסכמי פיתוח עם Scope מוגדר",
          description: "צרו הסכמי פיתוח שמתרגמים אבני דרך טכנולוגיות לסעיפים משפטיים מחייבים.",
          steps: [
            { num: 1, label: "איפיון", status: "הושלם" },
            { num: 2, label: "פיתוח", status: "בתהליך" },
            { num: 3, label: "בדיקות", status: "ממתין" },
          ],
        },
      ],
      templatesHeading: "ספריית תבניות Tech",
      templates: [
        { title: "Software Development", desc: "הסכם פיתוח תוכנה מקיף כולל העברת קניין רוחני.", iconType: "code" },
        { title: "NDA", desc: "הסכם סודיות דו-צדדי מהיר לשימוש מול שותפים.", iconType: "lock" },
        { title: "Subcontractor", desc: "ניהול פרילנסרים ויועצים חיצוניים בצורה בטוחה.", iconType: "user" },
        { title: "SaaS Terms", desc: "תנאי שימוש למוצרי ענן ושירותים דיגיטליים.", iconType: "cloud" },
        { title: "Strategic Partnership", desc: "הסכם שיתוף פעולה אסטרטגי לשיווק או פיתוח משותף.", iconType: "handshake" },
        { title: "Tech Consulting", desc: "הסכם למתן שירותי ייעוץ טכנולוגי וארכיטקטורה.", iconType: "chart" },
      ],
      benefits: [
        { num: "01", title: "מהירות שיא", desc: "קיצור זמן חתימה ב-85% ממוצע לתעשייה." },
        { num: "02", title: "API & Integrations", desc: "חיבור ישיר ל-Slack, Jira ו-Salesforce." },
        { num: "03", title: "Enterprise Security", desc: "אבטחה ברמת בנקאות ותאימות SOC2." },
        { num: "04", title: "Lex AI for Tech", desc: "ניתוח סיכונים אוטומטי המבוסס על AI." },
      ],
      cta: {
        heading: "מוכנים להאיץ את תהליכי המשפט בארגון?",
        button1: "קבלו דמו חינם",
        button2: "דברו איתנו",
      },
    },
  },
};

const en: T = {
  dir: "ltr",
  lang: { he: "עברית", en: "English", ar: "العربية" },
  nav: {
    platform: "Platform", solutions: "Solutions", templates: "Templates",
    pricing: "Pricing", resources: "Resources", company: "Company",
    cta: "Get a Demo", login: "Login", back: "Back",
    platformMenu: {
      col1: "Core Tools", col2: "Advanced Features", col3: "Coming Soon",
      lexAI: "Lex AI", lexAIDesc: "Create a professional contract in a 2-minute AI conversation",
      sign: "Digital Signature", signDesc: "Legally binding signatures with full audit trail",
      manage: "Contract Management", manageDesc: "Real-time dashboard for all your deals",
      clients: "Client Management", clientsDesc: "Simple CRM with full transaction history",
      alerts: "Alerts", alertsDesc: "SMS & Push notifications when contracts are signed",
      security: "Security & Privacy", securityDesc: "SSL, 2FA, full encryption at rest",
      api: "API", apiDesc: "Connect DealLayer to your existing systems",
      integrations: "Integrations", integrationsDesc: "WhatsApp, Gmail, Zapier and 20+ more",
      analytics: "Analytics", analyticsDesc: "Business insights and reports on your deals",
      international: "International Contracts", internationalDesc: "Support for additional legal jurisdictions",
    },
    solutionsMenu: {
      col1: "By Role", col2: "By Size", col3: "By Industry",
      freelancers: "Freelancers & Creators", freelancersDesc: "Protect your rights, get paid on time",
      realestate: "Property Owners", realestateDesc: "Professional, up-to-date rental agreements",
      business: "Small Business Owners", businessDesc: "Every deal protected, every client organized",
      contractors: "Contractors & Tradespeople", contractorsDesc: "Clear contracts with milestone payments",
      startups: "Entrepreneurs & Startups", startupsDesc: "Founder agreements, NDAs, partnerships",
      lawyers: "Lawyers & Consultants", lawyersDesc: "Tools for managing client agreements",
      individuals: "Individuals & Freelancers", smb: "Small & Medium Business",
      enterprise: "Large Organizations", government: "Government & Public Institutions",
      tech: "Technology & Development", property: "Real Estate & Construction",
      media: "Media & Events", finance: "Finance & Lending",
    },
    templatesMenu: {
      col1: "Service & Business", col2: "Real Estate", col3: "Legal & Financial", col4: "Media & Creative",
      serviceGeneral: "General Service Agreement", freelance: "Freelance Contract",
      founders: "Founders Agreement", partnership: "Business Partnership",
      rental: "Residential Rental", commercial: "Commercial Lease",
      assetManagement: "Property Management",
      nda: "NDA Confidentiality", loan: "Loan Agreement",
      employment: "Employment Contract", mediation: "Mediation Agreement",
      photography: "Photography & Video", sponsored: "Sponsored Content",
      brand: "Brand Ambassador",
      viewAll: "See all 29+ templates →",
    },
    resourcesMenu: {
      col1: "Learn", col2: "Help & Support", col3: "Developers",
      guides: "User Guides", guidesDesc: "Get the most out of DealLayer",
      videos: "Tutorial Videos", videosDesc: "Learn visually with short guides",
      blog: "DealLayer Blog", blogDesc: "Updates, tips, and contract trends",
      knowledge: "Legal Knowledge Base", knowledgeDesc: "Articles on Israeli contract law",
      faq: "FAQ", faqDesc: "Answers to the most common questions",
      chat: "Live Chat Support", chatDesc: "We respond within minutes",
      call: "Talk to an Expert", callDesc: "Get personal help from our team",
      docs: "API Documentation", docsDesc: "Full docs for building integrations",
      github: "GitHub", webhooks: "Webhooks",
    },
    companyMenu: {
      col1: "DealLayer", col2: "Policies", col3: "Growth",
      about: "About Us", aboutDesc: "Our story, mission, and vision",
      team: "Our Team", teamDesc: "Meet the people behind DealLayer",
      press: "Press & Media", pressDesc: "Press coverage, logos, and media assets",
      contact: "Contact Us", contactDesc: "We'd love to hear from you",
      blog: "DealLayer Blog", blogDesc: "Tips, updates, and useful insights",
      careers: "Careers", careersDesc: "Join our growing team",
      investors: "For Investors", investorsDesc: "Investment rounds and financials",
      partners: "Partnerships", partnersDesc: "Become a DealLayer partner",
      terms: "Terms of Service", privacy: "Privacy Policy",
      security: "Security Report", compliance: "Compliance & Regulations",
    },
  },
  hero: {
    badge: "Legal protection for every Israeli business",
    line1: "Protect every deal", line2: "you build and manage",
    dashboard: {
      title: "My Contracts",
      newButton: "+ New Contract",
      contracts: [
        { name: "Development Agreement - StartupIL", date: "12.06.26", status: "Signed" },
        { name: "Rental - Ramat Aviv", date: "10.06.26", status: "Pending" },
        { name: "NDA - Potential Investor", date: "08.06.26", status: "Signed" },
        { name: "Partnership Agreement - TechVenture", date: "05.06.26", status: "Pending" },
      ],
      statusColors: { "Signed": { color: "#10B981", bg: "#ECFDF5" }, "Pending": { color: "#F59E0B", bg: "#FFFBEB" } },
    },
    morph: ["in minutes.", "no lawyers.", "via WhatsApp.", "no bureaucracy."],
    sub: "DealLayer connects contract, client, and signature into one smart system. No lawyers, no waiting.",
    cta1: "Get a Free Demo", cta2: "See the Platform",
    trust: ["No credit card", "3 free contracts", "Ready in 2 minutes"],
  },
  trustbar: { label: "Used daily by thousands of Israelis", items: ["Freelancers","Property Owners","Business Owners","Entrepreneurs","Contractors","Coaches","Consultants","Photographers","Developers","Designers"] },
  pain: {
    badge: "The Real Problem",
    heading: "Deals without contracts are a gamble", accent: "with your money",
    s1: "67%", l1: "of small businesses", b1: "experienced at least one contractual dispute last year - with no document to protect them.",
    s2: "₪12,000", l2: "average attorney cost per contract", b2: "DealLayer does the same thing - in 2 minutes, at zero cost for the first contract.",
    s3: "89%", l3: "of disputes were avoidable", b3: "If there was a written contract. The problem isn't bad faith - it's the lack of documentation at the right moment.",
  },
  features: {
    badge: "The Platform", heading: "Everything in one place - create, sign, manage",
    t1: "Create", t2: "Sign", t3: "Manage",
    h1: "Professional contract in 2 minutes with Lex AI",
    h2: "Digital signature legally binding in court",
    h3: "All your deals - one place, perfect order",
    s1: "Tell Lex about the deal, it asks 4 questions and drafts a contract compliant with Israeli law.",
    s2: "Unique link sent via WhatsApp, the other party signs from mobile, you get instant notification.",
    s3: "Smart dashboard showing the status of every contract in real time. Who signed, who's pending, what's expiring.",
    f1: ["Simple conversation - no legal knowledge needed","Risk analysis and automatic protection score","29+ templates for every use case","Always updated to Israeli law"],
    f2: ["Send directly to WhatsApp or SMS","IP, time, date, and phone number recorded","Signed PDF with unique reference number","Electronic Signature Act compliant"],
    f3: ["Filter by status, client, and date","Client management with transaction history","SMS alerts when contracts are about to expire","Full export to PDF and Excel"],
    learnMore: "Learn more →",
  },
  testimonials: {
    badge: "Reviews",
    heading: "See what our users think",
    items: [
      { text: "DealLayer changed my life as a freelancer. Instead of worrying about clients disputing agreements, everything is now documented and protected.", name: "Noa Golan", role: "UX Designer, Freelancer", platform: "G2" },
      { text: "I tried several solutions before, but DealLayer is the first time something just works. 2 minutes to a professional contract.", name: "Alon Ben-David", role: "Entrepreneur, StartupIL Founder", platform: "G2" },
      { text: "As a property owner, I never imagined I could manage 6 rental contracts without a lawyer. DealLayer made it possible.", name: "Dr. Moshe Levi", role: "Real Estate Investor", platform: "PeerSpot" },
      { text: "Lex AI understands what I need before I finish typing. The contract that comes out is ready, professional, and legally sound.", name: "Maya Samachi", role: "Business Coach", platform: "G2" },
      { text: "As a contractor, I didn't expect such a simple solution. Now every project starts with a contract - and there are no arguments at the end.", name: "Roy Aven", role: "Renovation Contractor", platform: "PeerSpot" },
      { text: "The alert when the client signs is such a good feeling. Everything is automatic, everything is documented. Highly recommended.", name: "Sarah Adary", role: "Marketing Consultant", platform: "G2" },
    ],
  },
  stats: {
    heading: "The numbers speak for themselves",
    l1: "Contracts signed", l2: "Idea to contract", l3: "Legal templates", l4: "Legally binding",
    s1: "and counting", s2: "avg. with Lex AI", s3: "tailored to Israeli law", s4: "Electronic Signature Act",
    statDisplay: "2 mins",
  },
  cta: {
    heading: "Ready to see", accent: "DealLayer in action?",
    sub: "First 3 contracts completely free. No credit card. No commitment.",
    btn: "Get a Demo", trust: ["Cancel anytime","No credit card","Hebrew support"],
  },
  footer: { tagline: "Smart contract. Real protection. In minutes.", product: "Product", resources: "Resources", company: "Company", rights: "All rights reserved.", footerLinks: { product: ["Start for Free", "Features", "Templates", "Pricing", "Lex AI"], resources: ["Help Center", "FAQ", "Blog", "Security"], company: ["About", "Contact", "Terms of Service", "Privacy Policy"] }, country: "Israel" },

  platform: {
    badge: "Everything you need in one place",
    h1: "DealLayer Platform\nin full detail",
    sub: "From creation to signature to full management - every tool is designed to support your deals and protect your rights.",
    cta: "Get started now",
    featureGridHeading: "Everything you need in one place",
    features: [
      { title: "Lex AI - Intelligent Assistant", desc: "Chat in English, contract in minutes. AI that understands the nuances of Israeli law." },
      { title: "Digital Signature", desc: "WhatsApp, SMS, link. Instant signature with full legal documentation." },
      { title: "Contract Management", desc: "Dashboard showing every deal in real time. Status, storage, everything." },
      { title: "Client Management", desc: "CRM tracking every client, every deal, every date. Never forget anything." },
      { title: "Smart Alerts", desc: "SMS & Push when contract is signed, when someone reviews, when it's expiring." },
      { title: "Government-Grade Security", desc: "SSL, 2FA, full encryption. Secure as a bank." },
      { title: "Flexible API", desc: "Connect DealLayer to your app. WebHooks, REST, full documentation." },
      { title: "20+ Integrations", desc: "WhatsApp, Gmail, Slack, Zapier, Make and more. Full automation." },
      { title: "Analytics", desc: "Detailed reports on transactions, revenue, closing times." },
      { title: "International Contracts", desc: "Based in Israel? We're also planning expansion to additional countries." },
    ],
    integrations: [
      { name: "WhatsApp Business", desc: "Send contracts for signature directly in WhatsApp" },
      { name: "Gmail & Workspace", desc: "Store contracts in your Workspace" },
      { name: "Zapier & Make", desc: "Connect to thousands of apps via Zapier" },
      { name: "Slack", desc: "Get alerts directly to a channel" },
      { name: "Google Drive & OneDrive", desc: "Automatic backup of every contract" },
      { name: "Stripe & PayPal", desc: "Close a deal and get paid in one step" },
      { name: "HubSpot CRM", desc: "Sync clients with HubSpot" },
      { name: "REST API", desc: "Build a custom integration yourself" },
    ],
    integrationsHeading: "No stopping with 1,000 tools",
    integrationsSub: "Connect to everything you use",
    integrationsReq: "Need an integration that's not listed? Help us build it.",
    security: [
      { title: "Full Encryption", desc: "All data encrypted in AES-256. On servers and in transit." },
      { title: "Two-Factor Authentication (2FA)", desc: "Every account protected with OTP code via Google Authenticator." },
      { title: "Full Audit", desc: "Every action is logged. IP, time, everything. No disputes ever." },
      { title: "GDPR & Compliance", desc: "Meet GDPR, ISO 27001, and Israeli requirements." },
    ],
    securityHeading: "Your contracts in safe hands",
    securitySpecial: "Advanced Security",
    securitySub: "We understand your contracts are critical value. From legal origins to the most sensitive data - everything is protected by the highest industry standards.",
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Israeli Privacy Protection Law"],
    comparisonHeading: "Why Choose DealLayer?",
    comparisonSub: "Comparison with other solutions on the market",
    comparison: [
      { feature: "Professional contract in minutes", deallayer: true, competitors: false },
      { feature: "AI that understands Israeli law", deallayer: true, competitors: false },
      { feature: "Legally binding digital signature", deallayer: true, competitors: true },
      { feature: "Contract management dashboard", deallayer: true, competitors: true },
      { feature: "29+ legal templates", deallayer: true, competitors: false },
      { feature: "Client management (CRM)", deallayer: true, competitors: false },
      { feature: "20+ integrations", deallayer: true, competitors: false },
      { feature: "Hebrew language support", deallayer: true, competitors: false },
      { feature: "Unlimited contracts", deallayer: true, competitors: false },
      { feature: "Transparent pricing, no surprises", deallayer: true, competitors: false },
    ],
  },

  pricing: {
    badge: "Transparent pricing with no surprises",
    h1: "Every deal you can be proud of\nwithout breaking the bank",
    sub: "Flexible, fair, and transparent. Choose the plan that fits you - or build your own if you need to.",
    monthly: "Monthly",
    annual: "Annual (Save 20%)",
    save: "Save 20%",
    plans: [
      {
        name: "Starter",
        desc: "For getting started",
        price: 0,
        note: "Forever free",
        cta: "Get started free",
        features: [
          { text: "3 contracts per month", included: true },
          { text: "5 templates", included: true },
          { text: "Digital signature", included: true },
          { text: "Basic client management", included: true },
          { text: "No support", included: true },
          { text: "Lex AI", included: false },
          { text: "Integrations", included: false },
          { text: "API", included: false },
        ],
      },
      {
        name: "Professional",
        desc: "For success",
        price: 99,
        note: "Per month",
        cta: "Get a demo",
        features: [
          { text: "Unlimited contracts", included: true },
          { text: "All 29+ templates", included: true },
          { text: "Lex AI - Intelligent assistant", included: true },
          { text: "Full client management", included: true },
          { text: "SMS & Push alerts", included: true },
          { text: "Live chat support", included: true },
          { text: "20+ integrations", included: true },
          { text: "API", included: false },
        ],
      },
      {
        name: "Enterprise",
        desc: "For large organizations",
        price: null,
        note: "Custom pricing",
        cta: "Talk to us",
        features: [
          { text: "Everything in Professional +", included: true },
          { text: "Unlimited API", included: true },
          { text: "SSO & Advanced Security", included: true },
          { text: "Custom integrations", included: true },
          { text: "Dedicated account manager", included: true },
          { text: "Written SLA", included: true },
          { text: "On-premise option", included: true },
          { text: "Custom features", included: true },
        ],
      },
    ],
    yearSuffix: "/year",
    faqHeading: "Everything you need to know about pricing",
    faqs: [
      { q: "Can I switch plans anytime?", a: "Absolutely! You can upgrade or downgrade anytime. If you downgrade, we'll give you a prorated refund." },
      { q: "What happens to my contracts if I pause Pro?", a: "Nothing. Your contracts stay on our servers. You just can't create new ones. You can access and download anytime." },
      { q: "Is there a minimum monthly price?", a: "No. Starter is forever free - 3 contracts per month, everything you need to get started." },
      { q: "Do you accept credit cards?", a: "Yes! We use Stripe. Any card in the world works - Visa, Mastercard, American Express." },
      { q: "More questions? Can I call?", a: "Yes! We're here on live chat, phone, and email. We respond within minutes, in English." },
    ],
  },

  solutions: {
    badge: "Built for everyone",
    h1: "Whether you're a freelancer\nor an entire organization",
    sub: "DealLayer knows your needs. Choose from three angles - by your role, organization size, or industry.",
    byRole: "By Role and Business Type",
    roles: [
      { title: "Freelancers & Creators", desc: "Protect your work. Get paid on time. No more clients who don't pay.", highlights: ["Service contracts", "Quotations", "Time tracking"] },
      { title: "Property Owners", desc: "Up-to-date rental agreements. Everything you need in a legal way.", highlights: ["Residential rental", "Commercial lease", "Property management"] },
      { title: "Small Business Owners", desc: "Every deal protected. Every client organized. Exactly as needed.", highlights: ["Client agreements", "Licensing", "Partnerships"] },
      { title: "Contractors", desc: "Clear contracts for every project. Milestone payments. Every risk covered.", highlights: ["Maintenance contracts", "Projects", "Quotes"] },
      { title: "Entrepreneurs", desc: "Founder agreements, NDAs, investments. Everything fast and professional.", highlights: ["Founder agreements", "NDAs", "Investment agreements"] },
      { title: "Lawyers", desc: "Tools to manage client agreements. Save time, automate.", highlights: ["Legal services", "Contract management", "Reports"] },
    ],
    sizes: [
      { title: "Individuals & Freelancers", desc: "Simple, cheap, free solution. Up to 3 contracts per month, forever.", badge: "Get started here" },
      { title: "Small-Medium Business", desc: "10-50 employees? This is perfect for you. Unlimited contracts, full tools.", badge: "Popular" },
      { title: "Large Organizations", desc: "50+ employees. You need API, SSO, and custom integrations.", badge: "Enterprise" },
      { title: "Government & Institutions", desc: "Special regulatory requirements? We can handle that.", badge: "Custom" },
    ],
    industries: [
      { title: "Technology & Development", desc: "Service contracts, NDAs, IP sharing agreements. Perfect for developers.", sectors: ["SaaS", "Startups", "App development"] },
      { title: "Real Estate & Construction", desc: "Construction contracts, rental agreements, project management.", sectors: ["Apartments", "Offices", "Shops"] },
      { title: "Media & Content", desc: "Photography contracts, sponsored content agreements, licensing.", sectors: ["Bloggers", "Photographers", "Agencies"] },
      { title: "Finance & Services", desc: "Loan agreements, investments, consulting, insurance.", sectors: ["Financial advice", "Insurance", "Investments"] },
    ],
  },

  templates: {
    badge: "29+ Professional Templates",
    h1: "A contract for\nevery type of deal",
    sub: "Templates written by Israeli lawyers, updated with Israeli law. Choose, customize, and sign.",
    categories: [
      {
        name: "Service & Business",
        templates: [
          { name: "General service agreement" },
          { name: "Freelance contract" },
          { name: "Founder agreement" },
          { name: "Business partnership" },
        ],
      },
      {
        name: "Real Estate",
        templates: [
          { name: "Residential rental" },
          { name: "Commercial lease" },
          { name: "Property management" },
        ],
      },
      {
        name: "Legal & Financial",
        templates: [
          { name: "NDA" },
          { name: "Loan agreement" },
          { name: "Employment contract" },
          { name: "Mediation agreement" },
        ],
      },
      {
        name: "Media & Creative",
        templates: [
          { name: "Photography & video" },
          { name: "Sponsored content" },
          { name: "Brand ambassador" },
        ],
      },
    ],
    viewAll: "See all 29+ templates",
    suggest: "Suggest a new template",
  },

  resources: {
    badge: "Everything you need to succeed",
    h1: "Learn, store, grow\nwith DealLayer",
    sub: "Detailed guides, videos, blog, legal references, and live support. All in English.",
    sections: [
      {
        title: "Learn yourself",
        resources: [
          { label: "User guides", desc: "8+ detailed guides", count: "8+" },
          { label: "Tutorial videos", desc: "Short video for every feature", count: "20+" },
          { label: "DealLayer Blog", desc: "Weekly updates and tips", count: "50+" },
          { label: "Legal knowledge base", desc: "Articles on contract law", count: "30+" },
        ],
      },
      {
        title: "Get help",
        resources: [
          { label: "FAQ", desc: "Answers to common questions", count: "100+" },
          { label: "Live chat support", desc: "We respond within minutes", count: "24/7" },
          { label: "Talk to an expert", desc: "Personal time with an expert", count: "30 min" },
          { label: "Email support", desc: "Response within 24 hours", count: "24h" },
        ],
      },
      {
        title: "Developers",
        resources: [
          { label: "API Documentation", desc: "Full docs + examples", count: "REST" },
          { label: "GitHub Repository", desc: "Code examples on GitHub", count: "SDK" },
          { label: "WebHooks guide", desc: "Real-time events", count: "Events" },
          { label: "Integration hub", desc: "20+ Ready-made", count: "20+" },
        ],
      },
    ],
  },

  about: {
    badge: "Our story",
    h1: "Contracts are a record of\ntrust and confidence",
    sub: "DealLayer was created to bring contract protection to everyone - not just those who can afford a lawyer.",
    story: {
      heading: "When our founders lost money because of a bad contract",
      p1: "One founder found himself in a dispute with a client who refused to pay. The client claimed there was no written agreement. Despite the work being completed, everything was over the phone and messages.",
      p2: "That frustrated the second founder. 'Why aren't there simple, cheap tools to create a contract?' A month later, DealLayer was born.",
    },
    values: [
      {
        title: "Stand with the self-employed",
        desc: "Every small deal, every freelancer, deserves the same legal protection as a large organization.",
      },
      {
        title: "Speed is power",
        desc: "Don't take time off work. Contracts in minutes, not weeks.",
      },
      {
        title: "Security definitely",
        desc: "Your data is sacred to us. Encryption, audit, compliance - everything.",
      },
      {
        title: "Complete transparency",
        desc: "No surprises, no fine print. You know exactly what you're paying.",
      },
    ],
    milestones: [
      { year: "2024", title: "DealLayer was born", desc: "Two founders, lots of determination." },
      { year: "Q2 2024", title: "Alpha to beta", desc: "10 businesses opened accounts and tested the platform." },
      { year: "Q3 2024", title: "Lex AI is born", desc: "AI that understands Israeli law. 29+ legal templates." },
      { year: "Q4 2024", title: "50 contracts a week", desc: "500+ users registered. The start is small." },
      { year: "Q1 2025", title: "Series A closed", desc: "Funding - will expand to more countries." },
      { year: "Q2 2025", title: "9,000+ contracts", desc: "We can say - we're on the right track." },
    ],
  },

  team: {
    badge: "Our team",
    h1: "Who we are\nand why we have a shot",
    sub: "Small team of legal professionals, engineers, and operators. We all know firsthand that bad contracts cause damage - we're here to fix it.",
    members: [
      {
        name: "Yossi Cohen",
        role: "Founder & CEO",
        bio: "Lawyer by training, entrepreneur by heart. Lost money on a bad contract - that year it drove him crazy.",
      },
      {
        name: "Oren Levy",
        role: "Founder & CTO",
        bio: "Software engineer with 10 years of experience. Built 3 startups. Knows it's hard - we're here to make it easy.",
      },
      {
        name: "Dror Weinberg",
        role: "Senior Lawyer",
        bio: "20 years of experience in contract law. If you're a lawyer losing sleep, we're here for you.",
      },
      {
        name: "Ruth Shitan",
        role: "Head of Product",
        bio: "Worked with lawyers for years. Finds every problem we can solve.",
      },
    ],
  },

  contact: {
    badge: "Let's talk",
    h1: "Dreams, questions,\nor an epic fail?",
    sub: "We're here to listen. Got a question for one of our team members? Send a message now.",
    methods: [
      { label: "Email", value: "hello@deallayer.co.il" },
      { label: "Phone", value: "+972-53-123-4567" },
      { label: "Address", value: "Tel Aviv, Israel" },
    ],
    responseTime: "We usually respond to messages within 24 hours. On live chat - within minutes.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      placeholder: {
        name: "Your name",
        email: "your@email.com",
        subject: "What's this about?",
        message: "Tell us more...",
      },
      submit: "Send message",
    },
  },

  servicePages: {
    techDevelopment: {
      hero: {
        title: "Your Tech Company's Contracts - As Fast as Your Development",
        subtitle: "Manage contract lifecycle tailored to tech dynamics. From NDAs to complex SaaS agreements, we ensure legal won't slow down your product.",
        cta1: "Manage Tech Contracts",
        cta2: "View Templates",
      },
      painPoints: {
        heading: "Legal Challenges for Development Teams",
        items: [
          { title: "Forgotten NDAs", desc: "Exposing trade secrets before formal agreements with potential partners or new hires." },
          { title: "Scope Creep", desc: "Uncontrolled growth from vague development agreements that don't define clear milestones." },
          { title: "Working Without Active Contract", desc: "Starting work with freelancers on trust without transferring intellectual property (IP) ownership." },
          { title: "Scattered SaaS Documents", desc: "Difficulty tracking terms of service (ToS) and privacy policies that update separately from the product." },
        ],
      },
      solutions: [
        {
          heading: "NDA in 5 Minutes (Not 5 Days)",
          description: "Don't let bureaucracy stop important business calls. DealLayer enables sending and auto-signing customized NDAs within seconds.",
          benefits: ["Real-time view tracking", "Secure digital signature"],
          docName: "Confidentiality Agreement (NDA)",
          docStatus: "Signed",
          docMeta: { sent: "Today, 10:24 AM", id: "#NDA-9821" },
          docMeta_labels: { sent: "Sent:", label_step: "Step", label_complete: "Complete", label_inprogress: "In Progress", label_pending: "Pending" },
        },
        {
          heading: "Development Agreements With Defined Scope",
          description: "Create development agreements that translate tech milestones into binding legal terms.",
          steps: [
            { num: 1, label: "Requirements", status: "Complete" },
            { num: 2, label: "Development", status: "In Progress" },
            { num: 3, label: "Testing", status: "Pending" },
          ],
        },
      ],
      templatesHeading: "Tech Templates Library",
      templates: [
        { title: "Software Development", desc: "Comprehensive software development agreement including IP transfer.", iconType: "code" },
        { title: "NDA", desc: "Fast bilateral confidentiality agreement for use with partners.", iconType: "lock" },
        { title: "Subcontractor", desc: "Safely manage freelancers and external consultants.", iconType: "user" },
        { title: "SaaS Terms", desc: "Terms of service for cloud products and digital services.", iconType: "cloud" },
        { title: "Strategic Partnership", desc: "Strategic collaboration agreement for joint marketing or development.", iconType: "handshake" },
        { title: "Tech Consulting", desc: "Agreement for providing technology consulting and architecture services.", iconType: "chart" },
      ],
      benefits: [
        { num: "01", title: "Peak Speed", desc: "Reduce signing time by 85% vs industry average." },
        { num: "02", title: "API & Integrations", desc: "Direct connection to Slack, Jira, and Salesforce." },
        { num: "03", title: "Enterprise Security", desc: "Bank-level security and SOC2 compliance." },
        { num: "04", title: "Lex AI for Tech", desc: "Automated risk analysis powered by AI." },
      ],
      cta: {
        heading: "Ready to Accelerate Legal Processes in Your Organization?",
        button1: "Get Free Demo",
        button2: "Talk to Us",
      },
    },
  },
};

const ar: T = {
  dir: "rtl",
  lang: { he: "עברית", en: "English", ar: "العربية" },
  nav: {
    platform: "المنصة", solutions: "الحلول", templates: "القوالب",
    pricing: "الأسعار", resources: "الموارد", company: "الشركة",
    cta: "احصل على عرض", login: "دخول", back: "العودة",
    platformMenu: {
      col1: "الأدوات الأساسية", col2: "ميزات متقدمة", col3: "قريباً",
      lexAI: "Lex AI", lexAIDesc: "أنشئ عقداً احترافياً في محادثة AI مدتها دقيقتان",
      sign: "التوقيع الرقمي", signDesc: "توقيع ملزم قانونياً مع سجل تدقيق كامل",
      manage: "إدارة العقود", manageDesc: "لوحة تحكم لجميع معاملاتك في الوقت الفعلي",
      clients: "إدارة العملاء", clientsDesc: "CRM بسيط مع تاريخ المعاملات الكامل",
      alerts: "التنبيهات", alertsDesc: "SMS وإشعارات Push عند توقيع العقود",
      security: "الأمان والخصوصية", securityDesc: "SSL، مصادقة ثنائية، تشفير كامل",
      api: "API", apiDesc: "اربط DealLayer بأنظمتك الحالية",
      integrations: "التكاملات", integrationsDesc: "واتساب، Gmail، Zapier وأكثر من 20 آخرين",
      analytics: "التحليلات", analyticsDesc: "رؤى وتقارير عن صفقاتك",
      international: "العقود الدولية", internationalDesc: "دعم للولايات القضائية القانونية الإضافية",
    },
    solutionsMenu: {
      col1: "حسب الدور", col2: "حسب الحجم", col3: "حسب القطاع",
      freelancers: "المستقلون والمبدعون", freelancersDesc: "احمِ حقوقك، اقبض في الوقت المحدد",
      realestate: "أصحاب العقارات", realestateDesc: "عقود إيجار احترافية ومحدّثة",
      business: "أصحاب الأعمال الصغيرة", businessDesc: "كل صفقة محمية، كل عميل منظم",
      contractors: "المقاولون والحرفيون", contractorsDesc: "عقود واضحة مع دفعات مراحل",
      startups: "رواد الأعمال والشركات الناشئة", startupsDesc: "اتفاقيات المؤسسين، اتفاقيات السرية، الشراكات",
      lawyers: "المحامون والمستشارون", lawyersDesc: "أدوات لإدارة اتفاقيات العملاء",
      individuals: "الأفراد والمستقلون", smb: "الشركات الصغيرة والمتوسطة",
      enterprise: "المؤسسات الكبيرة", government: "الحكومة والمؤسسات العامة",
      tech: "التكنولوجيا والتطوير", property: "العقارات والبناء",
      media: "الإعلام والفعاليات", finance: "المال والتمويل",
    },
    templatesMenu: {
      col1: "الخدمة والأعمال", col2: "العقارات", col3: "القانوني والمالي", col4: "الإعلام والإبداع",
      serviceGeneral: "اتفاقية خدمة عامة", freelance: "عقد مستقل",
      founders: "اتفاقية المؤسسين", partnership: "شراكة تجارية",
      rental: "إيجار سكني", commercial: "إيجار تجاري",
      assetManagement: "إدارة الممتلكات",
      nda: "اتفاقية السرية NDA", loan: "اتفاقية قرض",
      employment: "عقد عمل", mediation: "اتفاقية وساطة",
      photography: "التصوير والفيديو", sponsored: "محتوى مدعوم",
      brand: "سفير العلامة التجارية",
      viewAll: "اعرض جميع القوالب 29+ →",
    },
    resourcesMenu: {
      col1: "تعلّم", col2: "المساعدة والدعم", col3: "المطورون",
      guides: "أدلة المستخدم", guidesDesc: "استفد إلى أقصى حد من DealLayer",
      videos: "مقاطع فيديو تعليمية", videosDesc: "تعلّم بصرياً مع أدلة قصيرة",
      blog: "مدونة DealLayer", blogDesc: "تحديثات ونصائح واتجاهات العقود",
      knowledge: "قاعدة المعرفة القانونية", knowledgeDesc: "مقالات عن قانون العقود الإسرائيلي",
      faq: "الأسئلة الشائعة", faqDesc: "إجابات على الأسئلة الأكثر شيوعاً",
      chat: "دعم الدردشة المباشرة", chatDesc: "نرد في غضون دقائق",
      call: "تحدث مع خبير", callDesc: "احصل على مساعدة شخصية من فريقنا",
      docs: "توثيق API", docsDesc: "وثائق كاملة لبناء التكاملات",
      github: "GitHub", webhooks: "Webhooks",
    },
    companyMenu: {
      col1: "DealLayer", col2: "السياسات", col3: "النمو",
      about: "من نحن", aboutDesc: "قصتنا ومهمتنا ورؤيتنا",
      team: "فريقنا", teamDesc: "تعرّف على الأشخاص وراء DealLayer",
      press: "الصحافة والإعلام", pressDesc: "تغطية صحفية وشعارات وأصول إعلامية",
      contact: "اتصل بنا", contactDesc: "يسعدنا سماعك",
      blog: "مدونة DealLayer", blogDesc: "نصائح وتحديثات ورؤى مفيدة",
      careers: "الوظائف", careersDesc: "انضم إلى فريقنا",
      investors: "للمستثمرين", investorsDesc: "جولات الاستثمار والتمويل",
      partners: "الشراكات", partnersDesc: "كن شريك DealLayer",
      terms: "شروط الخدمة", privacy: "سياسة الخصوصية",
      security: "تقرير الأمان", compliance: "الامتثال واللوائح",
    },
  },
  hero: {
    badge: "حماية قانونية لكل عمل إسرائيلي",
    line1: "احمِ كل صفقة", line2: "تبنيها وتديرها",
    morph: ["في دقائق.", "بدون محامٍ.", "عبر واتساب.", "بدون بيروقراطية."],
    sub: "DealLayer تربط العقد والعميل والتوقيع في نظام واحد ذكي. بدون محامين، بدون انتظار.",
    cta1: "احصل على عرض مجاني", cta2: "شاهد المنصة",
    trust: ["بدون بطاقة ائتمان", "3 عقود مجانية", "جاهز في دقيقتين"],
    dashboard: {
      title: "عقودي",
      newButton: "+ عقد جديد",
      contracts: [
        { name: "اتفاقية التطوير - StartupIL", date: "12.06.26", status: "موقّع" },
        { name: "الإيجار - رامات أفيف", date: "10.06.26", status: "معلق" },
        { name: "اتفاقية سرية - مستثمر محتمل", date: "08.06.26", status: "موقّع" },
        { name: "اتفاقية الشراكة - TechVenture", date: "05.06.26", status: "معلق" },
      ],
      statusColors: { "موقّع": { color: "#10B981", bg: "#ECFDF5" }, "معلق": { color: "#F59E0B", bg: "#FFFBEB" } },
    },
  },
  trustbar: { label: "يستخدمه آلاف الإسرائيليين يومياً", items: ["المستقلون","أصحاب العقارات","أصحاب الأعمال","رواد الأعمال","المقاولون","المدربون","المستشارون","المصورون","المطورون","المصممون"] },
  pain: {
    badge: "المشكلة الحقيقية",
    heading: "الصفقات بدون عقود مقامرة", accent: "بأموالك",
    s1: "67%", l1: "من الشركات الصغيرة", b1: "واجهت نزاعاً تعاقدياً واحداً على الأقل العام الماضي - دون وثيقة لحمايتها.",
    s2: "₪12,000", l2: "متوسط تكلفة المحامي للعقد الواحد", b2: "DealLayer يفعل نفس الشيء - في دقيقتين، بتكلفة صفر للعقد الأول.",
    s3: "89%", l3: "من النزاعات كانت يمكن تجنبها", b3: "لو كان هناك عقد مكتوب. المشكلة ليست سوء النية - بل غياب التوثيق في اللحظة الصحيحة.",
  },
  features: {
    badge: "المنصة", heading: "كل شيء في مكان واحد - إنشاء، توقيع، إدارة",
    t1: "إنشاء", t2: "توقيع", t3: "إدارة",
    h1: "عقد احترافي في دقيقتين مع Lex AI",
    h2: "توقيع رقمي ملزم قانونياً في المحكمة",
    h3: "جميع صفقاتك - مكان واحد، نظام مثالي",
    s1: "أخبر Lex عن الصفقة، يطرح 4 أسئلة ويُعدّ عقداً متوافقاً مع القانون الإسرائيلي.",
    s2: "رابط فريد يُرسل عبر واتساب، يوقع الطرف الآخر من الهاتف، تستلم إشعاراً فورياً.",
    s3: "لوحة تحكم ذكية تعرض حالة كل عقد في الوقت الفعلي.",
    f1: ["محادثة بسيطة - لا حاجة لمعرفة قانونية","تحليل المخاطر ودرجة الحماية التلقائية","أكثر من 29 قالباً لكل حالة","محدّث دائماً للقانون الإسرائيلي"],
    f2: ["إرسال مباشر عبر واتساب أو SMS","تسجيل IP والوقت والتاريخ ورقم الهاتف","PDF موقّع برقم مرجعي فريد","متوافق مع قانون التوقيع الإلكتروني"],
    f3: ["تصفية حسب الحالة والعميل والتاريخ","إدارة العملاء مع سجل المعاملات","تنبيهات SMS عند انتهاء صلاحية العقود","تصدير كامل إلى PDF وExcel"],
    learnMore: "اقرأ المزيد ←",
  },
  testimonials: {
    badge: "مراجعات",
    heading: "انظر ماذا يقول مستخدمونا",
    items: [
      { text: "غيّرت لي DealLayer حياتي كعاملة مستقلة. بدلاً من القلق من أن ينكر العملاء الاتفاقيات، أصبح كل شيء موثقاً ومحمياً.", name: "نوعه جولان", role: "مصممة UX، عاملة مستقلة", platform: "G2" },
      { text: "جربت عدة حلول من قبل، لكن DealLayer أول مرة يعمل شيء بهذه البساطة. عقد احترافي في دقيقتين.", name: "ألون بن-داود", role: "رائد أعمال، مؤسس StartupIL", platform: "G2" },
      { text: "كمالك عقارات، لم أكن أتخيل أنني أستطيع إدارة 6 عقود إيجار بدون محامٍ. جعلت DealLayer ذلك ممكناً.", name: "د. موشيه ليفي", role: "مستثمر عقاري", platform: "PeerSpot" },
      { text: "Lex AI يفهم احتياجاتي قبل أن أنتهي من الكتابة. العقد الناتج جاهز واحترافي وقانوني.", name: "مايا سمحي", role: "مدربة أعمال", platform: "G2" },
      { text: "كمقاول بناء، لم أتوقع حلاً بهذه البساطة. الآن يبدأ كل مشروع بعقد - ولا توجد خلافات في النهاية.", name: "روعي أفن", role: "مقاول تجديدات", platform: "PeerSpot" },
      { text: "التنبيه الذي يصل عند توقيع العميل شعور رائع جداً. كل شيء تلقائي، كل شيء موثق. موصى به بشدة.", name: "سارة أدري", role: "استشارية تسويق", platform: "G2" },
    ],
  },
  stats: {
    heading: "الأرقام تتحدث عن نفسها",
    l1: "عقد موقّع", l2: "من الفكرة إلى العقد", l3: "قوالب قانونية", l4: "ملزم قانوناً",
    s1: "ولا تزال تتزايد", s2: "متوسط مع Lex AI", s3: "مُكيَّفة مع القانون الإسرائيلي", s4: "قانون التوقيع الإلكتروني",
    statDisplay: "دقيقتان",
  },
  cta: {
    heading: "هل أنت مستعد لرؤية", accent: "DealLayer في العمل؟",
    sub: "أول 3 عقود مجانية تماماً. بدون بطاقة ائتمان. بدون التزام.",
    btn: "احصل على عرض", trust: ["إلغاء في أي وقت","بدون بطاقة ائتمان","دعم بالعبرية والعربية"],
  },
  footer: { tagline: "عقد ذكي. حماية حقيقية. في دقائق.", product: "المنتج", resources: "الموارد", company: "الشركة", rights: "جميع الحقوق محفوظة.", footerLinks: { product: ["ابدأ مجاناً", "الميزات", "القوالب", "الأسعار", "Lex AI"], resources: ["مركز المساعدة", "الأسئلة الشائعة", "المدونة", "الأمان"], company: ["حولنا", "اتصل بنا", "شروط الخدمة", "سياسة الخصوصية"] }, country: "إسرائيل" },

  platform: {
    badge: "كل مما تحتاجه في مكان واحد",
    h1: "منصة DealLayer\nبكل التفاصيل",
    sub: "من الإنشاء إلى التوقيع إلى الإدارة الكاملة - كل أداة مصممة لدعم صفقاتك وحماية حقوقك.",
    cta: "ابدأ الآن",
    featureGridHeading: "كل مما تحتاجه في مكان واحد",
    features: [
      { title: "Lex AI - مساعد ذكي", desc: "تحدث بالعربية، عقد في دقائق. AI يفهم تعقيدات القانون الإسرائيلي." },
      { title: "التوقيع الرقمي", desc: "واتساب، SMS، رابط. توقيع فوري مع توثيق قانوني كامل." },
      { title: "إدارة العقود", desc: "لوحة تحكم تعرض كل صفقة في الوقت الفعلي. الحالة، التخزين، كل شيء." },
      { title: "إدارة العملاء", desc: "CRM يتتبع كل عميل، كل صفقة، كل تاريخ. لن تنسى أي شيء." },
      { title: "التنبيهات الذكية", desc: "SMS و Push عند توقيع العقد، عند المراجعة، عند انتهاء الصلاحية." },
      { title: "أمان من الدرجة الحكومية", desc: "SSL، 2FA، تشفير كامل. آمن مثل البنك." },
      { title: "API مرن", desc: "اربط DealLayer بتطبيقك. WebHooks، REST، توثيق كامل." },
      { title: "20+ تكامل", desc: "واتساب، Gmail، Slack، Zapier، Make وغير ذلك. أتمتة كاملة." },
      { title: "التحليلات", desc: "تقارير مفصلة عن المعاملات والإيرادات وأوقات الإغلاق." },
      { title: "العقود الدولية", desc: "مقرها بإسرائيل؟ ننوي أيضاً التوسع إلى دول أخرى." },
    ],
    integrations: [
      { name: "WhatsApp Business", desc: "أرسل العقود للتوقيع مباشرة في WhatsApp" },
      { name: "Gmail & Workspace", desc: "خزّن العقود في Workspace الخاص بك" },
      { name: "Zapier & Make", desc: "الاتصال بآلاف التطبيقات عبر Zapier" },
      { name: "Slack", desc: "احصل على التنبيهات مباشرة إلى القناة" },
      { name: "Google Drive & OneDrive", desc: "نسخ احتياطية تلقائية لكل عقد" },
      { name: "Stripe & PayPal", desc: "أغلق الصفقة واحصل على الدفع في خطوة واحدة" },
      { name: "HubSpot CRM", desc: "مزامنة العملاء مع HubSpot" },
      { name: "REST API", desc: "بناء تكامل مخصص بنفسك" },
    ],
    integrationsHeading: "لا توقف مع 1000 أداة",
    integrationsSub: "اتصل بكل ما تستخدمه",
    integrationsReq: "هل تحتاج إلى تكامل غير مدرج؟ ساعدنا في بنائه.",
    security: [
      { title: "تشفير كامل", desc: "كل البيانات مشفرة في AES-256. على الخوادم وأثناء النقل." },
      { title: "المصادقة الثنائية (2FA)", desc: "كل حساب محمي برمز OTP عبر Google Authenticator." },
      { title: "تدقيق كامل", desc: "كل إجراء يتم تسجيله. IP والوقت وكل شيء. لا نزاع أبداً." },
      { title: "GDPR والامتثال", desc: "استيفاء GDPR و ISO 27001 والمتطلبات الإسرائيلية." },
    ],
    securityHeading: "عقودك بأيد آمنة",
    securitySpecial: "أمان متقدم",
    securitySub: "نحن نفهم أن عقودك ذات قيمة حرجة. من الأصول القانونية إلى البيانات الحساسة - كل شيء محمي بأعلى معايير الصناعة.",
    certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "قانون حماية الخصوصية الإسرائيلي"],
    comparisonHeading: "لماذا تختار DealLayer؟",
    comparisonSub: "مقارنة مع الحلول الأخرى في السوق",
    comparison: [
      { feature: "عقد احترافي في دقائق", deallayer: true, competitors: false },
      { feature: "ذكاء اصطناعي يفهم القانون الإسرائيلي", deallayer: true, competitors: false },
      { feature: "توقيع رقمي ملزم قانوناً", deallayer: true, competitors: true },
      { feature: "لوحة تحكم إدارة العقود", deallayer: true, competitors: true },
      { feature: "29+ قالب قانوني", deallayer: true, competitors: false },
      { feature: "إدارة العملاء (CRM)", deallayer: true, competitors: false },
      { feature: "20+ تكامل", deallayer: true, competitors: false },
      { feature: "دعم اللغة العربية", deallayer: true, competitors: false },
      { feature: "عقود غير محدودة", deallayer: true, competitors: false },
      { feature: "أسعار شفافة بدون مفاجآت", deallayer: true, competitors: false },
    ],
  },

  pricing: {
    badge: "تسعير شفاف بدون مفاجآت",
    h1: "كل صفقة يمكنك أن تكون فخوراً بها\nبدون كسر البنك",
    sub: "مرن وعادل وشفاف. اختر الخطة التي تناسبك - أو ابنِ خطتك الخاصة إذا لزم الأمر.",
    monthly: "شهري",
    annual: "سنوي (وفر 20%)",
    save: "وفر 20%",
    plans: [
      {
        name: "Starter",
        desc: "للبدء",
        price: 0,
        note: "مجاني إلى الأبد",
        cta: "ابدأ مجاناً",
        features: [
          { text: "3 عقود شهرياً", included: true },
          { text: "5 قوالب", included: true },
          { text: "التوقيع الرقمي", included: true },
          { text: "إدارة العملاء الأساسية", included: true },
          { text: "بدون دعم", included: true },
          { text: "Lex AI", included: false },
          { text: "التكاملات", included: false },
          { text: "API", included: false },
        ],
      },
      {
        name: "Professional",
        desc: "للنجاح",
        price: 99,
        note: "شهرياً",
        cta: "احصل على عرض",
        features: [
          { text: "عقود غير محدودة", included: true },
          { text: "جميع القوالب 29+", included: true },
          { text: "Lex AI - مساعد ذكي", included: true },
          { text: "إدارة عملاء كاملة", included: true },
          { text: "تنبيهات SMS و Push", included: true },
          { text: "دعم الدردشة المباشرة", included: true },
          { text: "20+ تكامل", included: true },
          { text: "API", included: false },
        ],
      },
      {
        name: "Enterprise",
        desc: "للمنظمات الكبيرة",
        price: null,
        note: "تسعير مخصص",
        cta: "تحدث معنا",
        features: [
          { text: "كل شيء في Professional +", included: true },
          { text: "API غير محدود", included: true },
          { text: "SSO والأمان المتقدم", included: true },
          { text: "تكاملات مخصصة", included: true },
          { text: "مدير الحساب المخصص", included: true },
          { text: "SLA مكتوب", included: true },
          { text: "خيار On-premise", included: true },
          { text: "ميزات مخصصة", included: true },
        ],
      },
    ],
    yearSuffix: "/السنة",
    faqHeading: "كل ما تحتاج لمعرفته عن التسعير",
    faqs: [
      { q: "هل يمكنني التبديل بين الخطط في أي وقت؟", a: "بالتأكيد! يمكنك الترقية أو الخفض في أي وقت. إذا خفضت، سنعيد لك جزء الأموال." },
      { q: "ماذا يحدث لعقودي إذا أوقفت Pro؟", a: "لا شيء. ستبقى عقودك على خوادمنا. فقط لن تتمكن من إنشاء عقود جديدة. يمكنك الوصول والتنزيل في أي وقت." },
      { q: "هل هناك سعر أدنى شهري؟", a: "لا. Starter مجاني إلى الأبد - 3 عقود شهرياً، كل ما تحتاجه للبدء." },
      { q: "هل تقبلون بطاقات الائتمان؟", a: "نعم! نستخدم Stripe. أي بطاقة في العالم تعمل - Visa و Mastercard و American Express." },
      { q: "أسئلة أخرى؟ هل يمكنني الاتصال؟", a: "نعم! نحن هنا في الدردشة المباشرة والهاتف والبريد الإلكتروني. نرد في دقائق، بالعربية." },
    ],
  },

  solutions: {
    badge: "مبني للجميع",
    h1: "سواء كنت مستقلاً\nأو منظمة كاملة",
    sub: "DealLayer تعرف احتياجاتك. اختر من ثلاث زوايا - حسب دورك أو حجم المنظمة أو الصناعة.",
    byRole: "حسب الدور ونوع الأعمال",
    roles: [
      { title: "المستقلون والمبدعون", desc: "احمِ عملك. احصل على الدفع في الوقت المحدد. لا مزيد من العملاء الذين لا يدفعون.", highlights: ["عقود الخدمة", "الاستشهادات", "تتبع الوقت"] },
      { title: "أصحاب العقارات", desc: "عقود إيجار محدثة. كل ما تحتاجه بطريقة قانونية.", highlights: ["الإيجار السكني", "الإيجار التجاري", "إدارة الممتلكات"] },
      { title: "أصحاب الأعمال الصغيرة", desc: "كل صفقة محمية. كل عميل منظم. بالضبط كما يجب.", highlights: ["اتفاقيات العميل", "الترخيص", "الشراكات"] },
      { title: "المقاولون", desc: "عقود واضحة لكل مشروع. دفعات بالمراحل. كل خطر مغطى.", highlights: ["عقود الصيانة", "المشاريع", "الاستشهادات"] },
      { title: "رواد الأعمال", desc: "اتفاقيات المؤسسين، اتفاقيات السرية، الاستثمارات. كل شيء سريع واحترافي.", highlights: ["اتفاقيات المؤسسين", "اتفاقيات السرية", "اتفاقيات الاستثمار"] },
      { title: "المحامون", desc: "أدوات لإدارة اتفاقيات العملاء. وفر الوقت، تحكم.", highlights: ["الخدمات القانونية", "إدارة العقود", "التقارير"] },
    ],
    sizes: [
      { title: "الأفراد والمستقلون", desc: "حل بسيط وزهيد ومجاني. حتى 3 عقود شهرياً، إلى الأبد.", badge: "ابدأ هنا" },
      { title: "الشركات الصغيرة والمتوسطة", desc: "10-50 موظف؟ هذا مثالي لك. عقود غير محدودة، أدوات كاملة.", badge: "شعبي" },
      { title: "المنظمات الكبيرة", desc: "50+ موظف. تحتاج API و SSO وتكاملات مخصصة.", badge: "Enterprise" },
      { title: "الحكومة والمؤسسات", desc: "متطلبات تنظيمية خاصة؟ يمكننا التعامل معها.", badge: "مخصص" },
    ],
    industries: [
      { title: "التكنولوجيا والتطوير", desc: "عقود الخدمة، اتفاقيات السرية، اتفاقيات مشاركة الملكية الفكرية. مثالي للمطورين.", sectors: ["SaaS", "الشركات الناشئة", "تطوير التطبيقات"] },
      { title: "العقارات والبناء", desc: "عقود البناء، اتفاقيات الإيجار، إدارة المشاريع.", sectors: ["الشقق", "المكاتب", "المحلات"] },
      { title: "الإعلام والمحتوى", desc: "عقود التصوير، اتفاقيات المحتوى المدعوم، الترخيص.", sectors: ["المدونون", "المصورون", "الوكالات"] },
      { title: "المال والخدمات", desc: "اتفاقيات القروض والاستثمارات والاستشارات والتأمين.", sectors: ["الاستشارات المالية", "التأمين", "الاستثمارات"] },
    ],
  },

  templates: {
    badge: "29+ قالب احترافي",
    h1: "عقد لكل\nنوع صفقة",
    sub: "القوالب كتبها محامون إسرائيليون، محدثة مع القانون الإسرائيلي. اختر وخصص وقع.",
    categories: [
      {
        name: "الخدمة والأعمال",
        templates: [
          { name: "اتفاقية خدمة عامة" },
          { name: "عقد مستقل" },
          { name: "اتفاقية المؤسسين" },
          { name: "شراكة تجارية" },
        ],
      },
      {
        name: "العقارات",
        templates: [
          { name: "الإيجار السكني" },
          { name: "الإيجار التجاري" },
          { name: "إدارة الممتلكات" },
        ],
      },
      {
        name: "القانوني والمالي",
        templates: [
          { name: "اتفاقية السرية" },
          { name: "اتفاقية القرض" },
          { name: "عقد العمل" },
          { name: "اتفاقية الوساطة" },
        ],
      },
      {
        name: "الإعلام والإبداع",
        templates: [
          { name: "التصوير والفيديو" },
          { name: "المحتوى المدعوم" },
          { name: "سفير العلامة التجارية" },
        ],
      },
    ],
    viewAll: "اعرض جميع 29+ قالب",
    suggest: "اقترح قالب جديد",
  },

  resources: {
    badge: "كل ما تحتاج للنجاح",
    h1: "تعلّم وخزّن وتطور\nمع DealLayer",
    sub: "أدلة مفصلة وفيديوهات وبلوج ومراجع قانونية ودعم حي. الكل بالعربية.",
    sections: [
      {
        title: "تعلّم بنفسك",
        resources: [
          { label: "أدلة المستخدم", desc: "8+ أدلة مفصلة", count: "8+" },
          { label: "دروس فيديو", desc: "فيديو قصير لكل ميزة", count: "20+" },
          { label: "مدونة DealLayer", desc: "تحديثات ونصائح أسبوعية", count: "50+" },
          { label: "قاعدة المعرفة القانونية", desc: "مقالات عن قانون العقود", count: "30+" },
        ],
      },
      {
        title: "احصل على مساعدة",
        resources: [
          { label: "الأسئلة الشائعة", desc: "إجابات على الأسئلة الشائعة", count: "100+" },
          { label: "دعم الدردشة المباشرة", desc: "نرد في دقائق", count: "24/7" },
          { label: "تحدث مع خبير", desc: "وقت شخصي مع الخبير", count: "30 دقيقة" },
          { label: "دعم البريد الإلكتروني", desc: "رد خلال 24 ساعة", count: "24h" },
        ],
      },
      {
        title: "المطورون",
        resources: [
          { label: "توثيق API", desc: "وثائق كاملة + أمثلة", count: "REST" },
          { label: "مستودع GitHub", desc: "أمثلة الكود على GitHub", count: "SDK" },
          { label: "دليل WebHooks", desc: "الأحداث في الوقت الفعلي", count: "Events" },
          { label: "مركز التكامل", desc: "20+ جاهز", count: "20+" },
        ],
      },
    ],
  },

  about: {
    badge: "قصتنا",
    h1: "العقود هي سجل\nالثقة والثقة",
    sub: "تم إنشاء DealLayer لنقل حماية العقود للجميع - وليس فقط لمن يستطيع الدفع للمحامي.",
    story: {
      heading: "عندما فقد مؤسسونا أموالهم بسبب عقد سيء",
      p1: "وجد أحد المؤسسين نفسه في نزاع مع عميل رفض الدفع. ادعى العميل أنه لم تكن هناك اتفاقية مكتوبة. رغم اكتمال العمل، كان كل شيء عبر الهاتف والرسائل.",
      p2: "أحبط المؤسس الثاني. 'لماذا لا توجد أدوات بسيطة وزهيدة لإنشاء عقد؟' بعد شهر، وُلدت DealLayer.",
    },
    values: [
      {
        title: "الوقوف بجانب المستقلين",
        desc: "كل صفقة صغيرة، كل مستقل، يستحق نفس الحماية القانونية مثل المنظمة الكبيرة.",
      },
      {
        title: "السرعة = القوة",
        desc: "لا تأخذ إجازة من العمل. عقود في دقائق، ليس أسابيع.",
      },
      {
        title: "الأمان بالتأكيد",
        desc: "بيانات ك مقدسة لنا. التشفير والتدقيق والامتثال - كل شيء.",
      },
      {
        title: "الشفافية التامة",
        desc: "لا مفاجآت ولا طباعة صغيرة. أنت تعرف بالضبط ما تدفعه.",
      },
    ],
    milestones: [
      { year: "2024", title: "وُلدت DealLayer", desc: "مؤسسان، الكثير من العزم." },
      { year: "Q2 2024", title: "Alpha إلى Beta", desc: "10 شركات فتحت حسابات واختبرت المنصة." },
      { year: "Q3 2024", title: "يُولد Lex AI", desc: "AI يفهم القانون الإسرائيلي. 29+ قالب قانوني." },
      { year: "Q4 2024", title: "50 عقد في الأسبوع", desc: "500+ مستخدم مسجل. البداية صغيرة." },
      { year: "Q1 2025", title: "أغلقت Series A", desc: "التمويل - سيتوسع إلى دول أخرى." },
      { year: "Q2 2025", title: "9000+ عقد", desc: "يمكننا أن نقول - نحن على المسار الصحيح." },
    ],
  },

  team: {
    badge: "فريقنا",
    h1: "من نحن\nولماذا لدينا فرصة",
    sub: "فريق صغير من متخصصي القانون والمهندسين والمشغلين. نعرف جميعاً مباشرة أن العقود السيئة تسبب الضرر - نحن هنا لإصلاحها.",
    members: [
      {
        name: "يوسي كوهين",
        role: "المؤسس والمدير التنفيذي",
        bio: "محامٍ حسب التدريب، رجل أعمال حسب القلب. فقد أموالاً في عقد سيء - أزعجه أكثر من أي شيء.",
      },
      {
        name: "أورن ليفي",
        role: "المؤسس و CTO",
        bio: "مهندس برمجيات لديه 10 سنوات من الخبرة. بنى 3 شركات ناشئة. يعرف أنها صعبة - نحن هنا لتسهيل الأمور.",
      },
      {
        name: "درور واينبرغ",
        role: "محامٍ أول",
        bio: "20 سنة من الخبرة في قانون العقود. إذا كنت محامياً ولا تستطيع النوم، فنحن هنا لك.",
      },
      {
        name: "روت شيتان",
        role: "رئيس المنتج",
        bio: "عملت مع المحامين لسنوات. تجد كل مشكلة يمكننا حلها.",
      },
    ],
  },

  contact: {
    badge: "لنتحدث",
    h1: "أحلام وأسئلة\nأو فشل ملحمي؟",
    sub: "نحن هنا للاستماع. هل لديك سؤال لأحد أعضاء فريقنا؟ أرسل رسالة الآن.",
    methods: [
      { label: "البريد الإلكتروني", value: "hello@deallayer.co.il" },
      { label: "الهاتف", value: "+972-53-123-4567" },
      { label: "العنوان", value: "تل أبيب، إسرائيل" },
    ],
    responseTime: "نرد عادة على الرسائل في غضون 24 ساعة. في الدردشة المباشرة - في دقائق.",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      placeholder: {
        name: "اسمك",
        email: "your@email.com",
        subject: "ما هذا بشأنه؟",
        message: "أخبرنا المزيد...",
      },
      submit: "أرسل الرسالة",
    },
  },

  servicePages: {
    techDevelopment: {
      hero: {
        title: "عقود شركتك التقنية - سريعة مثل التطوير الخاص بك",
        subtitle: "إدارة دورة حياة العقد المصممة لديناميكيات التكنولوجيا. من NDAs إلى اتفاقيات SaaS المعقدة، نتأكد من أن القانون لن يبطئ من منتجك.",
        cta1: "إدارة عقود التكنولوجيا",
        cta2: "عرض القوالب",
      },
      painPoints: {
        heading: "التحديات القانونية لفرق التطوير",
        items: [
          { title: "اتفاقيات سرية منسية", desc: "الكشف عن أسرار تجارية قبل الاتفاقيات الرسمية مع الشركاء المحتملين أو الموظفين الجدد." },
          { title: "الزحف في النطاق", desc: "نمو غير محكوم من اتفاقيات التطوير الغامضة التي لا تحدد معالم واضحة." },
          { title: "العمل بدون عقد نشط", desc: "بدء العمل مع العاملين بالعمل الحر على الثقة دون نقل ملكية الملكية الفكرية (IP)." },
          { title: "مستندات SaaS المشتتة", desc: "صعوبة تتبع شروط الخدمة (ToS) وسياسات الخصوصية التي تتحدث بشكل منفصل عن المنتج." },
        ],
      },
      solutions: [
        {
          heading: "اتفاقية سرية في 5 دقائق (وليس 5 أيام)",
          description: "لا تدع البيروقراطية توقف المكالمات التجارية المهمة. يمكّن DealLayer إرسال وتوقيع اتفاقيات سرية مخصصة بشكل آلي في ثوان.",
          benefits: ["تتبع العروض في الوقت الفعلي", "توقيع رقمي آمن"],
          docName: "اتفاقية الحفاظ على السرية (NDA)",
          docStatus: "موقّع",
          docMeta: { sent: "اليوم، 10:24 ص", id: "#NDA-9821" },
          docMeta_labels: { sent: "أرسل:", label_step: "خطوة", label_complete: "مكتمل", label_inprogress: "قيد الإنجاز", label_pending: "معلق" },
        },
        {
          heading: "اتفاقيات التطوير بنطاق محدد",
          description: "إنشاء اتفاقيات تطوير تترجم معالم التكنولوجيا إلى شروط قانونية ملزمة.",
          steps: [
            { num: 1, label: "المتطلبات", status: "مكتمل" },
            { num: 2, label: "التطوير", status: "قيد الإنجاز" },
            { num: 3, label: "الاختبار", status: "معلق" },
          ],
        },
      ],
      templatesHeading: "مكتبة قوالب التكنولوجيا",
      templates: [
        { title: "تطوير البرمجيات", desc: "اتفاقية تطوير برمجيات شاملة تشمل نقل الملكية الفكرية.", iconType: "code" },
        { title: "اتفاقية سرية", desc: "اتفاقية سرية ثنائية سريعة للاستخدام مع الشركاء.", iconType: "lock" },
        { title: "المقاول من الباطن", desc: "إدارة آمنة للعاملين بالعمل الحر والاستشاريين الخارجيين.", iconType: "user" },
        { title: "شروط SaaS", desc: "شروط الخدمة للمنتجات السحابية والخدمات الرقمية.", iconType: "cloud" },
        { title: "الشراكة الإستراتيجية", desc: "اتفاقية التعاون الإستراتيجي للتسويق أو التطوير المشترك.", iconType: "handshake" },
        { title: "استشارات التكنولوجيا", desc: "اتفاقية لتقديم خدمات استشارات التكنولوجيا والهندسة المعمارية.", iconType: "chart" },
      ],
      benefits: [
        { num: "01", title: "سرعة القمة", desc: "تقليل وقت التوقيع بنسبة 85% عن متوسط الصناعة." },
        { num: "02", title: "API والتكاملات", desc: "الاتصال المباشر بـ Slack و Jira و Salesforce." },
        { num: "03", title: "أمان المستوى الإنتربرايز", desc: "أمان على مستوى البنك وامتثال SOC2." },
        { num: "04", title: "Lex AI للتكنولوجيا", desc: "تحليل المخاطر الآلي المدعوم بالذكاء الاصطناعي." },
      ],
      cta: {
        heading: "هل أنت مستعد لتسريع العمليات القانونية في مؤسستك؟",
        button1: "احصل على عرض توضيحي مجاني",
        button2: "تحدث معنا",
      },
    },
  },
};

export const translations: Record<Lang, T> = { he, en, ar };
