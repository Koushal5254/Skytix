"use client";

import Link from "next/link";

import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

import "./DetailHeader.scss";

export default function DetailHeader({ flight }) {
  return (
    <header className="detail-header">

      <div className="detail-header-main">

        <Link
          href="/schedule"
          className="detail-back-btn"
          aria-label="Back to flight schedule"
        >
          <FiArrowLeft />
        </Link>

        <div className="detail-heading">

          <span className="detail-back-label">
            Back to Flight Schedule
          </span>

          <h1>
            {flight.departure.city}
            <span>→</span>
            {flight.arrival.city}
          </h1>

          <p>
            {flight.aircraft}
            <span>•</span>
            {flight.totalPassengers} Passengers
          </p>

        </div>

      </div>

      <div className="detail-search">

        <div className="detail-search-input">
          <FiSearch />

          <input
            type="text"
            placeholder="Search flight"
          />
        </div>

        <button
          type="button"
          className="detail-class-btn"
        >
          Economy

          <FiChevronDown />
        </button>

        <button
          type="button"
          className="detail-search-btn"
        >
          Search
        </button>

      </div>

    </header>
  );
}