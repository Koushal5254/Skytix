"use client";

import { FiChevronDown, FiPlus } from "react-icons/fi";

import "./FlightToolbar.scss";

export default function FlightToolbar() {
  return (
    <div className="flight-toolbar">

      <div className="toolbar-title">
        <h2>
          Flight List
          <span>(10 result)</span>
        </h2>
      </div>

      <div className="toolbar-actions">

        <button className="toolbar-select">
          Cheapest
          <FiChevronDown />
        </button>

        <button className="toolbar-select">
          Earliest
          <FiChevronDown />
        </button>

        <button className="toolbar-add">
          <FiPlus />
          Add Flight
        </button>

      </div>

    </div>
  );
}