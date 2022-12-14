import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const response = "";

  const [url, setUrl] = useState();

  const retrieveUrl = async () => {
    const response = await axios.get("/download");
    setUrl(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    retrieveUrl();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
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
      </div>
    </div>
  );
}

export default App;
