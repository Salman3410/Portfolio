import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";

const socials = [
  {
    id: 1,
    icon: FaGithub,
    url: "https://github.com/Salman3410",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    url: "https://linkedin.com/in/m-salman-saeed",
  },
  {
    id: 3,
    icon: FaInstagram,
    url: "https://instagram.com/_.34.ssp",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      className="social-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span>Follow My Journey</span>

      <h3>Let's build something amazing.</h3>

      <div className="social-icons">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -8,
                rotate: -8,
                scale: 1.1,
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
    </motion.div>
  );
}
