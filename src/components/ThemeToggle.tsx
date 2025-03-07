import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

<i className="fas fa-moon"></i>;
const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const sun_icon = <FontAwesomeIcon icon={faMoon} className="sun_ icon" />;
  const moon_icon = <FontAwesomeIcon icon={faSun} className="moon_icon" />;

  useEffect(() => {
    const body = document.body;
    const search = document.querySelector(".search-container");
    const card = document.querySelector(".user-card");

    if (darkMode) {
      body.classList.add("dark-mode");
      search?.classList.add("search-dark");
      card?.classList.add("card-dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      search?.classList.remove("search-dark");
      card?.classList.remove("card-dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="top-logo">
      <h1>devfinder</h1>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "LIGHT" : "DARK"}
        <span>{darkMode ? moon_icon : sun_icon}</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
