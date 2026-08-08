"use client";

import {
  useMemo,
  useRef,
  useState,
} from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

import { flights } from "@/data/flights";

import "./DetailHeader.scss";

const seatClasses = [
  "Economy",
  "Premium Economy",
  "Business",
  "First Class",
];

export default function DetailHeader({
  flight,
}) {
  const router = useRouter();
  const inputRef = useRef(null);

  const [searchValue, setSearchValue] =
    useState("");

  const [selectedClass, setSelectedClass] =
    useState(
      flight?.flightClass ||
        flight?.class ||
        "Economy"
    );

  const [classOpen, setClassOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  /* ========================================
     SEARCH RESULTS
  ======================================== */

  const searchResults = useMemo(() => {
    const query = searchValue
      .trim()
      .toLowerCase();

    if (!query) {
      return [];
    }

    return flights
      .filter((item) => {
        const values = [
          item.airline,
          item.code,
          item.aircraft,

          item.departure?.city,
          item.departure?.airport,
          item.departure?.code,

          item.arrival?.city,
          item.arrival?.airport,
          item.arrival?.code,

          item.fromCode,
          item.toCode,
        ];

        return values.some((value) =>
          String(value || "")
            .toLowerCase()
            .includes(query)
        );
      })
      .slice(0, 5);
  }, [searchValue]);

  /* ========================================
     SEARCH
  ======================================== */

  const handleSearch = () => {
    const query = searchValue.trim();

    if (!query) {
      inputRef.current?.focus();
      return;
    }

    if (searchResults.length === 1) {
      router.push(
        `/schedule/${searchResults[0].id}`
      );

      setSearchOpen(false);
      setClassOpen(false);

      return;
    }

    setClassOpen(false);
    setSearchOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSearch();
  };

  /* ========================================
     SELECT FLIGHT
  ======================================== */

  const handleSelectFlight = (item) => {
    setSearchValue("");
    setSearchOpen(false);
    setClassOpen(false);

    router.push(
      `/schedule/${item.id}`
    );
  };

  /* ========================================
     SELECT CLASS
  ======================================== */

  const handleClassSelect = (
    seatClass
  ) => {
    setSelectedClass(seatClass);
    setClassOpen(false);
  };

  if (!flight) {
    return null;
  }

  const departureCity =
    flight.departure?.city ||
    flight.fromCity ||
    flight.fromCode ||
    "";

  const arrivalCity =
    flight.arrival?.city ||
    flight.toCity ||
    flight.toCode ||
    "";

  const aircraft =
    flight.aircraft ||
    "Aircraft";

  const passengers =
    flight.totalPassengers ??
    flight.passengers ??
    0;

  return (
    <header className="detail-header">

      {/* =====================================
          LEFT
      ====================================== */}

      <div className="detail-header-main">

        {/* BACK BUTTON */}

        <Link
          href="/schedule"
          className="detail-back-btn"
          aria-label="Back to flight schedule"
        >
          <FiArrowLeft />
        </Link>

        {/* HEADING */}

        <div className="detail-heading">

          <span className="detail-back-label">
            Back to Flight Schedule
          </span>

          <h1>

            <span className="detail-city">
              {departureCity}
            </span>

            <span
              className="detail-route-arrow"
              aria-hidden="true"
            >
              →
            </span>

            <span className="detail-city">
              {arrivalCity}
            </span>

          </h1>

          <p>

            <span>
              {aircraft}
            </span>

            <i aria-hidden="true" />

            <span>
              {passengers} Passengers
            </span>

          </p>

        </div>

      </div>

      {/* =====================================
          SEARCH
      ====================================== */}

      <form
        className="detail-search"
        onSubmit={handleSubmit}
      >

        {/* SEARCH */}

        <div className="detail-search-wrapper">

          <div className="detail-search-input">

            <FiSearch />

            <input
              ref={inputRef}
              type="search"
              value={searchValue}
              placeholder="Search flight"
              autoComplete="off"
              aria-label="Search flight"
              onFocus={() => {
                if (searchValue.trim()) {
                  setSearchOpen(true);
                  setClassOpen(false);
                }
              }}
              onChange={(event) => {
                const value =
                  event.target.value;

                setSearchValue(value);

                setSearchOpen(
                  Boolean(value.trim())
                );

                setClassOpen(false);
              }}
            />

          </div>

          {/* SEARCH RESULTS */}

          {searchOpen && (
            <div className="detail-search-results">

              {searchResults.length > 0 ? (
                searchResults.map(
                  (item) => {

                    const from =
                      item.departure?.city ||
                      item.fromCode ||
                      "";

                    const to =
                      item.arrival?.city ||
                      item.toCode ||
                      "";

                    return (
                      <button
                        type="button"
                        key={item.id}
                        className="detail-search-result"
                        onClick={() =>
                          handleSelectFlight(
                            item
                          )
                        }
                      >

                        <div className="detail-result-route">

                          <strong>
                            {from}
                          </strong>

                          <span>
                            →
                          </span>

                          <strong>
                            {to}
                          </strong>

                        </div>

                        <div className="detail-result-meta">

                          <span>
                            {item.airline}
                          </span>

                          <span>
                            {item.code}
                          </span>

                        </div>

                      </button>
                    );
                  }
                )
              ) : (
                <div className="detail-search-empty">
                  No flights found
                </div>
              )}

            </div>
          )}

        </div>

        {/* =====================================
            CLASS
        ====================================== */}

        <div className="detail-class-wrapper">

          <button
            type="button"
            className="detail-class-btn"
            onClick={() => {
              setClassOpen(
                (current) =>
                  !current
              );

              setSearchOpen(false);
            }}
            aria-expanded={classOpen}
          >

            <span>
              {selectedClass}
            </span>

            <FiChevronDown
              className={
                classOpen
                  ? "open"
                  : ""
              }
            />

          </button>

          {classOpen && (
            <div className="detail-class-menu">

              {seatClasses.map(
                (seatClass) => (
                  <button
                    type="button"
                    key={seatClass}
                    className={
                      selectedClass ===
                      seatClass
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      handleClassSelect(
                        seatClass
                      )
                    }
                  >

                    <span>
                      {seatClass}
                    </span>

                    {selectedClass ===
                      seatClass && (
                      <FiCheck />
                    )}

                  </button>
                )
              )}

            </div>
          )}

        </div>

        {/* =====================================
            SEARCH BUTTON
        ====================================== */}

        <button
          type="submit"
          className="detail-search-btn"
        >
          Search
        </button>

      </form>

    </header>
  );
}