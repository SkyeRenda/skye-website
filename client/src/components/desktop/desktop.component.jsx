import React from "react";
import "./desktop.styles.css";

export const Desktop = (url) => {
  return (
    <div className="Front-Page">
      <div className="centre-piece">
        <h1 className="Hello-Header">Hello</h1>
        <div>
          <h2>Skye Renda</h2>
          <h2>Software Developer</h2>
        </div>
        <a href={url} target="_blank" download>
          <button className="Cv-Download">See my CV</button>
        </a>
      </div>
    </div>
  );
};
