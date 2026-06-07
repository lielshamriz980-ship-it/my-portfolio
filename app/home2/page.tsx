import NavbarWiz from "../components/NavbarWiz";
import Hero2 from "./components/Hero2";
import TrustBar from "./components/TrustBar";
import PainPoints from "./components/PainPoints";
import Features2 from "./components/Features2";
import Testimonials from "./components/Testimonials";
import Stats2 from "./components/Stats2";
import CTA2 from "./components/CTA2";
import Footer2 from "./components/Footer2";

export default function Home2() {
  return (
    <>
      <NavbarWiz />
      <main>
        <Hero2 />
        <TrustBar />
        <PainPoints />
        <Features2 />
        <Testimonials />
        <Stats2 />
        <CTA2 />
      </main>
      <Footer2 />
    </>
  );
}
