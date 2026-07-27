import {
  FiMoreHorizontal,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  topRoutes,
} from "@/data/dashboardData";

import "./TopRoutes.scss";

export default function TopRoutes() {
  return (
    <Card className="routes-card">

      {/* HEADER */}

      <div className="routes-header">

        <h5>
          Top Flight Routes
        </h5>

        <button
          type="button"
          className="routes-more"
          aria-label="More route options"
        >
          <FiMoreHorizontal />
        </button>

      </div>

      {/* ROUTES */}

      <div className="routes-list">

        {topRoutes.map(
          (item, index) => (

            <div
              className="route-item"
              key={`${item.route}-${index}`}
            >

              <small className="route-passengers">
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

          )
        )}

      </div>

    </Card>
  );
}