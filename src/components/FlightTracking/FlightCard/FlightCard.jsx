"use client";

import { FiArrowRight } from "react-icons/fi";

import "./FlightCard.scss";

export default function FlightCard({
  flight,
  active = false,
  onClick,
}) {
  if (!flight) {
    return null;
  }

  const statusClass =
    flight.status
      ?.toLowerCase()
      .replace(/\s+/g, "-");

  return (
    <button
      type="button"
      className={`flight-card ${
        active ? "flight-card-active" : ""
      }`}
      onClick={onClick}
      aria-pressed={active}
    >

      <div className="flight-card-top">

        <div className="flight-card-route-code">
          <span>{flight.from.code}</span>

          <FiArrowRight />

          <span>{flight.to.code}</span>
        </div>

        <span
          className={`flight-card-status flight-card-status-${statusClass}`}
        >
          {flight.status}
        </span>

      </div>

      <strong className="flight-card-airline">
        {flight.airline}
      </strong>

      <div className="flight-card-divider" />

      <div className="flight-card-columns">

        <div className="flight-card-column">

          <span className="flight-card-label">
            Departure
          </span>

          <strong>
            {flight.from.city} -{" "}
            {flight.from.time}
          </strong>

          <small>
            {flight.date}
          </small>

        </div>

        <div className="flight-card-column">

          <span className="flight-card-label">
            Arrival
          </span>

          <strong>
            {flight.to.city} -{" "}
            {flight.to.time}
          </strong>

          <small>
            {flight.date}
          </small>

        </div>

      </div>

    </button>
  );
}