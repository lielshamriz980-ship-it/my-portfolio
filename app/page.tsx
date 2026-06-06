import NavbarWiz from "./components/NavbarWiz";
import Hero2 from "./home2/components/Hero2";
import TrustBar from "./home2/components/TrustBar";
import PainPoints from "./home2/components/PainPoints";
import Features2 from "./home2/components/Features2";
import Testimonials from "./home2/components/Testimonials";
import Stats2 from "./home2/components/Stats2";
import CTA2 from "./home2/components/CTA2";
import Footer2 from "./home2/components/Footer2";

export default function Home() {
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
