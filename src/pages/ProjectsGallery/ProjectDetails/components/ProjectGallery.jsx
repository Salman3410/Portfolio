import { motion } from "framer-motion";
import "./ProjectGallery.css";

const gallery = [
  "/projects/movie1.jpg",
  "/projects/movie2.jpg",
  "/projects/movie3.jpg",
  "/projects/movie4.jpg",
  "/projects/movie5.jpg",
];

export default function ProjectGallery() {
  return (
    <section className="project-gallery">
      <div className="gallery-heading">
        <span>SHOWCASE</span>

        <h2>Project Gallery</h2>

        <p>Explore different views and presentations of the final design.</p>
      </div>

      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <motion.div
            key={index}
            className={`gallery-item ${index % 3 === 0 ? "large" : ""}`}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <img src={image} alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
