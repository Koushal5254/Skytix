"use client";

import { useState } from "react";

import {
  FiBriefcase,
  FiInfo,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";

import {
  MdOutlineRestaurant,
  MdOutlinePayments,
  MdFlight,
} from "react-icons/md";

import {
  IoAirplaneSharp,
} from "react-icons/io5";

import "./FlightDetailCard.scss";

/* ========================================
   AIRLINE VISUALS
   No image/assets required
======================================== */

const airlineVisuals = {
  "SkyHigh Airlines": {
    short: "SH",
    type: "skyhigh",
  },

  "FlyFast Airways": {
    short: "FF",
    type: "flyfast",
  },

  AeroJet: {
    short: "AJ",
    type: "aerojet",
  },

  "Nimbus Airlines": {
    short: "NA",
    type: "nimbus",
  },

  "CloudNine Airlines": {
    short: "CN",
    type: "cloudnine",
  },

  "QuickWing Air": {
    short: "QW",
    type: "quickwing",
  },
};

export default function FlightDetailCard({
  flight,
}) {
  const [priceOpen, setPriceOpen] =
    useState(false);

  if (!flight) {
    return null;
  }

  const baggage =
    flight?.facilities?.baggage ||
    flight?.baggage ||
    "Baggage 23 Kg";

  const cabinBaggage =
    flight?.cabinBaggage ||
    "Cabin baggage 7 Kg";

  const meal =
    flight?.facilities?.meal ||
    flight?.meal ||
    "Free meal";

  const flightClass =
    flight?.flightClass ||
    flight?.class ||
    "Economy";

  const seatLayout =
    flight?.seatLayout ||
    "3-3-3 configuration";

  return (
    <>
      <div className="flight-info-card">

        {/* =====================================
            TOP INFORMATION
        ====================================== */}

        <div className="flight-info-top">

          {/* AIRLINE */}

          <div className="flight-info-airline">

            <AirlineLogo
              airline={flight.airline}
            />

            <div className="flight-info-airline-text">

              <h3>
                {flight.airline}
              </h3>

              <span>
                {flight.code}
              </span>

            </div>

          </div>

          {/* MODEL */}

          <div className="flight-spec">

            <span>
              Model
            </span>

            <strong>
              {flight.aircraft}
            </strong>

          </div>

          {/* CLASS */}

          <div className="flight-spec">

            <span>
              Class
            </span>

            <strong>
              {flightClass}
            </strong>

          </div>

          {/* SEAT */}

          <div className="flight-spec seat-spec">

            <span>
              Seat Layout
            </span>

            <strong>
              {seatLayout}
            </strong>

          </div>

        </div>

        {/* =====================================
            INCLUDED
        ====================================== */}

        <div className="included-card">

          <h4>
            What’s Included
          </h4>

          <div className="included-grid">

            {/* BAGGAGE */}

            <div className="included-column">

              <div className="included-item">

                <FiBriefcase />

                <div>

                  <strong>
                    {baggage}
                  </strong>

                  <p>
                    {cabinBaggage}
                  </p>

                  <small>

                    <FiInfo />

                    <span className="included-info-text">
                      Available for extra baggage.
                    </span>

                    <button
                      type="button"
                      className="included-price-link"
                      onClick={() =>
                        setPriceOpen(true)
                      }
                    >
                      See Prices
                    </button>

                  </small>

                </div>

              </div>

            </div>

            {/* MEAL */}

            <div className="included-column">

              <div className="included-item">

                <MdOutlineRestaurant />

                <strong>
                  {meal}
                </strong>

              </div>

            </div>

          </div>

          <div className="included-divider" />

          <div className="included-grid included-bottom">

            {/* RESCHEDULE */}

            <div className="included-item">

              <FiRefreshCw />

              <div>

                <strong>
                  Reschedule
                </strong>

                <p>
                  Free rescheduling within
                  24 hours of booking
                </p>

              </div>

            </div>

            {/* REFUND */}

            <div className="included-item">

              <MdOutlinePayments />

              <div>

                <strong>
                  Refund
                </strong>

                <p>
                  Refunds available with a
                  10% cancellation fee if
                  cancelled 48 hours before
                  departure
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================
          BAGGAGE PRICE MODAL
      ====================================== */}

      {priceOpen && (
        <div
          className="baggage-modal-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setPriceOpen(false);
            }
          }}
        >

          <div
            className="baggage-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="baggage-price-title"
          >

            <div className="baggage-modal-header">

              <div>

                <span>
                  Extra Baggage
                </span>

                <h3 id="baggage-price-title">
                  Baggage Prices
                </h3>

              </div>

              <button
                type="button"
                className="baggage-modal-close"
                onClick={() =>
                  setPriceOpen(false)
                }
                aria-label="Close baggage prices"
              >
                <FiX />
              </button>

            </div>

            <div className="baggage-price-list">

              <div>
                <span>
                  Extra 5 Kg
                </span>

                <strong>
                  $25
                </strong>
              </div>

              <div>
                <span>
                  Extra 10 Kg
                </span>

                <strong>
                  $45
                </strong>
              </div>

              <div>
                <span>
                  Extra 20 Kg
                </span>

                <strong>
                  $80
                </strong>
              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

/* ========================================
   AIRLINE LOGO
======================================== */

function AirlineLogo({ airline = "" }) {
  const visual =
    airlineVisuals[airline] || {
      short: getAirlineInitials(airline),
      type: "default",
    };

  return (
    <div
      className={`flight-info-logo airline-logo-${visual.type}`}
      aria-label={`${airline} logo`}
    >

      {visual.type === "skyhigh" && (
        <div className="airline-symbol airline-symbol-skyhigh">
          <IoAirplaneSharp />
        </div>
      )}

      {visual.type === "flyfast" && (
        <div className="airline-symbol airline-symbol-flyfast">
          <span />
          <span />
          <span />
        </div>
      )}

      {visual.type === "aerojet" && (
        <div className="airline-symbol airline-symbol-aerojet">
          <MdFlight />
        </div>
      )}

      {visual.type === "nimbus" && (
        <div className="airline-symbol airline-symbol-nimbus">
          <span />
          <span />
        </div>
      )}

      {visual.type === "cloudnine" && (
        <div className="airline-symbol airline-symbol-cloudnine">
          <span className="cloud-ring" />
          <IoAirplaneSharp />
        </div>
      )}

      {visual.type === "quickwing" && (
        <div className="airline-symbol airline-symbol-quickwing">
          <span />
          <span />
          <IoAirplaneSharp />
        </div>
      )}

      {visual.type === "default" && (
        <span className="flight-info-logo-fallback">
          {visual.short}
        </span>
      )}

    </div>
  );
}

/* ========================================
   AIRLINE INITIALS
======================================== */

function getAirlineInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}