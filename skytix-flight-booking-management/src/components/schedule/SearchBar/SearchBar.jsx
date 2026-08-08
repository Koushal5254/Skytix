"use client";

import {
  FiCalendar,
  FiChevronDown,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";

import "./SearchBar.scss";

export default function SearchBar({
  from,
  to,
  departureDate,
  seatClass,

  locations = [],

  onFromChange,
  onToChange,
  onDepartureDateChange,
  onSeatClassChange,
  onSwap,
  onSearch,
}) {
  return (
    <form
      className="schedule-search-bar"
      onSubmit={(event) => {
        event.preventDefault();

        onSearch();
      }}
    >
      {/* =====================================
          FROM
      ====================================== */}

      <div className="schedule-search-item schedule-search-from">

        <label
          className="schedule-search-label"
          htmlFor="schedule-from"
        >
          From
        </label>

        <div className="schedule-search-control">

          <select
            id="schedule-from"
            value={from}
            onChange={(event) =>
              onFromChange(
                event.target.value
              )
            }
          >
            <option value="">
              Anywhere
            </option>

            {locations.map(
              (location) => (
                <option
                  key={`from-${location.code}`}
                  value={location.code}
                >
                  {location.city} ({location.code})
                </option>
              )
            )}

          </select>

          <FiChevronDown />

        </div>

      </div>

      {/* =====================================
          SWAP
      ====================================== */}

      <button
        type="button"
        className="schedule-swap-btn"
        onClick={onSwap}
        aria-label="Swap departure and destination"
      >
        <FiRefreshCw />
      </button>

      {/* =====================================
          TO
      ====================================== */}

      <div className="schedule-search-item schedule-search-to">

        <label
          className="schedule-search-label"
          htmlFor="schedule-to"
        >
          To
        </label>

        <div className="schedule-search-control">

          <select
            id="schedule-to"
            value={to}
            onChange={(event) =>
              onToChange(
                event.target.value
              )
            }
          >
            <option value="">
              Anywhere
            </option>

            {locations.map(
              (location) => (
                <option
                  key={`to-${location.code}`}
                  value={location.code}
                >
                  {location.city} ({location.code})
                </option>
              )
            )}

          </select>

          <FiChevronDown />

        </div>

      </div>

      {/* =====================================
          DEPARTURE DATE
      ====================================== */}

      <div className="schedule-search-item schedule-search-date">

        <label
          className="schedule-search-label"
          htmlFor="schedule-departure-date"
        >
          Departure Date
        </label>

        <div className="schedule-search-control schedule-date-control">

          <input
            id="schedule-departure-date"
            type="date"
            value={departureDate}
            onChange={(event) =>
              onDepartureDateChange(
                event.target.value
              )
            }
          />

          <FiCalendar />

        </div>

      </div>

      {/* =====================================
          SEAT CLASS
      ====================================== */}

      <div className="schedule-search-item schedule-search-class">

        <label
          className="schedule-search-label"
          htmlFor="schedule-seat-class"
        >
          Seat Class
        </label>

        <div className="schedule-search-control">

          <select
            id="schedule-seat-class"
            value={seatClass}
            onChange={(event) =>
              onSeatClassChange(
                event.target.value
              )
            }
          >
            <option value="All">
              All Classes
            </option>

            <option value="Economy">
              Economy
            </option>

            <option value="Premium Economy">
              Premium Economy
            </option>

            <option value="Business">
              Business
            </option>

            <option value="First Class">
              First Class
            </option>
          </select>

          <FiChevronDown />

        </div>

      </div>

      {/* =====================================
          SEARCH
      ====================================== */}

      <button
        type="submit"
        className="schedule-search-submit"
        aria-label="Search flights"
      >
        <FiSearch />
      </button>

    </form>
  );
}