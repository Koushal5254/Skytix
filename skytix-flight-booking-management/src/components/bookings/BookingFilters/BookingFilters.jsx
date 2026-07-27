"use client";

import {
  FiChevronDown,
  FiPlus,
  FiSearch,
  FiSliders,
  FiCalendar,
  FiFilter,
} from "react-icons/fi";

import "./BookingFilters.scss";

export default function BookingFilters() {
  return (
    <div className="booking-filters">

      {/* =====================================
          LEFT FILTERS
      ====================================== */}

      <div className="booking-filters-left">

        <button
          type="button"
          className="booking-filter-btn booking-date-filter"
        >
          <FiCalendar />

          <span>1 - 8 July 2028</span>

          <FiChevronDown className="filter-chevron" />
        </button>

        <button
          type="button"
          className="booking-filter-btn"
        >
          <FiFilter className="filter-leading-icon" />

          <span>Airline</span>

          <FiChevronDown className="filter-chevron" />
        </button>

        <button
          type="button"
          className="booking-filter-btn"
        >
          <FiFilter className="filter-leading-icon" />

          <span>Status</span>

          <FiChevronDown className="filter-chevron" />
        </button>

        <button
          type="button"
          className="booking-filter-btn"
        >
          <FiFilter className="filter-leading-icon" />

          <span>Departure</span>

          <FiChevronDown className="filter-chevron" />
        </button>

      </div>

      {/* =====================================
          RIGHT ACTIONS
      ====================================== */}

      <div className="booking-filters-right">

        <button
          type="button"
          className="booking-filter-action"
          aria-label="Search bookings"
        >
          <FiSearch />
        </button>

        <button
          type="button"
          className="booking-filter-action"
          aria-label="More filters"
        >
          <FiSliders />
        </button>

        <button
          type="button"
          className="booking-add-btn"
        >
          <FiPlus />

          <span>Add Booking</span>
        </button>

      </div>

    </div>
  );
}