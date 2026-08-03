export default function ProjectInfo({ project }) {
  const info = [
    {
      label: "Role",
      value: project.role,
    },
    {
      label: "Client",
      value: project.client,
    },
    {
      label: "Timeline",
      value: project.timeline,
    },
    {
      label: "Tools",
      value: project.tools.join(", "),
    },
  ];

  return (
    <section className="project-info">
      <div className="project-info-grid">
        {info.map((item) => (
          <div className="project-info-card" key={item.label}>
            <span>{item.label}</span>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
