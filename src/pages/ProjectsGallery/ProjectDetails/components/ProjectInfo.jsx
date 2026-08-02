// import "./ProjectDetails.css";

const info = [
  {
    label: "Role",
    value: "Graphic Designer",
  },
  {
    label: "Client",
    value: "Personal Concept",
  },
  {
    label: "Timeline",
    value: "2 Days",
  },
  {
    label: "Tools",
    value: "Photoshop",
  },
];

export default function ProjectInfo() {
  return (
    <section className="project-info">
      <div className="info-grid">
        {info.map((item) => (
          <div className="info-card" key={item.label}>
            <span>{item.label}</span>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
