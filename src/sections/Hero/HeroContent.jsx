import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <motion.div
      className="hero-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-title">
        <motion.span
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
        >
          SAM
        </motion.span>

        <motion.span
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
          }}
        >
          FOLIO
        </motion.span>
      </h1>

      <motion.h2
        className="hero-subtitle"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.75,
          duration: 0.8,
        }}
      >
        Graphic Designer
        <span> • </span> Frontend Developer
      </motion.h2>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
      >
        
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
