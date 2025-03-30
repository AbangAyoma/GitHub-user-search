import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


interface SearchProps{
  onSearch: (username:string) => void;
}
function SearchBar({ onSearch}: SearchProps ){
  const [username, setUsername] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!username) return; // Prevent empty search
    setIsSearching(true); // Set button to "Searching..."
    e.preventDefault(); // this will help Prevent page refresh
    if (username.trim()) {
      onSearch(username); // Callings the search function here
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="search-container">
        <div className="search-cont">
          <span>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input   rounded-md focus:outline-none"
          />
        </div>
        <button type="submit" className="search-button">
          {/* disabled={isSearching}   add this to the button tag to spoil your code */}
          Search{/* {isSearching ? "Searching..." : "Search"} */}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
