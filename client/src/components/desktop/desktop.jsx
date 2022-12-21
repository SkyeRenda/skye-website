import React from "react";
import "./desktop.css";
import skyeCutImage from "../../images/skye-cut.png";

export const Desktop = (props) => {
  return (
    <div className="Front-Page">
      <img src={skyeCutImage} className="skye-cut-image" />
      <div className="centre-text" width="auto">
        <h3 className="Hello-Header">Hello, I am</h3>
        <h1>Skye Renda</h1>
        <h2>Software Developer</h2>
        <h2>Business Analyst</h2>
        <a href={props.url} target="_blank">
          <button className="Cv-Download">Download CV</button>
        </a>
      </div>
    </div>
  );
};
