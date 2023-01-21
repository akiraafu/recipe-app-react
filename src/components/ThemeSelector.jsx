import React from "react";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";
//styles
import "./themeSelector.css";
const themeColors = ["#457b9d", "#2a9d8f", "#e76f51"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          alt="mode-icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(30%" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
