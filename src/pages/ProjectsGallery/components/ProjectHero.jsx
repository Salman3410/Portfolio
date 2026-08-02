import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProjectHero() {
  const navigate = useNavigate();

  return (
    <section className="gallery-hero">
      <button className="back-btn" onClick={() => navigate("/")}>
        <FiArrowLeft />
        Back
      </button>

      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        All Projects
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
        A collection of UI designs, branding, posters, websites and mobile
        applications that I've crafted.
      </motion.p>
    </section>
  );
}
