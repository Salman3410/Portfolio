import { motion } from "framer-motion";
import profileImage from "../../assets/images/Sam.jpeg";

export default function AboutImage() {
  return (
    <motion.div
      className="about-image"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
    >
      <div className="about-glow"></div>

      <img src={profileImage} alt="Sam" />

      <motion.div
        className="experience-badge"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <span>2+</span>

        <p>Years Experience</p>
      </motion.div>
    </motion.div>
  );
}
