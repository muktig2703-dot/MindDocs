import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-40
        pb-24
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-12">

        <HeroContent />

        <DashboardPreview />

      </div>
    </section>
  );
}

export default Hero;