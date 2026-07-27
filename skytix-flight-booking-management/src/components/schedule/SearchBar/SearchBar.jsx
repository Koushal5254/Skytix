"use client";

import { FiRefreshCw, FiSearch } from "react-icons/fi";

import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">

      <div className="search-item">
        <div className="content">
          <span>From</span>
          <h4>Los Angeles (LAX)</h4>
        </div>
      </div>

      <button className="swap-btn">
        <FiRefreshCw />
      </button>

      <div className="search-item">
        <div className="content">
          <span>To</span>
          <h4>New York (JFK)</h4>
        </div>
      </div>

      <div className="search-item">
        <div className="content">
          <span>Departure Date</span>
          <h4>Sat, 1 Jul 2028</h4>
        </div>
      </div>

      <div className="search-item">
        <div className="content">
          <span>Seat Class</span>
          <h4>Economy</h4>
        </div>
      </div>

      <button className="search-btn">
        <FiSearch />
      </button>

    </div>
  );
}