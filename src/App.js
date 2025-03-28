import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const nextColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        {colors.map((lightColor) => (
          <div
            key={lightColor}
            className={`light ${lightColor} ${color === lightColor ? "glow" : ""}`}
            onClick={() => setColor(lightColor)}
          ></div>
        ))}
      </div>
      <button onClick={nextColor}>Next Color</button>
      <button onClick={addPurple}>Add Purple</button>
    </div>
  );
};

const App = () => <TrafficLight />;

export default App;
