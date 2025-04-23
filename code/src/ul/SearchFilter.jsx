

import React from "react";
import './SearchFilter.css';

export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sorted = [...countries].sort((a, b) => {
      const nameA = a.name?.common || "";
      const nameB = b.name?.common || "";
      return value === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setCountries(sorted);
  };

  return (
    <section className="search-filter-container">
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={handleInputChange}
          className="search-input"
        />

        <div className="sort-buttons">
          <button onClick={() => sortCountries('asc')} className="sort-btn">Asc</button>
          <button onClick={() => sortCountries('desc')} className="sort-btn">Des</button>
        </div>

        <select
          value={filter}
          onChange={handleSelectChange}
          className="region-filter"
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
    </section>
  );
};
