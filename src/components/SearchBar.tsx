import React, { useState } from "react";
import './SearchBar.css';

// interface SearchBarProps {
//   onSearch: (username: string) => void;
// }

const SearchBar: React.FC<{ onSearch: (username: string) => void }> = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // this will help Prevent page refresh
    if (username.trim()) {
      onSearch(username); // Calling the search function here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;