import React from "react";
import "./mobile.styles.css";

export const Mobile = (url) => {
  return (
    <div className="Front-Page">
      <div className="centre-piece">
        <h1 className="Hello-Header">Hello</h1>
        <div>
          <h2>Skye Renda</h2>
          <h2>
            Software <br /> Developer
          </h2>
        </div>
        <a href={url} target="_blank" download>
          <button className="Cv-Download">See my CV</button>
        </a>
      </div>
    </div>
  );
};
