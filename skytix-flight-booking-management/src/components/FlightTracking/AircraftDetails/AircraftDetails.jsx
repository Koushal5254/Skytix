"use client";

import "./AircraftDetails.scss";

export default function AircraftDetails({
  flight,
}) {
  if (!flight) {
    return null;
  }

  return (
    <div className="aircraft-details">

      <h3>
        Aircraft Details
      </h3>

      <div className="aircraft-details-item">

        <span>
          Type
        </span>

        <strong>
          {flight.aircraft.type}
        </strong>

      </div>

      <div className="aircraft-details-item">

        <span>
          Registration
        </span>

        <strong>
          {flight.aircraft.registration}
        </strong>

      </div>

    </div>
  );
}