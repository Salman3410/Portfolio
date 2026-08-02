import "./ProjectDetails.css";

import BackButton from "./components/BackButton";
import ProjectHero from "./components/ProjectHero";
import ProjectInfo from "./components/ProjectInfo";
import ProjectOverview from "./components/ProjectOverview";
import ProjectGallery from "./components/ProjectGallery";
// import ProjectTools from "./components/ProjectTools";
import ProjectProcess from "./components/ProjectProcess";
import ProjectNavigation from "./components/ProjectNavigation";
import CTASection from "./components/CTASection";

export default function ProjectDetails() {
  return (
    <main className="project-details-page">
      <BackButton />

      <ProjectHero />

      <ProjectInfo />

      <ProjectOverview />

      <ProjectGallery />

      {/* <ProjectTools /> */}

      <ProjectProcess />

      <CTASection />

      <ProjectNavigation />
    </main>
  );
}
