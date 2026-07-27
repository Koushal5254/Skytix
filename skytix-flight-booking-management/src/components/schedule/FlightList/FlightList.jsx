"use client";

import FlightCard from "../FlightCard/FlightCard";
import { flights } from "@/data/flights";

import "./FlightList.scss";

export default function FlightList() {
  return (
    <div className="flight-list">

      <div className="flight-list-header">

        <div className="header-left">

          <h2>Flight List</h2>

          <span>(10 result)</span>

        </div>

        <div className="header-actions">

          <select>
            <option>Cheapest</option>
          </select>

          <select>
            <option>Earliest</option>
          </select>

          <button className="add-flight-btn">
            + Add Flight
          </button>

        </div>

      </div>

      <div className="flight-list-cards">

        {flights.map((flight, index) => (
          <FlightCard
            key={index}
            flight={flight}
          />
        ))}

      </div>

    </div>
  );
}