import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there😍,
          <br /> I am <span className="info-name">Tolu.</span>
          <br /> I love experimenting with the web
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src={require("../../../assets/tolu2.png").default}
            alt="pics"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
