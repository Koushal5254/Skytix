import Card from "@/components/common/Card/Card";
import { bookings } from "@/data/dashboardData";

import { FiCalendar } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

import "./AllBookings.scss";

export default function AllBookings() {
  return (
    <Card className="bookings-card">

      <div className="booking-header">
        <h5>All Bookings</h5>
        <span>See All</span>
      </div>

      {bookings.map((item, index) => (
        <div
          className="booking-item"
          key={index}
        >

          <div className="booking-airline">

            <h6>{item.airline}</h6>

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

          <div className="booking-time">
            <strong>{item.departureTime}</strong>
            <span>{item.departureCity}</span>
          </div>

          <div className="booking-route">

            <small>
              Duration: {item.duration}
            </small>

            <div className="route-line">
              <span></span>
              <span></span>
            </div>

            <div className="route-codes">
              <span>{item.departureCode}</span>
              <span>{item.arrivalCode}</span>
            </div>

          </div>

          <div className="booking-time">
            <strong>{item.arrivalTime}</strong>
            <span>{item.arrivalCity}</span>
          </div>

        </div>
      ))}

    </Card>
  );
}