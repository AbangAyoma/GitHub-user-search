import React from "react";

const ThemeToggle: React.FC = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return <button onClick={toggleTheme}>Toggle Dark Mode</button>;
};

export default ThemeToggle;
