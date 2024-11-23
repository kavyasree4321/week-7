import React, { useState } from "react";

const task30 = () => {
  const [theme, setTheme] = useState("light");
  const lightImage = "path/to/light-theme-image.jpg";
  const darkImage = "path/to/dark-theme-image.jpg";
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Button to toggle theme */}
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Conditional rendering of images */}
      <div style={{ marginTop: "20px" }}>
        {theme === "light" ? (
          <img src={lightImage} alt="Light Mode" style={{ width: "300px" }} />
        ) : (
          <img src={darkImage} alt="Dark Mode" style={{ width: "300px" }} />
        )}
      </div>
    </div>
  );
};

export default task30;
