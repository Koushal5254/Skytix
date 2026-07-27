"use client";

import { FiChevronDown } from "react-icons/fi";
import "./FilterSidebar.scss";

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      {/* Transit */}

      <div className="filter-card">

        <div className="filter-title">

          <h3>Transit</h3>

          <FiChevronDown />

        </div>

        <label>
          <input type="checkbox" defaultChecked />
          Direct
        </label>

        <label>
          <input type="checkbox" />
          1 Transit
        </label>

        <label>
          <input type="checkbox" />
          2+ Transit
        </label>

      </div>

      {/* Price */}

      <div className="filter-card">

        <div className="filter-title">

          <h3>Price Range</h3>

          <FiChevronDown />

        </div>

        <input
          type="range"
          min="350"
          max="1000"
          defaultValue="650"
          className="price-slider"
        />

        <div className="price-boxes">

          <div>
            <span>Start</span>
            <h4>$350</h4>
          </div>

          <div>
            <span>Up To</span>
            <h4>$1000</h4>
          </div>

        </div>

      </div>

      {/* Departure */}

      <div className="filter-card">

        <div className="filter-title">

          <h3>Departure Times</h3>

          <FiChevronDown />

        </div>

        <div className="time-range">
          05:00 AM – 06:00 PM
        </div>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="70"
          className="price-slider"
        />

      </div>

      {/* Airline */}

      <div className="filter-card">

        <div className="filter-title">

          <h3>Airline</h3>

          <FiChevronDown />

        </div>

        <div className="airline-actions">

          <button>Select All</button>

          <button className="clear">
            Clear All
          </button>

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