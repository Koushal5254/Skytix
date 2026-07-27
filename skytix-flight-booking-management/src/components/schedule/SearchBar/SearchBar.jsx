"use client";

import { useState } from "react";
import { FiRefreshCw, FiSearch } from "react-icons/fi";

import "./SearchBar.scss";

export default function SearchBar() {
  const [from, setFrom] = useState("Los Angeles (LAX)");
  const [to, setTo] = useState("New York (JFK)");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="schedule-search-bar">

      {/* FROM */}
      <div className="schedule-search-item schedule-search-from">
        <span className="schedule-search-label">
          From
        </span>

        <h4 className="schedule-search-value">
          {from}
        </h4>
      </div>

      {/* SWAP */}
      <button
        type="button"
        className="schedule-swap-btn"
        onClick={handleSwap}
        aria-label="Swap departure and destination"
      >
        <FiRefreshCw />
      </button>

      {/* TO */}
      <div className="schedule-search-item schedule-search-to">
        <span className="schedule-search-label">
          To
        </span>

        <h4 className="schedule-search-value">
          {to}
        </h4>
      </div>

      {/* DATE */}
      <div className="schedule-search-item schedule-search-date">
        <span className="schedule-search-label">
          Departure Date
        </span>

        <h4 className="schedule-search-value">
          Sat, 1 Jul 2028
        </h4>
      </div>

      {/* CLASS */}
      <div className="schedule-search-item schedule-search-class">
        <span className="schedule-search-label">
          Seat Class
        </span>

        <h4 className="schedule-search-value">
          Economy
        </h4>
      </div>

      {/* SEARCH */}
      <button
        type="button"
        className="schedule-search-submit"
        aria-label="Search flights"
      >
        <FiSearch />
      </button>

    </div>
  );
}