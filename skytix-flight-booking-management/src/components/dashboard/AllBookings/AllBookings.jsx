import {
  FiCalendar,
  FiUsers,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  bookings,
} from "@/data/dashboardData";

import "./AllBookings.scss";

export default function AllBookings() {
  return (
    <Card className="bookings-card">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="booking-header">

        <h5>
          All Bookings
        </h5>

        <button
          type="button"
          className="booking-see-all"
        >
          See All
        </button>

      </div>

      {/* =====================================
          BOOKING LIST
      ====================================== */}

      <div className="booking-list">

        {bookings.map((item, index) => (

          <div
            className="booking-item"
            key={`${item.airline}-${index}`}
          >

            {/* AIRLINE */}

            <div className="booking-airline">

              <h6>
                {item.airline}
              </h6>

              <div className="booking-meta">

                <span>
                  <FiCalendar />

                  {item.date}
                </span>

                <span>
                  <FiUsers />

                  {item.passengers}
                </span>

              </div>

            </div>

            {/* DEPARTURE */}

            <div className="booking-time">

              <strong>
                {item.departureTime}
              </strong>

              <span>
                {item.departureCity}
              </span>

            </div>

            {/* ROUTE */}

            <div className="booking-route">

              <small>
                Duration: {item.duration}
              </small>

              <div className="route-line">

                <span />

                <span />

              </div>

              <div className="route-codes">

                <span>
                  {item.departureCode}
                </span>

                <span>
                  {item.arrivalCode}
                </span>

              </div>

            </div>

            {/* ARRIVAL */}

            <div className="booking-time booking-arrival">

              <strong>
                {item.arrivalTime}
              </strong>

              <span>
                {item.arrivalCity}
              </span>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}