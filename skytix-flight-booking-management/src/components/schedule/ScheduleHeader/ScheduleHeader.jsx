"use client";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import { FaReact } from "react-icons/fa";

import "./ScheduleHeader.scss";

export default function ScheduleHeader() {
  return (
    <div className="schedule-header">

      <div className="header-left">

        <h1>Schedule</h1>

        <p>
          Manage your flights, bookings and schedules.
        </p>

      </div>

      <div className="header-right">

        <button className="icon-btn">
          <FiHelpCircle />
        </button>

        <button className="icon-btn">
          <FiBell />
        </button>

        <button className="icon-btn">
          <FiSettings />
        </button>

        <div className="profile-card">

          <div className="avatar">
            <FaReact />
          </div>

          <div className="profile-info">

            <h4>John Doe</h4>

            <span>Administrator</span>

          </div>

          <FiChevronDown />

        </div>

      </div>

    </div>
  );
}