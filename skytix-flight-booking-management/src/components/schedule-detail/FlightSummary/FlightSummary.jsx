"use client";

import { FaReact } from "react-icons/fa";

import "./FlightSummary.scss";

export default function FlightSummary({ flight }) {
  return (
    <div className="flight-summary">

      {/* LEFT */}

      <div className="summary-left">

        <div className="summary-logo">
          <FaReact />
        </div>

        <div className="summary-airline">
          <h3>{flight.airline}</h3>

          <div className="meta">
            <span>{flight.code}</span>

            <span className="status">
              On Time
            </span>
          </div>
        </div>

      </div>

      {/* DATE */}

      <div className="summary-block">

        <span>Date</span>

        <h4>July 1, 2028</h4>

      </div>

      {/* PASSENGERS */}

      <div className="summary-block">

        <span>Passenger</span>

        <div className="passengers">

          <div className="avatar"></div>

          <div className="avatar"></div>

          <div className="avatar"></div>

          <strong>+207</strong>

        </div>

      </div>

      {/* RIGHT */}

      <div className="summary-right">

        <h2>

          ${flight.price}

          <span>/pax</span>

        </h2>

        <button>
          Edit
        </button>

      </div>

    </div>
  );
}