import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsGallery from "./pages/ProjectsGallery/ProjectsGallery";
import ProjectDetails from "./pages/ProjectsGallery/ProjectDetails/ProjectDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsGallery />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
