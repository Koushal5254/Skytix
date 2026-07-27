"use client";

import Link from "next/link";

import {
  FiWifi,
  FiCoffee,
  FiBriefcase,
} from "react-icons/fi";

import { FaPlane } from "react-icons/fa";

import "./FlightCard.scss";

export default function FlightCard({ flight }) {
  return (
    <article className="schedule-flight-card">

      {/* =====================================
          MAIN FLIGHT INFORMATION
      ====================================== */}

      <div className="schedule-flight-main">

        {/* AIRLINE */}

        <div className="schedule-flight-airline">

          <div
            className="schedule-flight-airline-logo"
            aria-hidden="true"
          >
            <FaPlane />
          </div>

          <div className="schedule-flight-airline-info">
            <h4>{flight.airline}</h4>
            <span>{flight.code}</span>
          </div>

        </div>

        {/* DEPARTURE */}

        <div className="schedule-flight-time">

          <strong>
            {flight.departure}
          </strong>

          <span>
            {flight.fromCode}
          </span>

        </div>

        {/* ROUTE */}

        <div className="schedule-flight-route">

          <div className="schedule-flight-route-line">

            <span className="schedule-route-point" />

            <span className="schedule-route-plane">
              <FaPlane />
            </span>

            <span className="schedule-route-point" />

          </div>

          <small>
            {flight.duration || "3 hours"} •{" "}
            {flight.transit || "Direct"}
          </small>

        </div>

        {/* ARRIVAL */}

        <div className="schedule-flight-time">

          <strong>
            {flight.arrival}
          </strong>

          <span>
            {flight.toCode}
          </span>

        </div>

        {/* PRICE */}

        <div className="schedule-flight-price">

          <div className="schedule-flight-price-value">
            <small>Starting From</small>

            <strong>
              ${flight.price}
            </strong>
          </div>

          <Link
            href={`/schedule/${flight.id}`}
            className="schedule-flight-detail-btn"
          >
            View Detail
          </Link>

        </div>

      </div>

      {/* =====================================
          FACILITIES
      ====================================== */}

      <div className="schedule-flight-facilities">

        <span className="schedule-facilities-title">
          Facilities:
        </span>

        <div className="schedule-facility">
          <FiBriefcase />
          <span>1 Baggage</span>
        </div>

        <div className="schedule-facility">
          <FiCoffee />
          <span>No Meal</span>
        </div>

        <div className="schedule-facility">
          <FiWifi />
          <span>Free WiFi</span>
        </div>

      </div>

    </article>
  );
}