"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiChevronDown,
  FiSearch,
  FiX,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  payments,
} from "@/data/dashboardData";

import "./PaymentHistory.scss";

const FILTERS = [
  "Latest",
  "Confirmed",
  "Pending",
  "Cancelled",
  "All",
];

export default function PaymentHistory() {
  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("Latest");

  const [open, setOpen] =
    useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const outside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", escape);

    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const filtered = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    let result = [...payments];

    if (
      filter !== "Latest" &&
      filter !== "All"
    ) {
      result = result.filter(
        (item) =>
          item.status === filter
      );
    }

    if (query) {
      result = result.filter(
        (item) =>
          [
            item.name,
            item.bookingCode,
            item.date,
            item.route,
            item.airline,
            item.amount,
            item.status,
          ].some((value) =>
            String(value)
              .toLowerCase()
              .includes(query)
          )
      );
    }

    if (filter === "Latest") {
      result.sort(
        (a, b) =>
          b.id - a.id
      );
    }

    return result;
  }, [search, filter]);

  return (
    <Card className="payment-history-card">
      <div className="payment-top">
        <div className="payment-heading">
          <h5>Payment History</h5>

          <span>
            {filtered.length}{" "}
            {filtered.length === 1
              ? "payment"
              : "payments"}
          </span>
        </div>

        <div className="payment-actions">
          <div className="payment-search">
            <FiSearch />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search name, airline, etc"
            />

            {search && (
              <button
                type="button"
                className="payment-search-clear"
                onClick={() =>
                  setSearch("")
                }
              >
                <FiX />
              </button>
            )}
          </div>

          <div
            className="payment-filter-wrapper"
            ref={ref}
          >
            <button
              type="button"
              className="payment-filter"
              onClick={() =>
                setOpen(
                  (value) => !value
                )
              }
            >
              <span>{filter}</span>

              <FiChevronDown
                className={
                  open ? "open" : ""
                }
              />
            </button>

            {open && (
              <div className="payment-filter-menu">
                {FILTERS.map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        filter === item
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        setFilter(item);
                        setOpen(false);
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

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
            {filtered.length ? (
              filtered.map((item) => {
                const status =
                  item.status
                    .toLowerCase()
                    .replace(
                      /\s+/g,
                      "-"
                    );

                return (
                  <tr key={item.id}>
                    <td>
                      <strong className="payment-name">
                        {item.name}
                      </strong>
                    </td>

                    <td>
                      {item.bookingCode}
                    </td>

                    <td>
                      {formatDate(
                        item.date
                      )}
                    </td>

                    <td>{item.route}</td>

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
                        className={`payment-status ${status}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="payment-empty"
                >
                  <div className="payment-empty-content">
                    <FiSearch />

                    <strong>
                      No payments found
                    </strong>

                    <span>
                      Try changing your
                      search or payment
                      status.
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setSearch("");
                        setFilter(
                          "Latest"
                        );
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function formatDate(date) {
  const [year, month, day] =
    String(date).split("-");

  if (!year || !month || !day) {
    return date;
  }

  return `${day}/${month}/${year}`;
}