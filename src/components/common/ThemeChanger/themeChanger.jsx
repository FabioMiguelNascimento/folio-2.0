import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeChanger() {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : true;
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function changeTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <FontAwesomeIcon
      className="themeChanger"
      icon={isDarkMode ? faSun : faMoon}
      onClick={changeTheme}
    />
  );
}

export default ThemeChanger;
