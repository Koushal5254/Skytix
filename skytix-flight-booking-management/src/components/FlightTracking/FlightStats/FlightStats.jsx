"use client";

import {
  FiActivity,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

import "./FlightStats.scss";

export default function FlightStats({
  flight,
}) {
  if (!flight) {
    return null;
  }

  return (
    <div className="flight-stats">

      <h3>
        Flight Stats
      </h3>

      <div className="flight-stats-list">

        <div className="flight-stat">

          <div className="flight-stat-icon">
            <FiActivity />
          </div>

          <div className="flight-stat-content">

            <span>
              Speed
            </span>

            <strong>
              {flight.speed}
              <small>
                {flight.speedUnit}
              </small>
            </strong>

          </div>

        </div>

        <div className="flight-stat">

          <div className="flight-stat-icon">
            <FiTrendingUp />
          </div>

          <div className="flight-stat-content">

            <span>
              Altitude
            </span>

            <strong>
              {flight.altitude}
              <small>
                {flight.altitudeUnit}
              </small>
            </strong>

          </div>

        </div>

        <div className="flight-stat">

          <div className="flight-stat-icon">
            <FiClock />
          </div>

          <div className="flight-stat-content">

            <span>
              Duration
            </span>

            <strong>
              {flight.duration}
            </strong>

          </div>

        </div>

      </div>

    </div>
  );
}