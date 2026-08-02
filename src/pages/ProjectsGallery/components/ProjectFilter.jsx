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
    <div className="project-filter">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={category === item ? "active-filter" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
