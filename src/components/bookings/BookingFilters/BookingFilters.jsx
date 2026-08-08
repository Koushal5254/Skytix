"use client";

import { useState } from "react";

import {
  FiChevronDown,
  FiPlus,
  FiSearch,
  FiSliders,
  FiCalendar,
  FiX,
} from "react-icons/fi";

import "./BookingFilters.scss";

export default function BookingFilters({
  search = "",
  airline = "All",
  status = "All",
  departure = "All",
  airlines = [],
  departures = [],
  onSearchChange,
  onAirlineChange,
  onStatusChange,
  onDepartureChange,
  onClearFilters,
  onAddBooking,
}) {
  const [showSearch, setShowSearch] =
    useState(false);

  const [
    showMoreFilters,
    setShowMoreFilters,
  ] = useState(false);

  const hasActiveFilters =
    Boolean(search) ||
    airline !== "All" ||
    status !== "All" ||
    departure !== "All";

  const handleClearFilters = () => {
    onClearFilters?.();
  };

  return (
    <div className="booking-filter-area">

      {/* MAIN FILTER BAR */}

      <div className="booking-filters">

        {/* LEFT */}

        <div className="booking-filters-left">

          {/* DATE */}

          <button
            type="button"
            className="booking-filter-btn booking-date-filter"
          >
            <FiCalendar />

            <span>
              1 - 8 July 2028
            </span>

            <FiChevronDown className="filter-chevron" />
          </button>

          {/* AIRLINE */}

          <div className="booking-select-wrapper">

            <select
              value={airline}
              onChange={(event) =>
                onAirlineChange?.(
                  event.target.value
                )
              }
              aria-label="Filter by airline"
            >
              <option value="All">
                Airline
              </option>

              {airlines.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            <FiChevronDown />

          </div>

          {/* STATUS */}

          <div className="booking-select-wrapper">

            <select
              value={status}
              onChange={(event) =>
                onStatusChange?.(
                  event.target.value
                )
              }
              aria-label="Filter by status"
            >
              <option value="All">
                Status
              </option>

              <option value="Confirmed">
                Confirmed
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Cancelled">
                Cancelled
              </option>
            </select>

            <FiChevronDown />

          </div>

          {/* DEPARTURE */}

          <div className="booking-select-wrapper">

            <select
              value={departure}
              onChange={(event) =>
                onDepartureChange?.(
                  event.target.value
                )
              }
              aria-label="Filter by departure"
            >
              <option value="All">
                Departure
              </option>

              {departures.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            <FiChevronDown />

          </div>

        </div>

        {/* RIGHT */}

        <div className="booking-filters-right">

          {/* SEARCH */}

          <button
            type="button"
            className={`booking-filter-action ${
              showSearch
                ? "active"
                : ""
            }`}
            aria-label="Search bookings"
            aria-expanded={showSearch}
            onClick={() =>
              setShowSearch(
                (previous) =>
                  !previous
              )
            }
          >
            <FiSearch />
          </button>

          {/* MORE FILTERS */}

          <button
            type="button"
            className={`booking-filter-action ${
              showMoreFilters
                ? "active"
                : ""
            }`}
            aria-label="More filters"
            aria-expanded={
              showMoreFilters
            }
            onClick={() =>
              setShowMoreFilters(
                (previous) =>
                  !previous
              )
            }
          >
            <FiSliders />
          </button>

          {/* ADD BOOKING */}

          <button
            type="button"
            className="booking-add-btn"
            onClick={() =>
              onAddBooking?.()
            }
          >
            <FiPlus />

            <span>
              Add Booking
            </span>
          </button>

        </div>

      </div>

      {/* SEARCH PANEL */}

      {showSearch && (
        <div className="booking-search-row">

          <div className="booking-search-input">

            <FiSearch />

            <input
              type="text"
              value={search}
              placeholder="Search airline, flight, city or airport..."
              onChange={(event) =>
                onSearchChange?.(
                  event.target.value
                )
              }
              autoFocus
            />

            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() =>
                  onSearchChange?.("")
                }
              >
                <FiX />
              </button>
            )}

          </div>

        </div>
      )}

      {/* MORE FILTERS PANEL */}

      {showMoreFilters && (
        <div className="booking-more-filters">

          <div>
            <span>Airline</span>

            <strong>
              {airline === "All"
                ? "All Airlines"
                : airline}
            </strong>
          </div>

          <div>
            <span>Status</span>

            <strong>
              {status === "All"
                ? "All Statuses"
                : status}
            </strong>
          </div>

          <div>
            <span>Departure</span>

            <strong>
              {departure === "All"
                ? "All Departures"
                : departure}
            </strong>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="booking-clear-filters"
              onClick={
                handleClearFilters
              }
            >
              <FiX />

              <span>
                Clear Filters
              </span>
            </button>
          )}

        </div>
      )}

    </div>
  );
}