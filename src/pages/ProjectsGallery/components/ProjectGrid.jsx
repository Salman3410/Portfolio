import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
