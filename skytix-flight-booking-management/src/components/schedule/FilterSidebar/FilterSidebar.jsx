"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import "./FilterSidebar.scss";

const airlines = [
  "CloudNine Airlines",
  "QuickWing Air",
  "SkyHigh Airlines",
  "FlyFast Airways",
  "AeroJet",
  "Nimbus Airlines",
  "JetStream Aviation",
  "SuperJet Airways",
];

export default function FilterSidebar() {
  const [sections, setSections] = useState({
    transit: true,
    price: true,
    departure: true,
    airline: true,
  });

  const [transit, setTransit] = useState({
    direct: true,
    oneTransit: false,
    twoTransit: false,
  });

  const [maxPrice, setMaxPrice] = useState(650);
  const [departureTime, setDepartureTime] = useState(70);

  const [selectedAirlines, setSelectedAirlines] = useState(airlines);

  const toggleSection = (section) => {
    setSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  const handleTransit = (name) => {
    setTransit((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handleAirline = (airline) => {
    setSelectedAirlines((current) =>
      current.includes(airline)
        ? current.filter((item) => item !== airline)
        : [...current, airline]
    );
  };

  const selectAllAirlines = () => {
    setSelectedAirlines(airlines);
  };

  const clearAllAirlines = () => {
    setSelectedAirlines([]);
  };

  return (
    <aside className="schedule-filter-sidebar">

      {/* TRANSIT */}
      <section className="schedule-filter-card">
        <button
          type="button"
          className="schedule-filter-title"
          onClick={() => toggleSection("transit")}
        >
          <h3>Transit</h3>

          <FiChevronDown
            className={sections.transit ? "open" : ""}
          />
        </button>

        {sections.transit && (
          <div className="schedule-filter-body schedule-transit-options">

            <label className="schedule-checkbox-row">
              <input
                type="checkbox"
                checked={transit.direct}
                onChange={() => handleTransit("direct")}
              />

              <span className="schedule-custom-checkbox" />

              <span>Direct</span>
            </label>

            <label className="schedule-checkbox-row">
              <input
                type="checkbox"
                checked={transit.oneTransit}
                onChange={() => handleTransit("oneTransit")}
              />

              <span className="schedule-custom-checkbox" />

              <span>1 Transit</span>
            </label>

            <label className="schedule-checkbox-row">
              <input
                type="checkbox"
                checked={transit.twoTransit}
                onChange={() => handleTransit("twoTransit")}
              />

              <span className="schedule-custom-checkbox" />

              <span>2+ Transit</span>
            </label>

          </div>
        )}
      </section>

      {/* PRICE RANGE */}
      <section className="schedule-filter-card">
        <button
          type="button"
          className="schedule-filter-title"
          onClick={() => toggleSection("price")}
        >
          <h3>Price Range</h3>

          <FiChevronDown
            className={sections.price ? "open" : ""}
          />
        </button>

        {sections.price && (
          <div className="schedule-filter-body">

            <div className="schedule-range-wrapper">
              <input
                type="range"
                min="350"
                max="1000"
                step="10"
                value={maxPrice}
                onChange={(event) =>
                  setMaxPrice(Number(event.target.value))
                }
                className="schedule-range-input"
                style={{
                  "--range-progress": `${
                    ((maxPrice - 350) / (1000 - 350)) * 100
                  }%`,
                }}
              />
            </div>

            <div className="schedule-price-boxes">

              <div className="schedule-price-box">
                <span>Start</span>
                <strong>$350</strong>
              </div>

              <div className="schedule-price-box">
                <span>Up To</span>
                <strong>${maxPrice}</strong>
              </div>

            </div>

          </div>
        )}
      </section>

      {/* DEPARTURE TIMES */}
      <section className="schedule-filter-card">
        <button
          type="button"
          className="schedule-filter-title"
          onClick={() => toggleSection("departure")}
        >
          <h3>Departure Times</h3>

          <FiChevronDown
            className={sections.departure ? "open" : ""}
          />
        </button>

        {sections.departure && (
          <div className="schedule-filter-body">

            <p className="schedule-time-range">
              05:00 AM – 06:00 PM
            </p>

            <div className="schedule-range-wrapper">
              <input
                type="range"
                min="0"
                max="100"
                value={departureTime}
                onChange={(event) =>
                  setDepartureTime(Number(event.target.value))
                }
                className="schedule-range-input"
                style={{
                  "--range-progress": `${departureTime}%`,
                }}
              />
            </div>

          </div>
        )}
      </section>

      {/* AIRLINE */}
      <section className="schedule-filter-card schedule-airline-card">
        <button
          type="button"
          className="schedule-filter-title"
          onClick={() => toggleSection("airline")}
        >
          <h3>Airline</h3>

          <FiChevronDown
            className={sections.airline ? "open" : ""}
          />
        </button>

        {sections.airline && (
          <div className="schedule-filter-body">

            <div className="schedule-airline-actions">

              <button
                type="button"
                onClick={selectAllAirlines}
                className="schedule-select-all"
              >
                Select All
              </button>

              <button
                type="button"
                onClick={clearAllAirlines}
                className="schedule-clear-all"
              >
                Clear All
              </button>

            </div>

            <div className="schedule-airline-list">

              {airlines.map((airline) => (
                <label
                  key={airline}
                  className="schedule-checkbox-row"
                >
                  <input
                    type="checkbox"
                    checked={selectedAirlines.includes(airline)}
                    onChange={() => handleAirline(airline)}
                  />

                  <span className="schedule-custom-checkbox" />

                  <span>{airline}</span>
                </label>
              ))}

            </div>

          </div>
        )}
      </section>

    </aside>
  );
}