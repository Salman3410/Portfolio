import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";
import stagger from "../../animations/stagger";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="footer-container">
        <motion.div variants={fadeUp}>
          <FooterBrand />
        </motion.div>

        <motion.div variants={fadeUp}>
          <FooterLinks />
        </motion.div>

        <motion.div variants={fadeUp}>
          <FooterSocials />
        </motion.div>
      </div>

      <motion.div className="footer-bottom" variants={fadeUp}>
        <div className="footer-line"></div>

        <p>© 2026 SAMFOLIO. Crafted with React, Three.js & Framer Motion.</p>
      </motion.div>
    </motion.footer>
  );
}
