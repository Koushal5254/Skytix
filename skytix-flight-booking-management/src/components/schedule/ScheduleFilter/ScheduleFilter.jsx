"use client";

import { FiChevronDown } from "react-icons/fi";

import "./ScheduleFilter.scss";

export default function ScheduleFilter() {
  return (
    <aside className="schedule-filter">

      {/* Header */}

      <div className="filter-header">

        <h3>Filter</h3>

        <button>Reset</button>

      </div>

      {/* Transit */}

      <div className="filter-section">

        <div className="section-title">
          <h4>Transit</h4>
          <FiChevronDown />
        </div>

        <label>
          <input type="checkbox" defaultChecked />
          Direct
        </label>

        <label>
          <input type="checkbox" defaultChecked />
          1 Transit
        </label>

        <label>
          <input type="checkbox" defaultChecked />
          2+ Transits
        </label>

      </div>

      {/* Price */}

      <div className="filter-section">

        <div className="section-title">
          <h4>Price Range</h4>
          <FiChevronDown />
        </div>

        <div className="price-boxes">

          <div className="price-box">
            <span>Start</span>
            <strong>$350</strong>
          </div>

          <div className="price-box">
            <span>Up to</span>
            <strong>$1000</strong>
          </div>

        </div>

      </div>

      {/* Departure */}

      <div className="filter-section">

        <div className="section-title">
          <h4>Departure Times</h4>
          <FiChevronDown />
        </div>

        <div className="slider">

          <div className="slider-line">
            <span className="dot left"></span>
            <span className="dot right"></span>
          </div>

        </div>

        <p className="time-range">
          05.00 AM - 06.00 PM
        </p>

      </div>

      {/* Airline */}

      <div className="filter-section">

        <div className="section-title">
          <h4>Airline</h4>
          <FiChevronDown />
        </div>

        {[
          "CloudNine Airlines",
          "QuickWing Air",
          "SkyHigh Airlines",
          "FlyFast Airways",
          "AeroJet",
          "Nimbus Airlines",
          "JetStream Aviation",
          "SuperJet Airways",
        ].map((airline) => (
          <label key={airline}>
            <input type="checkbox" defaultChecked />
            {airline}
          </label>
        ))}

      </div>

    </aside>
  );
}