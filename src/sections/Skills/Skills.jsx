import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";
import stagger from "../../animations/stagger";
import SkillCard from "./SkillCard";
import skills from "./skillsData";
import usePortalTransition from "../../animations/usePortalTransition";
import "./Skills.css";

export default function Skills() {
  usePortalTransition();

  return (
    <motion.section
      id="skills"
      className="skills"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {/* Portal */}
      <div className="portal-transition">
        <div className="portal-ring"></div>
        <div className="portal-core"></div>
      </div>

      {/* Everything that should appear through the portal */}
      <div className="skills-content">
        <motion.div className="skills-heading" variants={fadeUp}>
          <span>CREATIVE TOOLKIT</span>

          <h2>
            Design.
            <br />
            Develop.
            <br />
            Deliver.
          </h2>

          <p>
            The technologies and creative tools I use to transform ideas into
            beautiful digital experiences.
          </p>
        </motion.div>

        <motion.div className="skills-grid" variants={stagger}>
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
