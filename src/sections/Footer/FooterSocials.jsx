import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaArrowUp,
} from "react-icons/fa";

const socials = [
  {
    id: 1,
    icon: FaGithub,
    link: "https://github.com/Salman3410",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    link: "https://linkedin.com/in/m-salman-saeed",
  },
  {
    id: 3,
    icon: FaInstagram,
    link: "https://instagram.com/_.34.ssp",
  },
];

export default function FooterSocials() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="footer-socials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <h3>Follow Me</h3>

      <div className="footer-social-icons">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -8,
                rotate: 10,
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>

      <motion.button
        className="back-top"
        onClick={scrollTop}
        whileHover={{
          y: -6,
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <FaArrowUp />
      </motion.button>
    </motion.div>
  );
}
