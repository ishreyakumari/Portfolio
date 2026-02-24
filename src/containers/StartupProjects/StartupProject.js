import React from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          {bigProjects.subtitle && (
            <p className="subTitle project-subtitle">
              {bigProjects.subtitle}
            </p>
          )}

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              const projectUrl = project.footerLink?.[0]?.url;
              return (
                <div
                  key={i}
                  className={`project-card project-card-light ${projectUrl ? "project-card-clickable" : ""}`}
                  onClick={() => projectUrl && openUrlInNewTab(projectUrl)}
                  role={projectUrl ? "button" : undefined}
                  tabIndex={projectUrl ? 0 : undefined}
                  onKeyDown={(e) => projectUrl && (e.key === "Enter" || e.key === " ") && openUrlInNewTab(projectUrl)}
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5 className="card-title">
                      {project.projectName}
                    </h5>
                    <p className="card-subtitle">
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className="project-tag"
                              onClick={(e) => {
                                e.stopPropagation();
                                openUrlInNewTab(link.url);
                              }}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
