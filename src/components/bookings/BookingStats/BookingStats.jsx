import "./BookingStats.scss";

const stats = [
  {
    id: 1,
    value: "567",
    title: "Total Bookings",
  },
  {
    id: 2,
    value: "432",
    title: "Confirmed",
  },
  {
    id: 3,
    value: "98",
    title: "Pending",
  },
  {
    id: 4,
    value: "37",
    title: "Cancelled",
  },
];

export default function BookingStats() {
  return (
    <div className="booking-stats">
      {stats.map((item) => (
        <div className="stat-card" key={item.id}>
          <h2>{item.value}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}