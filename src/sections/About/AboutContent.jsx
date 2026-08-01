import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      className="about-content"
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.9,
      }}
    >
      <span>ABOUT ME</span>

      <h2>
        Designing experiences
        <br />
        that people remember.
      </h2>

      <p>
        I'm a Graphic Designer and Frontend Developer passionate about building
        modern digital experiences that combine creativity, usability and
        performance.
      </p>

      <p>
        From branding and posters to interactive websites and mobile
        applications, I enjoy transforming ideas into polished products with
        attention to every detail.
      </p>

      <button className="about-btn">Let's Work Together</button>
    </motion.div>
  );
}
