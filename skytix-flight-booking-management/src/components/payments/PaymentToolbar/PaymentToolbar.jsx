"use client";

import {
  FiSearch,
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

import "./PaymentToolbar.scss";

export default function PaymentToolbar({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="payment-toolbar">

      <div className="payment-toolbar-search">
        <FiSearch />

        <input
          type="text"
          placeholder="Search name, airline, booking code..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      <div className="payment-toolbar-right">

        <button
          type="button"
          className="payment-toolbar-date"
        >
          <FiCalendar />

          <span>
            1 - 8 July 2028
          </span>

          <FiChevronDown />
        </button>

        <div className="payment-toolbar-status">

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
          >
            <option value="All">
              All Status
            </option>

            <option value="Confirmed">
              Confirmed
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Cancelled">
              Cancelled
            </option>
          </select>

          <FiChevronDown />

        </div>

      </div>

    </div>
  );
}