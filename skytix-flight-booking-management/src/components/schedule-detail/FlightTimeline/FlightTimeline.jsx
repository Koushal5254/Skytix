import { FaPlane } from "react-icons/fa6";

import FlightDetailCard from "../FlightDetailCard/FlightDetailCard";

import "./FlightTimeline.scss";

export default function FlightTimeline({ flight }) {
  if (!flight) {
    return null;
  }

  const departure =
    flight.departure ||
    flight.departureDetails ||
    {};

  const arrival =
    flight.arrival ||
    flight.arrivalDetails ||
    {};

  const departureCode =
    departure.code ||
    flight.fromCode ||
    departure.city ||
    "";

  const arrivalCode =
    arrival.code ||
    flight.toCode ||
    arrival.city ||
    "";

  return (
    <section className="flight-timeline">

      <div className="timeline-layout">

        {/* =====================================
            TIME / DURATION
        ====================================== */}

        <div className="timeline-times">

          <div className="timeline-time departure-time">

            {departure.time && (
              <strong>
                {departure.time}
              </strong>
            )}

            {departure.date && (
              <span>
                {departure.date}
              </span>
            )}

          </div>

          <span className="timeline-duration">
            {flight.duration || ""}
          </span>

          <div className="timeline-time arrival-time">

            {arrival.time && (
              <strong>
                {arrival.time}
              </strong>
            )}

            {arrival.date && (
              <span>
                {arrival.date}
              </span>
            )}

          </div>

        </div>

        {/* =====================================
            TRACK
        ====================================== */}

        <div className="timeline-track">

          <span className="timeline-dot timeline-dot-top" />

          <span className="timeline-line timeline-line-top" />

          <div
            className="timeline-plane"
            aria-hidden="true"
          >
            <FaPlane />
          </div>

          <span className="timeline-line timeline-line-bottom" />

          <span className="timeline-dot timeline-dot-bottom" />

        </div>

        {/* =====================================
            CONTENT
        ====================================== */}

        <div className="timeline-content">

          {/* DEPARTURE */}

          <div className="timeline-location timeline-departure-location">

            <h2>
              {departureCode}
            </h2>

            {departure.airport && (
              <p>
                {departure.airport}
              </p>
            )}

            {departure.terminal && (
              <span>
                {departure.terminal}
              </span>
            )}

          </div>

          {/* FLIGHT CARD */}

          <div className="timeline-flight-card">

            <FlightDetailCard
              flight={flight}
            />

          </div>

          {/* ARRIVAL */}

          <div className="timeline-location timeline-arrival-location">

            <h2>
              {arrivalCode}
            </h2>

            {arrival.airport && (
              <p>
                {arrival.airport}
              </p>
            )}

            {arrival.terminal && (
              <span>
                {arrival.terminal}
              </span>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}