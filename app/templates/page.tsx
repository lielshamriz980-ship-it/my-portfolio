import NavbarWiz from "../components/NavbarWiz";
import TemplatesHero from "./components/Hero";
import TemplateGrid from "./components/Grid";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function TemplatesPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <TemplatesHero />
        <TemplateGrid />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
