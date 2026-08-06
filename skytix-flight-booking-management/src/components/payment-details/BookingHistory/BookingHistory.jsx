"use client";

import { useMemo, useState } from "react";

import {
  FiChevronDown,
  FiCalendar,
  FiFilter,
  FiCheckCircle,
  FiAlertCircle,
  FiXCircle,
} from "react-icons/fi";

import "./BookingHistory.scss";

/* ========================================
   AIRPORT NAMES
======================================== */

const airportNames = {
  CDG: "Paris",
  JFK: "New York",
  HKG: "Hong Kong",
  LAX: "Los Angeles",
  FRA: "Frankfurt",
  BKK: "Bangkok",
  HND: "Tokyo",
  SIN: "Singapore",
  LHR: "London",
  NYC: "New York",
  SFO: "San Francisco",
  SYD: "Sydney",
  DXB: "Dubai",
};

/* ========================================
   AIRLINE LOGOS
======================================== */

function CloudNineLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <path
        d="
          M25.8 8.4
          C31.7 10.3 34.2 16.2 32.5 21.7
          C31 26.5 27 30.1 21.3 32.5
          C22.4 29.3 23.7 26.3 24.6 23.3
          C21.6 25 18.3 25.3 15.4 23.8
          C11.9 22 10.2 18.4 11.2 15.2
          C12.3 11.6 15.8 9.1 19.8 8.3
          C21.8 7.9 23.9 7.9 25.8 8.4
          Z
        "
        fill="currentColor"
      />
    </svg>
  );
}

