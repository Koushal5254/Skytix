"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
  FiBell,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";

import "./PaymentDetailsHeader.scss";

export default function PaymentDetailsHeader({
  onSearch,
  defaultMembership = "Gold",
}) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [membership, setMembership] = useState(defaultMembership);

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        search: search.trim(),
        membership,
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="payment-details-header">

      {/* =====================================
          TOP HEADER
      ====================================== */}

      <div className="details-topbar">

        <h1>Profile Details</h1>

        <div className="details-topbar-right">

          <button
            type="button"
            className="details-icon-button notification-button"
            aria-label="Notifications"
          >
            <FiBell />
            <span className="notification-dot" />
          </button>

          <button
            type="button"
            className="details-icon-button"
            aria-label="Help"
          >
            <FiHelpCircle />
          </button>

          <button
            type="button"
            className="details-icon-button"
            aria-label="Settings"
          >
            <FiSettings />
          </button>

          <div className="details-profile">

            <div className="details-profile-avatar" />

            <div className="details-profile-info">
              <strong>Martin Septimus</strong>
              <span>Admin</span>
            </div>

            <FiChevronDown className="details-profile-arrow" />

          </div>

        </div>

      </div>

      {/* =====================================
          ACTION ROW
      ====================================== */}

      <div className="details-action-row">

        <button
          type="button"
          className="details-back-button"
          onClick={() => router.push("/payments")}
        >
          <span className="details-back-icon">
            <FiArrowLeft />
          </span>

          <span>Back to Payments</span>
        </button>

        <div className="details-member-controls">

          <div className="details-member-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search member"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Search member"
            />

          </div>

          <div className="details-membership-filter">

            <select
              value={membership}
              onChange={(event) =>
                setMembership(event.target.value)
              }
              aria-label="Membership level"
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>

            <FiChevronDown />

          </div>

          <button
            type="button"
            className="details-search-button"
            onClick={handleSearch}
          >
            Search
          </button>

        </div>

      </div>

    </header>
  );
}