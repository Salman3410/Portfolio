import { motion } from "framer-motion";
import "./ProjectOverview.css";

export default function ProjectOverview({ project }) {
  return (
    <section className="project-overview">
      <motion.div
        className="overview-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>CASE STUDY</span>

        <h2>Project Overview</h2>
      </motion.div>

      <div className="overview-grid">
        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Objective</h3>

          <p>{project.overview.objective}</p>
        </motion.div>

        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Challenge</h3>

          <p>{project.overview.challenge}</p>
        </motion.div>

        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Solution</h3>

          <p>{project.overview.solution}</p>
        </motion.div>

        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Result</h3>

          <p>{project.overview.result}</p>
        </motion.div>
      </div>
    </section>
  );
}
