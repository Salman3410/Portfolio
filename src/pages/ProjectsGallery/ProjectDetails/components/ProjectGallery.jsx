import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../ProjectDetails.css";

export default function ProjectGallery({ project }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
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
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`${project.title} ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              className="gallery-lightbox-image"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
