import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  workExperiences,
  skillsSection,
  bigProjects,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1tPCrZcqig7nZX4Pq2fXaMndlUUyQ24yR"
                download
                className="nav-link"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
