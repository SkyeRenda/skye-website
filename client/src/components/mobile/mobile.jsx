import React from "react";
import "./mobile.css";
import skyeCutImage from "../../images/skye-cut.png";

export const Mobile = (props) => {
  return (
    <div className="Front-Page-Mobile">
      <div className="centre-text-Mobile" width="auto">
        <h3 className="h2-Mobile">Hello, I am</h3>
        <h1 className="h1-Mobile">Skye Renda</h1>
        <h2 className="h2-Mobile">Software Developer</h2>
        <h2 className="h2-Mobile">Business Analyst</h2>
        <a href={props.url} target="_blank">
          <button className="Cv-Download-Mobile">Download CV</button>
        </a>
      </div>
      <img src={skyeCutImage} className="skye-cut-image-Mobile" />
    </div>
  );
};
