import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Desktop } from "./components/desktop/desktop.component";
import { Mobile } from "./components/mobile/mobile.component.jsx";
import { useMediaQuery } from "react-responsive";

function App() {
  const response = "";

  const [url, setUrl] = useState();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const retrieveUrl = async () => {
    const response = await axios.get("/download");
    setUrl(response.data);
    console.log(response.data);
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

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 450px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  return (
    <div className="App">
      <div className="App-header">
        {windowSize.innerWidth > "600" && <Desktop url={url} />}
        {windowSize.innerWidth <= "600" && <Mobile url={url} />}
      </div>
    </div>
  );
}

export default App;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
