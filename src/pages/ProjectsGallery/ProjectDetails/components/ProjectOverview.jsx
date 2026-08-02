import { motion } from "framer-motion";
import "./ProjectOverview.css";

export default function ProjectOverview() {
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

          <p>
            Design a cinematic movie poster capable of capturing attention while
            maintaining a professional streaming platform aesthetic.
          </p>
        </motion.div>

        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Challenge</h3>

          <p>
            Creating visual hierarchy between the title, character, background
            effects and typography without making the poster feel cluttered.
          </p>
        </motion.div>

        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Solution</h3>

          <p>
            I combined dramatic lighting, cinematic grading, depth effects and
            bold typography to achieve a balanced composition.
          </p>
        </motion.div>

        <motion.div
          className="overview-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Result</h3>

          <p>
            Produced a modern promotional poster suitable for social media
            campaigns and digital advertising.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
