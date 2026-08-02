import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>LET'S BUILD SOMETHING AMAZING</span>

        <h2>Interested in working together?</h2>

        <p>
          Whether it's graphic design, UI/UX or frontend development, I'm always
          excited to collaborate on meaningful projects.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => navigate("/#contact")}>
            Contact Me
            <FiArrowRight />
          </button>

          <button className="cta-secondary">
            Resume
            <FiDownload />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
