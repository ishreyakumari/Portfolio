import React, {useState, createRef} from "react";
import "./AchievementCard.scss";
import ColorThief from "colorthief";

export default function AchievementCard({ cardInfo }) {
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

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    if (win) {
      win.focus();
    }
  }

  return (
    <div className="certificate-card achievement-card-style">
      <div style={{background: rgb(colorArrays) || "#0891b2"}} className="achievement-banner">
        <h5 className="achievement-banner-title">{cardInfo.organization}</h5>
      </div>
      <div className="achievement-logo-div">
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="achievement-logo-img"
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="achievement-text-details">
        <div className="achievement-text-header">
          <h5 className="achievement-text-title">{cardInfo.title}</h5>
          {cardInfo.date && (
            <p className="achievement-text-date">{cardInfo.date}</p>
          )}
        </div>
        <div className="achievement-description-box">
          <p className="achievement-description-text">{cardInfo.description}</p>
        </div>
      </div>
      {Array.isArray(cardInfo.footer) && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => (
            <span
              key={i}
              className="certificate-tag"
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}