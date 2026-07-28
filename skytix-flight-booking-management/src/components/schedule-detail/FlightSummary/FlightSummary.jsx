"use client";

import { FaPlaneDeparture } from "react-icons/fa6";

import "./FlightSummary.scss";

export default function FlightSummary({ flight }) {
  return (
    <section className="detail-summary">

      <div className="summary-airline">

        <div className="summary-logo">
          <FaPlaneDeparture />
        </div>

        <div>
          <h2>{flight.airline}</h2>

          <div className="summary-airline-meta">
            <span>{flight.code}</span>

            <strong>
              {flight.status}
            </strong>
          </div>
        </div>

      </div>

      <div className="summary-divider" />

      <div className="summary-date">
        <span>Date</span>

        <strong>
          {flight.bookingDate}
        </strong>
      </div>

      <div className="summary-passengers">

        <span className="summary-label">
          Passenger
        </span>

        <div className="summary-passenger-value">

          <div className="summary-avatars">
            <i />
            <i />
            <i />
          </div>

          <strong>
            +{flight.passengers}
          </strong>

        </div>

      </div>

      <div className="summary-price">
        <strong>
          ${flight.price}
        </strong>

        <span>/pax</span>
      </div>

      <button
        type="button"
        className="summary-edit"
      >
        Edit
      </button>

    </section>
  );
}