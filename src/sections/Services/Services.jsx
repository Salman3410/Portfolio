import { motion } from "framer-motion";
import fadeUp from "../../animations/fadeUp";
import stagger from "../../animations/stagger";
import services from "./servicesData";
import ServiceCard from "./ServiceCard";
import "./Services.css";

export default function Services() {
  return (
    <motion.section
      id="services"
      className="services"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <motion.div className="services-heading" variants={fadeUp}>
        <span>WHAT I DO</span>

        <h2>
          Turning ideas into
          <br />
          digital experiences.
        </h2>

        <p>
          I combine creativity, design and development to build modern digital
          experiences that feel premium, interactive and memorable.
        </p>
      </motion.div>

      <motion.div className="services-grid" variants={stagger}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </motion.section>
  );
}
