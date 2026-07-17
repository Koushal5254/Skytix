import Card from "@/components/common/Card/Card";
import { FiMoreHorizontal } from "react-icons/fi";

import { topRoutes } from "@/data/dashboardData";

import "./TopRoutes.scss";

export default function TopRoutes() {
  return (
    <Card className="routes-card">

      <div className="routes-header">
        <h5>Top Flight Routes</h5>

        <button>
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="routes-list">

        {topRoutes.map((item, index) => (

          <div
            className="route-item"
            key={index}
          >

            <small className="passengers">
              {item.passengers} Passengers
            </small>

            <h6>
              {item.route}
            </h6>

            <div className="route-meta">

              <div className="route-progress">
                <span
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>

              <strong>
                {item.distance}
              </strong>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}