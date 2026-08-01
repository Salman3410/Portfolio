export default function ProjectCard({ project, large }) {
  return (
    <div className={`project-card ${large ? "large" : ""}`}>
      <img src={project.image} alt={project.title} loading="lazy" />

      <div className="project-overlay">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
      </div>
    </div>
  );
}
