import NavbarWiz from "../components/NavbarWiz";
import PlatformHero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Integrations from "./components/Integrations";
import Security from "./components/Security";
import Comparison from "./components/Comparison";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function PlatformPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <PlatformHero />
        <FeatureGrid />
        <Integrations />
        <Security />
        <Comparison />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
