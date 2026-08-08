"use client";

import {
  FiPlus,
  FiInbox,
} from "react-icons/fi";

import FlightCard from "../FlightCard/FlightCard";

import "./FlightList.scss";

export default function FlightList({
  flights = [],
  totalResults = 0,

  priceSort,
  timeSort,

  onPriceSortChange,
  onTimeSortChange,

  onAddFlight,
}) {
  return (
    <section className="schedule-flight-list">

      {/* HEADER */}

      <div className="schedule-flight-list-header">

        <div className="schedule-flight-list-title">

          <h2>
            Flight List
          </h2>

          <span>
            ({totalResults}{" "}
            {totalResults === 1
              ? "result"
              : "results"})
          </span>

        </div>

        <div className="schedule-flight-list-actions">

          {/* PRICE */}

          <select
            value={priceSort}
            onChange={(event) =>
              onPriceSortChange(
                event.target.value
              )
            }
            aria-label="Sort by price"
          >
            <option value="cheapest">
              Cheapest
            </option>

            <option value="expensive">
              Expensive
            </option>
          </select>

          {/* TIME */}

          <select
            value={timeSort}
            onChange={(event) =>
              onTimeSortChange(
                event.target.value
              )
            }
            aria-label="Sort by departure time"
          >
            <option value="earliest">
              Earliest
            </option>

            <option value="latest">
              Latest
            </option>
          </select>

          {/* ADD */}

          <button
            type="button"
            className="schedule-add-flight-btn"
            onClick={onAddFlight}
          >
            <FiPlus />

            <span>
              Add Flight
            </span>
          </button>

        </div>

      </div>

      {/* CARDS */}

      {flights.length > 0 ? (
        <div className="schedule-flight-list-cards">

          {flights.map(
            (flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
              />
            )
          )}

        </div>
      ) : (
        <div className="schedule-empty-results">

          <div className="schedule-empty-icon">
            <FiInbox />
          </div>

          <h3>
            No flights found
          </h3>

          <p>
            Try changing your route,
            date, price range or
            airline filters.
          </p>

        </div>
      )}

    </section>
  );
}