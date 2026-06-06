import { ArrowRight, CheckCircle } from "lucide-react";
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

export default async function ServicePage({ params }: any) {
  const resolvedParams = await params;
  const { category, item } = resolvedParams;

  const decodeSlug = (slug: string) => {
    return slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  };

  const serviceTitle = decodeSlug(item);
  const categoryTitle = decodeSlug(category);

  const features = ["Smart automation", "Real-time analytics", "Seamless integrations", "24/7 support"];

  return (
    <>
      <NavbarWiz />
      <main>
        <section className="py-20 md:py-32 relative overflow-hidden bg-white mt-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #C7D2FE 0%, transparent 70%)" }} />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#4F46E5" }}>
                {categoryTitle} / {serviceTitle}
              </p>
              <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#1E1B4B" }}>
                {serviceTitle}
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#6B7280" }}>
                Professional solution designed for your success.
              </p>
              <button className="btn-shimmer flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-white"
                style={{ background: "#4F46E5" }}>
                Try Free <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="font-black text-center mb-12" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#1E1B4B" }}>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 flex gap-4" style={{ border: "1.5px solid #E5E7EB" }}>
                  <CheckCircle size={24} color="#10B981" />
                  <p className="font-semibold" style={{ color: "#1E1B4B" }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
