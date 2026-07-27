"use client";

import Link from "next/link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

import "./DetailHeader.scss";

export default function DetailHeader() {
  return (
    <div className="detail-header">

      <div className="detail-left">

        <Link href="/schedule" className="back-link">
          <div className="back-btn">
            <FiArrowLeft />
          </div>
        </Link>

        <div className="route-info">

          <span>
            Back to Flight Schedule
          </span>

          <h2>
            Los Angeles → New York
          </h2>

          <p>
            Boeing 787 Dreamliner • 220 Passengers
          </p>

        </div>

      </div>

      <div className="detail-right">

        <div className="search-box">

          <FiSearch />

          <input
            type="text"
            placeholder="Search flight"
          />

        </div>

        <select>
          <option>Economy</option>
        </select>

        <button>
          Search
        </button>

      </div>

    </div>
  );
}