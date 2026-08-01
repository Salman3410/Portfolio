import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";

export default function ContactForm() {
  return (
    <motion.form className="contact-form" variants={fadeUp}>
      <div className="input-group">
        <label>Your Name</label>
        <input type="text" placeholder="John Doe" />
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="john@email.com" />
      </div>

      <div className="input-group">
        <label>Project Type</label>
        <select defaultValue="">
          <option value="" disabled>
            Select a service
          </option>

          <option>Graphic Design</option>
          <option>Website Development</option>
          <option>React Native App</option>
        </select>
      </div>

      <div className="input-group">
        <label>Message</label>

        <textarea
          rows="6"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <motion.button
        className="contact-btn"
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        Send Message →
      </motion.button>
    </motion.form>
  );
}
