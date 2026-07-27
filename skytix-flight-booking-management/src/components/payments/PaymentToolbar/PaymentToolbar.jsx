"use client";

import { FiSearch, FiCalendar, FiChevronDown } from "react-icons/fi";

import "./PaymentToolbar.scss";

export default function PaymentToolbar({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="payment-toolbar">

      {/* Search */}

      <div className="toolbar-search">

        <FiSearch />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Date */}

      <button className="toolbar-date">

        <FiCalendar />

        <span>1 - 8 July 2028</span>

      </button>

      {/* Status */}

      <div className="toolbar-status">

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <FiChevronDown />

      </div>

    </div>
  );
}