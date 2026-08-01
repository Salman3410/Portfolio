import { motion } from "framer-motion";

export default function FooterBrand() {
  return (
    <motion.div
      className="footer-brand"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-glow"></div>

      <h2>SAMFOLIO</h2>

      <p>
        Crafting modern websites, mobile apps and digital experiences that
        combine clean design with interactive development.
      </p>

      <span className="footer-tagline">
        Let's Build Something Extraordinary.
      </span>
    </motion.div>
  );
}
