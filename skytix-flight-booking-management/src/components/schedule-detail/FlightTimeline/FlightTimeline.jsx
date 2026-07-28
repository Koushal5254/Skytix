import { FaPlane } from "react-icons/fa6";

import FlightDetailCard from "../FlightDetailCard/FlightDetailCard";

import "./FlightTimeline.scss";

export default function FlightTimeline({ flight }) {
  return (
    <section className="flight-timeline">

      <div className="timeline-layout">

        {/* TIME COLUMN */}

        <div className="timeline-times">

          <div className="timeline-time departure-time">
            <strong>{flight.departure.time}</strong>
            <span>{flight.departure.date}</span>
          </div>

          <span className="timeline-duration">
            {flight.duration}
          </span>

          <div className="timeline-time arrival-time">
            <strong>{flight.arrival.time}</strong>
            <span>{flight.arrival.date}</span>
          </div>

        </div>

        {/* LINE */}

        <div className="timeline-track">

          <span className="timeline-dot top" />

          <span className="timeline-line top-line" />

          <div className="timeline-plane">
            <FaPlane />
          </div>

          <span className="timeline-line bottom-line" />

          <span className="timeline-dot bottom" />

        </div>

        {/* CONTENT */}

        <div className="timeline-content">

          <div className="timeline-location">
            <h2>{flight.departure.city}</h2>

            <p>{flight.departure.airport}</p>

            <span>{flight.departure.terminal}</span>
          </div>

          <FlightDetailCard flight={flight} />

          <div className="timeline-location">
            <h2>{flight.arrival.city}</h2>

            <p>{flight.arrival.airport}</p>

            <span>{flight.arrival.terminal}</span>
          </div>

        </div>

      </div>

    </section>
  );
}