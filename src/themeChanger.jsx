import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeChanger() {
  const [theme, setTheme] = useState(faMoon);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  function changeTheme() {
    setTheme(isDarkMode ? faSun : faMoon);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <FontAwesomeIcon
      className="themeChanger"
      icon={theme}
      onClick={changeTheme}
    />
  );
}

export default ThemeChanger;
