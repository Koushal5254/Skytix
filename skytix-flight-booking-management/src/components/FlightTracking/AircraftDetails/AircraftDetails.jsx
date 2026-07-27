"use client";

import {
  FiNavigation,
  FiHash,
} from "react-icons/fi";

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

      <div className="aircraft-details-plane">

        <div className="aircraft-details-plane-icon">
          ✈
        </div>

        <div className="aircraft-details-plane-info">

          <span>
            Aircraft
          </span>

          <strong>
            {flight.aircraft.type}
          </strong>

        </div>

      </div>

      <div className="aircraft-details-list">

        <div className="aircraft-details-item">

          <FiHash />

          <div>
            <span>
              Registration
            </span>

            <strong>
              {flight.aircraft.registration}
            </strong>
          </div>

        </div>

        <div className="aircraft-details-item">

          <FiNavigation />

          <div>
            <span>
              Airline
            </span>

            <strong>
              {flight.airline}
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}