import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");
    const card = document.querySelector(".user-card");

    if (darkMode) {
      body.classList.add("dark-mode");
      header?.classList.add("header-dark");
      card?.classList.add("card-dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      header?.classList.remove("header-dark");
      card?.classList.remove("card-dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
