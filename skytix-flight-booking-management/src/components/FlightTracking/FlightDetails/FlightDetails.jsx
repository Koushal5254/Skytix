"use client";

import {
  FiArrowRight,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

import "./FlightDetails.scss";

export default function FlightDetails({
  flight,
}) {
  if (!flight) {
    return null;
  }

  return (
    <div className="flight-details">

      <div className="flight-details-header">
        <h3>Flight Details</h3>

        <span
          className={`flight-details-status flight-details-status-${flight.status
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {flight.status}
        </span>
      </div>

      <div className="flight-details-route">

        {/* DEPARTURE */}

        <div className="flight-details-airport">

          <strong>
            {flight.from.code}
          </strong>

          <span>
            {flight.from.city}
          </span>

          <b>
            {flight.from.time}
          </b>

        </div>

        {/* ROUTE */}

        <div className="flight-details-route-center">

          <div className="flight-details-duration">
            <FiClock />

            <span>
              {flight.duration}
            </span>
          </div>

          <div className="flight-details-line">
            <span className="flight-details-dot" />

            <div />

            <FiArrowRight />
          </div>

        </div>

        {/* ARRIVAL */}

        <div className="flight-details-airport flight-details-airport-right">

          <strong>
            {flight.to.code}
          </strong>

          <span>
            {flight.to.city}
          </span>

          <b>
            {flight.to.time}
          </b>

        </div>

      </div>

      <div className="flight-details-footer">

        <div>
          <FiCalendar />

          <span>
            {flight.date}
          </span>
        </div>

        <strong>
          {flight.flightNumber}
        </strong>

      </div>

    </div>
  );
}