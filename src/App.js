import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Lab</h1>
        <Weather defaultCity="Rivne" />
        <footer>
          The project is made by{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener  noreferrer"
            className="mediaLink"
          >
            {" "}
            Maryna Kidun
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/marykidun/weather-react.git"
            target="_blank"
            rel="noopener
            noreferrer"
            className="mediaLink"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
