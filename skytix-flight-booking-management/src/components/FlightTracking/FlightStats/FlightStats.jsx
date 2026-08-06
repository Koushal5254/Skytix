"use client";

import "./FlightStats.scss";

export default function FlightStats({
  flight,
}) {
  if (!flight) {
    return null;
  }

  return (
    <div className="flight-stats">

      <div className="flight-stat">

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

      <div className="flight-stat">

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
  );
}