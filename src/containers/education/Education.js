import React from "react";
import "./Education.scss";
import "../workExperience/WorkExperience.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import emoji from "react-easy-emoji";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="main education-section" id="education">
        <h1 className="experience-heading">{emoji("Education 🎓")}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
