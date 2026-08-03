import { useParams } from "react-router-dom";
import projects from "../data/projectsData";

import "./ProjectDetails.css";

import BackButton from "./components/BackButton";
import ProjectHero from "./components/ProjectHero";
import ProjectInfo from "./components/ProjectInfo";
import ProjectOverview from "./components/ProjectOverview";
import ProjectGallery from "./components/ProjectGallery";
import ProjectProcess from "./components/ProjectProcess";
import CTASection from "./components/CTASection";
import ProjectNavigation from "./components/ProjectNavigation";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));
console.log(project);
  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <main className="project-details-page">
      <BackButton />

      <ProjectHero project={project} />

      <ProjectInfo project={project} />

      <ProjectOverview project={project} />

      <ProjectGallery project={project} />

      <ProjectProcess project={project} />

      <CTASection />

      <ProjectNavigation />
    </main>
  );
}
