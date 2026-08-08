"use client";

import { IoAirplaneSharp } from "react-icons/io5";

import "./FlightSummary.scss";

export default function FlightSummary({
  flight,
  onEdit,
}) {
  if (!flight) {
    return null;
  }

  return (
    <section className="detail-summary">

      {/* =====================================
          AIRLINE
      ====================================== */}

      <div className="summary-airline">

        <div
          className="summary-logo"
          aria-hidden="true"
        >
          <IoAirplaneSharp />
        </div>

        <div className="summary-airline-content">

          <h2>
            {flight.airline}
          </h2>

          <div className="summary-airline-meta">

            <span>
              {flight.code}
            </span>

            <strong>
              {flight.status}
            </strong>

          </div>

        </div>

      </div>

      {/* =====================================
          DIVIDER
      ====================================== */}

      <div className="summary-divider" />

      {/* =====================================
          DATE
      ====================================== */}

      <div className="summary-date">

        <span>
          Date
        </span>

        <strong>
          {flight.bookingDate}
        </strong>

      </div>

      {/* =====================================
          PASSENGERS
      ====================================== */}

      <div className="summary-passengers">

        <span className="summary-label">
          Passenger
        </span>

        <div className="summary-passenger-value">

          <div
            className="summary-avatars"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </div>

          <strong>
            +{flight.passengers}
          </strong>

        </div>

      </div>

      {/* =====================================
          PRICE
      ====================================== */}

      <div className="summary-price">

        <strong>
          ${flight.price}
        </strong>

        <span>
          /pax
        </span>

      </div>

      {/* =====================================
          EDIT
      ====================================== */}

      <button
        type="button"
        className="summary-edit"
        onClick={() => onEdit?.(flight)}
      >
        Edit
      </button>

    </section>
  );
}