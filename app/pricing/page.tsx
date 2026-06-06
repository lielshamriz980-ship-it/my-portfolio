import NavbarWiz from "../components/NavbarWiz";
import PricingHero from "./components/Hero";
import PricingTable from "./components/PricingTable";
import FAQ from "./components/FAQ";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function PricingPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <PricingHero />
        <PricingTable />
        <FAQ />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
