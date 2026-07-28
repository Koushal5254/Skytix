import {
  FiBriefcase,
  FiInfo,
  FiRefreshCw,
} from "react-icons/fi";

import {
  MdOutlineRestaurant,
  MdOutlinePayments,
} from "react-icons/md";

import { FaPlaneDeparture } from "react-icons/fa6";

import "./FlightDetailCard.scss";

export default function FlightDetailCard({ flight }) {
  return (
    <div className="flight-info-card">

      <div className="flight-info-top">

        <div className="flight-info-airline">

          <div className="flight-info-logo">
            <FaPlaneDeparture />
          </div>

          <div>
            <h3>{flight.airline}</h3>
            <span>{flight.code}</span>
          </div>

        </div>

        <div className="flight-spec">
          <span>Model</span>
          <strong>{flight.aircraft}</strong>
        </div>

        <div className="flight-spec">
          <span>Class</span>
          <strong>{flight.flightClass}</strong>
        </div>

        <div className="flight-spec seat-spec">
          <span>Seat Layout</span>
          <strong>{flight.seatLayout}</strong>
        </div>

      </div>

      <div className="included-card">

        <h4>What’s Included</h4>

        <div className="included-grid">

          <div className="included-column">

            <div className="included-item">
              <FiBriefcase />

              <div>
                <strong>Baggage 23 Kg</strong>
                <p>Cabin baggage 7 Kg</p>

                <small>
                  <FiInfo />
                  Available for extra baggage.
                  <span>See Prices</span>
                </small>
              </div>
            </div>

          </div>

          <div className="included-column">

            <div className="included-item">
              <MdOutlineRestaurant />

              <strong>Free meal</strong>
            </div>

          </div>

        </div>

        <div className="included-divider" />

        <div className="included-grid included-bottom">

          <div className="included-item">
            <FiRefreshCw />

            <div>
              <strong>Reschedule</strong>

              <p>
                Free rescheduling within 24 hours
                of booking
              </p>
            </div>
          </div>

          <div className="included-item">
            <MdOutlinePayments />

            <div>
              <strong>Refund</strong>

              <p>
                Refunds available with a 10%
                cancellation fee if cancelled 48
                hours before departure
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}