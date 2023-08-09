import React, { useState } from 'react';
import './Searchbar.css'; // Import the CSS file for styling

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <i className="fas fa-search"></i> Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
