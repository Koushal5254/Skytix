import Card from "@/components/common/Card/Card";
import { FiMoreHorizontal } from "react-icons/fi";

import "./TopFlightRoutesV2.scss";

const routes = [
  {
    route: "New York (JFK) → Los Angeles (LAX)",
    passengers: "140,000 Passengers",
    distance: "11,002 km",
    progress: 92,
  },
  {
    route: "London (LHR) → New York (JFK)",
    passengers: "130,000 Passengers",
    distance: "6,536 km",
    progress: 82,
  },
  {
    route: "Tokyo (HND) → San Francisco (SFO)",
    passengers: "120,000 Passengers",
    distance: "8,233 km",
    progress: 72,
  },
  {
    route: "Sydney (SYD) → Singapore (SIN)",
    passengers: "110,000 Passengers",
    distance: "6,300 km",
    progress: 62,
  },
  {
    route: "Dubai (DXB) → London (LHR)",
    passengers: "100,000 Passengers",
    distance: "6,503 km",
    progress: 55,
  },
];

export default function TopFlightRoutesV2() {
  return (
    <Card>

      <div className="routes-v2-header">

        <h5>Top Flight Routes</h5>

        <button>
          <FiMoreHorizontal />
        </button>

      </div>

      <div className="routes-v2-list">

        {routes.map((item, index) => (

          <div
            key={index}
            className="route-v2-item"
          >

            <small>
              {item.passengers}
            </small>

            <h6>
              {item.route}
            </h6>

            <div className="route-v2-footer">

              <div className="route-v2-progress">

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