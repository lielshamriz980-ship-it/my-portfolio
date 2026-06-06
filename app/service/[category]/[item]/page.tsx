import { ArrowRight, CheckCircle, Zap, Shield, Users, Code, Bell, Globe } from "lucide-react";
import NavbarWiz from "../../../components/NavbarWiz";
import CTA2 from "../../../home2/components/CTA2";
import Footer2 from "../../../home2/components/Footer2";

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
  ];
}

const serviceContent: Record<string, any> = {
  "lex-ai": {
    title: "Lex AI",
    subtitle: "AI-Powered Contract Generation",
    description: "Create professional contracts in minutes with conversational AI that understands Israeli law.",
    icon: Zap,
    color: "#4F46E5",
    features: [
      "Natural conversation flow - no legal jargon needed",
      "Automatic risk analysis and compliance check",
      "29+ templates tailored to Israeli law",
      "Real-time suggestions and improvements",
      "Instant PDF generation",
      "Contract quality score"
    ],
    benefits: [
      { title: "2 Minutes Average", desc: "Create contract in just a conversation" },
      { title: "100% Legal", desc: "Full compliance with Israeli contract law" },
      { title: "Smart AI", desc: "Learns from your preferences over time" }
    ]
  },
  "digital-signature": {
    title: "Digital Signature",
    subtitle: "Legally Binding Electronic Signatures",
    description: "Send contracts for signature via WhatsApp, SMS, or email. Full audit trail included.",
    icon: Shield,
    color: "#059669",
    features: [
      "Legally binding digital signatures",
      "Full audit trail with IP and timestamp",
      "Mobile-friendly signing experience",
      "Multiple recipient support",
      "Reminder notifications",
      "Signature verification certificates"
    ],
    benefits: [
      { title: "90% Faster", desc: "Recipients sign from their phone in seconds" },
      { title: "Court-Ready", desc: "Legally defensible in Israeli courts" },
      { title: "Zero Friction", desc: "No special software needed to sign" }
    ]
  },
  "contract-management": {
    title: "Contract Management",
    subtitle: "Central Dashboard for All Your Deals",
    description: "Track every contract's status in real-time. Know who signed, what's pending, and when it expires.",
    icon: Users,
    color: "#7C3AED",
    features: [
      "Real-time contract status tracking",
      "Smart filters and search",
      "Expiration date alerts",
      "Client-level organization",
      "Archive and historical records",
      "Bulk export to Excel/PDF"
    ],
    benefits: [
      { title: "Single Source of Truth", desc: "All contracts in one place" },
      { title: "Never Miss a Deadline", desc: "Automatic expiration alerts" },
      { title: "Client View", desc: "See all deals with each client instantly" }
    ]
  },
  "client-management": {
    title: "Client Management",
    subtitle: "Simple CRM for Contract Relationships",
    description: "Keep all client information organized. Track every deal, payment term, and contract history.",
    icon: Users,
    color: "#DB2777",
    features: [
      "Client profiles and contact details",
      "Transaction history per client",
      "Deal value tracking",
      "Payment term notes",
      "Contact preferences",
      "Export client lists"
    ],
    benefits: [
      { title: "Quick Access", desc: "Find any client's info instantly" },
      { title: "History Tracking", desc: "See all past deals with one click" },
      { title: "Relationship View", desc: "Understand each client's value" }
    ]
  },
  "alerts": {
    title: "Smart Alerts",
    subtitle: "Get Notified When It Matters",
    description: "SMS and push notifications keep you informed of every signature, deadline, and status change.",
    icon: Bell,
    color: "#F59E0B",
    features: [
      "SMS & push notifications",
      "Real-time signature alerts",
      "Deadline reminders",
      "Custom alert rules",
      "Multi-device support",
      "Do not disturb scheduling"
    ],
    benefits: [
      { title: "Never Miss a Signature", desc: "Get notified instantly when someone signs" },
      { title: "Deadline Protection", desc: "Never forget an expiring contract" },
      { title: "Always in Control", desc: "Customize what notifications you get" }
    ]
  },
  "security-privacy": {
    title: "Security & Privacy",
    subtitle: "Enterprise-Grade Protection",
    description: "Your data is protected with bank-level encryption, two-factor authentication, and compliance certifications.",
    icon: Shield,
    color: "#DC2626",
    features: [
      "SSL/TLS encryption in transit",
      "AES-256 encryption at rest",
      "Two-factor authentication (2FA)",
      "ISO 27001 certified",
      "SOC 2 Type II compliant",
      "GDPR compliant"
    ],
    benefits: [
      { title: "Bank-Level Security", desc: "Same encryption as financial institutions" },
      { title: "Compliance Ready", desc: "Meet regulatory requirements instantly" },
      { title: "Your Data, Your Control", desc: "Zero sharing with third parties" }
    ]
  },
  "api": {
    title: "API Access",
    subtitle: "Build Custom Integrations",
    description: "Full API for developers to build custom workflows and integrations with existing systems.",
    icon: Code,
    color: "#0891B2",
    features: [
      "REST API with full documentation",
      "Webhook support for events",
      "Rate limiting and scaling",
      "OAuth 2.0 authentication",
      "Sandbox environment",
      "Developer dashboard"
    ],
    benefits: [
      { title: "Full Control", desc: "Automate exactly what you need" },
      { title: "Real-Time Sync", desc: "Webhooks keep systems in sync instantly" },
      { title: "Enterprise Scale", desc: "Handle thousands of contracts daily" }
    ]
  },
  "integrations": {
    title: "Integrations",
    subtitle: "Connect to 20+ Tools",
    description: "Connect DealLayer to WhatsApp, Gmail, Zapier, and more. Keep everything in sync.",
    icon: Globe,
    color: "#06B6D4",
    features: [
      "WhatsApp Business integration",
      "Gmail and Outlook sync",
      "Zapier automation",
      "Slack notifications",
      "Google Drive storage",
      "20+ pre-built integrations"
    ],
    benefits: [
      { title: "Seamless Workflow", desc: "Use tools you already know" },
      { title: "Automation", desc: "Reduce manual work by 80%" },
      { title: "No Switching", desc: "Stay in your favorite apps" }
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
    subtitle: "Premium Service",
    description: "Professional solution designed for your success.",
    icon: Zap,
    color: "#4F46E5",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    benefits: [
      { title: "Benefit 1", desc: "Description of benefit" },
      { title: "Benefit 2", desc: "Description of benefit" },
      { title: "Benefit 3", desc: "Description of benefit" }
    ]
  };

  const Icon = content.icon;
  const categoryTitle = decodeSlug(category);

  return (
    <>
      <NavbarWiz />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-36 relative overflow-hidden bg-white mt-16" style={{ direction: "ltr" }}>
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

            <h1 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(44px, 6vw, 72px)", color: "#1E1B4B" }}>
              {content.title}
            </h1>

            <p className="text-xl font-semibold mb-6" style={{ color: content.color }}>
              {content.subtitle}
            </p>

            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: "#6B7280" }}>
              {content.description}
            </p>

            <button className="btn-shimmer flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-white"
              style={{ background: content.color }}>
              Start Free Trial <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="font-black text-center mb-16" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
              Why Choose This Feature?
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
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature: string, i: number) => (
                <div key={i} className="rounded-2xl p-6 flex gap-4 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
                  <CheckCircle size={24} color={content.color} className="flex-shrink-0 mt-1" />
                  <p className="font-semibold text-lg" style={{ color: "#1E1B4B" }}>
                    {feature}
                  </p>
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
