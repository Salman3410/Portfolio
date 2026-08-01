import { motion } from "framer-motion";
import footerLinks from "./footerData";

export default function FooterLinks() {
  return (
    <motion.div
      className="footer-links"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <h3>Navigation</h3>

      <ul>
        {footerLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
