"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FiSearch,
  FiCalendar,
  FiChevronDown,
  FiCheck,
  FiX,
} from "react-icons/fi";

import "./PaymentToolbar.scss";

const dateOptions = [
  {
    value: "all",
    label: "1 - 8 July 2028",
  },
  {
    value: "2028-07-01",
    label: "1 July 2028",
  },
  {
    value: "2028-07-02",
    label: "2 July 2028",
  },
  {
    value: "2028-07-03",
    label: "3 July 2028",
  },
  {
    value: "2028-07-04",
    label: "4 July 2028",
  },
  {
    value: "2028-07-05",
    label: "5 July 2028",
  },
  {
    value: "2028-07-06",
    label: "6 July 2028",
  },
  {
    value: "2028-07-07",
    label: "7 July 2028",
  },
  {
    value: "2028-07-08",
    label: "8 July 2028",
  },
];

const statusOptions = [
  "All",
  "Confirmed",
  "Pending",
  "Cancelled",
];

export default function PaymentToolbar({
  search,
  setSearch,
  status,
  setStatus,
  dateFilter,
  setDateFilter,
}) {
  const [dateOpen, setDateOpen] =
    useState(false);

  const [statusOpen, setStatusOpen] =
    useState(false);

  const toolbarRef = useRef(null);

  /* ========================================
     CURRENT DATE LABEL
  ======================================== */

  const selectedDate =
    dateOptions.find(
      (option) =>
        option.value === dateFilter
    ) || dateOptions[0];

  /* ========================================
     OUTSIDE CLICK / ESCAPE
  ======================================== */

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        toolbarRef.current &&
        !toolbarRef.current.contains(
          event.target
        )
      ) {
        setDateOpen(false);
        setStatusOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDateOpen(false);
        setStatusOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleMouseDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* ========================================
     DATE
  ======================================== */

  const handleDateSelect = (value) => {
    setDateFilter(value);

    setDateOpen(false);
  };

  /* ========================================
     STATUS
  ======================================== */

  const handleStatusSelect = (
    value
  ) => {
    setStatus(value);

    setStatusOpen(false);
  };

  return (
    <div
      ref={toolbarRef}
      className="payment-toolbar"
    >

      {/* =====================================
          SEARCH
      ====================================== */}

      <div className="payment-toolbar-search">

        <FiSearch />

        <input
          type="search"
          placeholder="Search name, airline, booking code..."
          value={search}
          autoComplete="off"
          aria-label="Search payments"
          onChange={(event) =>
            setSearch(
              event.target.value
            )
          }
        />

        {search && (
          <button
            type="button"
            className="payment-search-clear"
            aria-label="Clear search"
            onClick={() =>
              setSearch("")
            }
          >
            <FiX />
          </button>
        )}

      </div>

      {/* =====================================
          RIGHT
      ====================================== */}

      <div className="payment-toolbar-right">

        {/* =================================
            DATE FILTER
        ================================= */}

        <div className="payment-date-wrapper">

          <button
            type="button"
            className={`payment-toolbar-date ${
              dateOpen
                ? "active"
                : ""
            }`}
            aria-expanded={dateOpen}
            onClick={() => {
              setDateOpen(
                (current) =>
                  !current
              );

              setStatusOpen(false);
            }}
          >

            <FiCalendar />

            <span>
              {selectedDate.label}
            </span>

            <FiChevronDown
              className={
                dateOpen
                  ? "open"
                  : ""
              }
            />

          </button>

          {dateOpen && (
            <div className="payment-date-menu">

              {dateOptions.map(
                (option) => (

                  <button
                    type="button"
                    key={option.value}
                    className={
                      dateFilter ===
                      option.value
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      handleDateSelect(
                        option.value
                      )
                    }
                  >

                    <span>
                      {option.label}
                    </span>

                    {dateFilter ===
                      option.value && (
                      <FiCheck />
                    )}

                  </button>

                )
              )}

            </div>
          )}

        </div>

        {/* =================================
            STATUS FILTER
        ================================= */}

        <div className="payment-status-wrapper">

          <button
            type="button"
            className={`payment-toolbar-status-btn ${
              statusOpen
                ? "active"
                : ""
            }`}
            aria-expanded={statusOpen}
            onClick={() => {
              setStatusOpen(
                (current) =>
                  !current
              );

              setDateOpen(false);
            }}
          >

            <span>
              {status === "All"
                ? "All Status"
                : status}
            </span>

            <FiChevronDown
              className={
                statusOpen
                  ? "open"
                  : ""
              }
            />

          </button>

          {statusOpen && (
            <div className="payment-status-menu">

              {statusOptions.map(
                (option) => (

                  <button
                    type="button"
                    key={option}
                    className={
                      status === option
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      handleStatusSelect(
                        option
                      )
                    }
                  >

                    <span>
                      {option === "All"
                        ? "All Status"
                        : option}
                    </span>

                    {status ===
                      option && (
                      <FiCheck />
                    )}

                  </button>

                )
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}