import { motion } from "framer-motion";
import "../ProjectDetails.css";

export default function ProjectGallery({ project }) {
  return (
    <section className="project-gallery">
      <div className="gallery-heading">
        <span>SHOWCASE</span>

        <h2>Project Gallery</h2>

        <p>Explore different views and presentations of the final design.</p>
      </div>

      <div className="gallery-grid">
        {project.gallery.map((image, index) => (
          <motion.div
            key={index}
            className={`gallery-item ${index % 3 === 0 ? "large" : ""}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <img src={image} alt={`${project.title} ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
