import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.article
      className="gallery-project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <div className="project-overlay">
          <span>{project.category}</span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <button>
            View Project
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
