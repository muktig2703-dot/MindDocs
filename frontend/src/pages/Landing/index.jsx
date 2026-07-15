import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TechStack from "./components/TechStack/TechStack";
import Benefits from "./components/Benefits/Benefits";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
function Landing() {
  return (
    <main>

      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}

export default Landing;