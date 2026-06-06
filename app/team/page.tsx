import NavbarWiz from "../components/NavbarWiz";
import TeamHero from "./components/Hero";
import TeamGrid from "./components/Grid";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function TeamPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <TeamHero />
        <TeamGrid />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
