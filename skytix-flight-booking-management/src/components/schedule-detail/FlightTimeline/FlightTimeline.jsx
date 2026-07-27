"use client";

import {
  FiMapPin,
  FiClock,
  FiNavigation,
  FiCalendar,
} from "react-icons/fi";

import "./FlightTimeline.scss";

export default function FlightTimeline() {
  return (
    <section className="flight-timeline">

      {/* Header */}

      <div className="timeline-header">

        <h2>Flight Timeline</h2>

        <button>

          <FiCalendar />

          July 1, 2028

        </button>

      </div>

      {/* Top Timeline */}

      <div className="timeline-top">

        {/* Departure */}

        <div className="timeline-side">

          <span>Departure</span>

          <h2>08:30 AM</h2>

          <h4>LAX</h4>

          <p>Los Angeles Airport</p>

        </div>

        {/* Center */}

        <div className="timeline-center">

          <span>5h 15m</span>

          <div className="route-line">

            <div className="plane">

              <FiNavigation />

            </div>

          </div>

          <small>Non Stop</small>

        </div>

        {/* Arrival */}

        <div className="timeline-side right">

          <span>Arrival</span>

          <h2>11:45 AM</h2>

          <h4>JFK</h4>

          <p>John F. Kennedy Airport</p>

        </div>

      </div>

      {/* Flight Info */}

      <div className="flight-info-card">

        <div>

          <FiMapPin />

          <div>

            <span>Terminal</span>

            <h4>Terminal 2</h4>

          </div>

        </div>

        <div>

          <FiClock />

          <div>

            <span>Boarding</span>

            <h4>07:45 AM</h4>

          </div>

        </div>

        <div>

          <FiNavigation />

          <div>

            <span>Gate</span>

            <h4>A12</h4>

          </div>

        </div>

      </div>

    </section>
  );
}