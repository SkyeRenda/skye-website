import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Desktop } from "./components/desktop/desktop";
import { Mobile } from "./components/mobile/mobile";

function App() {
  const [url, setUrl] = useState();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const retrieveUrl = async () => {
    const response = await axios.get("/download");
    setUrl(response.data);
  };

  useEffect(() => {
    retrieveUrl();
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {windowSize.innerWidth > 800 && <Desktop url={url} />}
        {windowSize.innerWidth <= 800 && <Mobile url={url} />}
      </div>
    </div>
  );
}

export default App;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
