import {
  FiMoreHorizontal,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  activities,
} from "@/data/dashboardData";

import "./RecentActivity.scss";

export default function RecentActivity() {
  return (
    <Card className="activity-card">

      {/* HEADER */}

      <div className="activity-header">

        <h5>
          Recent Activity
        </h5>

        <button
          type="button"
          className="activity-more"
          aria-label="More activity options"
        >
          <FiMoreHorizontal />
        </button>

      </div>

      {/* ACTIVITY LIST */}

      <div className="activity-list">

        {activities.map(
          (item, index) => (

            <div
              key={item.id}
              className="activity-item"
            >

              {/* TIMELINE */}

              <div className="activity-timeline">

                <span className="activity-dot" />

                {index !==
                  activities.length - 1 && (
                  <span className="activity-line" />
                )}

              </div>

              {/* CONTENT */}

              <div className="activity-content">

                <p>
                  {item.text}
                </p>

                <small>
                  {item.time}
                </small>

              </div>

            </div>

          )
        )}

      </div>

    </Card>
  );
}