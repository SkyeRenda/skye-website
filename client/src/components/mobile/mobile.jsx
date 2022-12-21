import React from "react";
import "./mobile.css";
import skyeCutImage from "../../images/skye-cut.png";
import { Navbar } from "./navbar.mobile";

export const Mobile = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Front-Page-Mobile">
        <div className="centre-text-Mobile" width="auto">
          <p className="h2-Mobile">Hello, I am</p>
          <p className="h1-Mobile">Skye Renda</p>
          <p className="h2-Mobile">Software Developer</p>
          <p className="h2-Mobile">Business Analyst</p>
          <a href={props.url} target="_blank">
            <button className="Cv-Download-Mobile">Download CV</button>
          </a>
        </div>
        <img src={skyeCutImage} className="skye-cut-image-Mobile" />
      </div>
    </div>
  );
};
