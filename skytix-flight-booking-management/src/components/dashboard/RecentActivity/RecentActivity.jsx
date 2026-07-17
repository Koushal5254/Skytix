import Card from "@/components/common/Card/Card";
import { FiMoreHorizontal } from "react-icons/fi";

import "./RecentActivity.scss";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      text: "Passenger booked flight CloudNine Airlines (CDG-JFK)",
      time: "23 Jul, 2024",
    },
    {
      id: 2,
      text: "Ellen Winston upgraded seat for flight QW-HKG-BKK",
      time: "1 hour ago",
    },
    {
      id: 3,
      text: "Roger Piston requested cancellation for flight SH-FRA-BKK",
      time: "2 hours ago",
    },
    {
      id: 4,
      text: "Paula Ortega completed payment for flight FLY-LAX-HND",
      time: "3 hours ago",
    },
  ];

  return (
    <Card className="activity-card">
      <div className="activity-header">
        <h5>Recent Activity</h5>

        <button>
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="activity-list">
        {activities.map((item) => (
          <div
            key={item.id}
            className="activity-item"
          >
            <span className="activity-dot"></span>

            <div className="activity-content">
              <p>{item.text}</p>
              <small>{item.time}</small>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}