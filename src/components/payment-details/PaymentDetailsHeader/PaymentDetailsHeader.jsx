"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

import Header from "@/components/layout/Header/Header";

import "./PaymentDetailsHeader.scss";

export default function PaymentDetailsHeader({
  onSearch,
  defaultMembership = "Gold",
}) {
  const router = useRouter();

  const [search, setSearch] =
    useState("");

  const [membership, setMembership] =
    useState(defaultMembership);

  /* ========================================
     SEARCH MEMBER
  ======================================== */

  const handleSearch = () => {
    onSearch?.({
      search: search.trim(),
      membership,
    });
  };

  /* ========================================
     ENTER SEARCH
  ======================================== */

  const handleKeyDown = (
    event
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  /* ========================================
     BACK
  ======================================== */

  const handleBack = () => {
    router.push("/payments");
  };

  return (
    <div className="payment-details-header">

      {/* =====================================
          SHARED HEADER

          Search is intentionally hidden
          on Payment Details.
      ====================================== */}

      <Header
        title="Profile Details"
        showSearch={false}
      />

      {/* =====================================
          ACTION ROW
      ====================================== */}

      <div className="details-action-row">

        {/* BACK */}

        <button
          type="button"
          className="details-back-button"
          onClick={handleBack}
        >
          <span className="details-back-icon">
            <FiArrowLeft />
          </span>

          <span>
            Back to Payments
          </span>
        </button>

        {/* ===================================
            MEMBER CONTROLS
        ==================================== */}

        <div className="details-member-controls">

          {/* MEMBER SEARCH */}

          <div className="details-member-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search member"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              onKeyDown={
                handleKeyDown
              }
              aria-label="Search member"
            />

          </div>

          {/* MEMBERSHIP */}

          <div className="details-membership-filter">

            <select
              value={membership}
              onChange={(event) =>
                setMembership(
                  event.target.value
                )
              }
              aria-label="Membership level"
            >
              <option value="Gold">
                Gold
              </option>

              <option value="Silver">
                Silver
              </option>

              <option value="Bronze">
                Bronze
              </option>
            </select>

            <FiChevronDown />

          </div>

          {/* SEARCH BUTTON */}

          <button
            type="button"
            className="details-search-button"
            onClick={handleSearch}
          >
            Search
          </button>

        </div>

      </div>

    </div>
  );
}