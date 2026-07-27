import { FiArrowRight } from "react-icons/fi";

import "./BookingCard.scss";

export default function BookingCard({ booking }) {
  const statusClass =
    booking.status?.toLowerCase() || "";

  return (
    <article className="booking-card">

      {/* =====================================
          AIRLINE
      ====================================== */}

      <div className="booking-card-airline">

        <div className="booking-airline-logo">
          <span className="booking-airline-mark">
            {booking.airline
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>

        <div className="booking-airline-info">
          <h4>{booking.airline}</h4>

          <p>{booking.code}</p>
        </div>

      </div>

      {/* =====================================
          FLIGHT INFORMATION
      ====================================== */}

      <div className="booking-flight-panel">

        {/* Departure */}

        <div className="booking-flight-time">
          <strong>{booking.fromTime}</strong>

          <span>{booking.from}</span>
        </div>

        {/* Route */}

        <div className="booking-route">

          <span className="booking-airport-code">
            {booking.fromCode}
          </span>

          <div className="booking-route-center">

            <div className="booking-route-track">

              <span className="booking-route-start" />

              <span className="booking-route-middle" />

              <span className="booking-route-end">
                <FiArrowRight />
              </span>

            </div>

            <small>
              Duration {booking.duration}
            </small>

          </div>

          <span className="booking-airport-code">
            {booking.toCode}
          </span>

        </div>

        {/* Arrival */}

        <div className="booking-flight-time">
          <strong>{booking.toTime}</strong>

          <span>{booking.to}</span>
        </div>

      </div>

      {/* =====================================
          DATE
      ====================================== */}

      <div className="booking-date">

        <span>Date</span>

        <strong>{booking.date}</strong>

      </div>

      {/* =====================================
          PASSENGERS
      ====================================== */}

      <div className="booking-passengers">

        <div className="booking-passenger-avatars">
          <span />
          <span />
          <span />
        </div>

        <strong>{booking.seats}</strong>

      </div>

      {/* =====================================
          STATUS
      ====================================== */}

      <div
        className={`booking-status booking-status-${statusClass}`}
      >
        {booking.status}
      </div>

    </article>
  );
}