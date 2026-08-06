"use client";

import {
  FiArrowRight,
} from "react-icons/fi";

import "./FlightDetails.scss";

export default function FlightDetails({
  flight,
}) {
  if (!flight) {
    return null;
  }

  const statusClass =
    flight.status
      .toLowerCase()
      .replace(/\s+/g, "-");

  const passengerCount =
    flight.passengers || 210;

  return (
    <div className="flight-details">

      <div className="flight-details-top">

        <div className="flight-details-airline">

          <div className="flight-details-logo">
            ✈
          </div>

          <div>
            <strong>
              {flight.airline}
            </strong>

            <span>
              {flight.flightNumber}
            </span>
          </div>

          <span
            className={`flight-details-status flight-details-status-${statusClass}`}
          >
            {flight.status}
          </span>

        </div>

        <div className="flight-details-date">
          <span>Date</span>

          <strong>
            {flight.date}
          </strong>
        </div>

        <div className="flight-details-passengers">

          <div className="flight-details-avatar" />
          <div className="flight-details-avatar" />
          <div className="flight-details-avatar" />

          <span>
            +
            {Math.max(
              passengerCount - 3,
              0
            )}
          </span>

        </div>

      </div>

      <div className="flight-details-bottom">

        <div className="flight-details-location">

          <strong>
            {flight.from.time}
          </strong>

          <span>
            {flight.from.city}
          </span>

        </div>

        <div className="flight-details-route">

          <div className="flight-details-route-line">

            <i />

            <span />

            <div className="flight-details-plane">
              ✈
            </div>

            <span />

            <FiArrowRight />

          </div>

          <small>
            {flight.duration}
          </small>

        </div>

        <div className="flight-details-location flight-details-location-right">

          <strong>
            {flight.to.time}
          </strong>

          <span>
            {flight.to.city}
          </span>

        </div>

      </div>

    </div>
  );
}