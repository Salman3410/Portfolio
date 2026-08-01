import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import useHeroScroll from "../../hooks/useHeroScroll";
import HeroSpotlight from "./HeroSpotlight";
import TechBadges from "./TechBadges";
import useHeroExit from "../../hooks/useHeroExit";

import "./Hero.css";

function Hero() {
  useHeroScroll();

  return (
    <section className="hero" id="home">
      <HeroSpotlight />

      <div className="hero-light light-1" />
      <div className="hero-light light-2" />
      <div className="hero-light light-3" />
      <div className="hero-background hero-canvas">
        <HeroBackground />
      </div>

      <TechBadges />

      <div className="hero-overlay">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;
