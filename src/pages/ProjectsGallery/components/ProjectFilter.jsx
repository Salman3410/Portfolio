const filters = [
  "All",
  "UI Design",
  "Thumbnails",
  "Posters",
  "Movie Posters",
  "Magazine",
];

export default function ProjectFilter({ category, setCategory }) {
  return (
    <div className="filter-group">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`filter-btn ${category === item ? "active" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
