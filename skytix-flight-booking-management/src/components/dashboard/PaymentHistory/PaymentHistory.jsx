"use client";

import { useMemo, useState } from "react";

import {
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  payments,
} from "@/data/dashboardData";

import "./PaymentHistory.scss";

const filters = [
  "Latest",
  "Confirmed",
  "Pending",
  "Cancelled",
  "All",
];

export default function PaymentHistory() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeFilter, setActiveFilter] =
    useState("Latest");

  const [filterOpen, setFilterOpen] =
    useState(false);

  /* ========================================
     FILTERED PAYMENTS
  ======================================== */

  const filteredPayments = useMemo(() => {
    const query =
      searchTerm.trim().toLowerCase();

    let result = [...payments];

    /* STATUS FILTER */

    if (
      activeFilter !== "Latest" &&
      activeFilter !== "All"
    ) {
      result = result.filter(
        (payment) =>
          payment.status === activeFilter
      );
    }

    /* SEARCH */

    if (query) {
      result = result.filter((payment) =>
        [
          payment.name,
          payment.bookingCode,
          payment.date,
          payment.route,
          payment.airline,
          payment.amount,
          payment.status,
        ].some((value) =>
          String(value)
            .toLowerCase()
            .includes(query)
        )
      );
    }

    return result;
  }, [
    searchTerm,
    activeFilter,
  ]);

  /* ========================================
     SELECT FILTER
  ======================================== */

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);

    setFilterOpen(false);
  };

  return (
    <Card className="payment-history-card">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="payment-top">

        <h5>
          Payment History
        </h5>

        <div className="payment-actions">

          {/* SEARCH */}

          <div className="payment-search">

            <FiSearch />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              placeholder="Search name, airline, etc"
              aria-label="Search payment history"
            />

          </div>

          {/* FILTER */}

          <div className="payment-filter-wrapper">

            <button
              type="button"
              className="payment-filter"
              onClick={() =>
                setFilterOpen(
                  (current) => !current
                )
              }
              aria-expanded={filterOpen}
            >
              <span>
                {activeFilter}
              </span>

              <FiChevronDown
                className={
                  filterOpen
                    ? "open"
                    : ""
                }
              />

            </button>

            {filterOpen && (
              <div className="payment-filter-menu">

                {filters.map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    className={
                      activeFilter === filter
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      handleFilterSelect(
                        filter
                      )
                    }
                  >
                    {filter}
                  </button>
                ))}

              </div>
            )}

          </div>

        </div>

      </div>

      {/* =====================================
          TABLE
      ====================================== */}

      <div className="payment-table-wrapper">

        <table className="payment-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Booking Code</th>
              <th>Date</th>
              <th>Route</th>
              <th>Airline</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredPayments.map(
              (item, index) => (

                <tr
                  key={`${item.bookingCode}-${index}`}
                >

                  <td>
                    <strong className="payment-name">
                      {item.name}
                    </strong>
                  </td>

                  <td>
                    {item.bookingCode}
                  </td>

                  <td>
                    {item.date}
                  </td>

                  <td>
                    {item.route}
                  </td>

                  <td>
                    {item.airline}
                  </td>

                  <td>
                    <strong className="payment-amount">
                      {item.amount}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={`payment-status ${item.status.toLowerCase()}`}
                    >
                      {item.status}
                    </span>
                  </td>

                </tr>

              )
            )}

            {filteredPayments.length ===
              0 && (
              <tr>
                <td
                  colSpan="7"
                  className="payment-empty"
                >
                  No payments found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </Card>
  );
}