import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import profileImage from "../../assets/images/profile.png";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <Button 
                    text="View my resume" 
                    href="https://drive.google.com/file/d/1tPCrZcqig7nZX4Pq2fXaMndlUUyQ24yR/view?usp=sharing"
                    newTab={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="profile-image-container">
              <img
                alt="Shreya Kumari"
                src={profileImage}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
