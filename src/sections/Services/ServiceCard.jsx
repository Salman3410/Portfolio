import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import fadeUp from "../../animations/fadeUp";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="service-card"
      variants={fadeUp}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
    >
      <motion.div
        className="service-icon"
        whileHover={{
          rotate: -10,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 12,
        }}
      >
        <Icon />
      </motion.div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <motion.div className="service-arrow" whileHover={{ x: 8 }}>
        <FiArrowUpRight />
      </motion.div>

      <div className="service-glow"></div>
    </motion.div>
  );
}
