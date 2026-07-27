import { FaReact } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import "./BookingCard.scss";

export default function BookingCard({ booking }) {
  return (
    <div className="booking-card">

      {/* Airline */}

      <div className="airline-block">

        <div className="airline-logo">
          <FaReact />
        </div>

        <div className="airline-details">
          <h4>{booking.airline}</h4>
          <p>{booking.code}</p>
        </div>

      </div>

      {/* Flight */}

      <div className="flight-block">

        <div className="time-box">

          <h3>{booking.fromTime}</h3>

          <p>{booking.from}</p>

        </div>

        <div className="route-box">

          <span>{booking.fromCode}</span>

          <div className="route-line">

            <div className="line">

              <FiArrowRight />

            </div>

            <small>

              Duration {booking.duration}

            </small>

          </div>

          <span>{booking.toCode}</span>

        </div>

        <div className="time-box">

          <h3>{booking.toTime}</h3>

          <p>{booking.to}</p>

        </div>

      </div>

      {/* Date */}

      <div className="date-block">

        <span>Date</span>

        <p>2028-07-02</p>

      </div>

      {/* Passengers */}

      <div className="passenger-block">

        <div className="avatars">

          <span></span>
          <span></span>
          <span></span>

        </div>

        <small>{booking.seats}</small>

      </div>

      {/* Status */}

      <div
        className={`status ${booking.status.toLowerCase()}`}
      >
        {booking.status}
      </div>

    </div>
  );
}