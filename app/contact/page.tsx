import NavbarWiz from "../components/NavbarWiz";
import ContactHero from "./components/Hero";
import ContactForm from "./components/Form";
import Footer2 from "../home2/components/Footer2";

export default function ContactPage() {
  return (
    <>
      <NavbarWiz />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer2 />
    </>
  );
}
