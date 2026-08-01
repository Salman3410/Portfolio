import { FiArrowRight } from "react-icons/fi";

function HeroButtons() {
  return (
    <div className="hero-buttons">
      <button className="btn btn-primary">
        <span>View Projects</span>
        <FiArrowRight className="btn-icon" />
      </button>

      <button className="btn btn-secondary">
        <span>Hire Me</span>
      </button>
    </div>
  );
}

export default HeroButtons;
