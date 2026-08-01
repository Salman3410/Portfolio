import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Stats from "./Stats";
import useLightSweepTransition from "../../animations/useLightSweepTransition";
import "./About.css";

export default function About() {
  useLightSweepTransition();

  return (
    <section className="about" id="about">
      {/* Cyan Beam */}
      <div className="light-sweep"></div>

      {/* Everything revealed after beam */}
      <div className="about-content-wrapper">
        <div className="about-container">
          <AboutImage />
          <AboutContent />
        </div>

        <Stats />
      </div>
    </section>
  );
}
