import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  const fetchUser = async (username: string) => {
    setError("");
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError("User not found. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <ThemeToggle />
      <SearchBar onSearch={fetchUser} />
      {error && <p className="error">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
