import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";
import stagger from "../../animations/stagger";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

import "./Contact.css";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {/* Heading */}

      <motion.div className="contact-heading" variants={fadeUp}>
        <span>GET IN TOUCH</span>

        <h2>
          Let's create
          <br />
          something amazing.
        </h2>

        <p>
          Whether you need a modern website, mobile application, branding, or
          creative design, I'd love to hear about your project.
        </p>
      </motion.div>

      {/* Contact Section */}

      <div className="contact-wrapper">
        <motion.div variants={fadeUp}>
          <ContactInfo />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ContactForm />
        </motion.div>
      </div>

      {/* Social Links */}

      <motion.div variants={fadeUp}>
        <SocialLinks />
      </motion.div>
    </motion.section>
  );
}
