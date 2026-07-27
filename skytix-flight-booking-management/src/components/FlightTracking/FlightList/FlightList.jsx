"use client";

import { useMemo, useState } from "react";

import {
  FiSearch,
  FiSliders,
  FiPlus,
  FiX,
} from "react-icons/fi";

import FlightCard from "../FlightCard/FlightCard";

import "./FlightList.scss";

export default function FlightList({
  flights = [],
  selectedFlightId,
  onSelectFlight,
}) {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] =
    useState(false);

  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const statusOptions = [
    "All",
    "On Time",
    "Delayed",
    "In Air",
    "Scheduled",
    "Cancelled",
  ];

  /* ========================================
     FILTERED FLIGHTS
  ======================================== */

  const filteredFlights = useMemo(() => {
    const value =
      search.trim().toLowerCase();

    return flights.filter((flight) => {
      const matchesStatus =
        selectedStatus === "All" ||
        flight.status === selectedStatus;

      if (!matchesStatus) {
        return false;
      }

      if (!value) {
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
      ].some((item) =>
        String(item || "")
          .toLowerCase()
          .includes(value)
      );
    });
  }, [
    flights,
    search,
    selectedStatus,
  ]);

  /* ========================================
     CLEAR FILTER
  ======================================== */

  const handleClearFilter = () => {
    setSelectedStatus("All");
    setFilterOpen(false);
  };

  return (
    <div className="flight-list">

      {/* =====================================
          SEARCH / ACTIONS
      ====================================== */}

      <div className="flight-list-toolbar">

        <div className="flight-list-search">

          <FiSearch />

          <input
            type="text"
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
              onClick={() =>
                setSearch("")
              }
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}

        </div>

        {/* FILTER */}

        <div className="flight-list-filter-wrapper">

          <button
            type="button"
            className={`flight-list-action ${
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
            aria-expanded={filterOpen}
          >
            <FiSliders />
          </button>

          {filterOpen && (
            <div className="flight-list-filter-menu">

              <div className="flight-list-filter-head">

                <strong>
                  Status
                </strong>

                {selectedStatus !==
                  "All" && (
                  <button
                    type="button"
                    onClick={
                      handleClearFilter
                    }
                  >
                    Clear
                  </button>
                )}

              </div>

              <div className="flight-list-filter-options">

                {statusOptions.map(
                  (status) => (
                    <button
                      key={status}
                      type="button"
                      className={
                        selectedStatus ===
                        status
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        setSelectedStatus(
                          status
                        );

                        setFilterOpen(
                          false
                        );
                      }}
                    >
                      {status}
                    </button>
                  )
                )}

              </div>

            </div>
          )}

        </div>

        {/* ADD */}

        <button
          type="button"
          className="flight-list-add"
          aria-label="Add flight"
        >
          <FiPlus />
        </button>

      </div>

      {/* =====================================
          ACTIVE FILTER
      ====================================== */}

      {selectedStatus !== "All" && (
        <div className="flight-list-active-filter">

          <span>
            {selectedStatus}
          </span>

          <button
            type="button"
            onClick={handleClearFilter}
            aria-label="Remove status filter"
          >
            <FiX />
          </button>

        </div>
      )}

      {/* =====================================
          FLIGHT CARDS
      ====================================== */}

      <div className="flight-list-scroll">

        {filteredFlights.length > 0 ? (
          filteredFlights.map(
            (flight) => (
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
            )
          )
        ) : (
          <div className="flight-list-empty">

            <FiSearch />

            <strong>
              No flights found
            </strong>

            <span>
              Try another flight,
              airport or status.
            </span>

          </div>
        )}

      </div>

    </div>
  );
}