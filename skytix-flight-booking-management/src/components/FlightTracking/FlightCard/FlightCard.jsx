"use client";

import {
  FiArrowRight,
} from "react-icons/fi";

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
        active
          ? "flight-card-active"
          : ""
      }`}
      onClick={onClick}
      aria-pressed={active}
    >

      {/* =====================================
          ROUTE
      ====================================== */}

      <div className="flight-card-route">

        {/* DEPARTURE */}

        <div className="flight-card-airport">

          <strong>
            {flight.from.code}
          </strong>

          <span>
            {flight.from.city}
          </span>

        </div>

        {/* ROUTE LINE */}

        <div className="flight-card-route-line">

          <span />

          <FiArrowRight />

        </div>

        {/* ARRIVAL */}

        <div className="flight-card-airport flight-card-airport-arrival">

          <strong>
            {flight.to.code}
          </strong>

          <span>
            {flight.to.city}
          </span>

        </div>

      </div>

      {/* =====================================
          TIMES
      ====================================== */}

      <div className="flight-card-times">

        <span>
          {flight.from.time}
        </span>

        <span>
          {flight.to.time}
        </span>

      </div>

      {/* =====================================
          META
      ====================================== */}

      <div className="flight-card-meta">

        <div className="flight-card-meta-info">

          <strong>
            {flight.airline}
          </strong>

          <span>
            {flight.date}
          </span>

        </div>

        <span
          className={`flight-card-status flight-card-status-${statusClass}`}
        >
          {flight.status}
        </span>

      </div>

    </button>
  );
}