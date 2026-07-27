"use client";

import { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";

import FlightCard from "../FlightCard/FlightCard";
import { flights } from "@/data/flights";

import "./FlightList.scss";

export default function FlightList() {
  const [priceSort, setPriceSort] = useState("cheapest");
  const [timeSort, setTimeSort] = useState("earliest");

  const sortedFlights = useMemo(() => {
    const list = [...flights];

    list.sort((a, b) => {
      if (priceSort === "cheapest") {
        return Number(a.price) - Number(b.price);
      }

      if (priceSort === "expensive") {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });

    return list;
  }, [priceSort]);

  const handleAddFlight = () => {
    console.log("Add Flight");
  };

  return (
    <section className="schedule-flight-list">

      {/* =====================================
          LIST HEADER
      ====================================== */}

      <div className="schedule-flight-list-header">

        <div className="schedule-flight-list-title">
          <h2>Flight List</h2>

          <span>
            ({flights.length} result)
          </span>
        </div>

        <div className="schedule-flight-list-actions">

          {/* PRICE SORT */}

          <select
            value={priceSort}
            onChange={(event) =>
              setPriceSort(event.target.value)
            }
            aria-label="Sort flights by price"
          >
            <option value="cheapest">
              Cheapest
            </option>

            <option value="expensive">
              Expensive
            </option>
          </select>

          {/* TIME SORT */}

          <select
            value={timeSort}
            onChange={(event) =>
              setTimeSort(event.target.value)
            }
            aria-label="Sort flights by departure time"
          >
            <option value="earliest">
              Earliest
            </option>

            <option value="latest">
              Latest
            </option>
          </select>

          {/* ADD FLIGHT */}

          <button
            type="button"
            className="schedule-add-flight-btn"
            onClick={handleAddFlight}
          >
            <FiPlus />

            <span>Add Flight</span>
          </button>

        </div>

      </div>

      {/* =====================================
          FLIGHT CARDS
      ====================================== */}

      <div className="schedule-flight-list-cards">

        {sortedFlights.map((flight, index) => (
          <FlightCard
            key={flight.id ?? index}
            flight={flight}
          />
        ))}

      </div>

    </section>
  );
}