"use client";

import {
  FiSearch,
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

import "./PaymentHeader.scss";

export default function PaymentHeader({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <section className="payment-header">

      <div className="payment-title">

        <h1>Payments</h1>

      </div>

      <div className="payment-header-actions">

        {/* Search */}

        <div className="header-search">

          <FiSearch />

          <input
            type="text"
            placeholder="Search airline, flight number, etc"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Date */}

        <button className="header-date">

          <FiCalendar />

          <span>1 - 8 July 2028</span>

          <FiChevronDown />

        </button>

        {/* Status */}

        <div className="header-status">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <FiChevronDown />

        </div>

      </div>

    </section>
  );
}