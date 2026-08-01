import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card"
      variants={fadeUp}
      whileHover={{ y: -10 }}
    >
      <div className="skill-icon">
        <Icon size={32} />
      </div>

      <h3>{skill.title}</h3>

      <p>{skill.description}</p>

      <div className="skill-glow"></div>
    </motion.div>
  );
}
