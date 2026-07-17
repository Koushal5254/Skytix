import Card from "@/components/common/Card/Card";
import "./PopularDestination.scss";
import WorldMap from "@/assets/images/World.png";

export default function PopularDestination() {
  return (
    <Card>
      <div className="destination-card">

        <div className="card-top">
          <h5>Popular Destination</h5>

          <button className="destination-filter">
            This Month ▼
          </button>
        </div>

        <img
          src={WorldMap.src}
          alt="world map"
          className="map-image"
        />

        <div className="destination-grid">

          <div className="country-row">
            <span>Mexico</span>
            <strong>24%</strong>
          </div>

          <div className="country-row">
            <span>Canada</span>
            <strong>18%</strong>
          </div>

          <div className="country-row">
            <span>United Kingdom</span>
            <strong>16%</strong>
          </div>

          <div className="country-row">
            <span>India</span>
            <strong>12%</strong>
          </div>

          <div className="country-row">
            <span>France</span>
            <strong>9%</strong>
          </div>

          <div className="country-row">
            <span>Australia</span>
            <strong>7%</strong>
          </div>

        </div>

      </div>
    </Card>
  );
}