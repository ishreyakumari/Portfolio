import React from "react";
import "./Header.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import {
  workExperiences,
  skillsSection,
  educationInfo,
  bigProjects,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;
  const viewContact = true;
  const viewResume = resumeSection.display;

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-left">
          <div className="header-social">
            <SocialMedia />
          </div>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <div className="header-right">
          <ul className="menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experiences</a>
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
          {viewContact && (
            <li>
              <a href="#contact">Contact</a>
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
        </div>
      </header>
    </div>
  );
}
export default Header;
