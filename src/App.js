import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />

      <p>
        <a
          href="https://github.com/marykidun"
          target="_blank"
          rel="noreferrer"
          title="My Github"
        >
          Open-source
        </a>{" "}
        by Maryna Kidun.
      </p>
    </div>
  );
}

export default App;
