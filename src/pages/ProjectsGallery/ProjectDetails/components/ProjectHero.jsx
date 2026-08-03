import { motion } from "framer-motion";
import "../ProjectDetails.css";

export default function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <motion.img
        src={project.cover}
        alt="Project"
        className="project-cover"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
      />

      <div className="project-hero-overlay" />

      <motion.div
        className="project-hero-content"
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
      >
        <span className="project-category">{project.category}</span>

        <h1>{project.title}</h1>

        <p>{project.description}</p>
      </motion.div>
    </section>
  );
}
