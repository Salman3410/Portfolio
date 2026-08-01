import { motion } from "framer-motion";
import "./Hero.css";

const badges = [
  { name: "Photoshop", top: "18%", left: "18%", delay: 0 },
  { name: "React Native", top: "28%", right: "12%", delay: 0.6 },
  { name: "JavaScript", bottom: "28%", left: "10%", delay: 1.2 },
  { name: "Illustrator", bottom: "18%", right: "18%", delay: 1.8 },

];

export default function TechBadges() {
  return (
    <>
      {badges.map((badge) => (
        <motion.div
          key={badge.name}
          className="tech-badge"
          style={badge}
          animate={{
            y: [0, -12, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: badge.delay,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
            y: -8,
          }}
        >
          {badge.name}
        </motion.div>
      ))}
    </>
  );
}
