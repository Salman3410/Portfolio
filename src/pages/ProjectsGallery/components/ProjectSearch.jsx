import { FiSearch } from "react-icons/fi";

export default function ProjectSearch({ search, setSearch }) {
  return (
    <div className="project-search">
      <FiSearch />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects..."
      />
    </div>
  );
}