function FlyFastLogo() {
  return (
    <svg
      viewBox="0 0 44 40"
      aria-hidden="true"
    >
      <path
        d="
          M5 21
          L36 9
          L27 20
          L12 24
          Z
        "
        fill="currentColor"
      />

      <path
        d="
          M10 27
          L28 21
          L20 31
          L5 31
          Z
        "
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}

function SkyHighLogo() {
  return (
    <svg
      viewBox="0 0 44 40"
      aria-hidden="true"
    >
      <path
        d="
          M7 9
          C15 10 24 13 34 20
          C29 23 24 25 19 27
          L10 31
          L13 23
          L7 19
          Z
        "
        fill="currentColor"
      />

      <path
        d="
          M15 18
          L27 20
          L17 22
          Z
        "
        fill="#ffffff"
      />
    </svg>
  );
}

/* ========================================
   AIRLINE CONFIG
======================================== */

const airlineConfig = {
  "CloudNine Airlines": {
    Logo: CloudNineLogo,
    className: "cloudnine",
  },

  "FlyFast Airways": {
    Logo: FlyFastLogo,
    className: "flyfast",
  },

  "SkyHigh Airlines": {
    Logo: SkyHighLogo,
    className: "skyhigh",
  },
};

/* ========================================
   BOOKING HISTORY DATA
======================================== */

const bookingHistoryData = [
  {
    id: 1,
    airline: "CloudNine Airlines",

    fromCode: "CDG",
    toCode: "JFK",

    bookingCode: "CN-KL2345",

    departureTime: "9:00 AM",
    arrivalTime: "12:00 PM",

    date: "2026-07-01",

    status: "Confirmed",
  },

  {
    id: 2,
    airline: "FlyFast Airways",

    fromCode: "LHR",
    toCode: "JFK",

    bookingCode: "FF-CD5678",

    departureTime: "8:00 AM",
    arrivalTime: "11:00 AM",

    date: "2026-07-10",

    status: "Pending",
  },

  {
    id: 3,
    airline: "SkyHigh Airlines",

    fromCode: "FRA",
    toCode: "BKK",

    bookingCode: "SH-OP3456",

    departureTime: "7:00 AM",
    arrivalTime: "3:00 PM",

    date: "2026-07-20",

    status: "Confirmed",
  },
];

/* ========================================
   STATUS OPTIONS
======================================== */

const statusOptions = [
  "All Status",
  "Confirmed",
  "Pending",
  "Cancelled",
];

/* ========================================
   DATE OPTIONS
======================================== */

const dateOptions = [
  {
    value: "all",
    label: "1 - 24 July 2026",
  },

  {
    value: "1-7",
    label: "1 - 7 July 2026",
  },

  {
    value: "8-14",
    label: "8 - 14 July 2026",
  },

  {
    value: "15-24",
    label: "15 - 24 July 2026",
  },
];

/* ========================================
   FORMAT DATE
======================================== */

const formatBookingDate = (date) => {
  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

/* ========================================
   BOOKING HISTORY
======================================== */

export default function BookingHistory({
  payment,
}) {
  /* ========================================
     FILTER STATE
  ======================================== */

  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [dateFilter, setDateFilter] =
    useState("all");

  /* ========================================
     FILTER DATA
  ======================================== */

  const filteredBookings = useMemo(() => {
    return bookingHistoryData.filter(
      (booking) => {
        /* STATUS */

        const matchesStatus =
          statusFilter === "All Status" ||
          booking.status === statusFilter;

        /* DATE */

        const bookingDate = new Date(
          `${booking.date}T00:00:00`
        );

        const day = bookingDate.getDate();

        let matchesDate = true;

        if (dateFilter === "1-7") {
          matchesDate =
            day >= 1 && day <= 7;
        }

        if (dateFilter === "8-14") {
          matchesDate =
            day >= 8 && day <= 14;
        }

        if (dateFilter === "15-24") {
          matchesDate =
            day >= 15 && day <= 24;
        }

        return (
          matchesStatus &&
          matchesDate
        );
      }
    );
  }, [statusFilter, dateFilter]);

  /* ========================================
     CURRENT DATE LABEL
  ======================================== */

  const currentDateLabel =
    dateOptions.find(
      (option) =>
        option.value === dateFilter
    )?.label || "1 - 24 July 2026";

  /* ========================================
     STATUS ICON
  ======================================== */

  const getStatusIcon = (status) => {
    if (status === "Confirmed") {
      return <FiCheckCircle />;
    }

    if (status === "Cancelled") {
      return <FiXCircle />;
    }

    return <FiAlertCircle />;
  };

  if (!payment) {
    return null;
  }

  return (
    <section className="details-bookings">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="details-bookings-header">

        <h2>Bookings</h2>

        <div className="details-bookings-filters">

          {/* =================================
              STATUS FILTER
          ================================== */}

          <div className="booking-filter-control">

            <FiFilter className="booking-filter-leading-icon" />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value
                )
              }
              aria-label="Filter bookings by status"
            >
              {statusOptions.map(
                (status) => (
                  <option
                    key={status}
                    value={status}
                  >
                    {status}
                  </option>
                )
              )}
            </select>

            <FiChevronDown className="booking-filter-chevron" />

          </div>

          {/* =================================
              DATE FILTER
          ================================== */}

          <div className="booking-date-control">

            <FiCalendar className="booking-filter-leading-icon" />

            <select
              value={dateFilter}
              onChange={(event) =>
                setDateFilter(
                  event.target.value
                )
              }
              aria-label="Filter bookings by date"
            >
              {dateOptions.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                )
              )}
            </select>

            <FiChevronDown className="booking-filter-chevron" />

          </div>

        </div>

      </div>

      {/* =====================================
          ACTIVE FILTER INFORMATION
      ====================================== */}

      <div className="booking-filter-summary">

        <span>
          {filteredBookings.length}{" "}
          {filteredBookings.length === 1
            ? "booking"
            : "bookings"}
        </span>

        <span className="booking-filter-summary-dot">
          •
        </span>

        <span>
          {statusFilter}
        </span>

        <span className="booking-filter-summary-dot">
          •
        </span>

        <span>
          {currentDateLabel}
        </span>

      </div>

      {/* =====================================
          BOOKING LIST
      ====================================== */}

      {filteredBookings.length > 0 ? (

        <div className="details-booking-list">

          {filteredBookings.map(
            (booking) => {
              const fromCity =
                airportNames[
                  booking.fromCode
                ] || booking.fromCode;

              const toCity =
                airportNames[
                  booking.toCode
                ] || booking.toCode;

              const airline =
                airlineConfig[
                  booking.airline
                ];

              const AirlineLogo =
                airline?.Logo;

              const statusClass =
                booking.status
                  .toLowerCase()
                  .replaceAll(" ", "-");

              return (
                <article
                  className="details-booking-card"
                  key={booking.id}
                >

                  {/* =========================
                      ROUTE HEADER
                  ========================== */}

                  <div className="booking-route-header">

                    <div className="booking-route-title">

                      <span>
                        {fromCity}
                      </span>

                      <span className="route-arrow">
                        →
                      </span>

                      <span>
                        {toCity}
                      </span>

                    </div>

                    <div className="booking-route-meta">

                      <span
                        className={`booking-status ${statusClass}`}
                      >
                        {getStatusIcon(
                          booking.status
                        )}

                        {booking.status}
                      </span>

                      <span className="booking-id">

                        Booking ID

                        <strong>
                          {
                            booking.bookingCode
                          }
                        </strong>

                      </span>

                    </div>

                  </div>

                  {/* =========================
                      FLIGHT DETAILS
                  ========================== */}

                  <div className="booking-flight-details">

                    {/* AIRLINE */}

                    <div className="booking-airline">

                      <div
                        className={`booking-airline-logo ${
                          airline?.className ||
                          ""
                        }`}
                      >
                        {AirlineLogo && (
                          <AirlineLogo />
                        )}
                      </div>

                      <strong>
                        {booking.airline}
                      </strong>

                    </div>

                    {/* DEPARTURE */}

                    <div className="booking-flight-info">

                      <span>
                        Departure
                      </span>

                      <strong>
                        {
                          booking.departureTime
                        }{" "}
                        (
                        {
                          booking.fromCode
                        }
                        )
                      </strong>

                      <p>
                        {formatBookingDate(
                          booking.date
                        )}
                      </p>

                    </div>

                    {/* ARRIVAL */}

                    <div className="booking-flight-info">

                      <span>
                        Arrival
                      </span>

                      <strong>
                        {
                          booking.arrivalTime
                        }{" "}
                        (
                        {
                          booking.toCode
                        }
                        )
                      </strong>

                      <p>
                        {formatBookingDate(
                          booking.date
                        )}
                      </p>

                    </div>

                  </div>

                </article>
              );
            }
          )}

        </div>

      ) : (

        /* ===================================
           EMPTY STATE
        ==================================== */

        <div className="booking-empty-state">

          <FiCalendar />

          <strong>
            No bookings found
          </strong>

          <p>
            No bookings match the selected
            status and date.
          </p>

          <button
            type="button"
            onClick={() => {
              setStatusFilter(
                "All Status"
              );

              setDateFilter("all");
            }}
          >
            Clear Filters
          </button>

        </div>

      )}

    </section>
  );
}