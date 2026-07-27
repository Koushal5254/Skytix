"use client";

import {
  FiWifi,
  FiCoffee,
  FiBriefcase,
} from "react-icons/fi";

import { FaReact } from "react-icons/fa";

import Link from "next/link";

import "./FlightCard.scss";

export default function FlightCard({ flight }) {
  return (
    <article className="flight-card">

      <div className="card-top">

        {/* Airline */}

        <div className="airline-section">

          <div className="airline-logo">
            <FaReact />
          </div>

          <div className="airline-info">
            <h4>{flight.airline}</h4>
            <span>{flight.code}</span>
          </div>

        </div>

        {/* Departure */}

        <div className="time-block">

          <h2>{flight.departure}</h2>

          <span>{flight.fromCode}</span>

        </div>

        {/* Route */}

        <div className="route-block">

          <div className="route-line">

            <span className="dot"></span>

            <div className="plane-circle">✈</div>

            <span className="dot"></span>

          </div>

          <small>3 hours • Direct</small>

        </div>

        {/* Arrival */}

        <div className="time-block">

          <h2>{flight.arrival}</h2>

          <span>{flight.toCode}</span>

        </div>

        {/* Price */}

        <div className="price-section">

          <small>Starting From</small>

          <h3>${flight.price}</h3>

          <Link href={`/schedule/${flight.id}`}>
          <button>
            View Detail
          </button>
          </Link>

        </div>

      </div>

      <div className="card-bottom">

        <span>Facilities:</span>

        <div>
          <FiBriefcase />
          <p>1 Baggage</p>
        </div>

        <div>
          <FiCoffee />
          <p>No Meal</p>
        </div>

        <div>
          <FiWifi />
          <p>Free WiFi</p>
        </div>

      </div>

    </article>
  );
}