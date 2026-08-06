"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiSearch,
  FiSliders,
  FiPlus,
  FiX,
} from "react-icons/fi";

import FlightCard from "../FlightCard/FlightCard";

import "./FlightList.scss";

const statuses = [
  "All",
  "On Time",
  "Delayed",
  "In Air",
  "Scheduled",
  "Cancelled",
];

export default function FlightList({
  flights = [],
  selectedFlightId,
  onSelectFlight,
  onAddFlight,
}) {
  const [search, setSearch] =
    useState("");

  const [filterOpen, setFilterOpen] =
    useState(false);

  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const filterRef = useRef(null);

  const filteredFlights = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    return flights.filter((flight) => {
      const statusMatches =
        selectedStatus === "All" ||
        flight.status === selectedStatus;

      if (!statusMatches) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        flight.flightNumber,
        flight.airline,
        flight.from?.code,
        flight.from?.city,
        flight.to?.code,
        flight.to?.city,
        flight.status,
      ].some((value) =>
        String(value || "")
          .toLowerCase()
          .includes(query)
      );
    });
  }, [
    flights,
    search,
    selectedStatus,
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(
          event.target
        )
      ) {
        setFilterOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="flight-list">

      <div className="flight-list-toolbar">

        <div className="flight-list-search">

          <FiSearch />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search flight"
            aria-label="Search flight"
          />

          {search && (
            <button
              type="button"
              className="flight-list-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}

        </div>

        <div
          ref={filterRef}
          className="flight-list-filter-wrapper"
        >

          <button
            type="button"
            className={`flight-list-filter-button ${
              selectedStatus !== "All"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setFilterOpen(
                (current) => !current
              )
            }
            aria-label="Filter flights"
          >
            <FiSliders />
          </button>

          {filterOpen && (
            <div className="flight-list-filter-menu">

              <div className="flight-list-filter-title">
                Status
              </div>

              {statuses.map((status) => (
                <button
                  type="button"
                  key={status}
                  className={
                    selectedStatus === status
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    setSelectedStatus(status);
                    setFilterOpen(false);
                  }}
                >
                  {status}
                </button>
              ))}

            </div>
          )}

        </div>

        <button
          type="button"
          className="flight-list-add"
          onClick={onAddFlight}
          aria-label="Add flight"
        >
          <FiPlus />
        </button>

      </div>

      <div className="flight-list-scroll">

        {filteredFlights.length ? (
          filteredFlights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              active={
                selectedFlightId ===
                flight.id
              }
              onClick={() =>
                onSelectFlight?.(
                  flight.id
                )
              }
            />
          ))
        ) : (
          <div className="flight-list-empty">

            <FiSearch />

            <strong>
              No flights found
            </strong>

            <span>
              Try another airport,
              airline or status.
            </span>

          </div>
        )}

      </div>

    </div>
  );
}