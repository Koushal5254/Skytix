"use client";

import Link from "next/link";

import {
  FiWifi,
  FiCoffee,
  FiBriefcase,
} from "react-icons/fi";

import "./FlightCard.scss";

const AIRLINE_BRANDS = {
  "SkyHigh Airlines": {
    type: "skyhigh",
  },

  "FlyFast Airways": {
    type: "flyfast",
  },

  AeroJet: {
    type: "aerojet",
  },

  "JetStream Aviation": {
    type: "jetstream",
  },

  "Nimbus Airlines": {
    type: "nimbus",
  },

  "CloudNine Airlines": {
    type: "cloudnine",
  },

  "QuickWing Air": {
    type: "quickwing",
  },

  "SuperJet Airways": {
    type: "superjet",
  },
};

export default function FlightCard({
  flight,
}) {
  const brand =
    AIRLINE_BRANDS[flight.airline] || {
      type: "default",
    };

  return (
    <article className="flight-card">

      <div className="card-top">

        {/* AIRLINE */}

        <div className="airline-section">

          <AirlineLogo
            type={brand.type}
          />

          <div className="airline-info">

            <h4>
              {flight.airline}
            </h4>

            <span>
              {flight.code}
            </span>

          </div>

        </div>

        {/* DEPARTURE */}

        <div className="time-block">

          <h2>
            {formatTime(
              flight.departure
            )}
          </h2>

          <span>
            {flight.fromCode}
          </span>

          <small>
            {flight.departureDetails
              ?.city || "Los Angeles"}
          </small>

        </div>

        {/* ROUTE */}

        <div className="route-block">

          <div className="route-airports">

            <span>
              {flight.fromCode}
            </span>

            <span>
              {flight.toCode}
            </span>

          </div>

          <div className="route-line">

            <span className="route-dot" />

            <span className="route-track" />

            <span className="route-plane">
              ✈
            </span>

            <span className="route-track" />

            <span className="route-dot" />

          </div>

          <small>
            {flight.duration} • Direct
          </small>

        </div>

        {/* ARRIVAL */}

        <div className="time-block">

          <h2>
            {formatTime(
              flight.arrival
            )}
          </h2>

          <span>
            {flight.toCode}
          </span>

          <small>
            {flight.arrivalDetails
              ?.city || "New York"}
          </small>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="card-bottom">

        <div className="flight-facilities">

          <span className="facilities-label">
            Facilities:
          </span>

          <div>
            <FiBriefcase />

            <p>
              {flight.facilities
                ?.baggage ||
                "1 Baggage"}
            </p>
          </div>

          <div>
            <FiCoffee />

            <p>
              {flight.facilities
                ?.meal ||
                "No Meal"}
            </p>
          </div>

          {flight.facilities?.wifi && (
            <div>
              <FiWifi />

              <p>
                {flight.facilities.wifi}
              </p>
            </div>
          )}

        </div>

        <div className="flight-price-actions">

          <div className="price-section">

            <strong>
              ${flight.price}
            </strong>

            <span>
              /pax
            </span>

          </div>

          <Link
            href={`/schedule/${flight.id}`}
            className="view-detail-btn"
          >
            View Detail
          </Link>

        </div>

      </div>

    </article>
  );
}

/* ========================================
   AIRLINE LOGO
======================================== */

function AirlineLogo({
  type,
}) {
  return (
    <div
      className={`airline-logo airline-logo-${type}`}
      aria-hidden="true"
    >

      <div className="airline-symbol">

        <span className="logo-piece logo-piece-1" />

        <span className="logo-piece logo-piece-2" />

        <span className="logo-piece logo-piece-3" />

      </div>

    </div>
  );
}

/* ========================================
   TIME
======================================== */

function formatTime(time) {
  if (!time) {
    return "-";
  }

  if (
    time.includes("AM") ||
    time.includes("PM")
  ) {
    return time;
  }

  const [
    hourValue,
    minute = "00",
  ] = time.split(":");

  const hour =
    Number(hourValue);

  if (Number.isNaN(hour)) {
    return time;
  }

  const period =
    hour >= 12 ? "PM" : "AM";

  const formattedHour =
    hour % 12 || 12;

  return `${formattedHour}:${minute} ${period}`;
}