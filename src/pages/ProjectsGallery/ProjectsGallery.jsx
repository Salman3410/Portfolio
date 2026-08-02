import { useMemo, useState } from "react";

import "./ProjectsGallery.css";

import ProjectHero from "./components/ProjectHero";
import ProjectSearch from "./components/ProjectSearch";
import ProjectFilter from "./components/ProjectFilter";
import ProjectGrid from "./components/ProjectGrid";

import projects from "./data/projectsData";

export default function ProjectsGallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory = category === "All" || project.category === category;

      const matchSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <main className="projects-gallery">
      <ProjectHero />

      <div className="gallery-toolbar">
        <ProjectSearch search={search} setSearch={setSearch} />

        <ProjectFilter category={category} setCategory={setCategory} />
      </div>

      <ProjectGrid projects={filteredProjects} />
    </main>
  );
}
