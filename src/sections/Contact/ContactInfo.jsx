import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";
import contactInfo from "./contactData";

export default function ContactInfo() {
  return (
    <motion.div className="contact-info" variants={fadeUp}>
      {contactInfo.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            className="contact-card"
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div className="contact-icon">
              <Icon />
            </div>

            <div className="contact-text">
              <span>{item.title}</span>
              <h3>{item.value}</h3>
            </div>

            <div className="contact-glow"></div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
