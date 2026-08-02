import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./ProjectNavigation.css";

export default function ProjectNavigation() {
  return (
    <section className="project-navigation">
      <div className="nav-card previous">
        <span>Previous Project</span>

        <h3>Travel Poster</h3>

        <button>
          <FiArrowLeft />
          Previous
        </button>
      </div>

      <div className="nav-card next">
        <span>Next Project</span>

        <h3>YouTube Gaming Thumbnail</h3>

        <button>
          Next
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}
