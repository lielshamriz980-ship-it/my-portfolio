import NavbarWiz from "../components/NavbarWiz";
import SolutionsHero from "./components/Hero";
import ByRole from "./components/ByRole";
import BySize from "./components/BySize";
import ByIndustry from "./components/ByIndustry";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function SolutionsPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <SolutionsHero />
        <ByRole />
        <BySize />
        <ByIndustry />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
