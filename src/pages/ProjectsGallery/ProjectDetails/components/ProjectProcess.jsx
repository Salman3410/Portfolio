import { motion } from "framer-motion";
import "./ProjectProcess.css";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Collected inspiration, analyzed competitors, and explored visual styles to define the creative direction.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Created rough layouts, typography hierarchy, and established the overall composition.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Designed the final artwork using Photoshop with color grading, lighting, and visual effects.",
  },
  {
    number: "04",
    title: "Final Output",
    description:
      "Exported high-resolution assets and presentation mockups for portfolio showcase.",
  },
];

export default function ProjectProcess() {
  return (
    <section className="project-process">
      <div className="process-heading">
        <span>WORKFLOW</span>

        <h2>Design Process</h2>

        <p>
          Every project follows a structured workflow from research to the final
          delivery.
        </p>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <motion.div
            className="timeline-item"
            key={step.number}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
          >
            <div className="timeline-number">{step.number}</div>

            <div className="timeline-content">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
