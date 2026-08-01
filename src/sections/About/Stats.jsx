import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";
import stats from "./statsData";

export default function Stats() {
  return (
    <motion.div
      className="stats"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className="stat-card"
          variants={fadeUp}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            y: -10,
            scale: 1.04,
          }}
        >
          <h3>
            {item.number}
            {item.suffix}
          </h3>

          <p>{item.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
