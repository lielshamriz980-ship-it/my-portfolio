import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import LexAISection from "./components/LexAISection";
import FeaturesGrid from "./components/FeaturesGrid";
import Templates from "./components/Templates";
import Stats from "./components/Stats";
import ActivityTicker from "./components/ActivityTicker";
import AppPreview from "./components/AppPreview";
import ForWhom from "./components/ForWhom";
import Security from "./components/Security";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ActivityTicker />
        <ProblemSection />
        <HowItWorks />
        <LexAISection />
        <FeaturesGrid />
        <Templates />
        <Stats />
        <AppPreview />
        <ForWhom />
        <Security />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
