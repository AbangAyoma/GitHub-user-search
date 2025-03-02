import React, { Fragment, useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const sun_icon = <i className="fas fa-sun"></i>;
  const moon_icon = <i className="fas fa-moon"></i>;

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
      {darkMode ?  "DARK" : "LIGHT"}
      {darkMode ?  moon_icon : sun_icon }
    </button>
    </div>
  );
};

export default ThemeToggle;
