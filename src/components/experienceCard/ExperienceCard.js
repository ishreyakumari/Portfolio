import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            <span className="experience-bullet-content">{item}</span>
          </li>
        ))
      : null;
  };

  return (
    <div className="experience-card">
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
      </div>
      {cardInfo.companyUrl ? (
        <a 
          href={cardInfo.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-logo-link"
        >
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        </a>
      ) : (
        <div className="experience-logo-link">
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        </div>
      )}
      <div className="experience-text-details">
        <div className="experience-text-header">
          <h5 className="experience-text-role">
            {cardInfo.role}
          </h5>
          <div className="experience-text-datetime-location">
            <span className="experience-text-date">{cardInfo.date}</span>
            {cardInfo.location && (
              <span className="experience-text-location">
                <i className="fas fa-map-marker-alt experience-text-location-icon" aria-hidden="true"></i>
                {cardInfo.location}
              </span>
            )}
          </div>
        </div>

        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
