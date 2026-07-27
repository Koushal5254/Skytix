"use client";

import {
  FaReact,
  FaPlane,
} from "react-icons/fa";

import "./BookingHistory.scss";

const airportNames = {
  CDG: "Paris",
  JFK: "New York",
  HKG: "Hong Kong",
  LAX: "Los Angeles",
  FRA: "Frankfurt",
  BKK: "Bangkok",
  HND: "Tokyo",
  SIN: "Singapore",
  LHR: "London",
  NYC: "New York",
  SFO: "San Francisco",
  SYD: "Sydney",
  DXB: "Dubai",
};

export default function BookingHistory({ payment }) {
  if (!payment) {
    return null;
  }

  const [fromCode, toCode] = payment.route.split("-");

  const fromCity = airportNames[fromCode] || fromCode;
  const toCity = airportNames[toCode] || toCode;

  return (
    <section className="booking-history">

      {/* HEADER */}

      <div className="section-header">

        <h2>Booking History</h2>

        <button type="button">
          View All
        </button>

      </div>

      <div className="history-list">

        <div className="history-card">

          {/* AIRLINE */}

          <div className="history-top">

            <div className="airline">

              <div className="logo">
                <FaReact />
              </div>

              <div>

                <h4>{payment.airline}</h4>

                <span>
                  {payment.bookingCode}
                </span>

              </div>

            </div>

            <span
              className={`status ${payment.status.toLowerCase()}`}
            >
              {payment.status}
            </span>

          </div>

          {/* ROUTE */}

          <div className="flight-route">

            <div className="airport">

              <h3>{fromCity}</h3>

              <span>{fromCode}</span>

            </div>

            <div className="route-center">

              <div className="route-line" />

              <div className="plane">
                <FaPlane />
              </div>

              <div className="route-line" />

            </div>

            <div className="airport">

              <h3>{toCity}</h3>

              <span>{toCode}</span>

            </div>

          </div>

          {/* DETAILS */}

          <div className="time-grid">

            <div>

              <small>Booking Date</small>

              <p>
                {new Date(
                  `${payment.billingDate}T00:00:00`
                ).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>

            </div>

            <div>

              <small>Booking Code</small>

              <p>{payment.bookingCode}</p>

            </div>

            <div>

              <small>Amount</small>

              <p>{payment.amount}</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}