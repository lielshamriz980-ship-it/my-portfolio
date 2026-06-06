import NavbarWiz from "../components/NavbarWiz";
import AboutHero from "./components/Hero";
import StorySection from "./components/Story";
import ValuesSection from "./components/Values";
import MilestoneSection from "./components/Milestones";
import CTA2 from "../home2/components/CTA2";
import Footer2 from "../home2/components/Footer2";

export default function AboutPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <AboutHero />
        <StorySection />
        <ValuesSection />
        <MilestoneSection />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
