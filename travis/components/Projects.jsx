// /components/Projects.jsx
export default function Projects({ projects }) {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
