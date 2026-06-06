import NavbarWiz from "../components/NavbarWiz";
import ResourcesHero from "./components/Hero";
import ResourcesGrid from "./components/Grid";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function ResourcesPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <ResourcesHero />
        <ResourcesGrid />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
