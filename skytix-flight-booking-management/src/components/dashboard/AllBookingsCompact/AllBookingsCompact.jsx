import Card from "@/components/common/Card/Card";
import "./AllBookingsCompact.scss";

const bookings = [
  {
    name: "John Smith",
    route: "NYC → London",
    status: "Confirmed",
  },
  {
    name: "Emma Watson",
    route: "Dubai → Bangkok",
    status: "Pending",
  },
  {
    name: "David Miller",
    route: "Singapore → Tokyo",
    status: "Confirmed",
  },
  {
    name: "Sophia Lee",
    route: "Delhi → Dubai",
    status: "Cancelled",
  },
];

export default function AllBookingsCompact() {
  return (
    <Card>

      <div className="compact-header">

        <h5>All Bookings</h5>

        <button>View All</button>

      </div>

      <div className="compact-bookings">

        {bookings.map((item, index) => (

          <div
            key={index}
            className="compact-booking-item"
          >

            <div className="booking-avatar">
              {item.name.charAt(0)}
            </div>

            <div className="booking-content">

              <h6>{item.name}</h6>

              <small>{item.route}</small>

            </div>

            <span
              className={`booking-status ${item.status.toLowerCase()}`}
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </Card>
  );
}