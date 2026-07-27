import Card from "@/components/common/Card/Card";

import WorldMap from "@/assets/images/World.png";

import "./PopularDestination.scss";

const destinations = [
  {
    country: "Mexico",
    percentage: "24%",
  },
  {
    country: "Canada",
    percentage: "18%",
  },
  {
    country: "United Kingdom",
    percentage: "16%",
  },
  {
    country: "India",
    percentage: "12%",
  },
  {
    country: "France",
    percentage: "9%",
  },
  {
    country: "Australia",
    percentage: "7%",
  },
];

export default function PopularDestination() {
  return (
    <Card className="destination-card">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="destination-header">

        <h5>
          Popular Destination
        </h5>

        <button
          type="button"
          className="destination-filter"
        >
          This Month

          <span>
            ▼
          </span>
        </button>

      </div>

      {/* =====================================
          MAP
      ====================================== */}

      <div className="destination-map">

        <img
          src={WorldMap.src}
          alt="Popular destinations world map"
        />

      </div>

      {/* =====================================
          DESTINATIONS
      ====================================== */}

      <div className="destination-grid">

        {destinations.map((item) => (
          <div
            className="country-row"
            key={item.country}
          >

            <span>
              {item.country}
            </span>

            <strong>
              {item.percentage}
            </strong>

          </div>
        ))}

      </div>

    </Card>
  );
}