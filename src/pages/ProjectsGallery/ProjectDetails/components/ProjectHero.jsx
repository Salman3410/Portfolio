import { motion } from "framer-motion";
import "../ProjectDetails.css";

export default function ProjectHero() {
  return (
    <section className="project-hero">
      <motion.img
        src="/projects/movie1.jpg"
        alt="Project"
        className="project-cover"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
      />

      <div className="project-overlay" />

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
        <span className="project-category">Movie Poster</span>

        <h1>Netflix Movie Poster</h1>

        <p>
          A cinematic promotional poster inspired by Netflix originals using
          Photoshop.
        </p>
      </motion.div>
    </section>
  );
}
