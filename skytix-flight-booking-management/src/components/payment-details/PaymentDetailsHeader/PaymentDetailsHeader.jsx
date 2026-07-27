"use client";

import { useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

import "./PaymentDetailsHeader.scss";

export default function PaymentDetailsHeader() {
  const router = useRouter();

  return (
    <header className="profile-details-header">

      {/* TOP / BACK */}

      <button
        type="button"
        className="profile-back-button"
        onClick={() => router.push("/payments")}
      >
        <FiArrowLeft />
        <span>Back to Payments</span>
      </button>

      {/* MAIN HEADER */}

      <div className="profile-header-main">

        <h1>Profile Details</h1>

        <div className="profile-header-controls">

          {/* SEARCH */}

          <div className="profile-member-search">
            <FiSearch />

            <input
              type="text"
              placeholder="Search member"
              aria-label="Search member"
            />
          </div>

          {/* MEMBERSHIP */}

          <div className="profile-filter">
            <select
              defaultValue="Gold"
              aria-label="Membership"
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>

            <FiChevronDown />
          </div>

          {/* PERIOD */}

          <div className="profile-filter profile-period-filter">
            <select
              defaultValue="This Month"
              aria-label="Period"
            >
              <option value="This Month">
                This Month
              </option>

              <option value="Last Month">
                Last Month
              </option>

              <option value="This Year">
                This Year
              </option>
            </select>

            <FiChevronDown />
          </div>

          {/* STATUS */}

          <div className="profile-filter profile-status-filter">
            <select
              defaultValue="Status"
              aria-label="Status"
            >
              <option value="Status">
                Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>

            <FiChevronDown />
          </div>

        </div>

      </div>

    </header>
  );
}