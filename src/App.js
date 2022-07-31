import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Lab</h1>
        <Weather defaultCity="Valencia" />
      </div>
    </div>
  );
}

export default App;
