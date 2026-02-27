import React from "react";
import Button from "react-bootstrap/Button";

export default function Projects(props) {
  const projects = props.projects.map((project) => {
    const tech = project.technologies.map((t) => (
      <span className="project-tech-badge" key={t.name}>
        <i className={t.class}></i> {t.name}
      </span>
    ));

    return (
      <div className="project-card" key={project.title}>
        {project.image && (
          <div className="project-card-image">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
        )}
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>
          <span className="project-date">{project.startDate}</span>
        </div>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">{tech}</div>
        <div className="project-card-links">
          {project.url && (
            <Button
              className="button"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i> View Project
            </Button>
          )}
          {project.git && (
            <Button
              className="button"
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> View Code
            </Button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <h1 className="section-title mb-0 pb-5">Projects</h1>
      <div className="projects-grid">{projects}</div>
    </section>
  );
}
