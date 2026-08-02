import Navbar from "../components/Navbar/Navbar";

import Hero from "../sections/Hero/Hero";
import FeaturedWork from "../sections/FeaturedWork/FeaturedWork";
import Services from "../sections/Services/Services";
import Skills from "../sections/Skills/Skills";
import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Services />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
