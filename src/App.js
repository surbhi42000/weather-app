import React from "react";
import CurrentLocation from "./currentLocation";
import "./app.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;