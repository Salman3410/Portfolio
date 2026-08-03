import { FiSearch } from "react-icons/fi";

export default function ProjectSearch({ search, setSearch }) {
  return (
    <div className="search-box">
      <FiSearch />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects..."
      />
    </div>
  );
}
