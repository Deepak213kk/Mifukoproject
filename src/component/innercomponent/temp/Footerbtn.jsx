import React, { useState } from "react";
import "./fbtn.css"; // Import the CSS styles

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="app">
      <button onClick={toggleDiv} className="toggle-button">
        {isVisible ? "Hide" : "Show"}
      </button>
      <div className={`sliding-div ${isVisible ? "visible" : ""}`}>
        <p>This div slides from the bottom!</p>
      </div>
    </div>
  );
};

export default App;
