"use client";

import "./JourneyTimeline.scss";

export default function JourneyTimeline() {
  return (
    <section className="journey-timeline">

      <div className="timeline-grid">

        {/* Left Time Column */}

        <div className="time-column">

          <div className="time-block top">

            <h2>6:00 AM</h2>

            <span>15 Jul 2028</span>

          </div>

          <div className="duration">
            13 hours
          </div>

          <div className="time-block bottom">

            <h2>9:00 PM</h2>

            <span>15 Jul 2028</span>

          </div>

        </div>

        {/* Timeline */}

        <div className="line-column">

          <div className="circle top"></div>

          <div className="line"></div>

          <div className="plane">
            ✈
          </div>

          <div className="circle bottom"></div>

        </div>

        {/* Right Content */}

        <div className="content-column">

          <div className="departure">

            <h3>Los Angeles</h3>

            <p>Los Angeles International Airport (LAX)</p>

            <span>Terminal B</span>

          </div>

          <div className="flight-card-placeholder">

            Flight Detail Card

          </div>

          <div className="arrival">

            <h3>New York</h3>

            <p>John F. Kennedy International Airport (JFK)</p>

            <span>Terminal 4</span>

          </div>

        </div>

      </div>

    </section>
  );
}