import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import projects from "./projectsData";
import ProjectCard from "./ProjectCard";

import fadeUp from "../../animations/fadeUp";
import stagger from "../../animations/stagger";


import "./FeaturedWork.css";
import { useNavigate } from "react-router-dom";

export default function FeaturedWork() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const navigate = useNavigate();

  return (
    <motion.section
      className="featured"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="featured-heading" variants={fadeUp}>
        <span>Selected Work</span>

        <h2>Some of my favorite creative projects</h2>
      </motion.div>

      <motion.div variants={fadeUp}>
        <ProjectCard project={featured} large />
      </motion.div>

      <motion.div className="project-grid" variants={stagger}>
        {others.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="view-all"
        variants={fadeUp}
        onClick={() => navigate("/projects")}
      >
        View All Projects
        <FiArrowRight />
      </motion.button>
    </motion.section>
  );
}
