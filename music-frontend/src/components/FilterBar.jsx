
import React from 'react';

function FilterBar({ onFilterChange }) {
  return (
    <div>
      <label>Filter by: </label>
      <select onChange={onFilterChange}>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="genre">Genre</option>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default FilterBar;
